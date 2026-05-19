import { motion } from "framer-motion";
import { ArrowRight, Play, Sparkles, TrendingUp, Brain, Activity } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import { Mascot } from "./Mascot";

export function Hero() {
  return (
    <section className="relative pt-36 pb-24 overflow-hidden">
      <div className="absolute inset-0 grid-bg pointer-events-none" />
      <div className="absolute top-20 left-1/2 -translate-x-1/2 h-[500px] w-[900px] rounded-full bg-primary/25 blur-[120px] pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-16 items-center">
        <Mascot className="absolute -right-8 top-12 hidden lg:block" />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-xs font-semibold text-primary">
            <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
            <span className="text-foreground">✨ Acuity Tutor — Learn Your Way!</span>
          </div>

          <h1 className="font-display text-6xl md:text-7xl lg:text-8xl font-bold leading-[1.05] tracking-tight">
            Learn with
            <br />
            <span className="text-gradient">Your AI Buddy</span>
          </h1>

          <p className="text-xl text-foreground max-w-xl leading-relaxed font-medium">
            Get personalized help that's fun and easy to understand! Your AI buddy learns how you learn and grows with you. No more boring lessons — just smart, helpful learning! 🚀
          </p>

          <div className="flex flex-wrap gap-4">
            <Button asChild variant="hero" size="lg">
              <Link to="/signup">
                Start Your Adventure <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
            <Button variant="glass" size="lg">
              <Play className="h-5 w-5" /> See It In Action
            </Button>
          </div>

          <div className="flex items-center gap-6 pt-6 text-sm text-foreground">
            <div className="flex -space-x-3">
              {[35, 185, 310, 75].map((h) => (
                <div key={h} className="h-10 w-10 rounded-full border-4 border-background shadow-md"
                  style={{ background: `oklch(0.7 0.2 ${h})` }} />
              ))}
            </div>
            <span className="font-bold">Join <span className="text-primary">240,000+</span> kids learning today</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative h-[560px]"
        >
          {/* Main dashboard card */}
          <div className="absolute inset-0 glass-strong rounded-3xl border-2 border-primary/20 p-6 shadow-xl overflow-hidden">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-gradient-primary grid place-items-center">
                  <Brain className="h-5 w-5 text-primary-foreground" />
                </div>
                <div>
                  <p className="text-base font-bold">Your Learning Journey</p>
                  <p className="text-sm text-primary font-semibold">🎯 Active · Science Time</p>
                </div>
              </div>
              <div className="flex gap-2">
                <span className="h-3 w-3 rounded-full bg-accent animate-pulse" />
                <span className="h-3 w-3 rounded-full bg-secondary" />
              </div>
            </div>

            {/* Progress chart mock */}
            <div className="relative h-40 rounded-2xl bg-primary/10 border-2 border-primary/20 p-4 mb-4 overflow-hidden">
              <div className="text-xs text-primary font-bold uppercase tracking-wider mb-2">Your Progress 📈</div>
              <svg viewBox="0 0 300 100" className="w-full h-24">
                <defs>
                  <linearGradient id="g1" x1="0" x2="0" y1="0" y2="1">
                    <stop offset="0%" stopColor="oklch(0.68 0.25 35)" stopOpacity="0.4" />
                    <stop offset="100%" stopColor="oklch(0.68 0.25 35)" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <path d="M0,80 C40,70 60,60 100,50 C140,40 170,55 200,30 C230,10 260,20 300,15 L300,100 L0,100 Z" fill="url(#g1)" />
                <path d="M0,80 C40,70 60,60 100,50 C140,40 170,55 200,30 C230,10 260,20 300,15"
                  stroke="oklch(0.68 0.25 35)" strokeWidth="3" fill="none" />
              </svg>
            </div>

            <div className="grid grid-cols-3 gap-3 mb-4">
              {[
                { l: "Awesome Score", v: "94% 🌟", c: "oklch(0.75 0.2 185)" },
                { l: "Streak 🔥", v: "12 days", c: "oklch(0.68 0.25 35)" },
                { l: "Level Up 🎮", v: "8/10", c: "oklch(0.72 0.22 310)" },
              ].map((s) => (
                <div key={s.l} className="rounded-2xl bg-white/40 border-2 border-primary/20 p-3">
                  <div className="text-xs text-foreground font-bold">{s.l}</div>
                  <div className="text-lg font-bold" style={{ color: s.c }}>{s.v}</div>
                </div>
              ))}
            </div>

            {/* AI suggestion */}
            <div className="rounded-2xl bg-gradient-to-br from-primary/30 to-secondary/20 border-2 border-primary/25 p-4 flex gap-3">
              <Sparkles className="h-5 w-5 text-primary mt-0.5 shrink-0 flex-shrink-0" />
              <div>
                <p className="text-sm font-bold text-foreground">Try This Next 👉</p>
                <p className="text-sm text-foreground font-medium">Awesome job! Let's practice fractions — you'll get even better! 🎯</p>
              </div>
            </div>
          </div>

          {/* Floating cards */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -left-8 top-20 glass-strong rounded-3xl p-4 w-48 shadow-xl border-2 border-secondary/30"
          >
            <div className="flex items-center gap-2 mb-3">
              <div className="h-8 w-8 rounded-full bg-secondary/30 grid place-items-center">
                <TrendingUp className="h-4 w-4 text-secondary" />
              </div>
              <span className="font-bold text-sm text-foreground">You're Crushing It!</span>
            </div>
            <div className="text-3xl font-bold text-secondary">+24%</div>
            <div className="text-sm text-foreground font-medium">Better than last week! 🎉</div>
          </motion.div>

          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute -right-4 bottom-24 glass-strong rounded-3xl p-4 w-52 shadow-xl border-2 border-accent/30"
          >
            <div className="flex items-center gap-2 mb-3">
              <div className="h-8 w-8 rounded-full bg-accent/30 grid place-items-center">
                <Activity className="h-4 w-4 text-accent" />
              </div>
              <span className="font-bold text-sm text-foreground">Learning Live Right Now</span>
            </div>
            <div className="space-y-2">
              <div className="h-2 rounded-full bg-primary/20 overflow-hidden">
                <div className="h-full w-3/4 bg-gradient-primary" />
              </div>
              <div className="text-sm text-foreground font-bold">42 kids learning together! 👦👧</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
