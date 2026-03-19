"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";

interface ContactButtonProps {
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
  variant?: "primary" | "outline" | "ghost";
  className?: string;
  external?: boolean;
}

export function ContactButton({
  href,
  onClick,
  children,
  variant = "primary",
  className,
  external = false,
}: ContactButtonProps) {
  const baseClasses = cn(
    "inline-flex items-center gap-2 px-6 py-3 font-inter text-sm font-500 transition-all duration-300 cursor-pointer",
    variant === "primary" &&
      "bg-[var(--accent)] text-white hover:bg-[var(--accent-hover)] hover:shadow-[0_0_24px_rgba(var(--accent-rgb),0.5)] active:bg-[var(--accent-dark)]",
    variant === "outline" &&
      "border border-[var(--accent)] text-[var(--accent)] hover:bg-[rgba(var(--accent-rgb),0.1)] hover:shadow-[0_0_16px_rgba(var(--accent-rgb),0.25)]",
    variant === "ghost" &&
      "text-muted-foreground hover:text-[var(--accent)] hover:bg-[rgba(var(--accent-rgb),0.05)]",
    className
  );

  if (href) {
    return (
      <Link
        href={href}
        className={baseClasses}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={baseClasses}>
      {children}
    </button>
  );
}
