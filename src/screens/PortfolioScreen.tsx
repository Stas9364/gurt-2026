"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { portfolioData, type PortfolioCategory } from "@/data/portfolio";
import { PageHero } from "@/components/common/PageHero";
import { PortfolioCard } from "@/components/common/PortfolioCard";
import { ContactButton } from "@/components/common/ContactButton";
import { PageWrapper } from "@/components/layout/PageWrapper";
import { cn } from "@/lib/utils";

export function PortfolioScreen() {
  const [activeCategory, setActiveCategory] = useState<PortfolioCategory>("Все");

  const filtered =
    activeCategory === "Все"
      ? portfolioData.items
      : portfolioData.items.filter((item) => item.category === activeCategory);

  return (
    <PageWrapper>
      <PageHero
        eyebrow={portfolioData.hero.eyebrow}
        title={portfolioData.hero.title}
        subtitle={portfolioData.hero.subtitle}
      />

      {/* Filter tabs */}
      <div className="sticky top-16 z-30 border-b border-border bg-background/95 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-1 overflow-x-auto py-3 scrollbar-none">
            {portfolioData.categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={cn(
                  "shrink-0 px-4 py-2 font-mono-tech text-sm tracking-widest transition-all",
                  activeCategory === cat
                    ? "bg-[var(--accent)] text-white"
                    : "text-muted-foreground hover:text-foreground border border-transparent hover:border-border"
                )}
              >
                {cat.toUpperCase()}
              </button>
            ))}
            <span className="ml-auto font-mono-tech text-sm text-muted-foreground shrink-0">
              {filtered.length} объектов
            </span>
          </div>
        </div>
      </div>

      {/* Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatePresence mode="popLayout">
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 items-stretch"
              layout
            >
              {filtered.map((item) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.94 }}
                  transition={{ duration: 0.3 }}
                  className="h-full"
                >
                  <PortfolioCard
                    title={item.title}
                    material={item.material}
                    industry={item.industry}
                    category={item.category}
                    dimensions={item.dimensions}
                    tolerance={item.tolerance}
                    className="h-full"
                  />
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 border-t border-border bg-surface/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-inter text-3xl sm:text-4xl md:text-5xl font-700 uppercase mb-4">
            Нужна похожая деталь?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
            Пришлите чертёж или опишите задачу — рассчитаем и изготовим.
          </p>
          <ContactButton href="/contacts" variant="primary" className="px-10 py-4 text-base">
            Обсудить заказ →
          </ContactButton>
        </div>
      </section>
    </PageWrapper>
  );
}
