import { createFileRoute } from "@tanstack/react-router";
import { AppShell } from "@/components/app/AppShell";
import { Heart, TrendingUp, Calendar, Clock } from "lucide-react";

export const Route = createFileRoute("/parent")({
  head: () => ({ meta: [{ title: "Parent Dashboard — Acuity" }] }),
  component: () => (
    <AppShell title="Parent View">
      <div className="grid md:grid-cols-2 gap-4 mb-4">
        {["Emma · Grade 9", "Liam · Grade 6"].map((c, i) => (
          <div key={c} className="glass rounded-2xl p-6 border-gradient">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 rounded-full bg-gradient-primary grid place-items-center font-semibold">{c[0]}</div>
                <div>
                  <p className="font-medium">{c}</p>
                  <p className="text-xs text-muted-foreground">Active 2h ago</p>
                </div>
              </div>
              <Heart className="h-4 w-4 text-primary" />
            </div>
            <div className="grid grid-cols-3 gap-2 mb-4">
              {[
                { i: TrendingUp, l: "Lift", v: ["+12%", "+8%"][i] },
                { i: Clock, l: "Hours", v: ["8.2", "5.4"][i] },
                { i: Calendar, l: "Streak", v: [`${23 - i * 5}d`, `${18}d`][i] },
              ].map((s) => (
                <div key={s.l} className="glass rounded-xl p-3">
                  <s.i className="h-3 w-3 text-muted-foreground mb-1" />
                  <div className="text-lg font-semibold">{s.v}</div>
                  <div className="text-[10px] text-muted-foreground">{s.l}</div>
                </div>
              ))}
            </div>
            <p className="text-sm text-muted-foreground">
              Strong week. Briefly struggled with {["stoichiometry", "fractions"][i]} — Acuity scheduled remediation.
            </p>
          </div>
        ))}
      </div>
      <div className="glass rounded-2xl p-6 border-gradient">
        <h3 className="font-medium mb-4">Weekly digest</h3>
        <p className="text-sm text-muted-foreground leading-relaxed">
          Both children are above their personalized growth targets. Emma's peak focus window is 16:00–18:00; Liam's is morning. Suggested next steps and schedule have been quietly applied.
        </p>
      </div>
    </AppShell>
  ),
});
