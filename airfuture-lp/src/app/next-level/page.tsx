import CustomCursor from "@/components/ui/CustomCursor";
import ParticleBackground from "@/components/ui/ParticleBackground";
import Navbar from "@/components/layout/Navbar";
import StaggerReveal from "@/components/ui/StaggerReveal";
import CountUp from "@/components/ui/CountUp";
import BeforeAfterSlider from "@/components/ui/BeforeAfterSlider";
import TiltCard from "@/components/ui/TiltCard";
import InfiniteMarquee from "@/components/ui/InfiniteMarquee";
import MagneticButton from "@/components/ui/MagneticButton";

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

      <div className="relative z-10 pt-32 px-4 md:px-8 max-w-7xl mx-auto flex flex-col gap-32 pb-64">
        
        {/* Section 1: Hero with Stagger Reveal */}
        <section className="min-h-[60vh] flex flex-col justify-center items-center text-center">
          <div className="glass-deep inline-flex items-center rounded-full px-4 py-1.5 text-sm font-medium text-purple-300 border border-purple-500/30 mb-8">
            Next Level Experience
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6 font-[family-name:var(--font-space-grotesk)]">
            <StaggerReveal text="Future of Air Quality" />
          </h1>
          <p className="text-xl text-white/70 max-w-2xl mx-auto font-light leading-relaxed">
            10の最先端Webテクノロジーを統合し、圧倒的な没入感とパフォーマンスを実現するプロトタイプ。
          </p>
        </section>

        {/* Section 2: Before/After & Dynamic Count Up */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
             <BeforeAfterSlider />
          </div>
          <div className="order-1 lg:order-2 space-y-8">
            <div>
              <h2 className="text-4xl font-bold mb-4 tracking-tighter">圧倒的な浄化スピード</h2>
              <p className="text-white/70 leading-relaxed">
                有害物質を瞬時に分解。リアルタイムで空気が浄化されていく様子を可視化。
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="glass-deep p-6 rounded-[24px] border border-white/10">
                <div className="text-4xl font-bold text-cyan-400 mb-2 font-[family-name:var(--font-space-grotesk)]">
                  <CountUp to={98} duration={2} suffix="%" />
                </div>
                <div className="text-sm text-white/50">ホルムアルデヒド除去</div>
              </div>
              <div className="glass-deep p-6 rounded-[24px] border border-white/10">
                <div className="text-4xl font-bold text-purple-400 mb-2 font-[family-name:var(--font-space-grotesk)]">
                  <CountUp to={800} duration={2.5} />
                </div>
                <div className="text-sm text-white/50">放電ポイント</div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: 3D Tilt Cards & Scroll Parallax */}
        <section className="space-y-16">
          <div className="text-center">
            <h2 className="text-4xl font-bold mb-4 tracking-tighter">インタラクティブ・カード</h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              マウスの動きに連動する3Dティルト効果と、スクロール視差を組み合わせた最先端のUI。
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <TiltCard>
              <div className="h-96 glass-deep rounded-[32px] border border-white/10 flex flex-col p-8 justify-between relative overflow-hidden group">
                <div className="relative z-10">
                  <h3 className="text-xl font-bold mb-2">3D Depth</h3>
                  <p className="text-white/50 text-sm">カード自体が傾くだけでなく、コンテンツが浮き上がるような3D効果を演出します。</p>
                </div>
                <div className="w-16 h-16 rounded-full bg-cyan-500/20 blur-xl absolute bottom-8 right-8 group-hover:bg-cyan-400/40 transition-colors" />
              </div>
            </TiltCard>
            <TiltCard>
              <div className="h-96 glass-deep rounded-[32px] border border-white/10 flex flex-col p-8 justify-between relative overflow-hidden group">
                <div className="relative z-10">
                  <h3 className="text-xl font-bold mb-2">Fluid Physics</h3>
                  <p className="text-white/50 text-sm">60fpsで計算される流体のような物理アニメーションが、最高の触り心地を提供します。</p>
                </div>
                <div className="w-16 h-16 rounded-full bg-purple-500/20 blur-xl absolute bottom-8 right-8 group-hover:bg-purple-400/40 transition-colors" />
              </div>
            </TiltCard>
            <TiltCard>
              <div className="h-96 glass-deep rounded-[32px] border border-white/10 flex flex-col p-8 justify-between relative overflow-hidden group">
                <div className="relative z-10">
                  <h3 className="text-xl font-bold mb-2">Glassmorphism</h3>
                  <p className="text-white/50 text-sm">透過とブラー、そしてノイズテクスチャを組み合わせた本物のようなガラスの質感。</p>
                </div>
                <div className="w-16 h-16 rounded-full bg-blue-500/20 blur-xl absolute bottom-8 right-8 group-hover:bg-blue-400/40 transition-colors" />
              </div>
            </TiltCard>
          </div>
        </section>

        {/* Section 4: Infinite Marquee */}
        <section className="w-[100vw] relative left-[50%] right-[50%] -ml-[50vw] -mr-[50vw]">
          <div className="py-12 border-y border-white/10 glass-deep bg-black/20">
             <InfiniteMarquee speed={30}>
               {[...Array(6)].map((_, i) => (
                 <div key={i} className="flex items-center gap-12 mx-6">
                   <div className="text-3xl font-bold text-white/20 font-[family-name:var(--font-space-grotesk)]">MEDICAL GRADE</div>
                   <div className="w-2 h-2 rounded-full bg-purple-500/50" />
                   <div className="text-3xl font-bold text-white/20 font-[family-name:var(--font-space-grotesk)]">98% PURIFICATION</div>
                   <div className="w-2 h-2 rounded-full bg-cyan-500/50" />
                   <div className="text-3xl font-bold text-white/20 font-[family-name:var(--font-space-grotesk)]">NO FILTERS</div>
                   <div className="w-2 h-2 rounded-full bg-blue-500/50" />
                 </div>
               ))}
             </InfiniteMarquee>
          </div>
        </section>

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
