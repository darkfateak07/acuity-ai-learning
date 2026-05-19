import * as React from "react";
import { motion } from "framer-motion";

export function Mascot({ className = "" }: { className?: string }) {
  return (
    <motion.div
      initial={{ y: 0 }}
      animate={{ y: [0, -12, 0] }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      className={className}
      aria-hidden
    >
      <svg width="140" height="140" viewBox="0 0 140 140" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="mGrad" x1="0" x2="1">
            <stop offset="0%" stopColor="var(--primary)" />
            <stop offset="100%" stopColor="var(--accent)" />
          </linearGradient>
        </defs>
        <g>
          <circle cx="70" cy="70" r="56" fill="url(#mGrad)" opacity="0.95" />
          <g transform="translate(30,42)">
            <ellipse className="mascot-eye" cx="18" cy="18" rx="8" ry="8" fill="white" />
            <ellipse className="mascot-eye" cx="62" cy="18" rx="8" ry="8" fill="white" />
            <circle cx="18" cy="18" r="3" fill="var(--primary)" />
            <circle cx="62" cy="18" r="3" fill="var(--primary)" />
            <path className="mascot-mouth" d="M18 44 C30 56 50 56 62 44" stroke="white" strokeWidth="3" strokeLinecap="round" fill="none" />
          </g>
          <rect x="64" y="8" width="12" height="18" rx="6" fill="white" opacity="0.85" transform="rotate(-20 70 17)" />
        </g>
      </svg>
    </motion.div>
  );
}

export default Mascot;
