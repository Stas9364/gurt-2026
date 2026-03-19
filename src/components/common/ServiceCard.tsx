import Link from "next/link";
import { cn } from "@/lib/utils";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  href: string;
  features?: string[];
  className?: string;
}

export function ServiceCard({
  icon,
  title,
  description,
  href,
  features,
  className,
}: ServiceCardProps) {
  return (
    <Link
      href={href}
      className={cn(
        "group relative flex flex-col p-6 border border-border bg-surface",
        "hover:border-[rgba(var(--accent-rgb),0.4)] hover:bg-surface-elevated transition-all duration-300",
        className
      )}
    >
      {/* Corner marks */}
      <span className="absolute top-2 left-2 w-3 h-3 border-t border-l border-[var(--accent)] opacity-0 group-hover:opacity-100 transition-opacity" />
      <span className="absolute bottom-2 right-2 w-3 h-3 border-b border-r border-[var(--accent)] opacity-0 group-hover:opacity-100 transition-opacity" />

      <div className="w-10 h-10 flex items-center justify-center text-[var(--accent)] mb-5 bg-[rgba(var(--accent-rgb),0.08)] border border-[rgba(var(--accent-rgb),0.2)]">
        {icon}
      </div>

      <h3 className="font-inter text-xl font-700 uppercase tracking-wide text-foreground mb-2 group-hover:text-[var(--accent)] transition-colors">
        {title}
      </h3>
      <p className="text-sm text-muted-foreground leading-relaxed flex-1">{description}</p>

      {features && features.length > 0 && (
        <ul className="mt-4 space-y-1.5">
          {features.map((f, i) => (
            <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
              <span className="w-1 h-1 bg-[var(--accent)] shrink-0" />
              {f}
            </li>
          ))}
        </ul>
      )}

      <div className="mt-5 flex items-center gap-2 text-sm font-mono-tech text-[var(--accent)] opacity-0 group-hover:opacity-100 transition-opacity">
        <span>ПОДРОБНЕЕ</span>
        <span>→</span>
      </div>
    </Link>
  );
}
