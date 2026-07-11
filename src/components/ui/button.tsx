import { Slot } from "@radix-ui/react-slot";
import { type VariantProps, cva } from "class-variance-authority";
import * as React from "react";
import { cn } from "../../lib/utils";

const buttonVariants = cva(
  "relative overflow-hidden inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#9b5cf6]/70 focus-visible:ring-offset-2 focus-visible:ring-offset-[#060010] disabled:pointer-events-none disabled:opacity-50 active:scale-[0.97] [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-[#4a0082] text-white border border-white/[0.08] shadow-[inset_0_1px_0_rgba(255,255,255,0.07)] hover:bg-[#56089b] hover:shadow-[0_8px_28px_-10px_rgba(155,92,246,0.5)] hover:-translate-y-px",
        destructive:
          "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        outline:
          "border border-white/20 bg-white/5 text-white backdrop-blur-md hover:bg-white/10 hover:border-[#9b5cf6]/50 hover:shadow-[0_0_32px_-8px_rgba(155,92,246,0.45)]",
        secondary:
          "bg-white/10 text-white backdrop-blur-md hover:bg-white/15",
        ghost: "text-white/80 hover:text-white hover:bg-white/5",
        link: "text-[#c4a8ff] underline-offset-4 hover:underline hover:text-white",
      },
      size: {
        default: "h-9 px-5 py-2",
        sm: "h-8 px-4 text-xs",
        lg: "h-11 px-8",
        icon: "h-9 w-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
