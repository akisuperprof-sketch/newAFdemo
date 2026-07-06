"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatedSection, AnimatedItem } from "@/components/ui/AnimatedSection";

const FRAME_COUNT = 240;

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);

  // Preload images
  useEffect(() => {
    const loadedImages: HTMLImageElement[] = [];
    let loadedCount = 0;
    
    for (let i = 1; i <= FRAME_COUNT; i++) {
      const img = new Image();
      const frameNumber = i.toString().padStart(4, "0");
      img.src = `/frames/frame_${frameNumber}.jpg`;
      img.onload = () => {
        loadedCount++;
        if (loadedCount === 1 && canvasRef.current) {
          const ctx = canvasRef.current.getContext("2d");
          if (ctx) {
            ctx.drawImage(img, 0, 0, canvasRef.current.width, canvasRef.current.height);
          }
        }
      };
      loadedImages.push(img);
    }
    setImages(loadedImages);
  }, []);

  // Handle scroll to draw frames
  useEffect(() => {
    if (!canvasRef.current || !containerRef.current || images.length === 0) return;
    
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          if (!containerRef.current) return;
          const rect = containerRef.current.getBoundingClientRect();
          const scrollProgress = -rect.top / (rect.height - window.innerHeight);
          
          let frameIndex = Math.floor(scrollProgress * FRAME_COUNT);
          frameIndex = Math.max(0, Math.min(FRAME_COUNT - 1, frameIndex));
          
          if (images[frameIndex]) {
            ctx.drawImage(images[frameIndex], 0, 0, canvas.width, canvas.height);
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [images]);

  return (
    <section ref={containerRef} className="relative h-[400vh] bg-black">
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center">
        <canvas 
          ref={canvasRef} 
          width={1280} 
          height={720} 
          className="absolute top-0 left-0 w-full h-full object-cover opacity-80"
        />
        
        <div className="absolute inset-0 bg-black/30" />
        
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 pointer-events-none">
          <AnimatedSection>
            <AnimatedItem>
              <div className="mb-4 inline-flex items-center rounded-full border border-white/20 bg-white/10 px-3 py-1 text-sm text-white backdrop-blur-md">
                医療グレードの空間清浄システム
              </div>
            </AnimatedItem>
            <AnimatedItem>
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
                Air Future
              </h1>
            </AnimatedItem>
            <AnimatedItem>
              <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto font-light leading-relaxed">
                自然の力があなたの空間と地球環境を快適に変える。<br />
                医療機関で使われてきた医療グレードの空間改善システムをオフィスや家庭に。
              </p>
            </AnimatedItem>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
