"use client";

import { AnimatedSection, AnimatedItem } from "@/components/ui/AnimatedSection";
import SpotlightCard from "@/components/ui/SpotlightCard";
import TiltCard from "@/components/ui/TiltCard";
import CountUp from "@/components/ui/CountUp";

export default function BentoFeaturesNext() {
  return (
    <section className="py-32 px-4 md:px-8 relative z-10">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection className="mb-16 text-center">
          <AnimatedItem>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">なぜAir Futureの空気は<br/>こんなに気持ちいいの？</h2>
          </AnimatedItem>
          <AnimatedItem>
            <p className="text-white/70 max-w-2xl mx-auto text-lg leading-relaxed">
              一般的な空気清浄機とは異なる、独自のアプローチで空間を浄化します。
            </p>
          </AnimatedItem>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Bento Box 1 */}
          <AnimatedSection className="md:col-span-2">
            <AnimatedItem className="h-full">
              <TiltCard className="h-full">
                <SpotlightCard className="glass-deep p-8 md:p-12 h-full flex flex-col md:flex-row items-center gap-8 border border-white/10 rounded-[32px]">
                  <div className="flex-1 relative z-10">
                    <h3 className="text-2xl font-bold mb-4">大きな雷で強力な効果</h3>
                    <p className="text-white/80 leading-relaxed mb-6">
                      一般的なプラズマ放電やコロナ放電は、6～12本程度の細い針で小さな雷を発生させますが、Air Futureは1本あたり400本の放電ポイントを持つ2本の発生素子を使用し、強力な雷を発生させます。
                    </p>
                    <div className="inline-block glass-deep px-6 py-4 rounded-[24px] border border-white/10">
                      <div className="text-sm text-white/50 mb-1">放電ポイント数</div>
                      <div className="text-5xl font-bold text-cyan-400 font-[family-name:var(--font-space-grotesk)]">
                        <CountUp to={800} duration={2} />
                      </div>
                    </div>
                  </div>
                  <div className="flex-1 w-full h-48 md:h-64 bg-black/20 rounded-2xl flex items-center justify-center overflow-hidden relative z-10 backdrop-blur-md border border-white/5">
                     <div className="absolute inset-0 bg-gradient-to-tr from-cyan-900/30 to-purple-900/30 mix-blend-overlay" />
                     <div className="text-white/40 font-bold tracking-widest uppercase">High Voltage Core</div>
                  </div>
                </SpotlightCard>
              </TiltCard>
            </AnimatedItem>
          </AnimatedSection>

          {/* Bento Box 2 */}
          <AnimatedSection>
            <AnimatedItem className="h-full">
              <TiltCard className="h-full">
                <SpotlightCard className="glass-deep p-8 h-full flex flex-col border border-white/10 rounded-[32px]">
                  <div className="relative z-10 flex flex-col h-full">
                    <h3 className="text-xl font-bold mb-4">フィルター無しで<br/>メンテナンスが楽</h3>
                    <p className="text-white/80 leading-relaxed flex-1 mb-6">
                      フィルターを使っていないため、メンテナンスなしでも性能が落ちません。
                    </p>
                    <div className="mt-auto">
                      <div className="text-sm text-white/50 mb-1">交換サイクル</div>
                      <div className="text-4xl font-bold text-purple-400 font-[family-name:var(--font-space-grotesk)] flex items-end gap-2">
                        <CountUp to={3} duration={1.5} /> - <CountUp to={5} duration={2} /> <span className="text-lg text-white/50 pb-1">years</span>
                      </div>
                    </div>
                  </div>
                </SpotlightCard>
              </TiltCard>
            </AnimatedItem>
          </AnimatedSection>

          {/* Bento Box 3 */}
          <AnimatedSection>
            <AnimatedItem className="h-full">
              <TiltCard className="h-full">
                <SpotlightCard className="glass-deep p-8 h-full flex flex-col border border-white/10 rounded-[32px]">
                  <div className="relative z-10 flex flex-col h-full">
                    <h3 className="text-xl font-bold mb-4">医療グレード</h3>
                    <p className="text-white/80 leading-relaxed flex-1">
                      病院の手術室やクリーンルームなど、一切の菌やウイルスの侵入も許されない空間で使われているレベルのシステムです。
                    </p>
                    <div className="mt-6 w-16 h-16 rounded-full bg-blue-500/20 blur-xl absolute bottom-0 right-0" />
                  </div>
                </SpotlightCard>
              </TiltCard>
            </AnimatedItem>
          </AnimatedSection>

          {/* Bento Box 4 */}
          <AnimatedSection className="md:col-span-2">
            <AnimatedItem className="h-full">
              <TiltCard className="h-full">
                <SpotlightCard className="glass-deep p-8 md:p-12 h-full flex flex-col md:flex-row-reverse items-center gap-8 border border-white/10 rounded-[32px]">
                  <div className="flex-1 relative z-10">
                    <h3 className="text-2xl font-bold mb-4">VOC対策にも高い効果</h3>
                    <p className="text-white/80 leading-relaxed mb-6">
                      ホルムアルデヒドやトルエンなど、代表的なVOCを高い除去率で対策できることを実証データで検証しています。シックハウス症候群の予防に。
                    </p>
                    <div className="flex gap-4">
                      <div className="glass-deep px-5 py-3 rounded-[20px] border border-white/10">
                        <div className="text-xs text-white/50 mb-1">ホルムアルデヒド</div>
                        <div className="text-3xl font-bold text-cyan-300 font-[family-name:var(--font-space-grotesk)]">
                          <CountUp to={98} duration={2} suffix="%" />
                        </div>
                      </div>
                      <div className="glass-deep px-5 py-3 rounded-[20px] border border-white/10">
                        <div className="text-xs text-white/50 mb-1">トルエン</div>
                        <div className="text-3xl font-bold text-purple-300 font-[family-name:var(--font-space-grotesk)]">
                          <CountUp to={98} duration={2} suffix="%" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex-1 w-full h-48 md:h-64 bg-black/20 rounded-2xl flex items-center justify-center overflow-hidden relative z-10 backdrop-blur-md border border-white/5">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 to-cyan-900/30 mix-blend-overlay" />
                    <div className="text-white/40 font-bold tracking-widest uppercase">Performance Data</div>
                  </div>
                </SpotlightCard>
              </TiltCard>
            </AnimatedItem>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
