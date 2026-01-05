interface BeeIconProps {
  className?: string;
  size?: "sm" | "md" | "lg";
  animated?: boolean;
}

const BeeIcon = ({ className = "", size = "md", animated = true }: BeeIconProps) => {
  const sizeClasses = {
    sm: "w-6 h-6",
    md: "w-10 h-10",
    lg: "w-16 h-16",
  };

  return (
    <div className={`inline-block ${animated ? "animate-float" : ""} ${className}`}>
      <svg
        viewBox="0 0 64 64"
        className={sizeClasses[size]}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Wings */}
        <ellipse
          cx="20"
          cy="24"
          rx="12"
          ry="8"
          fill="hsl(var(--lavender))"
          opacity="0.6"
          transform="rotate(-20 20 24)"
        />
        <ellipse
          cx="44"
          cy="24"
          rx="12"
          ry="8"
          fill="hsl(var(--lavender))"
          opacity="0.6"
          transform="rotate(20 44 24)"
        />
        {/* Body */}
        <ellipse cx="32" cy="38" rx="14" ry="18" fill="hsl(var(--honey))" />
        {/* Stripes */}
        <rect x="18" y="32" width="28" height="4" fill="hsl(var(--charcoal))" rx="2" />
        <rect x="20" y="40" width="24" height="4" fill="hsl(var(--charcoal))" rx="2" />
        <rect x="22" y="48" width="20" height="3" fill="hsl(var(--charcoal))" rx="1.5" />
        {/* Head */}
        <circle cx="32" cy="18" r="10" fill="hsl(var(--charcoal))" />
        {/* Eyes */}
        <circle cx="28" cy="16" r="2.5" fill="hsl(var(--cream))" />
        <circle cx="36" cy="16" r="2.5" fill="hsl(var(--cream))" />
        {/* Antennae */}
        <path
          d="M28 10 Q26 4 22 2"
          stroke="hsl(var(--charcoal))"
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M36 10 Q38 4 42 2"
          stroke="hsl(var(--charcoal))"
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
        />
        <circle cx="22" cy="2" r="2" fill="hsl(var(--honey))" />
        <circle cx="42" cy="2" r="2" fill="hsl(var(--honey))" />
      </svg>
    </div>
  );
};

export default BeeIcon;
