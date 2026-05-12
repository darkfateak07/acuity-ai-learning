import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Acuity Learning Hub" },
      { name: "description", content: "We're building the cognitive infrastructure for the next generation of learners." },
    ],
  }),
  component: () => (
    <SiteLayout>
      <section className="pt-40 pb-24">
        <div className="mx-auto max-w-4xl px-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass text-xs mb-6">About us</div>
          <h1 className="font-display text-5xl md:text-6xl font-semibold leading-tight mb-6">
            We're building the <span className="text-gradient">cognitive infrastructure</span> of learning.
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mb-12">
            Acuity began with a simple observation: education systems measure students by what they produce, not how they think. We're building the opposite — a platform that maps cognition, adapts in real time, and treats every learner as the original they are.
          </p>

          <div className="grid md:grid-cols-3 gap-4 mb-16">
            {[
              { v: "240k+", l: "Active learners" },
              { v: "1,200+", l: "Schools" },
              { v: "$48M", l: "Series B raised" },
            ].map((s) => (
              <div key={s.l} className="glass rounded-2xl p-6 border-gradient">
                <div className="font-display text-3xl text-gradient">{s.v}</div>
                <div className="text-sm text-muted-foreground mt-1">{s.l}</div>
              </div>
            ))}
          </div>

          <div className="space-y-8">
            {[
              { t: "Pedagogy first", d: "Every model decision is reviewed by learning scientists. We don't optimize for time-on-platform — we optimize for mastery." },
              { t: "Privacy by default", d: "Student data is sacred. SOC 2, FERPA, GDPR — and never used to train external models." },
              { t: "Built for institutions", d: "From a single classroom to entire districts, Acuity scales without losing the personal." },
            ].map((p) => (
              <div key={p.t}>
                <h3 className="font-display text-2xl mb-2">{p.t}</h3>
                <p className="text-muted-foreground leading-relaxed">{p.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  ),
});
