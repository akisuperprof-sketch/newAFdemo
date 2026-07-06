"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatedSection, AnimatedItem } from "@/components/ui/AnimatedSection";

const FRAME_COUNT = 144;

export default function ProjectsShowcase() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);

  useEffect(() => {
    const loadedImages: HTMLImageElement[] = [];
    let loadedCount = 0;
    
    for (let i = 1; i <= FRAME_COUNT; i++) {
      const img = new Image();
      const frameNumber = i.toString().padStart(4, "0");
      img.src = `/tunnel-frames/frame_${frameNumber}.jpg`;
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

  const projects = [
    {
      title: "パークサイドデンタルオフィス",
      desc: "フィルター交換不要で薬品臭の軽減を実感。離れた場所で発生した臭いも除去してくれました。",
    },
    {
      title: "原宿デンタルオフィス",
      desc: "スタッフの花粉症改善、化学物質の除去に。コンパクトなサイズで治療室にも置きやすいです。",
    },
    {
      title: "西山デンタルオフィス",
      desc: "空気の清浄効果を実感。歯科特有の臭いが無くなり、患者が感じる不快感が軽減されました。",
    },
  ];

  return (
    <section ref={containerRef} className="relative h-[300vh] bg-black">
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col md:flex-row items-center justify-center px-8 md:px-16 gap-8">
        <canvas 
          ref={canvasRef} 
          width={1280} 
          height={720} 
          className="absolute top-0 left-0 w-full h-full object-cover opacity-60"
        />
        
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/20" />
        
        <div className="relative z-10 w-full max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-1/3">
            <AnimatedSection>
              <AnimatedItem>
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                  約2万5,000カ所に導入
                </h2>
              </AnimatedItem>
              <AnimatedItem>
                <p className="text-lg text-white/70">
                  医療機関からオフィス、ホテル、ご家庭まで。空気の変化が体感できるからこそ、多くの場所で選ばれています。
                </p>
              </AnimatedItem>
            </AnimatedSection>
          </div>
          
          <div className="w-full md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, idx) => (
              <AnimatedSection key={idx} className={idx === 2 ? "md:col-span-2" : ""}>
                <AnimatedItem className="h-full">
                  <div className="glass-surface p-8 h-full rounded-2xl flex flex-col justify-center">
                    <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
                    <p className="text-white/80 leading-relaxed text-sm md:text-base">
                      {project.desc}
                    </p>
                  </div>
                </AnimatedItem>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
