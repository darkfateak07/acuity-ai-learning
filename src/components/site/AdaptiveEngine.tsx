import { motion } from "framer-motion";
import { Eye, Brain, GitBranch, TrendingUp } from "lucide-react";

const steps = [
  { icon: Eye, title: "Observe", desc: "Behavior, timing, hesitation, and accuracy signals captured continuously." },
  { icon: Brain, title: "Model", desc: "Knowledge tracing builds a live cognitive map of mastery and gaps." },
  { icon: GitBranch, title: "Adapt", desc: "Curriculum, difficulty, and modality reshape per learner in real time." },
  { icon: TrendingUp, title: "Improve", desc: "Outcomes compound — measured against personalized mastery targets." },
];

export function AdaptiveEngine() {
  return (
    <section className="relative py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-semibold leading-tight mb-4">
            The <span className="text-gradient">adaptive learning engine.</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            A closed-loop system that observes, models, and reshapes the learning path — continuously.
          </p>
        </div>

        <div className="relative grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="hidden lg:block absolute top-1/2 left-[12%] right-[12%] h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
          {steps.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12 }}
              className="relative glass rounded-2xl p-6 border-gradient hover:scale-[1.03] transition-transform duration-500"
            >
              <div className="absolute top-3 right-3 text-[10px] text-muted-foreground">0{i + 1}</div>
              <div className="h-12 w-12 rounded-xl bg-gradient-primary grid place-items-center mb-4 glow-primary">
                <s.icon className="h-5 w-5 text-primary-foreground" />
              </div>
              <h3 className="font-display text-xl mb-2">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
