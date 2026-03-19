import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface EquipmentSpec {
  label: string;
  value: string;
}

interface EquipmentCardProps {
  model: string;
  type: string;
  manufacturer?: string;
  specs: EquipmentSpec[];
  image?: string;
  cnc?: boolean;
  className?: string;
}

export function EquipmentCard({
  model,
  type,
  manufacturer,
  specs,
  cnc = false,
  className,
}: EquipmentCardProps) {
  return (
    <div
      className={cn(
        "group relative border border-border bg-surface hover:border-[rgba(var(--accent-rgb),0.4)] transition-all duration-300 flex flex-col h-full",
        className
      )}
    >
      {/* Image placeholder */}
      <div className="relative h-44 bg-[var(--bg-deep)] overflow-hidden flex items-center justify-center border-b border-border">
        <div className="grid-bg-fine absolute inset-0 opacity-60" />
        <div className="relative text-center">
          <div className="font-inter text-5xl font-700 text-[rgba(var(--accent-rgb),0.08)] leading-none mb-1">
            {type.toUpperCase().slice(0, 3)}
          </div>
          <div className="font-mono-tech text-sm text-muted-foreground tracking-widest">
            [ФОТО СКОРО]
          </div>
        </div>
        {cnc && (
          <Badge className="absolute top-3 right-3 bg-[var(--accent)] text-white text-sm font-mono-tech tracking-widest px-2 py-0.5 rounded-none">
            ЧПУ
          </Badge>
        )}
      </div>

      <div className="p-5 flex flex-col flex-1">
        <div className="mb-4">
          <p className="font-mono-tech text-sm text-muted-foreground tracking-widest uppercase mb-1">
            {manufacturer || type}
          </p>
          <h3 className="font-inter text-xl font-700 uppercase tracking-wide text-foreground group-hover:text-[var(--accent)] transition-colors">
            {model}
          </h3>
        </div>

        <div className="space-y-2 mt-auto">
          {specs.map((spec, i) => (
            <div key={i} className="flex items-start justify-between gap-3">
              <span className="text-sm text-muted-foreground leading-snug">{spec.label}</span>
              <span className="font-mono-tech text-sm text-foreground text-right leading-snug">
                {spec.value}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom accent */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[rgba(255,107,0,0)] to-transparent group-hover:via-[rgba(var(--accent-rgb),0.5)] transition-all duration-500" />
    </div>
  );
}
