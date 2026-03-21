import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  padding?: "none" | "sm" | "md" | "lg";
  hover?: boolean;
}

export default function Card({
  children,
  className = "",
  padding = "md",
  hover = false,
}: CardProps) {
  const paddingClasses = {
    none: "",
    sm: "p-4",
    md: "p-6",
    lg: "p-8",
  };

  const hoverClasses = hover
    ? "hover:bg-white/[0.08] hover:border-neonPink/40 hover:shadow-lg hover:shadow-neonPink/20 hover:scale-[1.02] transition-all duration-300"
    : "";

  return (
    <div
      className={`bg-white/5 border border-white/10 rounded-lg ${paddingClasses[padding]} ${hoverClasses} ${className}`}
    >
      {children}
    </div>
  );
}
