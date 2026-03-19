"use client";

import { m } from "framer-motion";

interface FadeInProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  direction?: "up" | "left" | "right" | "none";
  className?: string;
}

export function FadeIn({
  children,
  delay = 0,
  duration = 0.5,
  direction = "up",
  className,
}: FadeInProps) {
  const initial =
    direction === "up"    ? { opacity: 0, y: 20 }
    : direction === "left"  ? { opacity: 0, x: -16 }
    : direction === "right" ? { opacity: 0, x: 20 }
    : { opacity: 0 };

  return (
    <m.div
      initial={initial}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: Math.min(delay, 0.4), duration }}
      className={className}
    >
      {children}
    </m.div>
  );
}
