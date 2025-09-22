import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { cn } from "../../lib/utils";

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  className,
  delay = 0,
}) => {
  const [hasAnimated, setHasAnimated] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView && !hasAnimated) {
      const timer = setTimeout(() => {
        setIsVisible(true);
        setHasAnimated(true);
      }, delay);

      return () => clearTimeout(timer);
    }
  }, [inView, hasAnimated, delay]);

  return (
    <div
      ref={ref}
      className={cn(
        "transition-all duration-1000 ease-out", // Increased duration from 500ms to 1000ms
        isVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-8", // Increased translate distance from 4 to 8
        className
      )}
    >
      {children}
    </div>
  );
};