import { cn } from "@/lib/utils";

interface StatCardProps {
  value: string;
  unit?: string;
  label: string;
  description?: string;
  className?: string;
}

export function StatCard({ value, unit, label, description, className }: StatCardProps) {
  return (
    <div
      className={cn(
        "relative p-6 border border-border bg-surface group hover:border-[rgba(var(--accent-rgb),0.4)] transition-all duration-300",
        className
      )}
    >
      {/* Corner marks */}
      <span className="absolute top-2 left-2 w-2.5 h-2.5 border-t border-l border-[var(--accent)] opacity-40 group-hover:opacity-100 transition-opacity" />
      <span className="absolute bottom-2 right-2 w-2.5 h-2.5 border-b border-r border-[var(--accent)] opacity-40 group-hover:opacity-100 transition-opacity" />

      <div className="flex items-end gap-1 mb-1">
        <span className="font-inter text-3xl md:text-4xl lg:text-5xl font-700 text-gradient-blue leading-none">
          {value}
        </span>
        {unit && (
          <span className="font-mono-tech text-base md:text-lg text-[var(--accent)] mb-1">{unit}</span>
        )}
      </div>
      <p className="font-inter text-sm font-500 text-foreground">{label}</p>
      {description && (
        <p className="mt-1 font-mono-tech text-sm text-muted-foreground">{description}</p>
      )}
    </div>
  );
}
