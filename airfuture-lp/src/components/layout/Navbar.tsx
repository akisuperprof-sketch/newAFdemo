"use client";

import { useEffect, useState } from "react";
import { clsx } from "clsx";

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
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4",
      scrolled ? "bg-black/50 backdrop-blur-md border-b border-white/10" : "bg-transparent"
    )}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="text-white font-bold text-2xl tracking-tighter">
          AIR FUTURE
        </div>
        <div className="hidden md:flex items-center gap-8 text-white/80 text-sm font-medium">
          <a href="#" className="hover:text-white transition-colors">製品情報</a>
          <a href="#" className="hover:text-white transition-colors">導入実績</a>
          <a href="#" className="hover:text-white transition-colors">特徴</a>
          <a href="#" className="hover:text-white transition-colors">よくある質問</a>
        </div>
        <a 
          href="https://airfuture.base.shop/items/136187294" 
          target="_blank"
          className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/20 px-6 py-2 rounded-full text-sm font-bold transition-colors"
        >
          購入する
        </a>
      </div>
    </nav>
  );
}
