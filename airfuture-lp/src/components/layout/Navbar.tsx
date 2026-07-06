"use client";

import { useEffect, useState } from "react";
import { clsx } from "clsx";
import MagneticButton from "@/components/ui/MagneticButton";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={clsx(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
      scrolled ? "px-4 py-3" : "px-6 py-4"
    )}>
      <div className={clsx(
        "max-w-7xl mx-auto flex items-center justify-between transition-all duration-500 rounded-[24px]",
        scrolled ? "glass-deep px-6 py-3" : "bg-transparent"
      )}>
        <div className="text-white font-bold text-2xl tracking-tighter">
          AIR FUTURE
        </div>
        <div className="hidden md:flex items-center gap-8 text-white/80 text-sm font-medium">
          <a href="#" className="hover:text-white transition-colors">製品情報</a>
          <a href="#" className="hover:text-white transition-colors">導入実績</a>
          <a href="#" className="hover:text-white transition-colors">特徴</a>
          <a href="#" className="hover:text-white transition-colors">よくある質問</a>
        </div>
        <MagneticButton 
          as="a"
          href="https://airfuture.base.shop/items/136187294" 
          target="_blank"
          className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/30 px-8 py-3 rounded-full text-sm font-bold shadow-[0_0_15px_rgba(255,255,255,0.1)] transition-colors"
        >
          購入する
        </MagneticButton>
      </div>
    </nav>
  );
}
