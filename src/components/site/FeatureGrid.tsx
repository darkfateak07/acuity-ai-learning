import { motion } from "framer-motion";
import {
  Brain, Sparkles, BarChart3, Zap, Trophy, Lightbulb, Users, Building2,
} from "lucide-react";

const features = [
  { icon: Brain, title: "AI Tutor", desc: "Conversational, context-aware tutoring across every subject.", span: "lg:col-span-2 lg:row-span-2" },
  { icon: Sparkles, title: "Personalized Learning", desc: "Curricula that bend to your cognitive shape." },
  { icon: BarChart3, title: "Realtime Analytics", desc: "Live mastery, retention, and engagement metrics." },
  { icon: Zap, title: "Adaptive Assessments", desc: "Item-response theory tuned per learner." },
  { icon: Trophy, title: "Gamified Learning", desc: "Streaks, badges, and meaningful progression." },
  { icon: Lightbulb, title: "AI Recommendations", desc: "What to study next — explained, not guessed." },
  { icon: Users, title: "Parent Insights", desc: "Calm, weekly clarity on growth and struggle.", span: "lg:col-span-2" },
  { icon: Building2, title: "School Management", desc: "District-grade orchestration and reporting." },
];

export function FeatureGrid() {
  return (
    <section id="features" className="relative py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass text-xs mb-4">
            <span>Platform</span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-semibold leading-tight mb-4">
            One platform. <span className="text-gradient">Every learner.</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            A complete operating system for adaptive education.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 auto-rows-[200px] gap-4">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className={`group relative glass rounded-2xl p-6 border-gradient overflow-hidden hover:bg-white/[0.05] transition-all ${f.span ?? ""}`}
            >
              <div className="absolute -top-20 -right-20 h-48 w-48 rounded-full bg-primary/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="relative h-full flex flex-col">
                <div className="h-11 w-11 rounded-xl glass grid place-items-center mb-4 group-hover:scale-110 transition-transform">
                  <f.icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-display text-xl mb-1.5">{f.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
