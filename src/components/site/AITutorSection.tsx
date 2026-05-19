import { motion } from "framer-motion";
import { Bot, User, Sparkles, BookOpen } from "lucide-react";

export function AITutorSection() {
  return (
    <section id="ai-tutor" className="relative py-32">
      <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-xs font-semibold text-primary">
            <Sparkles className="h-4 w-4" />
            <span>AI Tutor for Kids</span>
          </div>
          <h2 className="font-display text-5xl md:text-6xl font-bold leading-tight">
            Learn with <span className="text-gradient">your AI buddy.</span>
          </h2>
          <p className="text-foreground text-lg leading-relaxed font-medium">
            Your friendly AI tutor that thinks like you! Get fun explanations, learn step-by-step, and discover new things at your own pace.
          </p>
          <ul className="space-y-4 pt-4">
            {[
              "Fun answers tailored just for you",
              "Cool animations and visual guides",
              "Smart recommendations to help you learn better",
            ].map((t) => (
              <li key={t} className="flex items-start gap-3 text-base font-medium">
                <div className="mt-1 h-3 w-3 rounded-full bg-gradient-primary flex-shrink-0" />
                <span className="text-foreground">{t}</span>
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
          <div className="absolute -inset-8 bg-gradient-to-br from-primary/30 to-secondary/20 blur-3xl rounded-full pointer-events-none" />
          <div className="relative glass-strong rounded-3xl border-2 border-primary/20 p-6 shadow-xl space-y-4">
            <div className="flex items-center justify-between pb-4 border-b-2 border-primary/15">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-gradient-primary grid place-items-center">
                  <Bot className="h-5 w-5 text-primary-foreground" />
                </div>
                <div>
                  <p className="text-sm font-bold">Your AI Buddy</p>
                  <p className="text-xs text-primary font-semibold">● Online · Learning Mode</p>
                </div>
              </div>
              <BookOpen className="h-5 w-5 text-primary" />
            </div>

            <div className="flex gap-3">
              <div className="h-8 w-8 rounded-full bg-primary/20 grid place-items-center shrink-0">
                <User className="h-4 w-4 text-primary" />
              </div>
              <div className="rounded-3xl rounded-tl-sm bg-primary/10 px-4 py-3 text-sm font-medium max-w-[80%]">
                How do plants grow? 🌱
              </div>
            </div>

            <div className="flex gap-3 justify-end">
              <div className="rounded-3xl rounded-tr-sm bg-gradient-to-br from-primary/30 to-secondary/20 border-2 border-primary/25 px-4 py-3 text-sm font-medium max-w-[85%]">
                Plants are like little builders! 🏗️ They use sunlight to make their own food and grow bigger and stronger every day. Want to see how?
              </div>
              <div className="h-8 w-8 rounded-full bg-gradient-primary grid place-items-center shrink-0">
                <Bot className="h-4 w-4 text-primary-foreground" />
              </div>
            </div>

            <div className="flex gap-3">
              <div className="h-8 w-8 rounded-full bg-primary/20 grid place-items-center shrink-0">
                <User className="h-4 w-4 text-primary" />
              </div>
              <div className="rounded-3xl rounded-tl-sm bg-primary/10 px-4 py-3 text-sm font-medium">
                <span className="inline-flex gap-1">
                  <span className="h-2 w-2 rounded-full bg-primary animate-bounce" />
                  <span className="h-2 w-2 rounded-full bg-primary animate-bounce" style={{ animationDelay: "0.2s" }} />
                  <span className="h-2 w-2 rounded-full bg-primary animate-bounce" style={{ animationDelay: "0.4s" }} />
                </span>
              </div>
            </div>

            <div className="pt-4 mt-4 border-t-2 border-primary/15 grid grid-cols-3 gap-2">
              {["Show Me", "Quiz Me", "More Fun"].map((b) => (
                <button key={b} className="text-xs font-semibold py-2 rounded-2xl glass hover:bg-primary/20 transition-all hover:scale-105">
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
