import { createFileRoute } from "@tanstack/react-router";
import { AppShell } from "@/components/app/AppShell";
import { BookOpen } from "lucide-react";

export const Route = createFileRoute("/modules")({
  head: () => ({ meta: [{ title: "Learning Modules — Acuity" }] }),
  component: () => (
    <AppShell title="Learning Modules">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {[
          "Differential Equations", "Organic Chemistry", "Modern History", "Linear Algebra",
          "Quantum Mechanics", "Comparative Literature", "Microeconomics", "Statistics",
          "Cell Biology",
        ].map((m, i) => (
          <div key={m} className="glass rounded-2xl p-6 border-gradient hover:scale-[1.02] transition group relative overflow-hidden">
            <div className="absolute -top-12 -right-12 h-32 w-32 rounded-full bg-primary/10 blur-2xl opacity-0 group-hover:opacity-100 transition" />
            <div className="h-10 w-10 rounded-lg bg-gradient-primary grid place-items-center mb-4">
              <BookOpen className="h-5 w-5 text-primary-foreground" />
            </div>
            <h3 className="font-display text-lg mb-1">{m}</h3>
            <p className="text-xs text-muted-foreground mb-4">{12 + i} lessons · {3 + i} hours</p>
            <div className="h-1.5 rounded-full bg-white/5 overflow-hidden">
              <div className="h-full bg-gradient-primary" style={{ width: `${30 + i * 7}%` }} />
            </div>
          </div>
        ))}
      </div>
    </AppShell>
  ),
});
