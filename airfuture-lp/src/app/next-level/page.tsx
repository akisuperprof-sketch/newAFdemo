import CustomCursor from "@/components/ui/CustomCursor";
import ParticleBackground from "@/components/ui/ParticleBackground";
import Navbar from "@/components/layout/Navbar";
import StaggerReveal from "@/components/ui/StaggerReveal";
import BeforeAfterSlider from "@/components/ui/BeforeAfterSlider";
import InfiniteMarquee from "@/components/ui/InfiniteMarquee";
import MagneticButton from "@/components/ui/MagneticButton";
import BentoFeaturesNext from "@/components/sections/BentoFeaturesNext";
import FaqSection from "@/components/sections/FaqSection";
import { AnimatedSection, AnimatedItem } from "@/components/ui/AnimatedSection";

export default function NextLevelPage() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-purple-500/30 overflow-hidden relative dark font-[family-name:var(--font-noto-sans-jp)]">
      <CustomCursor />
      <ParticleBackground />
      <Navbar />
      
      {/* Aurora Background Layer */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-40 mix-blend-screen">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-purple-600/30 blur-[120px] animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-blue-600/20 blur-[150px] animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute top-[40%] left-[60%] w-[30%] h-[30%] rounded-full bg-cyan-600/20 blur-[100px] animate-pulse" style={{ animationDelay: '4s' }} />
      </div>

      <div className="relative z-10 pt-32 pb-32">
        
        {/* Section 1: Hero with Stagger Reveal */}
        <section className="min-h-[70vh] flex flex-col justify-center items-center text-center px-4 md:px-8 max-w-7xl mx-auto">
          <AnimatedSection>
            <AnimatedItem>
              <div className="glass-deep inline-flex items-center rounded-full px-4 py-1.5 text-sm font-medium text-purple-300 border border-purple-500/30 mb-8">
                医療グレードの空間清浄システム
              </div>
            </AnimatedItem>
            <AnimatedItem>
              <h1 className="text-6xl md:text-8xl font-bold tracking-tighter mb-6 font-[family-name:var(--font-space-grotesk)]">
                <StaggerReveal text="Air Future" />
              </h1>
            </AnimatedItem>
            <AnimatedItem>
              <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto font-light leading-relaxed">
                自然の力があなたの空間と地球環境を快適に変える。<br />
                医療機関で使われてきた究極の空間改善システムを、オフィスや家庭に。
              </p>
            </AnimatedItem>
          </AnimatedSection>
        </section>

        {/* Section 2: Before/After Slider */}
        <section className="px-4 md:px-8 max-w-6xl mx-auto my-32">
          <AnimatedSection className="mb-12 text-center">
            <AnimatedItem>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">見えない脅威を、可視化する</h2>
              <p className="text-white/70">独自のイオン放出技術で、空気だけでなく壁やモノに付着した菌まで浄化します。</p>
            </AnimatedItem>
          </AnimatedSection>
          <AnimatedSection>
            <AnimatedItem>
              <BeforeAfterSlider />
            </AnimatedItem>
          </AnimatedSection>
        </section>

        {/* Section 3: Infinite Marquee */}
        <section className="w-[100vw] relative left-[50%] right-[50%] -ml-[50vw] -mr-[50vw] my-16">
          <div className="py-8 border-y border-white/10 glass-deep bg-black/40 backdrop-blur-xl">
             <InfiniteMarquee speed={40}>
               {[...Array(8)].map((_, i) => (
                 <div key={i} className="flex items-center gap-12 mx-6">
                   <div className="text-2xl font-bold text-white/30 font-[family-name:var(--font-space-grotesk)]">MEDICAL GRADE</div>
                   <div className="w-2 h-2 rounded-full bg-purple-500/50" />
                   <div className="text-2xl font-bold text-white/30 font-[family-name:var(--font-space-grotesk)]">98% PURIFICATION</div>
                   <div className="w-2 h-2 rounded-full bg-cyan-500/50" />
                   <div className="text-2xl font-bold text-white/30 font-[family-name:var(--font-space-grotesk)]">NO FILTERS</div>
                   <div className="w-2 h-2 rounded-full bg-blue-500/50" />
                 </div>
               ))}
             </InfiniteMarquee>
          </div>
        </section>

        {/* Section 4: Bento Features Next Level */}
        <BentoFeaturesNext />

        {/* Section 5: FAQ & CTA */}
        <div className="mt-16">
          <FaqSection />
        </div>

      </div>
      
      {/* Sticky FAB */}
      <div className="fixed bottom-8 right-8 z-50">
        <MagneticButton 
          as="a"
          href="https://airfuture.base.shop/items/136187294" 
          target="_blank"
          className="w-20 h-20 rounded-full glass-deep border border-purple-500/50 flex flex-col items-center justify-center text-white shadow-[0_0_30px_rgba(168,85,247,0.3)] hover:shadow-[0_0_50px_rgba(168,85,247,0.5)] transition-all bg-purple-900/40 hover:bg-purple-800/60"
        >
          <span className="text-[10px] uppercase font-bold tracking-widest text-purple-200 mb-1">Buy</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
        </MagneticButton>
      </div>
    </main>
  );
}
