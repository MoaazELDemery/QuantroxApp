import { type VariantProps, cva } from "class-variance-authority";
import * as React from "react";
import { cn } from "../../lib/utils";

const badgeVariants = cva(
  "inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-medium tracking-wide transition-colors focus:outline-none focus:ring-2 focus:ring-[#9b5cf6]/60 focus:ring-offset-2 focus:ring-offset-[#060010]",
  {
    variants: {
      variant: {
        default:
          "border-[#9b5cf6]/30 bg-[#4a0082]/25 text-[#c4a8ff] backdrop-blur-md hover:border-[#9b5cf6]/50",
        secondary:
          "border-white/10 bg-white/5 text-white/80 backdrop-blur-md hover:bg-white/10",
        destructive:
          "border-transparent bg-destructive text-destructive-foreground shadow hover:bg-destructive/80",
        outline: "border-white/20 text-white/80 hover:border-white/40 hover:text-white",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
