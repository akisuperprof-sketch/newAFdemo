"use client";

import { AnimatedSection, AnimatedItem } from "@/components/ui/AnimatedSection";
import SpotlightCard from "@/components/ui/SpotlightCard";

export default function BentoFeatures() {
  return (
    <section className="py-32 bg-background px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection className="mb-16 text-center">
          <AnimatedItem>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">なぜAir Futureの空気は<br/>こんなに気持ちいいの？</h2>
          </AnimatedItem>
          <AnimatedItem>
            <p className="text-foreground/70 max-w-2xl mx-auto text-lg leading-relaxed">
              一般的な空気清浄機とは異なる、独自のアプローチで空間を浄化します。
            </p>
          </AnimatedItem>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Bento Box 1 */}
          <AnimatedSection className="md:col-span-2">
            <AnimatedItem className="h-full">
              <SpotlightCard className="glass-deep p-8 md:p-12 h-full flex flex-col md:flex-row items-center gap-8">
                <div className="flex-1 relative z-10">
                  <h3 className="text-2xl font-bold mb-4">大きな雷で強力な効果</h3>
                  <p className="text-foreground/80 leading-relaxed">
                    一般的なプラズマ放電やコロナ放電は、6～12本程度の細い針で小さな雷を発生させますが、Air Futureは1本あたり400本の放電ポイントを持つ2本の発生素子を使用し、800本の放電ポイントで強力な雷を発生させます。
                  </p>
                </div>
                <div className="flex-1 w-full h-48 md:h-64 bg-black/10 dark:bg-white/5 rounded-2xl flex items-center justify-center overflow-hidden relative z-10 backdrop-blur-md">
                   {/* Fallback box if image isn't dropped in yet */}
                   <div className="text-foreground/40 font-bold">Image: core.png</div>
                </div>
              </SpotlightCard>
            </AnimatedItem>
          </AnimatedSection>

          {/* Bento Box 2 */}
          <AnimatedSection>
            <AnimatedItem className="h-full">
              <SpotlightCard className="glass-deep p-8 h-full flex flex-col">
                <div className="relative z-10 flex flex-col h-full">
                  <h3 className="text-xl font-bold mb-4">フィルター無しで<br/>メンテナンスが楽</h3>
                  <p className="text-foreground/80 leading-relaxed flex-1">
                    フィルターを使っていないため、メンテナンスなしでも性能が落ちません。3〜5年に一度、発生素子の交換をするだけ。
                  </p>
                </div>
              </SpotlightCard>
            </AnimatedItem>
          </AnimatedSection>

          {/* Bento Box 3 */}
          <AnimatedSection>
            <AnimatedItem className="h-full">
              <SpotlightCard className="glass-deep p-8 h-full flex flex-col">
                <div className="relative z-10 flex flex-col h-full">
                  <h3 className="text-xl font-bold mb-4">医療グレード</h3>
                  <p className="text-foreground/80 leading-relaxed flex-1">
                    病院の手術室やクリーンルームなど、一切の菌やウイルスの侵入も許されない空間で使われているレベルのシステムです。
                  </p>
                </div>
              </SpotlightCard>
            </AnimatedItem>
          </AnimatedSection>

          {/* Bento Box 4 */}
          <AnimatedSection className="md:col-span-2">
            <AnimatedItem className="h-full">
              <SpotlightCard className="glass-deep p-8 md:p-12 h-full flex flex-col md:flex-row-reverse items-center gap-8">
                <div className="flex-1 relative z-10">
                  <h3 className="text-2xl font-bold mb-4">VOC対策にも高い効果</h3>
                  <p className="text-foreground/80 leading-relaxed">
                    ホルムアルデヒド除去率98％、トルエン除去率98％など、代表的なVOCを高い除去率で対策できることを実証データで検証しています。シックハウス症候群・化学物質過敏症の予防に。
                  </p>
                </div>
                <div className="flex-1 w-full h-48 md:h-64 bg-black/10 dark:bg-white/5 rounded-2xl flex items-center justify-center overflow-hidden relative z-10 backdrop-blur-md">
                  {/* Fallback box if image isn't dropped in yet */}
                  <div className="text-foreground/40 font-bold">Image: device.png</div>
                </div>
              </SpotlightCard>
            </AnimatedItem>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
