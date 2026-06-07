import { motion } from "framer-motion";
import { ArrowRight, BookOpen, Brain, TrendingUp, Users, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";

const stats = [
  { value: "240K+", label: "Active Learners" },
  { value: "94%", label: "Score Improvement" },
  { value: "1,200+", label: "Schools Onboard" },
  { value: "4.9★", label: "App Rating" },
];

const featurePills = [
  { icon: Brain, label: "Adaptive AI Engine" },
  { icon: BookOpen, label: "Curriculum-Aligned" },
  { icon: TrendingUp, label: "Measurable Growth" },
];

export function Hero() {
  return (
    <section className="relative pt-36 pb-28 overflow-hidden">
      {/* Background textures */}
      <div className="absolute inset-0 dot-bg opacity-60 pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-[1px]" style={{ background: "linear-gradient(90deg, transparent, #2C5F6E, transparent)" }} />
      <div className="absolute top-24 left-1/2 -translate-x-1/2 h-[600px] w-[900px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(ellipse, rgba(44,95,110,0.12) 0%, transparent 70%)" }} />
      <div className="absolute top-24 right-0 h-[400px] w-[400px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(ellipse, rgba(184,148,63,0.07) 0%, transparent 70%)" }} />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Top label */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center mb-10"
        >
          <span className="section-label">
            <span className="h-1.5 w-1.5 rounded-full bg-secondary animate-pulse inline-block" />
            Acuity AI Learning Platform — Where Accuracy Meets Knowledge
          </span>
        </motion.div>

        {/* Hero headline + subtext */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="space-y-8"
          >
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.08] tracking-tight">
              Precision Learning
              <br />
              <span className="italic" style={{ color: "#2C5F6E" }}>Powered by AI.</span>
            </h1>

            <p className="text-lg text-muted-foreground max-w-lg leading-relaxed">
              Acuity delivers an adaptive, curriculum-aligned learning experience that identifies each student's unique gaps and strengths — then builds a personalised path to mastery.
            </p>

            {/* Feature pills */}
            <div className="flex flex-wrap gap-3">
              {featurePills.map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-2 px-4 py-2 rounded-full glass text-sm font-medium" style={{ color: "#2C5F6E" }}>
                  <Icon className="h-4 w-4" style={{ color: "#B8943F" }} />
                  {label}
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-2">
              <Button asChild size="lg" className="rounded-full px-8 font-semibold text-white shadow-lg transition-transform hover:scale-[1.03]"
                style={{ background: "linear-gradient(135deg, #2C5F6E, #1A3F4A)", boxShadow: "0 8px 30px -8px rgba(44,95,110,0.45)" }}>
                <Link to="/signup">
                  Start Learning Free <ArrowRight className="h-4 w-4 ml-1" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="ghost" className="rounded-full px-8 font-semibold border transition-transform hover:scale-[1.02]"
                style={{ borderColor: "rgba(44,95,110,0.3)", color: "#2C5F6E" }}>
                <Link to="/contact">
                  Request Demo
                </Link>
              </Button>
            </div>

            {/* Social proof row */}
            <div className="flex items-center gap-4 pt-2">
              <div className="flex -space-x-2.5">
                {["#2C5F6E", "#B8943F", "#3E7D8F", "#5A6E4A"].map((color, i) => (
                  <div key={i} className="h-9 w-9 rounded-full border-2 border-white shadow-sm grid place-items-center text-white text-xs font-bold"
                    style={{ background: color }}>
                    {["A", "B", "C", "D"][i]}
                  </div>
                ))}
              </div>
              <p className="text-sm text-muted-foreground">
                Trusted by <span className="font-semibold" style={{ color: "#2C5F6E" }}>240,000+</span> learners across 50+ countries
              </p>
            </div>
          </motion.div>

          {/* Right side — Dashboard preview */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.25 }}
            className="relative hidden lg:block"
          >
            {/* Main card */}
            <div className="glass-strong rounded-2xl border-gradient shadow-elevated overflow-hidden p-6"
              style={{ boxShadow: "0 25px 60px -20px rgba(44,95,110,0.25)" }}>
              {/* Card header */}
              <div className="flex items-center justify-between mb-6 pb-4"
                style={{ borderBottom: "1px solid rgba(44,95,110,0.1)" }}>
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-xl grid place-items-center text-white"
                    style={{ background: "linear-gradient(135deg, #2C5F6E, #1A3F4A)" }}>
                    <Brain className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-display text-sm font-semibold" style={{ color: "#1A3540" }}>Student Dashboard</p>
                    <p className="text-xs" style={{ color: "#B8943F" }}>● Live Session · Mathematics</p>
                  </div>
                </div>
                <div className="text-xs font-medium px-3 py-1 rounded-full" style={{ background: "rgba(44,95,110,0.08)", color: "#2C5F6E" }}>
                  Week 4
                </div>
              </div>

              {/* Progress chart */}
              <div className="rounded-xl p-4 mb-4" style={{ background: "rgba(44,95,110,0.05)" }}>
                <div className="flex justify-between items-center mb-3">
                  <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: "#6B7E85" }}>Learning Progress</span>
                  <span className="text-xs font-bold" style={{ color: "#B8943F" }}>+18% this week</span>
                </div>
                <svg viewBox="0 0 320 80" className="w-full h-16">
                  <defs>
                    <linearGradient id="tealGrad" x1="0" x2="0" y1="0" y2="1">
                      <stop offset="0%" stopColor="#2C5F6E" stopOpacity="0.3" />
                      <stop offset="100%" stopColor="#2C5F6E" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <path d="M0,70 C30,65 60,55 100,45 C140,35 160,48 200,28 C230,12 270,18 320,10 L320,80 L0,80 Z"
                    fill="url(#tealGrad)" />
                  <path d="M0,70 C30,65 60,55 100,45 C140,35 160,48 200,28 C230,12 270,18 320,10"
                    stroke="#2C5F6E" strokeWidth="2.5" fill="none" strokeLinecap="round" />
                  <circle cx="320" cy="10" r="4" fill="#B8943F" />
                </svg>
              </div>

              {/* Stats row */}
              <div className="grid grid-cols-3 gap-3 mb-4">
                {[
                  { label: "Accuracy", value: "92%", color: "#2C5F6E" },
                  { label: "Streak", value: "14d", color: "#B8943F" },
                  { label: "Modules", value: "8/10", color: "#3E7D8F" },
                ].map((s) => (
                  <div key={s.label} className="rounded-xl p-3 text-center" style={{ background: "rgba(44,95,110,0.05)" }}>
                    <div className="text-[10px] font-semibold uppercase tracking-wide text-muted-foreground mb-1">{s.label}</div>
                    <div className="font-display text-xl font-bold" style={{ color: s.color }}>{s.value}</div>
                  </div>
                ))}
              </div>

              {/* AI suggestion */}
              <div className="rounded-xl p-4 flex gap-3"
                style={{ background: "linear-gradient(135deg, rgba(44,95,110,0.08), rgba(184,148,63,0.06))", border: "1px solid rgba(184,148,63,0.2)" }}>
                <Award className="h-5 w-5 shrink-0 mt-0.5" style={{ color: "#B8943F" }} />
                <div>
                  <p className="text-sm font-semibold mb-0.5" style={{ color: "#1A3540" }}>Next Recommendation</p>
                  <p className="text-xs text-muted-foreground leading-relaxed">Based on your performance, focus on quadratic equations to close the identified gap before your upcoming assessment.</p>
                </div>
              </div>
            </div>

            {/* Floating card — users */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -left-12 top-20 glass-strong rounded-2xl p-4 w-48 shadow-elevated border-gradient"
            >
              <div className="flex items-center gap-2 mb-2">
                <div className="h-8 w-8 rounded-lg grid place-items-center" style={{ background: "rgba(184,148,63,0.15)" }}>
                  <Users className="h-4 w-4" style={{ color: "#B8943F" }} />
                </div>
                <span className="text-xs font-semibold" style={{ color: "#1A3540" }}>Live Now</span>
              </div>
              <div className="font-display text-2xl font-bold" style={{ color: "#2C5F6E" }}>1,847</div>
              <div className="text-xs text-muted-foreground">students in session</div>
            </motion.div>

            {/* Floating card — score */}
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
              className="absolute -right-8 bottom-20 glass-strong rounded-2xl p-4 w-52 shadow-elevated border-gradient-gold"
            >
              <div className="flex items-center gap-2 mb-2">
                <div className="h-8 w-8 rounded-lg grid place-items-center" style={{ background: "rgba(44,95,110,0.12)" }}>
                  <TrendingUp className="h-4 w-4" style={{ color: "#2C5F6E" }} />
                </div>
                <span className="text-xs font-semibold" style={{ color: "#1A3540" }}>Avg Improvement</span>
              </div>
              <div className="font-display text-2xl font-bold" style={{ color: "#B8943F" }}>+24%</div>
              <div className="text-xs text-muted-foreground">in exam scores after 30 days</div>
            </motion.div>
          </motion.div>
        </div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {stats.map((s, i) => (
            <div key={s.label} className="glass rounded-2xl p-5 text-center card-hover border-gradient"
              style={{ animationDelay: `${i * 0.1}s` }}>
              <div className="stat-number text-3xl mb-1">{s.value}</div>
              <div className="rule-gold w-12 mx-auto my-2" />
              <div className="text-xs font-medium text-muted-foreground uppercase tracking-wide">{s.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
