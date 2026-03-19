"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Container } from "@/components/layout/Container";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Главная", href: "/" },
  {
    label: "Услуги",
    href: "/services/turning",
    children: [
      { label: "Токарные работы", href: "/services/turning" },
      { label: "Фрезерные работы", href: "/services/milling" },
      { label: "По чертежам заказчика", href: "/services/custom" },
      { label: "Материалы", href: "/services/materials" },
    ],
  },
  { label: "Оборудование", href: "/equipment" },
  { label: "Портфолио", href: "/portfolio" },
  { label: "О компании", href: "/about" },
  { label: "Контакты", href: "/contacts" },
];

export function Header() {
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/90 backdrop-blur-sm">
      <Container>
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-8 h-8 flex items-center justify-center">
              <div className="absolute inset-0 border border-[var(--accent)] group-hover:scale-110 transition-transform" />
              <span className="font-inter font-700 text-sm text-[var(--accent)] leading-none">Г</span>
            </div>
            <div className="flex flex-col">
              <span className="font-inter text-lg font-700 text-foreground leading-none tracking-widest">
                ГУРТ
              </span>
              <span className="font-mono-tech text-sm text-[var(--accent)] tracking-[0.2em] leading-none mt-0.5">
                МЕХАНООБРАБОТКА
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => {
              if (item.children) {
                return (
                  <div key={item.href} className="relative group">
                    <button
                      className={cn(
                        "px-3 py-2 text-sm font-inter transition-colors",
                        pathname.startsWith("/services")
                          ? "text-[var(--accent)]"
                          : "text-muted-foreground hover:text-foreground"
                      )}
                    >
                      {item.label}
                      <span className="ml-1 opacity-50">▾</span>
                    </button>

                    {/* dropdown — скрыт, появляется при hover на родителе */}
                    <div className="absolute top-full left-0 w-56 bg-surface border border-border py-1
                      opacity-0 invisible translate-y-1
                      group-hover:opacity-100 group-hover:visible group-hover:translate-y-0
                      transition-all duration-150 ease-out
                      shadow-lg shadow-black/30 z-50">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className={cn(
                            "block px-4 py-2.5 text-sm transition-colors",
                            pathname === child.href
                              ? "text-[var(--accent)] bg-[rgba(var(--accent-rgb),0.08)]"
                              : "text-muted-foreground hover:text-foreground hover:bg-[rgba(255,255,255,0.04)]"
                          )}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                );
              }

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "px-3 py-2 text-sm font-inter transition-colors",
                    pathname === item.href
                      ? "text-[var(--accent)]"
                      : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:+375291234567"
              className="font-mono-tech text-sm text-[var(--accent)] hover:text-[var(--accent-hover)] transition-colors"
            >
              +375 (29) 123-45-67
            </a>
            <Link
              href="/contacts"
              className="px-4 py-2 bg-[var(--accent)] text-white text-sm font-inter font-600 hover:bg-[var(--accent-hover)] transition-colors"
            >
              Заказать
            </Link>
          </div>

          {/* Mobile Menu */}
          <Sheet>
            <SheetTrigger className="lg:hidden p-2 text-muted-foreground hover:text-foreground">
              <div className="flex flex-col gap-1.5 w-5">
                <span className="block h-px bg-current" />
                <span className="block h-px bg-current w-3" />
                <span className="block h-px bg-current" />
              </div>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-72 bg-[var(--bg-main)] border-l border-border p-0"
            >
              <div className="flex flex-col h-full py-8 px-6">
                <Link href="/" className="flex items-center gap-3 mb-8">
                  <div className="relative w-8 h-8 flex items-center justify-center border border-[var(--accent)]">
                    <span className="font-inter font-700 text-sm text-[var(--accent)]">Г</span>
                  </div>
                  <span className="font-inter text-lg font-700 tracking-widest">ГУРТ</span>
                </Link>
                <nav className="flex flex-col gap-1">
                  {navItems.map((item) => {
                    if (item.children) {
                      return (
                        <div key={item.href}>
                          <span className="block px-3 py-2 text-sm font-mono-tech text-[var(--accent)] tracking-widest uppercase">
                            {item.label}
                          </span>
                          {item.children.map((child) => (
                            <Link
                              key={child.href}
                              href={child.href}
                              className={cn(
                                "block pl-6 pr-3 py-1.5 text-sm transition-colors",
                                pathname === child.href
                                  ? "text-[var(--accent)]"
                                  : "text-muted-foreground hover:text-foreground"
                              )}
                            >
                              {child.label}
                            </Link>
                          ))}
                        </div>
                      );
                    }
                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        className={cn(
                          "block px-3 py-2 text-sm transition-colors",
                          pathname === item.href
                            ? "text-[var(--accent)]"
                            : "text-muted-foreground hover:text-foreground"
                        )}
                      >
                        {item.label}
                      </Link>
                    );
                  })}
                </nav>
                <div className="mt-auto pt-8 border-t border-border">
                  <a
                    href="tel:+375291234567"
                    className="block font-mono-tech text-sm text-[var(--accent)] mb-3"
                  >
                    +375 (29) 123-45-67
                  </a>
                  <Link
                    href="/contacts"
                    className="block w-full text-center px-4 py-2.5 bg-[var(--accent)] text-white text-sm font-inter font-600"
                  >
                    Заказать
                  </Link>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </Container>

      {/* Bottom accent line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[rgba(var(--accent-rgb),0.3)] to-transparent" />
    </header>
  );
}
