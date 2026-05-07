import { useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";

interface CountUpProps {
  end: number;
  suffix: string;
  duration?: number;
}

const CountUp = ({ end, suffix, duration = 2000 }: CountUpProps): JSX.Element => {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView({ triggerOnce: true });
  const startedRef = useRef(false);

  useEffect(() => {
    if (end === 0) {
      setCount(0);
      return;
    }
    if (!inView || startedRef.current) return;
    startedRef.current = true;

    const steps = 60;
    const stepDuration = duration / steps;
    let current = 0;

    const interval = setInterval(() => {
      current += 1;
      setCount(Math.round((end / steps) * current));
      if (current >= steps) {
        clearInterval(interval);
        setCount(end);
      }
    }, stepDuration);

    return () => clearInterval(interval);
  }, [inView, end, duration]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
};

const metrics = [
  { end: 40, suffix: "+", label: "Enterprise Deployments" },
  { end: 3, suffix: "×", label: "Faster Approval Cycles" },
  { end: 65, suffix: "%", label: "Reduction in Manual Review" },
  { end: 0, suffix: "%", label: "Data Egress" },
];

export const MetricsSection = (): JSX.Element => (
  <section className="w-full bg-[#0a0010] py-16 lg:py-20">
    <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 lg:divide-x lg:divide-white/10">
        {metrics.map((m) => (
          <div key={m.label} className="flex flex-col items-center justify-center text-center px-4 py-4">
            <span className="[font-family:'Satoshi-Bold',Helvetica] font-bold text-4xl sm:text-5xl lg:text-6xl text-white tracking-[-2px] leading-none mb-3">
              <CountUp end={m.end} suffix={m.suffix} />
            </span>
            <span className="[font-family:'Satoshi-Medium',Helvetica] font-medium text-white/50 text-sm uppercase tracking-[0.12em]">
              {m.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  </section>
);
