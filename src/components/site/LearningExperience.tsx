import { motion } from "framer-motion";
import { Gamepad2, Sparkles, BookOpen, Bot } from "lucide-react";

const steps = [
  { icon: BookOpen, t: "Discover", d: "Curated paths shaped to your goals and current mastery." },
  { icon: Bot, t: "Engage", d: "Tutor, practice, and explore — across formats." },
  { icon: Gamepad2, t: "Play", d: "Streaks, quests, and meaningful progress loops." },
  { icon: Sparkles, t: "Grow", d: "Compounding mastery, measured against your own past." },
];

export function LearningExperience() {
  return (
    <section className="relative py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-semibold mb-4">
            A learning experience, <span className="text-gradient">redesigned.</span>
          </h2>
        </div>
        <div className="relative">
          <div className="absolute left-4 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary/40 to-transparent" />
          <div className="space-y-12">
            {steps.map((s, i) => (
              <motion.div
                key={s.t}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`relative flex md:items-center gap-6 ${i % 2 ? "md:flex-row-reverse" : ""}`}
              >
                <div className="absolute left-4 md:left-1/2 -translate-x-1/2 h-3 w-3 rounded-full bg-gradient-primary glow-primary" />
                <div className={`flex-1 md:max-w-[42%] ml-12 md:ml-0 ${i % 2 ? "md:text-right" : ""}`}>
                  <div className="glass rounded-2xl p-6 border-gradient">
                    <div className={`flex items-center gap-3 mb-2 ${i % 2 ? "md:flex-row-reverse" : ""}`}>
                      <div className="h-10 w-10 rounded-xl bg-gradient-primary grid place-items-center">
                        <s.icon className="h-5 w-5 text-primary-foreground" />
                      </div>
                      <h3 className="font-display text-2xl">{s.t}</h3>
                    </div>
                    <p className="text-muted-foreground">{s.d}</p>
                  </div>
                </div>
                <div className="hidden md:block flex-1" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
