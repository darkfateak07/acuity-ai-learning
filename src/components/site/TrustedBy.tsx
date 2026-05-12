import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef } from "react";

function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const value = useMotionValue(0);
  const rounded = useTransform(value, (v) => `${Math.round(v).toLocaleString()}${suffix}`);

  useEffect(() => {
    if (inView) {
      const controls = animate(value, to, { duration: 2, ease: "easeOut" });
      return controls.stop;
    }
  }, [inView, to, value]);

  return <motion.span ref={ref}>{rounded}</motion.span>;
}

const stats = [
  { v: 240000, s: "+", label: "Active Learners" },
  { v: 18, s: "M+", label: "Assessments Completed" },
  { v: 38, s: "%", label: "Avg Accuracy Lift" },
  { v: 1200, s: "+", label: "Schools On Platform" },
];

const logos = ["Stanford", "MIT Media", "Khan Labs", "Cambridge", "OpenMind", "Sequoia EDU"];

export function TrustedBy() {
  return (
    <section className="relative py-24 border-y border-border/40">
      <div className="mx-auto max-w-7xl px-6">
        <p className="text-center text-xs uppercase tracking-[0.2em] text-muted-foreground mb-10">
          Powering the world's leading institutions
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-20">
          {logos.map((l, i) => (
            <motion.div
              key={l}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="text-center font-display text-lg text-muted-foreground/70 hover:text-foreground transition"
            >
              {l}
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass rounded-2xl p-6 border-gradient relative overflow-hidden"
            >
              <div className="absolute -top-12 -right-12 h-32 w-32 rounded-full bg-primary/10 blur-2xl" />
              <div className="relative">
                <div className="font-display text-4xl font-semibold text-gradient mb-1">
                  <Counter to={s.v} suffix={s.s} />
                </div>
                <div className="text-sm text-muted-foreground">{s.label}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
