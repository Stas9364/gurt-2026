import { FadeIn } from "@/components/common/FadeIn";
import { millingData } from "@/data/services/milling";
import { PageHero } from "@/components/common/PageHero";
import { SectionHeader } from "@/components/common/SectionHeader";
import { TechSpec } from "@/components/common/TechSpec";
import { ContactButton } from "@/components/common/ContactButton";
import { PageWrapper } from "@/components/layout/PageWrapper";

export function MillingScreen() {
  return (
    <PageWrapper>
      <PageHero
        eyebrow={millingData.hero.eyebrow}
        title={millingData.hero.title}
        subtitle={millingData.hero.subtitle}
      />

      {/* Capabilities */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader index="01" eyebrow="Возможности" title="Виды фрезерования" />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {millingData.capabilities.map((cap, i) => (
              <FadeIn key={cap.title} delay={i * 0.15}>
                <div className="border border-border bg-surface p-8 hover:border-[rgba(var(--accent-rgb),0.4)] transition-all h-full">
                  <h3 className="font-inter text-2xl font-700 uppercase tracking-wide text-foreground mb-3">
                    {cap.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-6">{cap.description}</p>
                  <TechSpec items={[...cap.specs]} />
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Operations + Tolerances */}
      <section className="py-20 bg-surface/30 border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <SectionHeader index="02" eyebrow="Операции" title="Виды работ" />
              <FadeIn>
                <ul className="space-y-3">
                  {millingData.operations.map((op, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm text-foreground">
                      <span className="w-1.5 h-1.5 bg-[var(--accent)] shrink-0" />
                      {op}
                    </li>
                  ))}
                </ul>
              </FadeIn>
            </div>
            <div>
              <SectionHeader index="03" eyebrow="Точность" title="Допуски" />
              <TechSpec
                items={millingData.tolerances.items.map((item) => ({
                  label: item.label,
                  value: item.value,
                  highlight: "highlight" in item ? Boolean(item.highlight) : false,
                }))}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Materials */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader index="04" eyebrow="Материалы" title="Обрабатываемые металлы" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {millingData.materials.map((mat, i) => (
              <FadeIn key={mat.name} delay={i * 0.08}>
                <div className="border border-border bg-surface p-5 group hover:border-[rgba(var(--accent-rgb),0.4)] transition-all h-full">
                  <h4 className="font-inter text-sm font-500 text-foreground mb-2 group-hover:text-[var(--accent)] transition-colors">
                    {mat.name}
                  </h4>
                  <p className="font-mono-tech text-sm text-muted-foreground">{mat.grade}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 border-t border-border bg-surface/30">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader index="05" eyebrow="FAQ" title="Частые вопросы" centered />
          <div className="space-y-4">
            {millingData.faq.map((item, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="border border-border bg-surface p-6">
                  <h4 className="font-inter text-sm font-500 text-[var(--accent)] mb-3">{item.q}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.a}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-inter text-4xl md:text-5xl font-700 uppercase mb-4">Нужно фрезерование?</h2>
          <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
            Отправьте чертёж или 3D-модель. Расчёт — бесплатно, ответ — в день обращения.
          </p>
          <ContactButton href="/contacts" variant="primary" className="px-10 py-4 text-base">
            Отправить чертёж →
          </ContactButton>
        </div>
      </section>
    </PageWrapper>
  );
}
