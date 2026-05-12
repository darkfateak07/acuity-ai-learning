import { motion } from "framer-motion";
import { ArrowRight, Play, Sparkles, TrendingUp, Brain, Activity } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";

export function Hero() {
  return (
    <section className="relative pt-36 pb-24 overflow-hidden">
      <div className="absolute inset-0 grid-bg pointer-events-none" />
      <div className="absolute top-20 left-1/2 -translate-x-1/2 h-[500px] w-[900px] rounded-full bg-primary/20 blur-[120px] pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-7"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass text-xs">
            <span className="h-1.5 w-1.5 rounded-full bg-accent animate-glow-pulse" />
            <span className="text-muted-foreground">New</span>
            <span className="text-foreground">Acuity Tutor 2.0 — Adaptive cognition engine</span>
          </div>

          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-semibold leading-[1.05] tracking-tight">
            The AI that learns
            <br />
            <span className="text-gradient">how you learn.</span>
          </h1>

          <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
            Personalized, adaptive education infrastructure powered by knowledge tracing
            and real-time cognitive analytics. For students, parents, and institutions.
          </p>

          <div className="flex flex-wrap gap-3">
            <Button asChild variant="hero" size="lg">
              <Link to="/signup">
                Start Free Trial <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button variant="glass" size="lg">
              <Play className="h-4 w-4" /> Watch Demo
            </Button>
          </div>

          <div className="flex items-center gap-6 pt-4 text-xs text-muted-foreground">
            <div className="flex -space-x-2">
              {[295, 215, 330, 180].map((h) => (
                <div key={h} className="h-7 w-7 rounded-full border-2 border-background"
                  style={{ background: `oklch(0.7 0.2 ${h})` }} />
              ))}
            </div>
            <span>Trusted by <span className="text-foreground font-medium">240,000+</span> learners worldwide</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative h-[560px]"
        >
          {/* Main dashboard card */}
          <div className="absolute inset-0 glass-strong rounded-3xl border-gradient p-6 shadow-elevated overflow-hidden">
            <div className="flex items-center justify-between mb-5">
              <div className="flex items-center gap-2">
                <div className="h-8 w-8 rounded-lg bg-gradient-primary grid place-items-center">
                  <Brain className="h-4 w-4 text-primary-foreground" />
                </div>
                <div>
                  <p className="text-sm font-medium">Learning Cortex</p>
                  <p className="text-[10px] text-muted-foreground">Live · Calculus II</p>
                </div>
              </div>
              <div className="flex gap-1.5">
                <span className="h-2 w-2 rounded-full bg-accent" />
                <span className="h-2 w-2 rounded-full bg-violet" />
              </div>
            </div>

            {/* Progress chart mock */}
            <div className="relative h-40 rounded-xl bg-white/[0.02] border border-white/5 p-4 mb-4 overflow-hidden">
              <div className="text-[10px] text-muted-foreground uppercase tracking-wider mb-2">Mastery curve</div>
              <svg viewBox="0 0 300 100" className="w-full h-24">
                <defs>
                  <linearGradient id="g1" x1="0" x2="0" y1="0" y2="1">
                    <stop offset="0%" stopColor="oklch(0.7 0.22 295)" stopOpacity="0.6" />
                    <stop offset="100%" stopColor="oklch(0.7 0.22 295)" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <path d="M0,80 C40,70 60,60 100,50 C140,40 170,55 200,30 C230,10 260,20 300,15 L300,100 L0,100 Z" fill="url(#g1)" />
                <path d="M0,80 C40,70 60,60 100,50 C140,40 170,55 200,30 C230,10 260,20 300,15"
                  stroke="oklch(0.78 0.16 215)" strokeWidth="2" fill="none" />
              </svg>
            </div>

            <div className="grid grid-cols-3 gap-2 mb-4">
              {[
                { l: "Accuracy", v: "94%", c: "oklch(0.78 0.16 215)" },
                { l: "Streak", v: "12d", c: "oklch(0.7 0.22 295)" },
                { l: "Mastery", v: "8.4", c: "oklch(0.72 0.2 330)" },
              ].map((s) => (
                <div key={s.l} className="rounded-lg bg-white/[0.03] border border-white/5 p-3">
                  <div className="text-[10px] text-muted-foreground">{s.l}</div>
                  <div className="text-lg font-semibold" style={{ color: s.c }}>{s.v}</div>
                </div>
              ))}
            </div>

            {/* AI suggestion */}
            <div className="rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20 p-3 flex gap-3">
              <Sparkles className="h-4 w-4 text-primary mt-0.5 shrink-0" />
              <div>
                <p className="text-xs font-medium">AI suggests next</p>
                <p className="text-[11px] text-muted-foreground">Practice integration by parts — predicted +6% mastery</p>
              </div>
            </div>
          </div>

          {/* Floating cards */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -left-6 top-20 glass-strong rounded-2xl p-3 w-44 shadow-elevated"
          >
            <div className="flex items-center gap-2 mb-2">
              <div className="h-7 w-7 rounded-lg bg-accent/20 grid place-items-center">
                <TrendingUp className="h-3.5 w-3.5 text-accent" />
              </div>
              <span className="text-xs font-medium">Daily focus</span>
            </div>
            <div className="text-2xl font-semibold">+24%</div>
            <div className="text-[10px] text-muted-foreground">vs last week</div>
          </motion.div>

          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute -right-4 bottom-24 glass-strong rounded-2xl p-3 w-48 shadow-elevated"
          >
            <div className="flex items-center gap-2 mb-2">
              <div className="h-7 w-7 rounded-lg bg-primary/20 grid place-items-center">
                <Activity className="h-3.5 w-3.5 text-primary" />
              </div>
              <span className="text-xs font-medium">Live session</span>
            </div>
            <div className="space-y-1">
              <div className="h-1.5 rounded-full bg-white/5 overflow-hidden">
                <div className="h-full w-3/4 bg-gradient-primary" />
              </div>
              <div className="text-[10px] text-muted-foreground">42 students online now</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
