import * as React from "react";
import { motion } from "framer-motion";

function rand(min: number, max: number) {
  return Math.random() * (max - min) + min;
}

export function Mascot({ className = "" }: { className?: string }) {
  const [hover, setHover] = React.useState(false);
  const [pupilOffset, setPupilOffset] = React.useState({ x: 0, y: 0 });
  const [celebrate, setCelebrate] = React.useState(false);

  React.useEffect(() => {
    if (!celebrate) return;
    const t = setTimeout(() => setCelebrate(false), 1800);
    return () => clearTimeout(t);
  }, [celebrate]);

  const onMouseMove = (e: React.MouseEvent) => {
    const rect = (e.currentTarget as HTMLDivElement).getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dx = (e.clientX - cx) / 12;
    const dy = (e.clientY - cy) / 18;
    setPupilOffset({ x: dx, y: dy });
  };

  return (
    <motion.div
      initial={{ y: 0 }}
      animate={{ y: [0, -10, 0] }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      className={"mascot-root " + className}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => {
        setHover(false);
        setPupilOffset({ x: 0, y: 0 });
      }}
      onMouseMove={onMouseMove}
      onClick={() => setCelebrate(true)}
      role="button"
      tabIndex={0}
    >
      <svg width="140" height="140" viewBox="0 0 140 140" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="mGrad" x1="0" x2="1">
            <stop offset="0%" stopColor="var(--primary)" />
            <stop offset="100%" stopColor="var(--accent)" />
          </linearGradient>
        </defs>
        <g>
          <circle cx="70" cy="70" r="56" fill="url(#mGrad)" opacity="0.98" />
          <g transform="translate(30,42)">
            <ellipse className="mascot-eye" cx={18 + pupilOffset.x} cy={18 + pupilOffset.y} rx="8" ry="8" fill="white" />
            <ellipse className="mascot-eye" cx={62 + pupilOffset.x} cy={18 + pupilOffset.y} rx="8" ry="8" fill="white" />
            <circle cx={18 + pupilOffset.x} cy={18 + pupilOffset.y} r="3" fill="var(--primary)" />
            <circle cx={62 + pupilOffset.x} cy={18 + pupilOffset.y} r="3" fill="var(--primary)" />
            <path
              className="mascot-mouth"
              d={
                celebrate
                  ? "M16 40 C32 70 48 70 64 40"
                  : "M18 44 C30 56 50 56 62 44"
              }
              stroke="white"
              strokeWidth="3"
              strokeLinecap="round"
              fill="none"
            />
          </g>
          <rect x="64" y="8" width="12" height="18" rx="6" fill="white" opacity="0.95" transform="rotate(-20 70 17)" />
        </g>
      </svg>

      {/* confetti */}
      {celebrate && (
        <div className="mascot-confetti" aria-hidden>
          {Array.from({ length: 10 }).map((_, i) => {
            const angle = rand(-80, 80);
            const dist = rand(40, 90);
            const x = Math.cos((angle * Math.PI) / 180) * dist;
            const y = -Math.sin((angle * Math.PI) / 180) * dist - rand(20, 40);
            const color = ["var(--primary)", "var(--secondary)", "var(--accent)", "var(--violet)"][i % 4];
            return (
              <motion.span
                key={i}
                className="confetti-dot"
                style={{ background: color }}
                initial={{ x: 0, y: 0, opacity: 1, scale: 0.9 }}
                animate={{ x, y, rotate: rand(-360, 360), opacity: 0 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
              />
            );
          })}
        </div>
      )}
    </motion.div>
  );
}

export default Mascot;
