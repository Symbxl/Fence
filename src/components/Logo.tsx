type LogoProps = {
  className?: string;
  variant?: "dark" | "light";
};

export default function Logo({ className = "", variant = "dark" }: LogoProps) {
  const stroke = variant === "light" ? "#ffffff" : "#16181d";
  const accent = variant === "light" ? "#b96a2e" : "#b96a2e";

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <svg
        viewBox="0 0 48 48"
        width="40"
        height="40"
        aria-hidden="true"
        className="shrink-0"
      >
        {/* fence pickets */}
        <rect x="8" y="14" width="4" height="26" rx="0.5" fill={stroke} />
        <rect x="16" y="10" width="4" height="30" rx="0.5" fill={stroke} />
        <rect x="24" y="12" width="4" height="28" rx="0.5" fill={stroke} />
        <rect x="32" y="10" width="4" height="30" rx="0.5" fill={stroke} />
        {/* picket tops */}
        <path
          d="M8 14 L10 11 L12 14 M16 10 L18 7 L20 10 M24 12 L26 9 L28 12 M32 10 L34 7 L36 10"
          fill="none"
          stroke={stroke}
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        {/* horizontal rails */}
        <rect x="6" y="20" width="36" height="2.5" rx="1" fill={accent} />
        <rect x="6" y="34" width="36" height="2.5" rx="1" fill={accent} />
      </svg>
      <div className="leading-none">
        <div
          className="font-display text-lg font-bold tracking-tight"
          style={{ color: stroke }}
        >
          S&amp;M Fencing
        </div>
        <div
          className="text-[0.6rem] tracking-[0.28em] uppercase mt-1 font-semibold"
          style={{ color: accent }}
        >
          &amp; Decking
        </div>
      </div>
    </div>
  );
}
