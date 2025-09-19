import React from "react";
import { useInView } from "react-intersection-observer";
import { cn } from "@/lib/utils";

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
}

export const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  className,
}) => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });

  return (
    <div
      ref={ref}
      className={cn(
        inView ? "animate-fade-in" : "animate-fade-out opacity-0",
        className
      )}
    >
      {children}
    </div>
  );
};
