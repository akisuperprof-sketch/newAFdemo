"use client";

import { useState, useRef, MouseEvent, TouchEvent } from "react";
import { motion } from "framer-motion";

export default function BeforeAfterSlider() {
  const [position, setPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  
  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setPosition(percentage);
  };

  const onMouseMove = (e: MouseEvent) => {
    if (e.buttons !== 1) return; // Only when mouse is clicked
    handleMove(e.clientX);
  };

  const onTouchMove = (e: TouchEvent) => {
    handleMove(e.touches[0].clientX);
  };

  const onTouchStart = (e: TouchEvent) => {
    handleMove(e.touches[0].clientX);
  };

  const onMouseDown = (e: MouseEvent) => {
    handleMove(e.clientX);
  };

  return (
    <div 
      ref={containerRef}
      className="relative w-full h-[400px] rounded-[32px] overflow-hidden cursor-ew-resize select-none"
      onMouseMove={onMouseMove}
      onMouseDown={onMouseDown}
      onTouchMove={onTouchMove}
      onTouchStart={onTouchStart}
    >
      {/* "Before" image / content (Background) */}
      <div className="absolute inset-0 bg-gray-900 flex items-center justify-center">
        <div className="absolute inset-0 opacity-40 bg-[url('/noise.svg')] mix-blend-overlay"></div>
        <div className="text-center">
          <div className="text-gray-400 font-bold text-4xl mb-2 opacity-50 blur-[2px]">Before</div>
          <div className="text-gray-500 text-sm">Particle & Virus Heavily Present</div>
        </div>
        {/* Fake dust particles */}
        <div className="absolute inset-0 flex flex-wrap gap-2 p-10 opacity-30">
           {Array.from({length: 50}).map((_, i) => (
             <div key={i} className="w-2 h-2 rounded-full bg-yellow-500/50" style={{ transform: `translate(${Math.random()*300}px, ${Math.random()*300}px)` }} />
           ))}
        </div>
      </div>

      {/* "After" image / content (Foreground Masked) */}
      <div 
        className="absolute inset-0 bg-gradient-to-br from-cyan-900 to-purple-900 flex items-center justify-center border-r-2 border-white/50"
        style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
      >
        <div className="absolute inset-0 opacity-20 bg-[url('/noise.svg')] mix-blend-overlay"></div>
        <div className="text-center">
          <div className="text-cyan-300 font-bold text-4xl mb-2 font-[family-name:var(--font-space-grotesk)] drop-shadow-[0_0_15px_rgba(34,211,238,0.5)]">After</div>
          <div className="text-cyan-100/70 text-sm">Medical Grade Clean Air</div>
        </div>
      </div>

      {/* Slider Handle */}
      <div 
        className="absolute top-0 bottom-0 w-1 bg-white/50 shadow-[0_0_10px_rgba(255,255,255,0.5)]"
        style={{ left: `${position}%` }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg pointer-events-none">
          <div className="flex gap-1">
            <div className="w-0.5 h-3 bg-gray-400 rounded-full"></div>
            <div className="w-0.5 h-3 bg-gray-400 rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
