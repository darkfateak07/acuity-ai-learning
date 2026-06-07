import { useState } from "react";

const LOGO_SRC = "/assets/fulllogo.png";

type BrandLogoProps = {
  className?: string;
  alt?: string;
};

export function BrandLogo({ className = "", alt = "Acuity logo" }: BrandLogoProps) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <span className={`font-display font-semibold tracking-tight ${className}`}>
        Acuity<span className="text-gradient">.</span>
      </span>
    );
  }

  return (
    <img
      src={LOGO_SRC}
      alt={alt}
      className={`block object-contain ${className}`}
      loading="eager"
      decoding="async"
      onError={() => setFailed(true)}
    />
  );
}