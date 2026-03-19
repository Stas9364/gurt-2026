interface WanderingBlobProps {
  variant: 1 | 2 | 3;
  size: number;
  opacity: number;
  blur: number;
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
  className?: string;
}

export function WanderingBlob({
  variant,
  size,
  opacity,
  blur,
  top,
  left,
  right,
  bottom,
  className = "",
}: WanderingBlobProps) {
  const animationName = `blob-wander-${variant}`;

  return (
    <div
      className={className}
      style={{
        position: "absolute",
        width: size,
        height: size,
        top,
        left,
        right,
        bottom,
        borderRadius: "50%",
        background: `radial-gradient(circle, rgba(var(--accent-rgb),${opacity}) 0%, transparent 70%)`,
        filter: `blur(${blur}px)`,
        pointerEvents: "none",
        willChange: "transform",
        contain: "layout paint",
        animation: `${animationName} var(--blob-duration-${variant}) ease-in-out infinite`,
      }}
    />
  );
}
