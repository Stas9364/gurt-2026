"use client";

import { m, type Variants } from "framer-motion";
import { ContactButton } from "@/components/common/ContactButton";
import { WanderingBlob } from "@/components/common/WanderingBlob";
import { Container } from "@/components/layout/Container";
import { homeData } from "@/data/home";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: [0.25, 0.1, 0.25, 1] },
  }),
};

interface HomeHeroSectionProps {
  videoSrc?: string;
}

export function HomeHeroSection({ videoSrc }: HomeHeroSectionProps) {
  return (
    <section className="relative min-h-[92vh] flex items-center overflow-hidden">

      {/* ── Фон: видео ИЛИ анимированные блобы ── */}
      {videoSrc ? (
        <>
          {/* Видео на весь экран */}
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
            style={{ zIndex: 0 }}
          >
            <source src={videoSrc} type="video/mp4" />
          </video>

          {/* Тёмный градиент поверх видео — читаемость текста */}
          <div
            className="absolute inset-0"
            style={{
              zIndex: 1,
              background:
                "linear-gradient(105deg, rgba(0,0,0,0.72) 0%, rgba(0,0,0,0.45) 55%, rgba(0,0,0,0.25) 100%)",
            }}
          />

          {/* Сетка поверх оверлея — сохраняем индустриальный стиль */}
          <div className="grid-bg absolute inset-0 opacity-30" style={{ zIndex: 2 }} />
        </>
      ) : (
        <>
          {/* Сетка-фон */}
          <div className="grid-bg absolute inset-0" />

          {/* Блобы */}
          <WanderingBlob variant={1} size={700} opacity={0.13} blur={70} top="10%" left="-5%" />
          <WanderingBlob variant={2} size={420} opacity={0.09} blur={45} top="35%" left="25%" />
          <WanderingBlob variant={3} size={300} opacity={0.06} blur={35} top="5%" right="8%" className="hidden lg:block" />

          {/* Декоративные линии */}
          <div className="absolute left-0 top-0 h-full w-px bg-gradient-to-b from-transparent via-[rgba(var(--accent-rgb),0.15)] to-transparent" />
          <div className="absolute right-[30%] top-0 h-full w-px bg-gradient-to-b from-transparent via-[rgba(var(--accent-rgb),0.06)] to-transparent hidden lg:block" />
        </>
      )}

      {/* ── Контент ── */}
      <Container className="relative py-24" style={{ zIndex: 3 }}>
        <div className="max-w-6xl">
          <m.div
            initial="hidden" animate="visible" variants={fadeUp} custom={0}
            className="flex items-center gap-3 mb-6"
          >
            <span className="w-12 h-px bg-[var(--accent)]" />
            <span className="font-mono-tech text-sm text-[var(--accent)] tracking-[0.3em] uppercase">
              {homeData.hero.eyebrow}
            </span>
          </m.div>

          <m.h1
            initial="hidden" animate="visible" variants={fadeUp} custom={1}
            className="font-inter text-4xl sm:text-5xl md:text-7xl lg:text-[6.5rem] font-bold uppercase leading-[1] md:leading-[0.95] tracking-tight text-foreground mb-8"
          >
            <span className="block">Сложная</span>
            <span className="block text-gradient-blue">Мехобработка</span>
            <span className="block text-xl sm:text-2xl md:text-3xl lg:text-4xl font-400 tracking-normal text-muted-foreground mt-3 normal-case">
              от одного эскиза до серийного производства
            </span>
          </m.h1>

          <m.p
            initial="hidden" animate="visible" variants={fadeUp} custom={2}
            className="max-w-2xl text-muted-foreground text-base md:text-lg leading-relaxed mb-10"
          >
            {homeData.hero.subtitle}
          </m.p>

          <m.div
            initial="hidden" animate="visible" variants={fadeUp} custom={3}
            className="flex flex-wrap gap-4"
          >
            <ContactButton href="/contacts" variant="primary" className="text-base px-8 py-3.5">
              {homeData.hero.cta}
              <span className="ml-1">→</span>
            </ContactButton>
            <ContactButton href="/equipment" variant="outline" className="text-base px-8 py-3.5">
              {homeData.hero.ctaSecondary}
            </ContactButton>
          </m.div>
        </div>

        {/* Координаты — скрываем поверх видео чтобы не мешать */}
        {!videoSrc && (
          <div className="absolute right-8 bottom-16 hidden xl:block">
            <div className="font-mono-tech text-sm text-muted-foreground space-y-1 border border-border/50 p-3 bg-surface/50">
              <div>X: 53.9045° N</div>
              <div>Y: 30.3408° E</div>
              <div className="text-[var(--accent)]">МОГИЛЁВ / BY</div>
            </div>
          </div>
        )}
      </Container>

      {/* Scroll-индикатор */}
      <m.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
        style={{ zIndex: 3 }}
      >
        <div className="w-px h-8 bg-gradient-to-b from-[rgba(var(--accent-rgb),0.6)] to-transparent" />
      </m.div>
    </section>
  );
}
