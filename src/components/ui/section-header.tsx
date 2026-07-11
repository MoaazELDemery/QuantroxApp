import { ReactNode } from "react";

interface SectionHeaderProps {
  eyebrow?: string;
  title: ReactNode;
  sub?: ReactNode;
  align?: "center" | "left";
  className?: string;
}

/** SectionHeader - the recurring eyebrow + h2 + lede block, one way. */
export const SectionHeader = ({ eyebrow, title, sub, align = "center", className = "" }: SectionHeaderProps): JSX.Element => (
  <div className={`${align === "center" ? "text-center mx-auto items-center" : "text-left"} max-w-3xl flex flex-col mb-12 lg:mb-16 ${className}`}>
    {eyebrow && (
      <p className="[font-family:'Satoshi-Medium',Helvetica] font-medium text-[#9b5cf6] text-xs uppercase tracking-[0.25em] mb-4">
        {eyebrow}
      </p>
    )}
    <h2 className="[font-family:'Satoshi-Bold',Helvetica] font-bold text-white text-3xl sm:text-4xl lg:text-5xl tracking-[-0.02em] leading-[1.08]">
      {title}
    </h2>
    {sub && (
      <p className="[font-family:'Satoshi-Regular',Helvetica] font-normal text-white/70 text-lg leading-relaxed mt-5">
        {sub}
      </p>
    )}
  </div>
);
