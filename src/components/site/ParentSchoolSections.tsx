import { motion } from "framer-motion";
import { Heart, Calendar, TrendingUp, Building2, Users, Activity } from "lucide-react";

export function ParentSchoolSections() {
  return (
    <section className="relative py-32 space-y-32">
      {/* Parents */}
      <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="glass-strong rounded-3xl border-gradient p-6 shadow-elevated order-2 lg:order-1"
        >
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-full bg-gradient-primary grid place-items-center text-xs font-semibold">
                EM
              </div>
              <div>
                <p className="text-sm font-medium">Emma's week</p>
                <p className="text-[10px] text-muted-foreground">Grade 9 · Sciences</p>
              </div>
            </div>
            <Heart className="h-4 w-4 text-primary" />
          </div>

          <div className="grid grid-cols-2 gap-3 mb-4">
            {[
              { l: "Hours focused", v: "8.2h", c: TrendingUp },
              { l: "Peak time", v: "16:00", c: Calendar },
            ].map((s) => (
              <div key={s.l} className="glass rounded-xl p-3">
                <div className="flex items-center gap-2 text-[10px] text-muted-foreground">
                  <s.c className="h-3 w-3" /> {s.l}
                </div>
                <div className="text-xl font-display font-semibold mt-1">{s.v}</div>
              </div>
            ))}
          </div>

          <div className="glass rounded-xl p-4 space-y-2">
            <p className="text-xs text-muted-foreground">Weekly note</p>
            <p className="text-sm">
              Emma improved <span className="text-accent">+12%</span> in chemistry. She struggled briefly with stoichiometry — Acuity has scheduled remediation.
            </p>
          </div>
        </motion.div>

        <div className="space-y-5 order-1 lg:order-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass text-xs">
            <span>For Parents</span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-semibold leading-tight">
            Calm clarity, <span className="text-gradient">every week.</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            See growth, struggle, and momentum in one glance — without alarms or noise.
          </p>
        </div>
      </div>

      {/* Schools */}
      <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-5">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass text-xs">
            <span>For Schools</span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-semibold leading-tight">
            District-grade <span className="text-gradient">intelligence.</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            A live operations layer for institutions — engagement, performance, intervention.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="glass-strong rounded-3xl border-gradient p-6 shadow-elevated"
        >
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <Building2 className="h-4 w-4 text-primary" />
              <p className="text-sm font-medium">Lincoln Academy · Live</p>
            </div>
            <span className="text-[10px] text-accent flex items-center gap-1">
              <span className="h-1.5 w-1.5 rounded-full bg-accent animate-glow-pulse" /> 1,284 active
            </span>
          </div>

          <div className="grid grid-cols-3 gap-3 mb-4">
            {[
              { i: Users, l: "Students", v: "3,420" },
              { i: Activity, l: "Engagement", v: "87%" },
              { i: TrendingUp, l: "Avg lift", v: "+19%" },
            ].map((s) => (
              <div key={s.l} className="glass rounded-xl p-3">
                <s.i className="h-3.5 w-3.5 text-muted-foreground mb-1" />
                <div className="text-lg font-semibold">{s.v}</div>
                <div className="text-[10px] text-muted-foreground">{s.l}</div>
              </div>
            ))}
          </div>

          <div className="glass rounded-xl p-3 space-y-2">
            <p className="text-xs text-muted-foreground">At-risk subjects</p>
            {[
              { t: "Algebra II — Grade 10", v: 34 },
              { t: "Physics — Grade 11", v: 51 },
            ].map((w) => (
              <div key={w.t}>
                <div className="flex justify-between text-xs mb-1">
                  <span>{w.t}</span><span className="text-destructive">{w.v}% risk</span>
                </div>
                <div className="h-1 rounded-full bg-white/5 overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-primary to-destructive" style={{ width: `${w.v}%` }} />
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
