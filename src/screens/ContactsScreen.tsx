"use client";

import { m } from "framer-motion";
import { contactsData } from "@/data/contacts";
import { PageHero } from "@/components/common/PageHero";
import { SectionHeader } from "@/components/common/SectionHeader";
import { Container } from "@/components/layout/Container";
import { PageWrapper } from "@/components/layout/PageWrapper";

const contactIcons: Record<string, React.ReactNode> = {
  phone: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13.1a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.6a16 16 0 0 0 6.15 6.15l.96-.96a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  ),
  phone2: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13.1a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.6a16 16 0 0 0 6.15 6.15l.96-.96a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  ),
  email: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  ),
  telegram: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.248l-2.032 9.562c-.148.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12L7.258 14.4l-2.952-.924c-.64-.2-.652-.64.136-.948l11.54-4.449c.536-.194 1.003.13.58 2.169z" />
    </svg>
  ),
  viber: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M11.399.002C9.562.035 5.17.34 2.936 2.369 1.241 4.057.663 6.523.599 9.585c-.064 3.063-.14 8.802 5.396 10.395h.005l-.005 2.386s-.038.981.609 1.179c.779.24 1.237-.499 1.981-1.298.409-.441.972-1.088 1.397-1.576 3.849.323 6.809-.415 7.144-.522.778-.252 5.18-.815 5.895-6.645.737-6.01-.357-9.81-2.322-11.524-.519-.466-2.608-1.975-8.3-1.978z" />
    </svg>
  ),
};

export function ContactsScreen() {
  return (
    <PageWrapper>
      <PageHero
        eyebrow={contactsData.hero.eyebrow}
        title={contactsData.hero.title}
        subtitle={contactsData.hero.subtitle}
      />

      <section className="py-20">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact info */}
            <div>
              <SectionHeader index="01" eyebrow="Контакты" title="Связаться с нами" />

              {/* Company info */}
              <div className="border border-border bg-surface p-6 mb-6">
                <h3 className="font-inter text-xl font-700 uppercase text-foreground mb-4">
                  {contactsData.company.name}
                </h3>
                <div className="space-y-2">
                  <div className="flex gap-3 items-start">
                    <span className="font-mono-tech text-sm text-muted-foreground w-16 pt-0.5 shrink-0">
                      УНП
                    </span>
                    <span className="font-mono-tech text-sm text-foreground">
                      {contactsData.company.unp}
                    </span>
                  </div>
                  <div className="flex gap-3 items-start">
                    <span className="font-mono-tech text-sm text-muted-foreground w-16 pt-0.5 shrink-0">
                      АДРЕС
                    </span>
                    <span className="text-sm text-foreground leading-relaxed">
                      {contactsData.company.address}
                    </span>
                  </div>
                  <div className="flex gap-3 items-start">
                    <span className="font-mono-tech text-sm text-muted-foreground w-16 pt-0.5 shrink-0">
                      ЧАСЫ
                    </span>
                    <span className="font-mono-tech text-sm text-foreground">
                      {contactsData.company.workingHours}
                    </span>
                  </div>
                </div>
              </div>

              {/* Contact list */}
              <div className="space-y-3">
                {contactsData.contacts.map((contact, i) => (
                  <m.a
                    key={contact.type}
                    href={contact.href}
                    initial={{ opacity: 0, x: -16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08, duration: 0.4 }}
                    target={contact.type === "telegram" ? "_blank" : undefined}
                    rel={contact.type === "telegram" ? "noopener noreferrer" : undefined}
                    className="flex items-center gap-4 p-4 border border-border bg-surface hover:border-[rgba(var(--accent-rgb),0.4)] hover:bg-surface-elevated transition-all group"
                  >
                    <div className="w-8 h-8 flex items-center justify-center text-muted-foreground group-hover:text-[var(--accent)] transition-colors border border-border shrink-0">
                      {contactIcons[contact.type]}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-mono-tech text-sm text-muted-foreground uppercase tracking-widest">
                        {contact.label}
                      </p>
                      <p className="font-inter text-sm text-foreground group-hover:text-[var(--accent)] transition-colors truncate">
                        {contact.value}
                      </p>
                    </div>
                    <span className="text-sm text-muted-foreground shrink-0">{contact.note}</span>
                  </m.a>
                ))}
              </div>

              {/* How to get there */}
              <div className="mt-8">
                <h4 className="font-mono-tech text-sm text-[var(--accent)] tracking-widest uppercase mb-4">
                  Как добраться
                </h4>
                <ul className="space-y-3">
                  {contactsData.directions.map((dir, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                      <span className="font-mono-tech text-sm text-[var(--accent)] shrink-0 mt-0.5">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      {dir}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Form */}
            <div>
              <SectionHeader index="02" eyebrow="Заявка" title={contactsData.form.title} subtitle={contactsData.form.subtitle} />

              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                {contactsData.form.fields.map((field) => (
                  <div key={field.name}>
                    <label className="block font-mono-tech text-sm text-muted-foreground tracking-widest uppercase mb-2">
                      {field.label}
                      {field.required && <span className="text-[var(--accent)] ml-1">*</span>}
                    </label>
                    {field.type === "textarea" ? (
                      <textarea
                        name={field.name}
                        required={field.required}
                        rows={5}
                        className="w-full bg-surface border border-border px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-[var(--accent)] transition-colors resize-none"
                        placeholder={`Введите ${field.label.toLowerCase()}...`}
                      />
                    ) : (
                      <input
                        type={field.type}
                        name={field.name}
                        required={field.required}
                        className="w-full bg-surface border border-border px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-[var(--accent)] transition-colors"
                        placeholder={`Введите ${field.label.toLowerCase()}...`}
                      />
                    )}
                  </div>
                ))}

                <p className="font-mono-tech text-sm text-muted-foreground">
                  {contactsData.form.note}
                </p>

                <button
                  type="submit"
                  className="w-full bg-[var(--accent)] text-white py-4 font-inter text-sm font-600 hover:bg-[var(--accent-hover)] transition-colors"
                >
                  {contactsData.form.submitButton}
                </button>
              </form>
            </div>
          </div>
        </Container>
      </section>

      {/* Map placeholder */}
      <section className="border-t border-border">
        <div className="h-72 bg-[var(--bg-secondary)] relative overflow-hidden flex items-center justify-center">
          <div className="grid-bg absolute inset-0 opacity-40" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_50%,rgba(var(--accent-rgb),0.06)_0%,transparent_60%)]" />
          <div className="relative text-center">
            <div className="font-inter text-3xl md:text-5xl font-700 text-[rgba(var(--accent-rgb),0.1)] mb-2">
              МОГИЛЁВ
            </div>
            <div className="font-mono-tech text-sm text-muted-foreground tracking-widest mb-4">
              {contactsData.company.addressShort}
            </div>
            <a
              href={`https://maps.google.com/?q=${contactsData.map.lat},${contactsData.map.lng}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-2.5 border border-[var(--accent)] text-[var(--accent)] font-mono-tech text-sm tracking-widest hover:bg-[rgba(var(--accent-rgb),0.1)] transition-colors"
            >
              ОТКРЫТЬ В GOOGLE MAPS →
            </a>
          </div>

          {/* Dot */}
          <div className="absolute top-1/2 left-[40%] w-3 h-3 -translate-x-1/2 -translate-y-1/2">
            <div className="w-3 h-3 bg-[var(--accent)] rounded-full animate-pulse" />
            <div className="absolute inset-0 w-3 h-3 bg-[var(--accent)] rounded-full animate-ping opacity-40" />
          </div>
        </div>
      </section>

      {/* Requisites */}
      <section className="py-16 border-t border-border bg-surface/30">
        <Container>
          <h3 className="font-mono-tech text-sm text-[var(--accent)] tracking-widest uppercase mb-6">
            Банковские реквизиты
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="border border-border bg-surface p-5">
              <p className="font-mono-tech text-sm text-muted-foreground mb-1">БАНК</p>
              <p className="text-sm text-foreground">{contactsData.company.bankDetails.bank}</p>
            </div>
            <div className="border border-border bg-surface p-5">
              <p className="font-mono-tech text-sm text-muted-foreground mb-1">РАСЧЁТНЫЙ СЧЁТ</p>
              <p className="font-mono-tech text-sm text-foreground break-all">
                {contactsData.company.bankDetails.account}
              </p>
            </div>
            <div className="border border-border bg-surface p-5">
              <p className="font-mono-tech text-sm text-muted-foreground mb-1">БИК / SWIFT</p>
              <p className="font-mono-tech text-sm text-foreground">
                {contactsData.company.bankDetails.bic}
              </p>
            </div>
          </div>
        </Container>
      </section>
    </PageWrapper>
  );
}
