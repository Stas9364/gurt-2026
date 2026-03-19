import { ContactButton } from "@/components/common/ContactButton";
import { FadeIn } from "@/components/common/FadeIn";
import { SectionHeader } from "@/components/common/SectionHeader";
import { ServiceCard } from "@/components/common/ServiceCard";
import { StatCard } from "@/components/common/StatCard";
import { Container } from "@/components/layout/Container";
import { PageWrapper } from "@/components/layout/PageWrapper";
import { homeData } from "@/data/home";
import { HomeHeroSection } from "./HomeHeroSection";

const serviceIcons: Record<string, React.ReactNode> = {
  lathe: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="12" cy="12" r="3" />
      <path d="M2 12h4M18 12h4M12 2v4M12 18v4" />
      <path d="M5 5l2.8 2.8M16.2 16.2 19 19M19 5l-2.8 2.8M7.8 16.2 5 19" />
    </svg>
  ),
  mill: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="4" y="14" width="16" height="6" rx="1" />
      <path d="M12 14V4M9 7h6M8 4h8" />
      <path d="M7 14v-3h10v3" />
    </svg>
  ),
  blueprint: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="3" y="3" width="18" height="18" rx="1" />
      <path d="M7 8h10M7 12h6M7 16h8" />
      <path d="M16 13l2 2-2 2" />
    </svg>
  ),
  metal: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M12 2L2 7l10 5 10-5-10-5z" />
      <path d="M2 17l10 5 10-5M2 12l10 5 10-5" />
    </svg>
  ),
};

export function HomeScreen() {
  return (
    <PageWrapper>
      {/* ── HERO (client, animations) ── */}
      <HomeHeroSection videoSrc="/video/hero.webm" />

      {/* ── STATS ── */}
      <section className="border-y border-border bg-surface/50 py-16">
        <Container>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {homeData.stats.map((stat, i) => (
              <FadeIn key={stat.label} delay={i * 0.1}>
                <StatCard
                  value={stat.value}
                  unit={stat.unit || undefined}
                  label={stat.label}
                  description={stat.description}
                />
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>

      {/* ── SERVICES ── */}
      <section className="py-24">
        <Container>
          <SectionHeader
            index="02"
            eyebrow="Что мы делаем"
            title="Услуги"
            subtitle="Полный цикл механической обработки металлов — от простой токарки до сложных многоосевых операций."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 items-stretch">
            {homeData.services.map((service, i) => (
              <FadeIn key={service.id} delay={i * 0.1} className="h-full">
                <ServiceCard
                  icon={serviceIcons[service.icon]}
                  title={service.title}
                  description={service.description}
                  href={service.href}
                  features={[...service.features]}
                  className="h-full"
                />
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>

      {/* ── PRODUCTS ── */}
      <section className="py-24 bg-surface/30 border-y border-border">
        <Container>
          <SectionHeader
            index="03"
            eyebrow="Наша продукция"
            title="Промо продукции"
            subtitle="Флагманские изделия для горнодобывающей и машиностроительной промышленности."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
            {homeData.products.map((product, i) => (
              <FadeIn key={product.title} delay={i * 0.1} className="h-full">
                <div className="group relative border border-border bg-surface p-8 hover:border-[rgba(var(--accent-rgb),0.4)] transition-all flex flex-col h-full">
                  <div className="absolute top-2 left-2 w-3 h-3 border-t border-l border-[var(--accent)] opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span className="font-mono-tech text-sm text-[var(--accent)] tracking-widest uppercase">
                    {product.category}
                  </span>
                  <h3 className="font-inter text-2xl font-700 uppercase mt-2 mb-3 text-foreground group-hover:text-[var(--accent)] transition-colors">
                    {product.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{product.description}</p>
                  <div className="mt-auto pt-6">
                    <div className="h-32 bg-[var(--bg-deep)] border border-border/50 flex items-center justify-center relative overflow-hidden">
                      <div className="grid-bg-fine absolute inset-0 opacity-50" />
                      <span className="font-mono-tech text-sm text-muted-foreground relative">[ФОТО СКОРО]</span>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
          <div className="mt-8 text-center">
            <ContactButton href="/portfolio" variant="outline">
              Смотреть всё портфолио →
            </ContactButton>
          </div>
        </Container>
      </section>

      {/* ── GEOGRAPHY ── */}
      <section className="py-24">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <SectionHeader
                index="04"
                eyebrow="География поставок"
                title={homeData.geography.title}
                subtitle={homeData.geography.description}
              />
              <div className="grid grid-cols-2 gap-3">
                {homeData.geography.regions.map((region) => (
                  <div key={region.name} className="flex items-center gap-3 p-4 border border-border bg-surface">
                    <span className="font-mono-tech text-sm text-[var(--accent)] font-500 w-8">{region.country}</span>
                    <div>
                      <p className="text-sm font-500 text-foreground">{region.name}</p>
                      <p className="font-mono-tech text-sm text-muted-foreground">{region.role}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative h-80 lg:h-96 border border-border bg-surface overflow-hidden">
              <div className="grid-bg absolute inset-0" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(var(--accent-rgb),0.08)_0%,transparent_70%)]" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="font-inter text-4xl md:text-6xl font-700 text-[rgba(var(--accent-rgb),0.12)]">BY / RU</div>
                  <div className="font-mono-tech text-sm text-muted-foreground mt-2 tracking-widest">[КАРТА ПОСТАВОК]</div>
                </div>
              </div>
              <div className="absolute top-1/2 left-1/3 w-2 h-2 bg-[var(--accent)] rounded-full animate-pulse" />
              <div className="absolute top-1/3 right-1/3 w-2 h-2 bg-[var(--accent)] rounded-full animate-pulse delay-300" />
              <div className="absolute bottom-1/3 right-1/4 w-2 h-2 bg-[var(--accent)]/50 rounded-full animate-pulse delay-600" />
            </div>
          </div>
        </Container>
      </section>

      {/* ── CTA ── */}
      <section className="py-24 border-t border-border bg-surface/30">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <span className="font-mono-tech text-sm text-[var(--accent)] tracking-[0.3em] uppercase">Начать работу</span>
            <h2 className="font-inter text-3xl sm:text-4xl md:text-6xl font-700 uppercase mt-3 mb-5 text-foreground">
              {homeData.cta.title}
            </h2>
            <p className="text-muted-foreground text-lg mb-10">{homeData.cta.subtitle}</p>
            <div className="flex flex-wrap gap-4 justify-center">
              <ContactButton href="/contacts" variant="primary" className="text-base px-10 py-4">
                {homeData.cta.button}
              </ContactButton>
              <ContactButton href="/services/custom" variant="outline" className="text-base px-10 py-4">
                Узнать о возможностях
              </ContactButton>
            </div>
          </div>
        </Container>
      </section>
    </PageWrapper>
  );
}
