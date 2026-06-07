import { cn } from "@/lib/utils";

type BrandLogoProps = {
  className?: string;
  showWordmark?: boolean;
  compact?: boolean;
};

export function BrandLogo({ className, showWordmark = true, compact = false }: BrandLogoProps) {
  const markSize = compact ? "h-8 w-8" : "h-11 w-11";

  return (
    <div className={cn("inline-flex items-center gap-3", className)}>
      <svg
        viewBox="0 0 160 170"
        role="img"
        aria-label="Acuity logo"
        className={cn(markSize, "shrink-0")}
      >
        <path
          d="M80 8 L148 160 H118 L94 104 L80 108 L66 104 L42 160 H12 Z"
          fill="var(--primary)"
        />
        <path
          d="M80 14 L116 82 L99 116 L80 170 L61 116 L44 82 Z"
          fill="var(--background)"
        />
        <path
          d="M80 21 L98 65 L88 104 L80 164 L72 104 L62 65 Z"
          fill="var(--primary)"
        />
        <path
          d="M80 42 L108 14 L91 72 L80 82 L69 72 L52 14 Z"
          fill="var(--primary)"
        />
        <circle cx="80" cy="41" r="10" fill="var(--background)" />
        <circle cx="80" cy="41" r="5.5" fill="var(--secondary)" />
      </svg>

      {showWordmark && (
        <div className="leading-none">
          <div className="font-display text-[1.35rem] font-semibold tracking-[0.18em] text-primary">
            ACUITY
          </div>
          <div className="mt-1 text-[0.72rem] font-medium tracking-[0.22em] text-secondary uppercase">
            Where Accuracy Meets Knowledge
          </div>
        </div>
      )}
    </div>
  );
}
