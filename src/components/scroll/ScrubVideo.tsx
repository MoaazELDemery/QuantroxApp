import { CSSProperties, RefObject, useEffect, useRef } from "react";
import { gsap, ScrollTrigger } from "../../lib/gsap";

interface ScrubVideoProps {
  src: string;
  /** Element that defines the scroll range. Defaults to the video itself. */
  triggerRef?: RefObject<HTMLElement>;
  start?: string;
  end?: string;
  /** Scrub smoothing in seconds (ScrollTrigger `scrub`). */
  scrub?: number;
  className?: string;
  style?: CSSProperties;
  poster?: string;
}

/**
 * ScrubVideo - a video whose playhead is driven by scroll position.
 *
 * The file is fetched as a blob first so the whole clip is buffered and
 * seeking is instant (half-loaded videos stutter when scrubbed). Once
 * metadata is known, a scrubbed tween maps scroll progress → currentTime.
 *
 * Videos should be encoded with dense keyframes (`-g 1`..`-g 5`) or seeking
 * will snap between keyframes instead of gliding.
 */
export const ScrubVideo = ({
  src,
  triggerRef,
  start = "top bottom",
  end = "bottom top",
  scrub = 0.6,
  className,
  style,
  poster,
}: ScrubVideoProps): JSX.Element => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    let tween: gsap.core.Tween | null = null;
    let objectUrl: string | null = null;
    let cancelled = false;

    const attach = () => {
      if (cancelled || !video.duration) return;
      tween = gsap.fromTo(
        video,
        { currentTime: 0 },
        {
          currentTime: video.duration,
          ease: "none",
          scrollTrigger: {
            trigger: triggerRef?.current ?? video,
            start,
            end,
            scrub,
          },
        },
      );
      ScrollTrigger.refresh();
    };

    const onMeta = () => attach();
    video.addEventListener("loadedmetadata", onMeta);

    // Fully buffer the clip so scrubbing never waits on the network.
    fetch(src)
      .then((r) => r.blob())
      .then((blob) => {
        if (cancelled) return;
        objectUrl = URL.createObjectURL(blob);
        video.src = objectUrl;
      })
      .catch(() => {
        if (!cancelled) video.src = src; // fall back to streaming
      });

    return () => {
      cancelled = true;
      video.removeEventListener("loadedmetadata", onMeta);
      tween?.scrollTrigger?.kill();
      tween?.kill();
      if (objectUrl) URL.revokeObjectURL(objectUrl);
    };
  }, [src, start, end, scrub, triggerRef]);

  return (
    <video
      ref={videoRef}
      className={className}
      style={style}
      poster={poster}
      muted
      playsInline
      preload="auto"
      aria-hidden="true"
    />
  );
};
