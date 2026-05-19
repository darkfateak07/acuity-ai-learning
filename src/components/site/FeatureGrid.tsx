import { motion } from "framer-motion";
import {
  Brain, Sparkles, BarChart3, Zap, Trophy, Lightbulb, Users, Building2,
} from "lucide-react";

const features = [
  { icon: Brain, title: "Smart AI Buddy 🤖", desc: "Chat with your AI friend! Gets smarter the more you learn.", span: "lg:col-span-2 lg:row-span-2" },
  { icon: Sparkles, title: "Just for You ✨", desc: "Learning that fits YOUR style and pace." },
  { icon: BarChart3, title: "Your Progress 📊", desc: "See exactly how awesome you're getting!" },
  { icon: Zap, title: "Tricky Questions 🎯", desc: "Questions get harder as you level up." },
  { icon: Trophy, title: "Earn Badges 🏆", desc: "Streaks, achievements, and cool rewards!" },
  { icon: Lightbulb, title: "Smart Hints 💡", desc: "\"Try this next\" — always the right next step." },
  { icon: Users, title: "Parents See Progress 👨‍👩‍👧", desc: "Weekly updates so parents know you're crushing it!", span: "lg:col-span-2" },
  { icon: Building2, title: "Teachers Love It 🏫", desc: "Schools get powerful tools to help more kids." },
];

export function FeatureGrid() {
  return (
    <section id="features" className="relative py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm font-bold mb-4 text-primary">
            <Sparkles className="h-4 w-4" />
            <span>Super Powers</span>
          </div>
          <h2 className="font-display text-5xl md:text-6xl font-bold leading-tight mb-4">
            Everything you need <span className="text-gradient">to level up!</span>
          </h2>
          <p className="text-foreground text-xl font-medium">
            Your complete learning platform packed with fun features.
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
              className={`group relative glass-strong rounded-3xl p-6 border-2 border-primary/20 overflow-hidden hover:shadow-lg hover:border-primary/40 transition-all ${f.span ?? ""}`}
            >
              <div className="absolute -top-20 -right-20 h-48 w-48 rounded-full bg-primary/15 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="relative h-full flex flex-col">
                <div className="h-12 w-12 rounded-full glass grid place-items-center mb-4 group-hover:scale-125 transition-transform">
                  <f.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-display text-lg font-bold mb-2 text-foreground">{f.title}</h3>
                <p className="text-base text-foreground font-medium leading-relaxed">{f.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
