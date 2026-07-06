"use client";

import { useRef, useState, ReactNode, useEffect } from "react";
import { clsx } from "clsx";

interface SpotlightCardProps {
  children: ReactNode;
  className?: string;
  spotlightColor?: string;
}

export default function SpotlightCard({
  children,
  className,
  spotlightColor = "rgba(120, 180, 255, 0.15)",
}: SpotlightCardProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let rect = container.getBoundingClientRect();
    
    // Update rect on resize
    const resizeObserver = new ResizeObserver(() => {
      rect = container.getBoundingClientRect();
    });
    resizeObserver.observe(container);

    const handlePointerMove = (e: PointerEvent) => {
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      container.style.setProperty("--mouse-x", `${x}%`);
      container.style.setProperty("--mouse-y", `${y}%`);
    };

    container.addEventListener("pointermove", handlePointerMove);

    return () => {
      container.removeEventListener("pointermove", handlePointerMove);
      resizeObserver.disconnect();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={clsx(
        "group relative overflow-hidden rounded-[24px]",
        className
      )}
    >
      {/* Background content */}
      <div className="relative z-10 w-full h-full">{children}</div>

      {/* Spotlight Reveal Layer */}
      <div
        className="reveal-layer absolute inset-0 z-20 pointer-events-none"
        style={{ background: spotlightColor }}
        aria-hidden="true"
      />
    </div>
  );
}
