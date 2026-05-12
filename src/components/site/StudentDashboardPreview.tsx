import { motion } from "framer-motion";
import { TrendingUp, Target, Flame, Clock } from "lucide-react";

function Heatmap() {
  const cells = Array.from({ length: 7 * 14 }, () => Math.random());
  return (
    <div className="grid grid-cols-[repeat(14,minmax(0,1fr))] gap-1">
      {cells.map((c, i) => (
        <div key={i} className="aspect-square rounded-sm"
          style={{ background: `oklch(0.7 0.22 295 / ${0.08 + c * 0.7})` }} />
      ))}
    </div>
  );
}

export function StudentDashboardPreview() {
  return (
    <section id="analytics" className="relative py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="font-display text-4xl md:text-5xl font-semibold mb-4">
            Your learning, <span className="text-gradient">visualized.</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            A dashboard built for clarity — not noise.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="glass-strong rounded-3xl border-gradient p-6 md:p-8 shadow-elevated"
        >
          <div className="grid lg:grid-cols-3 gap-4">
            {[
              { icon: TrendingUp, l: "Mastery", v: "78%", s: "+6.2% wk", c: "oklch(0.78 0.16 215)" },
              { icon: Target, l: "Accuracy", v: "94%", s: "Top 3% cohort", c: "oklch(0.7 0.22 295)" },
              { icon: Flame, l: "Streak", v: "23 days", s: "Personal best", c: "oklch(0.72 0.2 330)" },
            ].map((s) => (
              <div key={s.l} className="glass rounded-2xl p-5">
                <div className="flex items-center justify-between mb-3">
                  <s.icon className="h-4 w-4 text-muted-foreground" />
                  <span className="text-[10px] text-muted-foreground">{s.s}</span>
                </div>
                <div className="text-3xl font-display font-semibold" style={{ color: s.c }}>{s.v}</div>
                <div className="text-xs text-muted-foreground mt-1">{s.l}</div>
              </div>
            ))}
          </div>

          <div className="grid lg:grid-cols-3 gap-4 mt-4">
            <div className="glass rounded-2xl p-5 lg:col-span-2">
              <div className="flex items-center justify-between mb-3">
                <h4 className="text-sm font-medium">Activity heatmap</h4>
                <Clock className="h-4 w-4 text-muted-foreground" />
              </div>
              <Heatmap />
            </div>
            <div className="glass rounded-2xl p-5 space-y-3">
              <h4 className="text-sm font-medium">Weak topics</h4>
              {[
                { t: "Trigonometry", v: 42 },
                { t: "Vectors", v: 58 },
                { t: "Limits", v: 71 },
              ].map((w) => (
                <div key={w.t}>
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-muted-foreground">{w.t}</span>
                    <span>{w.v}%</span>
                  </div>
                  <div className="h-1.5 rounded-full bg-white/5 overflow-hidden">
                    <div className="h-full bg-gradient-primary" style={{ width: `${w.v}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
