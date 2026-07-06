"use client";

import { AnimatedSection, AnimatedItem } from "@/components/ui/AnimatedSection";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CaretDown } from "@phosphor-icons/react";
import SpotlightCard from "@/components/ui/SpotlightCard";
import MagneticButton from "@/components/ui/MagneticButton";

const faqs = [
  {
    q: "一般的な空気清浄機との違いは何ですか？",
    a: "一般的な空気清浄機は吸い込んだ空気をフィルターでろ過する「吸引式」ですが、Air Futureは大量のイオンを放出して空気中だけでなくモノに付着した菌や有害物質も除菌する「放出式」です。",
  },
  {
    q: "メンテナンスは必要ですか？",
    a: "フィルターを使用していないため、日常的なフィルター掃除や交換は不要です。3～5年に1度、内部の発生素子を交換するだけで性能を維持できます。",
  },
  {
    q: "オゾンの発生は安全ですか？",
    a: "Air Futureはイオンを使って空気を浄化します。発生するオゾン量は非常に少なく、人体に影響のない0.002ppm未満に抑えられているため安全です。",
  },
  {
    q: "どのくらいの広さに対応していますか？",
    a: "1台で約40畳（60㎡）の広さに対応しています。効果範囲が広く、高い位置や遠くの空間までイオンが行き渡ります。",
  }
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-32 bg-background px-4 md:px-8">
      <div className="max-w-3xl mx-auto">
        <AnimatedSection className="mb-16 text-center">
          <AnimatedItem>
            <h2 className="text-4xl font-bold mb-4 tracking-tight">よくある質問</h2>
          </AnimatedItem>
        </AnimatedSection>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <AnimatedSection key={idx}>
              <AnimatedItem>
                <SpotlightCard 
                  className="glass-deep overflow-hidden cursor-pointer"
                >
                  <div className="relative z-10" onClick={() => setOpenIndex(openIndex === idx ? null : idx)}>
                    <div className="p-6 flex items-center justify-between bg-white/50 hover:bg-white/70 dark:bg-black/20 dark:hover:bg-black/30 transition-colors">
                      <h3 className="font-bold text-lg text-foreground">{faq.q}</h3>
                      <CaretDown 
                        weight="bold" 
                        className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${openIndex === idx ? "rotate-180" : ""}`} 
                      />
                    </div>
                    <AnimatePresence>
                      {openIndex === idx && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                          className="bg-white/30 dark:bg-black/10 backdrop-blur-md"
                        >
                          <div className="px-6 pb-6 text-foreground/80 leading-relaxed border-t border-black/5 dark:border-white/5 pt-4">
                            {faq.a}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </SpotlightCard>
              </AnimatedItem>
            </AnimatedSection>
          ))}
        </div>
        
        <AnimatedSection className="mt-32 text-center">
          <AnimatedItem>
            <SpotlightCard className="glass-deep p-12 bg-gradient-to-br from-blue-50/50 to-white/50 dark:from-blue-900/20 dark:to-background border border-blue-100/50 dark:border-blue-800/30">
              <div className="relative z-10">
                <h2 className="text-3xl font-bold mb-6 text-blue-900 dark:text-blue-100">空気の変化が体感できる</h2>
                <p className="text-blue-900/70 dark:text-blue-200/70 mb-8 max-w-xl mx-auto leading-relaxed">
                  都会のビルの一室なのに大自然の中の早朝のような、深呼吸したくなる気持ちよさ。Air Futureで新しい空間体験を。
                </p>
                <MagneticButton 
                  as="a"
                  href="https://airfuture.base.shop/items/136187294" 
                  target="_blank" 
                  className="mx-auto max-w-xs bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-10 rounded-[24px] shadow-lg shadow-blue-600/30 transition-colors"
                >
                  購入の申込はこちら
                </MagneticButton>
              </div>
            </SpotlightCard>
          </AnimatedItem>
        </AnimatedSection>
      </div>
    </section>
  );
}
