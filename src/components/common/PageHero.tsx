import { cn } from "@/lib/utils";
import { Container } from "@/components/layout/Container";

interface PageHeroProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  className?: string;
  children?: React.ReactNode;
}

export function PageHero({ eyebrow, title, subtitle, className, children }: PageHeroProps) {
  return (
    <section
      className={cn(
        "relative pt-20 pb-16 overflow-hidden border-b border-border",
        className
      )}
    >
      {/* Grid background */}
      <div className="grid-bg absolute inset-0 opacity-60" />

      {/* Radial gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_50%,rgba(var(--accent-rgb),0.06)_0%,transparent_60%)]" />

      <Container className="relative">
        {eyebrow && (
          <div className="flex items-center gap-3 mb-4">
            <span className="w-10 h-px bg-[var(--accent)]" />
            <span className="font-mono-tech text-sm text-[var(--accent)] tracking-[0.25em] uppercase">
              {eyebrow}
            </span>
          </div>
        )}
        <h1 className="font-inter text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-700 uppercase tracking-tight leading-tight text-foreground mb-4">
          {title}
        </h1>
        {subtitle && (
          <p className="max-w-2xl text-muted-foreground text-base md:text-lg leading-relaxed">
            {subtitle}
          </p>
        )}
        {children}
      </Container>
    </section>
  );
}
