import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  index?: string;
  eyebrow?: string;
  title: string;
  subtitle?: string;
  className?: string;
  centered?: boolean;
}

export function SectionHeader({
  index,
  eyebrow,
  title,
  subtitle,
  className,
  centered = false,
}: SectionHeaderProps) {
  return (
    <div className={cn("mb-12", centered && "text-center", className)}>
      <div className={cn("flex items-center gap-4 mb-3", centered && "justify-center")}>
        {index && (
          <span className="font-mono-tech text-sm text-[var(--accent)] tracking-[0.25em] opacity-70">
            {index}
          </span>
        )}
        {eyebrow && (
          <>
            {index && <span className="w-8 h-px bg-[var(--accent)] opacity-40" />}
            <span className="font-mono-tech text-sm text-[var(--accent)] tracking-[0.2em] uppercase">
              {eyebrow}
            </span>
          </>
        )}
        {!eyebrow && !index && null}
      </div>
      <h2
        className={cn(
          "font-inter text-3xl sm:text-4xl md:text-5xl font-700 text-foreground leading-tight uppercase tracking-tight"
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-muted-foreground max-w-2xl text-base leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
