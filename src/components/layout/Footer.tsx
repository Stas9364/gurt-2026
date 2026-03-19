import Link from "next/link";
import { Container } from "@/components/layout/Container";

const serviceLinks = [
  { label: "Токарные работы", href: "/services/turning" },
  { label: "Фрезерные работы", href: "/services/milling" },
  { label: "По чертежам заказчика", href: "/services/custom" },
  { label: "Материалы", href: "/services/materials" },
];

const companyLinks = [
  { label: "О компании", href: "/about" },
  { label: "Парк оборудования", href: "/equipment" },
  { label: "Портфолио", href: "/portfolio" },
  { label: "Контакты", href: "/contacts" },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-[var(--bg-secondary)]">
      <Container className="py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-flex items-center gap-3 mb-5">
              <div className="relative w-9 h-9 flex items-center justify-center border border-[var(--accent)]">
                <span className="font-inter font-700 text-base text-[var(--accent)]">Г</span>
              </div>
              <div>
                <div className="font-inter text-xl font-700 tracking-widest text-foreground">
                  ГУРТ
                </div>
                <div className="font-mono-tech text-sm text-[var(--accent)] tracking-[0.2em]">
                  МЕХАНООБРАБОТКА
                </div>
              </div>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed mb-5">
              Точная механическая обработка металлов. Работаем с 1994 года. Партнёр БРУ.
            </p>
            <div className="space-y-1">
              <p className="font-mono-tech text-sm text-[var(--accent)]">УНП: 490291234</p>
              <p className="font-mono-tech text-sm text-muted-foreground">
                г. Могилёв, ул. Промышленная, 15
              </p>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-mono-tech text-sm text-[var(--accent)] tracking-[0.2em] uppercase mb-4">
              Услуги
            </h4>
            <ul className="space-y-2">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-[var(--accent)] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-mono-tech text-sm text-[var(--accent)] tracking-[0.2em] uppercase mb-4">
              Компания
            </h4>
            <ul className="space-y-2">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-[var(--accent)] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacts */}
          <div>
            <h4 className="font-mono-tech text-sm text-[var(--accent)] tracking-[0.2em] uppercase mb-4">
              Контакты
            </h4>
            <div className="space-y-3">
              <div>
                <p className="text-sm text-muted-foreground mb-0.5">Телефон</p>
                <a
                  href="tel:+375291234567"
                  className="font-mono-tech text-sm text-foreground hover:text-[var(--accent)] transition-colors"
                >
                  +375 (29) 123-45-67
                </a>
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-0.5">Email</p>
                <a
                  href="mailto:info@gurt-machining.by"
                  className="text-sm text-foreground hover:text-[var(--accent)] transition-colors"
                >
                  info@gurt-machining.by
                </a>
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-0.5">Время работы</p>
                <p className="font-mono-tech text-sm text-foreground">
                  Пн–Пт: 08:00–17:00
                </p>
              </div>
              <div className="flex gap-3 pt-2">
                <a
                  href="https://t.me/gurt_by"
                  className="w-8 h-8 flex items-center justify-center border border-border hover:border-[var(--accent)] hover:text-[var(--accent)] text-muted-foreground transition-colors"
                  aria-label="Telegram"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.248l-2.032 9.562c-.148.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12L7.258 14.4l-2.952-.924c-.64-.2-.652-.64.136-.948l11.54-4.449c.536-.194 1.003.13.58 2.169z" />
                  </svg>
                </a>
                <a
                  href="viber://chat?number=%2B375291234567"
                  className="w-8 h-8 flex items-center justify-center border border-border hover:border-[var(--accent)] hover:text-[var(--accent)] text-muted-foreground transition-colors"
                  aria-label="Viber"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M11.399.002C9.562.035 5.17.34 2.936 2.369 1.241 4.057.663 6.523.599 9.585c-.064 3.063-.14 8.802 5.396 10.395h.005l-.005 2.386s-.038.981.609 1.179c.779.24 1.237-.499 1.981-1.298.409-.441.972-1.088 1.397-1.576 3.849.323 6.809-.415 7.144-.522.778-.252 5.18-.815 5.895-6.645.737-6.01-.357-9.81-2.322-11.524-.519-.466-2.608-1.975-8.3-1.978zm.055 1.694h.024c4.967.003 7.573 1.26 8.012 1.666 1.674 1.456 2.602 4.89 1.955 10.032-.608 4.965-4.181 5.265-4.837 5.477-.276.09-2.959.753-6.323.538 0 0-2.509 3.021-3.291 3.803-.125.126-.272.178-.374.153-.145-.036-.184-.211-.182-.464l.022-3.812c-4.699-1.307-4.42-6.211-4.365-8.936.055-2.724.533-4.815 1.99-6.199 1.871-1.698 5.741-1.947 7.369-1.258zm-.16 2.84c-.245.002-.395.188-.393.434.004.246.193.441.44.437.247-.004.444-.201.437-.447-.006-.247-.238-.426-.484-.424zm-2.77.528c-.063-.003-.126.01-.186.04-.59.293-.947.72-1.064 1.217-.116.496.013 1.015.298 1.426.592.843 1.25 1.652 1.96 2.412.71.76 1.437 1.442 2.219 2.063.438.346.972.45 1.474.315.501-.136.942-.5 1.229-1.044.116-.219.106-.46-.008-.626-.113-.166-.31-.245-.525-.196-.343.08-.591.336-.788.546-.196.21-.347.352-.55.352-.203 0-.476-.185-.751-.406-.66-.527-1.286-1.114-1.88-1.752-.594-.638-1.14-1.312-1.677-2.007-.187-.243-.258-.564-.146-.807.11-.24.371-.43.648-.548.274-.118.451-.341.41-.574-.04-.234-.252-.41-.463-.411z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} ГУРТ. Все права защищены.
          </p>
          <p className="font-mono-tech text-sm text-muted-foreground">
            ISO 9001 / Допуски до 0.01 мм / Беларусь — Россия
          </p>
        </div>
      </Container>
    </footer>
  );
}
