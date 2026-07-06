"use client";

import { AnimatedSection, AnimatedItem } from "@/components/ui/AnimatedSection";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CaretDown } from "@phosphor-icons/react";

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
                <div 
                  className="card-surface overflow-hidden cursor-pointer border border-black/5"
                  onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                >
                  <div className="p-6 flex items-center justify-between bg-white hover:bg-gray-50 transition-colors">
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
                        className="bg-white"
                      >
                        <div className="px-6 pb-6 text-foreground/70 leading-relaxed border-t border-black/5 pt-4">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </AnimatedItem>
            </AnimatedSection>
          ))}
        </div>
        
        <AnimatedSection className="mt-32 text-center">
          <AnimatedItem>
            <div className="card-surface p-12 bg-gradient-to-br from-white to-blue-50 border border-blue-100">
              <h2 className="text-3xl font-bold mb-6 text-blue-900">空気の変化が体感できる</h2>
              <p className="text-blue-900/70 mb-8 max-w-xl mx-auto leading-relaxed">
                都会のビルの一室なのに大自然の中の早朝のような、深呼吸したくなる気持ちよさ。Air Futureで新しい空間体験を。
              </p>
              <a 
                href="https://airfuture.base.shop/items/136187294" 
                target="_blank" 
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-10 rounded-full shadow-lg shadow-blue-600/30 transition-all hover:scale-105 active:scale-95"
              >
                購入の申込はこちら
              </a>
            </div>
          </AnimatedItem>
        </AnimatedSection>
      </div>
    </section>
  );
}
