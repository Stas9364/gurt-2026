import { FadeIn } from "@/components/common/FadeIn";
import { materialsData } from "@/data/services/materials";
import { PageHero } from "@/components/common/PageHero";
import { SectionHeader } from "@/components/common/SectionHeader";
import { TechSpec } from "@/components/common/TechSpec";
import { ContactButton } from "@/components/common/ContactButton";
import { PageWrapper } from "@/components/layout/PageWrapper";

export function MaterialsScreen() {
  return (
    <PageWrapper>
      <PageHero
        eyebrow={materialsData.hero.eyebrow}
        title={materialsData.hero.title}
        subtitle={materialsData.hero.subtitle}
      />

      {/* Materials grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader index="01" eyebrow="Виды металлов" title="Обрабатываемые материалы" />
          <div className="space-y-6">
            {materialsData.materials.map((mat, i) => (
              <FadeIn key={mat.id} delay={i * 0.08}>
                <div className="group border border-border bg-surface hover:border-[rgba(var(--accent-rgb),0.4)] transition-all overflow-hidden">
                  <div className="grid grid-cols-1 lg:grid-cols-3">
                    <div className="p-8 border-b lg:border-b-0 lg:border-r border-border">
                      <div className="text-4xl mb-3 font-mono-tech">{mat.icon}</div>
                      <h3 className="font-inter text-2xl font-700 uppercase tracking-wide text-foreground mb-4 group-hover:text-[var(--accent)] transition-colors">
                        {mat.name}
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {mat.grades.map((grade) => (
                          <span key={grade} className="font-mono-tech text-sm px-2 py-1 border border-border text-muted-foreground">
                            {grade}
                          </span>
                        ))}
                      </div>
                      <div className="mt-4 font-mono-tech text-sm text-muted-foreground">Твёрдость: {mat.hardness}</div>
                    </div>
                    <div className="p-8 border-b lg:border-b-0 lg:border-r border-border">
                      <p className="font-mono-tech text-sm text-[var(--accent)] tracking-widest uppercase mb-2">Применение</p>
                      <p className="text-sm text-muted-foreground leading-relaxed mb-4">{mat.applications}</p>
                      <div className="border-l-2 border-[var(--accent)] pl-4">
                        <p className="text-sm text-muted-foreground italic">{mat.note}</p>
                      </div>
                    </div>
                    <div className="p-8">
                      <TechSpec title="Свойства" items={mat.properties.map((p) => ({ label: p.label, value: p.value }))} />
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Note about customer material */}
      <section className="py-16 bg-surface/30 border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-6 items-start border border-[rgba(var(--accent-rgb),0.3)] bg-[rgba(var(--accent-rgb),0.05)] p-8">
            <div className="shrink-0 w-10 h-10 border border-[var(--accent)] flex items-center justify-center text-[var(--accent)]">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10" />
                <path d="M12 8v4M12 16h.01" />
              </svg>
            </div>
            <div>
              <h3 className="font-inter text-xl font-700 uppercase text-foreground mb-2">{materialsData.note.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{materialsData.note.text}</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-inter text-4xl md:text-5xl font-700 uppercase mb-4">
            Нужна обработка вашего материала?
          </h2>
          <p className="text-muted-foreground mb-8">Свяжитесь с нами — уточним возможности и рассчитаем стоимость.</p>
          <ContactButton href="/contacts" variant="primary" className="px-10 py-4 text-base">
            Получить расчёт →
          </ContactButton>
        </div>
      </section>
    </PageWrapper>
  );
}
