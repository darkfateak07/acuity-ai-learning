import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const items = [
  { name: "Dr. Lena Park", role: "Director, Lincoln Academy", q: "Acuity reshaped how we measure learning. Engagement is up 40%, and our teachers finally have signal — not just dashboards.", h: 295 },
  { name: "Marcus Hale", role: "Parent · Chicago", q: "I see my daughter's actual growth, not test anxiety. The weekly summary feels like a conversation, not a report.", h: 215 },
  { name: "Aria Chen", role: "Student · Grade 11", q: "It teaches me the way I think. When I get stuck, the tutor doesn't give the answer — it shows me the door.", h: 330 },
  { name: "Prof. Idris Khan", role: "Cambridge Faculty", q: "The most pedagogically thoughtful AI system I've evaluated. It respects how learning actually happens.", h: 180 },
];

export function Testimonials() {
  return (
    <section className="relative py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-semibold mb-4">
            Loved by <span className="text-gradient">learners and leaders.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          {items.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="glass rounded-2xl p-7 border-gradient relative overflow-hidden hover:bg-white/[0.05] transition"
            >
              <Quote className="absolute top-4 right-4 h-8 w-8 text-primary/20" />
              <p className="text-base leading-relaxed mb-5">"{t.q}"</p>
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full" style={{ background: `linear-gradient(135deg, oklch(0.7 0.22 ${t.h}), oklch(0.78 0.16 ${t.h - 80}))` }} />
                <div>
                  <p className="text-sm font-medium">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
