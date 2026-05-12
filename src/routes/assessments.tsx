import { createFileRoute } from "@tanstack/react-router";
import { AppShell } from "@/components/app/AppShell";
import { FileCheck, Clock, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/assessments")({
  head: () => ({ meta: [{ title: "Assessments — Acuity" }] }),
  component: () => (
    <AppShell title="Assessments">
      <div className="grid md:grid-cols-3 gap-4">
        {[
          { t: "Calculus II — Adaptive", q: 24, time: "30 min", lift: "+8%" },
          { t: "Organic Chemistry", q: 18, time: "25 min", lift: "+5%" },
          { t: "Physics: Waves", q: 30, time: "40 min", lift: "+6%" },
          { t: "Modern History essay", q: 1, time: "60 min", lift: "+4%" },
          { t: "Vocabulary sprint", q: 50, time: "10 min", lift: "+3%" },
          { t: "Statistics review", q: 22, time: "35 min", lift: "+7%" },
        ].map((a) => (
          <div key={a.t} className="glass rounded-2xl p-5 border-gradient hover:bg-white/[0.05] transition group">
            <div className="flex items-center gap-2 mb-3">
              <div className="h-9 w-9 rounded-lg bg-gradient-primary grid place-items-center">
                <FileCheck className="h-4 w-4 text-primary-foreground" />
              </div>
              <div className="font-medium">{a.t}</div>
            </div>
            <div className="flex gap-4 text-xs text-muted-foreground mb-4">
              <span>{a.q} items</span>
              <span className="flex items-center gap-1"><Clock className="h-3 w-3" />{a.time}</span>
              <span className="flex items-center gap-1 text-accent"><TrendingUp className="h-3 w-3" />{a.lift}</span>
            </div>
            <Button variant="glass" size="sm" className="w-full">Start</Button>
          </div>
        ))}
      </div>
    </AppShell>
  ),
});
