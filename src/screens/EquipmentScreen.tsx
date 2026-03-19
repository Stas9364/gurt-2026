import { FadeIn } from "@/components/common/FadeIn";
import { equipmentData } from "@/data/equipment";
import { PageHero } from "@/components/common/PageHero";
import { SectionHeader } from "@/components/common/SectionHeader";
import { EquipmentCard } from "@/components/common/EquipmentCard";
import { ContactButton } from "@/components/common/ContactButton";
import { PageWrapper } from "@/components/layout/PageWrapper";

export function EquipmentScreen() {
  return (
    <PageWrapper>
      <PageHero
        eyebrow={equipmentData.hero.eyebrow}
        title={equipmentData.hero.title}
        subtitle={equipmentData.hero.subtitle}
      />

      {/* Stats bar */}
      <div className="border-b border-border bg-surface/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {equipmentData.stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="font-inter text-3xl font-700 text-gradient-blue">
                  {stat.value}
                  {"unit" in stat && stat.unit && (
                    <span className="text-lg font-400 ml-1 text-[var(--accent)]">{stat.unit}</span>
                  )}
                </div>
                <div className="font-mono-tech text-sm text-muted-foreground mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Equipment by category */}
      {equipmentData.categories.map((category, catIdx) => (
        <section
          key={category.id}
          className={`py-20 ${catIdx % 2 === 1 ? "bg-surface/20 border-y border-border" : ""}`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader
              index={`0${catIdx + 1}`}
              eyebrow="Оборудование"
              title={category.name}
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 items-stretch">
              {category.items.map((item, i) => (
                <FadeIn key={item.model} delay={i * 0.1} className="h-full">
                  <EquipmentCard
                    model={item.model}
                    type={item.type}
                    manufacturer={item.manufacturer}
                    specs={[...item.specs]}
                    cnc={item.cnc}
                    className="h-full"
                  />
                </FadeIn>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="py-20 border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="font-mono-tech text-sm text-[var(--accent)] tracking-widest">ПОДХОДИТ ПОД ВАШУ ЗАДАЧУ?</span>
              <h2 className="font-inter text-4xl md:text-5xl font-700 uppercase mt-2 mb-4">
                Уточните габариты деталей
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Снабженцы крупных заводов часто ищут подрядчика под конкретные размеры деталей. Если ваши детали укладываются в возможности нашего оборудования — пишите, мы готовы взяться.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <ContactButton href="/contacts" variant="primary" className="flex-1 justify-center py-4 text-base">
                Обсудить заказ
              </ContactButton>
              <ContactButton href="/services/custom" variant="outline" className="flex-1 justify-center py-4 text-base">
                По чертежам →
              </ContactButton>
            </div>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}
