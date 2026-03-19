import { FadeIn } from "@/components/common/FadeIn";
import { aboutData } from "@/data/about";
import { PageHero } from "@/components/common/PageHero";
import { SectionHeader } from "@/components/common/SectionHeader";
import { ContactButton } from "@/components/common/ContactButton";
import { PageWrapper } from "@/components/layout/PageWrapper";

export function AboutScreen() {
  return (
    <PageWrapper>
      <PageHero
        eyebrow={aboutData.hero.eyebrow}
        title={aboutData.hero.title}
        subtitle={aboutData.hero.subtitle}
      />

      {/* Story */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <SectionHeader index="01" eyebrow="История" title={aboutData.story.title} />
              <div className="space-y-5">
                {aboutData.story.paragraphs.map((para, i) => (
                  <FadeIn key={i} delay={i * 0.1}>
                    <p className="text-sm text-muted-foreground leading-relaxed">{para}</p>
                  </FadeIn>
                ))}
              </div>
            </div>

            {/* Timeline */}
            <div>
              <SectionHeader index="02" eyebrow="Хронология" title="Вехи развития" />
              <div className="relative">
                <div className="absolute left-12 top-0 bottom-0 w-px bg-gradient-to-b from-[var(--accent)] via-[rgba(var(--accent-rgb),0.3)] to-transparent" />
                <div className="space-y-4">
                  {aboutData.timeline.map((item, i) => (
                    <FadeIn key={item.year} delay={i * 0.07} direction="right">
                      <div className="flex gap-6 items-start">
                        <div className="shrink-0 w-24 text-right">
                          <span className="font-mono-tech text-sm text-[var(--accent)] font-500">{item.year}</span>
                        </div>
                        <div className="relative shrink-0 w-2 h-2 mt-1.5 bg-[var(--accent)] rounded-full z-10" />
                        <p className="text-sm text-muted-foreground leading-relaxed flex-1">{item.event}</p>
                      </div>
                    </FadeIn>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-surface/30 border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader index="03" eyebrow="Принципы" title="Наши ценности" centered />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {aboutData.values.map((value, i) => (
              <FadeIn key={value.title} delay={i * 0.1}>
                <div className="group border border-border bg-surface p-8 text-center hover:border-[rgba(var(--accent-rgb),0.4)] transition-all h-full">
                  <div className="font-inter text-4xl font-700 text-[rgba(var(--accent-rgb),0.15)] mb-3 group-hover:text-[rgba(var(--accent-rgb),0.3)] transition-colors">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <h3 className="font-inter text-xl font-700 uppercase text-foreground mb-2 group-hover:text-[var(--accent)] transition-colors">
                    {value.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{value.description}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader index="04" eyebrow="Люди" title={aboutData.team.title} subtitle={aboutData.team.subtitle} />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {aboutData.team.roles.map((role, i) => (
              <FadeIn key={role.title} delay={i * 0.08}>
                <div className="border border-border bg-surface p-6 flex gap-5 items-start h-full">
                  <div className="shrink-0 w-12 h-12 border border-[var(--accent)] flex items-center justify-center">
                    <span className="font-inter text-xl font-700 text-[var(--accent)]">{role.count}</span>
                  </div>
                  <div>
                    <h4 className="font-inter text-sm font-500 text-foreground mb-1">{role.title}</h4>
                    <p className="text-sm text-muted-foreground">{role.description}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* University partnership */}
      <section className="py-20 bg-surface/30 border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <SectionHeader index="05" eyebrow="Партнёрство" title={aboutData.university.title} />
            <div>
              <p className="text-sm text-muted-foreground leading-relaxed mb-6">{aboutData.university.description}</p>
              <ul className="space-y-3">
                {aboutData.university.benefits.map((benefit, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-foreground">
                    <span className="w-1.5 h-1.5 bg-[var(--accent)] shrink-0 mt-1.5" />
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Licenses */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader index="06" eyebrow="Документы" title="Лицензии и сертификаты" />
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {aboutData.licenses.map((lic, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="border border-border bg-surface p-6 h-full">
                  <div className="w-8 h-8 border border-[var(--accent)] flex items-center justify-center text-[var(--accent)] mb-4">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                      <polyline points="14 2 14 8 20 8" />
                      <line x1="9" y1="15" x2="15" y2="15" />
                    </svg>
                  </div>
                  <h4 className="text-sm font-500 text-foreground mb-2">{lic.name}</h4>
                  {"number" in lic && lic.number && (
                    <p className="font-mono-tech text-sm text-[var(--accent)]">№ {lic.number}</p>
                  )}
                  {"issuer" in lic && lic.issuer && (
                    <p className="text-sm text-muted-foreground">{lic.issuer}</p>
                  )}
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-inter text-4xl md:text-5xl font-700 uppercase mb-4">Готовы к сотрудничеству</h2>
          <p className="text-muted-foreground mb-8">30 лет на рынке — обращайтесь.</p>
          <ContactButton href="/contacts" variant="primary" className="px-10 py-4 text-base">
            Связаться с нами →
          </ContactButton>
        </div>
      </section>
    </PageWrapper>
  );
}
