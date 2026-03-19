import { FadeIn } from "@/components/common/FadeIn";
import { customData } from "@/data/services/custom";
import { PageHero } from "@/components/common/PageHero";
import { SectionHeader } from "@/components/common/SectionHeader";
import { ContactButton } from "@/components/common/ContactButton";
import { Container } from "@/components/layout/Container";
import { PageWrapper } from "@/components/layout/PageWrapper";

export function CustomScreen() {
  return (
    <PageWrapper>
      <PageHero
        eyebrow={customData.hero.eyebrow}
        title={customData.hero.title}
        subtitle={customData.hero.subtitle}
      />

      {/* Process steps */}
      <section className="py-20">
        <Container>
          <SectionHeader
            index="01"
            eyebrow="Как это работает"
            title="Процесс работы"
            subtitle="Прозрачный и предсказуемый процесс от заявки до доставки готовой детали."
          />
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-[var(--accent)] via-[rgba(var(--accent-rgb),0.3)] to-transparent hidden lg:block" />
            <div className="space-y-6">
              {customData.process.map((step, i) => (
                <FadeIn key={step.step} delay={i * 0.1} direction="left">
                  <div className="flex gap-8 items-start">
                    <div className="shrink-0 w-16 h-16 border border-[var(--accent)] flex items-center justify-center bg-surface relative z-10">
                      <span className="font-mono-tech text-lg text-[var(--accent)] font-500">{step.step}</span>
                    </div>
                    <div className="flex-1 border border-border bg-surface p-6 hover:border-[rgba(var(--accent-rgb),0.4)] transition-all">
                      <h3 className="font-inter text-xl font-700 uppercase tracking-wide text-foreground mb-2">
                        {step.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* File formats */}
      <section className="py-20 bg-surface/30 border-y border-border">
        <Container>
          <SectionHeader index="02" eyebrow="Форматы" title="Принимаемые форматы" />
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {customData.formats.map((fmt, i) => (
              <FadeIn key={fmt.name} delay={i * 0.1}>
                <div className="border border-border bg-surface p-6 text-center hover:border-[rgba(var(--accent-rgb),0.4)] transition-all group h-full">
                  <div className="font-mono-tech text-sm text-[var(--accent)] mb-2 group-hover:scale-110 transition-transform inline-block">
                    {fmt.name}
                  </div>
                  <p className="text-sm text-muted-foreground">{fmt.description}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>

      {/* Advantages */}
      <section className="py-20">
        <Container>
          <SectionHeader index="03" eyebrow="Преимущества" title="Почему выбирают нас" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {customData.advantages.map((adv, i) => (
              <FadeIn key={adv.title} delay={i * 0.08}>
                <div className="group relative border border-border bg-surface p-6 hover:border-[rgba(var(--accent-rgb),0.4)] transition-all h-full">
                  <span className="absolute top-2 left-2 w-2.5 h-2.5 border-t border-l border-[var(--accent)] opacity-0 group-hover:opacity-100 transition-opacity" />
                  <h3 className="font-inter text-sm font-500 text-foreground mb-2 group-hover:text-[var(--accent)] transition-colors">
                    {adv.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{adv.description}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>

      {/* Industries */}
      <section className="py-20 bg-surface/30 border-y border-border">
        <Container>
          <SectionHeader index="04" eyebrow="Клиенты" title="Обслуживаемые отрасли" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {customData.industries.map((ind, i) => (
              <FadeIn key={ind.name} delay={i * 0.07}>
                <div className="flex gap-4 items-start border border-border bg-surface p-5 h-full">
                  <span className="w-1 h-full min-h-[2rem] bg-[var(--accent)] shrink-0 self-stretch" />
                  <div>
                    <h4 className="font-inter text-sm font-500 text-foreground mb-1">{ind.name}</h4>
                    <p className="text-sm text-muted-foreground">{ind.description}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-24 border-t border-border">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-inter text-3xl sm:text-4xl md:text-6xl font-700 uppercase mb-4">{customData.cta.title}</h2>
          <p className="text-muted-foreground text-lg mb-10">{customData.cta.subtitle}</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <ContactButton href={`mailto:${customData.cta.email}`} variant="primary" className="px-10 py-4 text-base" external>
              Написать на email
            </ContactButton>
            <ContactButton href={customData.cta.telegram} variant="outline" className="px-10 py-4 text-base" external>
              Написать в Telegram
            </ContactButton>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}
