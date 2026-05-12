import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  { q: "How does the AI tutor adapt to each student?", a: "Acuity uses knowledge tracing — a Bayesian model of mastery — combined with behavioral signals to update each learner's cognitive map after every interaction. Lessons, hints, and assessments adapt accordingly." },
  { q: "Is student data safe and private?", a: "Yes. We are SOC 2 Type II certified, FERPA and GDPR compliant. Data is encrypted at rest and in transit; institutions can opt for on-prem deployment." },
  { q: "Which subjects and grades are supported?", a: "K-12 mathematics, sciences, languages, and humanities. Higher-ed STEM and standardized exam prep (SAT, A-Level, IB) are fully supported." },
  { q: "Can I integrate Acuity with my LMS?", a: "Yes — native integrations for Canvas, Schoology, Google Classroom, and Clever. Generic LTI 1.3 is also supported." },
  { q: "Do you offer a free trial?", a: "All plans include a 14-day free trial. School and Enterprise tiers include a guided pilot with our success team." },
];

export function FAQ() {
  return (
    <section id="faq" className="relative py-32">
      <div className="mx-auto max-w-3xl px-6">
        <div className="text-center mb-12">
          <h2 className="font-display text-4xl md:text-5xl font-semibold mb-4">
            Frequently asked <span className="text-gradient">questions.</span>
          </h2>
        </div>
        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((f, i) => (
            <AccordionItem key={i} value={`i${i}`} className="glass rounded-2xl border-gradient px-5 border-0">
              <AccordionTrigger className="text-left hover:no-underline py-5">{f.q}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">{f.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
