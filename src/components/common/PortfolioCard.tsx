import { memo } from "react";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface PortfolioCardProps {
  title: string;
  material: string;
  industry: string;
  category: string;
  dimensions?: string;
  tolerance?: string;
  className?: string;
}

export const PortfolioCard = memo(function PortfolioCard({
  title,
  material,
  industry,
  category,
  dimensions,
  tolerance,
  className,
}: PortfolioCardProps) {
  return (
    <div
      className={cn(
        "group relative border border-border bg-surface overflow-hidden flex flex-col",
        "hover:border-[rgba(var(--accent-rgb),0.4)] transition-all duration-300 cursor-pointer",
        className
      )}
    >
      {/* Image placeholder */}
      <div className="relative h-52 bg-[var(--bg-deep)] overflow-hidden flex items-center justify-center">
        <div className="grid-bg-fine absolute inset-0 opacity-40" />
        <div className="relative text-center">
          <div className="font-inter text-6xl font-700 text-[rgba(var(--accent-rgb),0.06)] leading-none">
            {category.toUpperCase().slice(0, 2)}
          </div>
          <div className="font-mono-tech text-sm text-muted-foreground tracking-widest mt-1">
            [ФОТО]
          </div>
        </div>

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-[rgba(var(--accent-rgb),0.06)] opacity-0 group-hover:opacity-100 transition-opacity" />

        <div className="absolute top-3 left-3">
          <Badge className="bg-[rgba(0,0,0,0.7)] text-[var(--accent)] border border-[rgba(var(--accent-rgb),0.3)] text-sm font-mono-tech tracking-widest px-2 py-0.5 rounded-none">
            {category}
          </Badge>
        </div>
      </div>

      <div className="p-4 flex flex-col flex-1">
        <h3 className="font-inter text-lg font-700 uppercase tracking-wide text-foreground mb-3 group-hover:text-[var(--accent)] transition-colors leading-tight">
          {title}
        </h3>

        <div className="grid grid-cols-2 gap-2 mt-auto">
          <div>
            <p className="font-mono-tech text-sm text-muted-foreground mb-0.5">МАТЕРИАЛ</p>
            <p className="text-sm text-foreground">{material}</p>
          </div>
          <div>
            <p className="font-mono-tech text-sm text-muted-foreground mb-0.5">ОТРАСЛЬ</p>
            <p className="text-sm text-foreground">{industry}</p>
          </div>
          {dimensions && (
            <div>
              <p className="font-mono-tech text-sm text-muted-foreground mb-0.5">ГАБАРИТЫ</p>
              <p className="font-mono-tech text-sm text-foreground">{dimensions}</p>
            </div>
          )}
          {tolerance && (
            <div>
              <p className="font-mono-tech text-sm text-muted-foreground mb-0.5">ДОПУСК</p>
              <p className="font-mono-tech text-sm text-[var(--accent)]">{tolerance}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
});
