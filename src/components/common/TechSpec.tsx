import { cn } from "@/lib/utils";

interface TechSpecItem {
  label: string;
  value: string;
  highlight?: boolean;
}

interface TechSpecProps {
  items: TechSpecItem[];
  title?: string;
  className?: string;
}

export function TechSpec({ items, title, className }: TechSpecProps) {
  return (
    <div className={cn("border border-border bg-surface p-5", className)}>
      {title && (
        <h4 className="font-mono-tech text-sm text-[var(--accent)] tracking-[0.2em] uppercase mb-4 pb-3 border-b border-border">
          {title}
        </h4>
      )}
      <div className="space-y-2">
        {items.map((item, i) => (
          <div
            key={i}
            className={cn(
              "flex items-baseline justify-between gap-3 py-1.5",
              i < items.length - 1 && "border-b border-border/50"
            )}
          >
            <span className="text-sm text-muted-foreground">{item.label}</span>
            <span
              className={cn(
                "font-mono-tech text-sm shrink-0",
                item.highlight ? "text-[var(--accent)]" : "text-foreground"
              )}
            >
              {item.value}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
