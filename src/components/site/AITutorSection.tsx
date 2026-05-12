import { motion } from "framer-motion";
import { Bot, User, Sparkles, BookOpen } from "lucide-react";

export function AITutorSection() {
  return (
    <section id="ai-tutor" className="relative py-32">
      <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass text-xs">
            <Sparkles className="h-3 w-3 text-primary" />
            <span>AI Tutor</span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-semibold leading-tight">
            A tutor that <span className="text-gradient">thinks with you.</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Conversational, context-aware, and pedagogically calibrated. Acuity Tutor
            adapts its explanations to your knowledge state in real time.
          </p>
          <ul className="space-y-3 pt-2">
            {[
              "Socratic explanations tailored to your gaps",
              "Step-by-step reasoning with visual guidance",
              "Knowledge-traced recommendations after every turn",
            ].map((t) => (
              <li key={t} className="flex items-start gap-3 text-sm">
                <div className="mt-1 h-1.5 w-1.5 rounded-full bg-gradient-primary" />
                <span className="text-muted-foreground">{t}</span>
              </li>
            ))}
          </ul>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="absolute -inset-8 bg-primary/20 blur-3xl rounded-full pointer-events-none" />
          <div className="relative glass-strong rounded-3xl border-gradient p-5 shadow-elevated space-y-3">
            <div className="flex items-center justify-between pb-3 border-b border-white/5">
              <div className="flex items-center gap-2">
                <div className="h-8 w-8 rounded-lg bg-gradient-primary grid place-items-center">
                  <Bot className="h-4 w-4 text-primary-foreground" />
                </div>
                <div>
                  <p className="text-sm font-medium">Acuity Tutor</p>
                  <p className="text-[10px] text-accent">● Online · Adaptive mode</p>
                </div>
              </div>
              <BookOpen className="h-4 w-4 text-muted-foreground" />
            </div>

            <div className="flex gap-2">
              <div className="h-7 w-7 rounded-full bg-white/5 grid place-items-center shrink-0">
                <User className="h-3.5 w-3.5" />
              </div>
              <div className="rounded-2xl rounded-tl-sm bg-white/[0.04] px-3 py-2 text-sm max-w-[80%]">
                Why does the chain rule work geometrically?
              </div>
            </div>

            <div className="flex gap-2 justify-end">
              <div className="rounded-2xl rounded-tr-sm bg-gradient-to-br from-primary/20 to-accent/10 border border-primary/20 px-3 py-2 text-sm max-w-[85%]">
                Picture two gears meshed together. When the outer gear rotates, the rate the inner spins is the product of their ratios — that's f'(g(x)) · g'(x). Want me to render an animated diagram?
              </div>
              <div className="h-7 w-7 rounded-full bg-gradient-primary grid place-items-center shrink-0">
                <Bot className="h-3.5 w-3.5 text-primary-foreground" />
              </div>
            </div>

            <div className="flex gap-2">
              <div className="h-7 w-7 rounded-full bg-white/5 grid place-items-center shrink-0">
                <User className="h-3.5 w-3.5" />
              </div>
              <div className="rounded-2xl rounded-tl-sm bg-white/[0.04] px-3 py-2 text-sm">
                <span className="inline-flex gap-1">
                  <span className="h-1.5 w-1.5 rounded-full bg-muted-foreground animate-pulse" />
                  <span className="h-1.5 w-1.5 rounded-full bg-muted-foreground animate-pulse" style={{ animationDelay: "0.2s" }} />
                  <span className="h-1.5 w-1.5 rounded-full bg-muted-foreground animate-pulse" style={{ animationDelay: "0.4s" }} />
                </span>
              </div>
            </div>

            <div className="pt-2 mt-2 border-t border-white/5 grid grid-cols-3 gap-2">
              {["Diagram", "Practice", "Deeper"].map((b) => (
                <button key={b} className="text-xs py-1.5 rounded-lg glass hover:bg-white/10 transition">
                  {b}
                </button>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
