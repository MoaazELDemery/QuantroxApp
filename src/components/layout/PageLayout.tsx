import { ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { AmbientBackground } from "./AmbientBackground";

interface PageLayoutProps {
  children: ReactNode;
  className?: string;
}

export const PageLayout = ({ children, className = "" }: PageLayoutProps): JSX.Element => (
  <div className={`bg-[#060010] w-full min-h-screen flex flex-col relative overflow-x-clip ${className}`}>
    <AmbientBackground />
    <div className="relative z-10 flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 pt-24 lg:pt-32">
        {children}
      </main>
      <Footer />
    </div>
  </div>
);
