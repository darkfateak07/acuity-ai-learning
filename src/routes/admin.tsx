import { createFileRoute } from "@tanstack/react-router";
import { AppShell } from "@/components/app/AppShell";
import { Building2, Users, Activity, AlertTriangle } from "lucide-react";
import { ResponsiveContainer, BarChart, Bar, XAxis, Tooltip } from "recharts";

const grades = Array.from({ length: 12 }, (_, i) => ({ g: `G${i + 1}`, v: 60 + Math.random() * 30 }));

export const Route = createFileRoute("/admin")({
  head: () => ({ meta: [{ title: "Admin Dashboard — Acuity" }] }),
  component: () => (
    <AppShell title="Lincoln Academy · Admin">
      <div className="grid lg:grid-cols-4 gap-4 mb-4">
        {[
          { i: Users, l: "Students", v: "3,420" },
          { i: Activity, l: "Live now", v: "1,284" },
          { i: Building2, l: "Classes", v: "184" },
          { i: AlertTriangle, l: "At risk", v: "47" },
        ].map((s) => (
          <div key={s.l} className="glass rounded-2xl p-5 border-gradient">
            <s.i className="h-4 w-4 text-muted-foreground mb-2" />
            <div className="text-3xl font-display font-semibold text-gradient">{s.v}</div>
            <div className="text-xs text-muted-foreground mt-1">{s.l}</div>
          </div>
        ))}
      </div>

      <div className="grid lg:grid-cols-3 gap-4">
        <div className="glass rounded-2xl p-5 border-gradient lg:col-span-2">
          <h3 className="font-medium mb-4">Engagement by grade</h3>
          <ResponsiveContainer width="100%" height={280}>
            <BarChart data={grades}>
              <XAxis dataKey="g" stroke="oklch(0.68 0.025 260)" fontSize={11} />
              <Tooltip contentStyle={{ background: "oklch(0.18 0.025 270)", border: "1px solid oklch(1 0 0 / 0.1)", borderRadius: 12 }} />
              <Bar dataKey="v" fill="oklch(0.7 0.22 295)" radius={[6, 6, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div className="glass rounded-2xl p-5 border-gradient">
          <h3 className="font-medium mb-4">Recent activity</h3>
          <div className="space-y-3 text-sm">
            {[
              "184 students started new module",
              "Algebra II flagged — engagement dip",
              "Teacher report generated",
              "AI recommended 12 interventions",
              "1,284 active sessions",
            ].map((a, i) => (
              <div key={i} className="flex items-start gap-2 pb-3 border-b border-white/5 last:border-0">
                <span className="h-1.5 w-1.5 rounded-full bg-accent mt-1.5" />
                <span className="text-muted-foreground">{a}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </AppShell>
  ),
});
