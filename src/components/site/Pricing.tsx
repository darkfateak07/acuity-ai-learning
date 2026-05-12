import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";

const tiers = [
  { name: "Student", price: "$12", period: "/mo", desc: "For independent learners.", features: ["AI Tutor (10h/mo)", "Adaptive practice", "Personal analytics", "Mobile + web"], cta: "Start free" },
  { name: "Parent", price: "$24", period: "/mo", desc: "Family of up to 4 learners.", features: ["Everything in Student", "Weekly insight reports", "Multi-child dashboard", "Priority support"], cta: "Start free", featured: true },
  { name: "School", price: "$6", period: "/student", desc: "K-12 institutions.", features: ["Unlimited tutoring", "Teacher dashboards", "Curriculum alignment", "SSO + roster sync"], cta: "Talk to sales" },
  { name: "Enterprise", price: "Custom", period: "", desc: "Districts & universities.", features: ["Everything in School", "Dedicated CSM", "Custom models", "On-prem option"], cta: "Contact us" },
];

export function Pricing() {
  return (
    <section id="pricing" className="relative py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-semibold mb-4">
            Simple, <span className="text-gradient">scalable pricing.</span>
          </h2>
          <p className="text-muted-foreground text-lg">From a single student to an entire district.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {tiers.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className={`relative rounded-2xl p-6 border-gradient overflow-hidden ${t.featured ? "glass-strong shadow-[0_0_60px_-15px_var(--glow)]" : "glass"}`}
            >
              {t.featured && (
                <div className="absolute -top-px left-1/2 -translate-x-1/2 px-3 py-1 text-[10px] uppercase tracking-wider bg-gradient-primary text-primary-foreground rounded-b-md">
                  Recommended
                </div>
              )}
              <h3 className="font-display text-xl mb-1">{t.name}</h3>
              <p className="text-xs text-muted-foreground mb-4">{t.desc}</p>
              <div className="flex items-end gap-1 mb-5">
                <span className="font-display text-4xl font-semibold">{t.price}</span>
                <span className="text-sm text-muted-foreground mb-1">{t.period}</span>
              </div>
              <Button asChild variant={t.featured ? "hero" : "glass"} className="w-full mb-6">
                <Link to="/signup">{t.cta}</Link>
              </Button>
              <ul className="space-y-2.5">
                {t.features.map((f) => (
                  <li key={f} className="flex gap-2 text-sm">
                    <Check className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{f}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
