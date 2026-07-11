import * as React from "react";
import { cn } from "../../lib/utils";

const Textarea = React.forwardRef<
  HTMLTextAreaElement,
  React.ComponentProps<"textarea">
>(({ className, ...props }, ref) => {
  return (
    <textarea
      className={cn(
        "flex min-h-[100px] w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-base text-white backdrop-blur-sm transition-all duration-300 placeholder:text-white/35 hover:border-white/20 focus-visible:outline-none focus-visible:border-[#9b5cf6]/60 focus-visible:bg-white/[0.07] focus-visible:shadow-[0_0_0_3px_rgba(155,92,246,0.15),0_0_24px_-6px_rgba(155,92,246,0.35)] disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        className,
      )}
      ref={ref}
      {...props}
    />
  );
});
Textarea.displayName = "Textarea";

export { Textarea };
