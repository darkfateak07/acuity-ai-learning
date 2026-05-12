import { createFileRoute } from "@tanstack/react-router";
import { AppShell } from "@/components/app/AppShell";
import { ResponsiveContainer, AreaChart, Area, XAxis, Tooltip, RadarChart, Radar, PolarGrid, PolarAngleAxis } from "recharts";

const trend = Array.from({ length: 30 }, (_, i) => ({ d: i + 1, v: 50 + Math.sin(i / 3) * 15 + i * 1.2 }));
const radar = [
  { s: "Math", v: 84 }, { s: "Science", v: 78 }, { s: "Lang", v: 92 },
  { s: "History", v: 65 }, { s: "Logic", v: 88 }, { s: "Memory", v: 72 },
];

export const Route = createFileRoute("/analytics")({
  head: () => ({ meta: [{ title: "Analytics — Acuity" }] }),
  component: () => (
    <AppShell title="Analytics">
      <div className="grid lg:grid-cols-3 gap-4">
        <div className="glass rounded-2xl p-5 border-gradient lg:col-span-2">
          <h3 className="font-medium mb-4">Mastery growth · 30 days</h3>
          <ResponsiveContainer width="100%" height={280}>
            <AreaChart data={trend}>
              <defs>
                <linearGradient id="g2" x1="0" x2="0" y1="0" y2="1">
                  <stop offset="0%" stopColor="oklch(0.78 0.16 215)" stopOpacity={0.6} />
                  <stop offset="100%" stopColor="oklch(0.78 0.16 215)" stopOpacity={0} />
                </linearGradient>
              </defs>
              <XAxis dataKey="d" stroke="oklch(0.68 0.025 260)" fontSize={10} />
              <Tooltip contentStyle={{ background: "oklch(0.18 0.025 270)", border: "1px solid oklch(1 0 0 / 0.1)", borderRadius: 12 }} />
              <Area type="monotone" dataKey="v" stroke="oklch(0.78 0.16 215)" fill="url(#g2)" strokeWidth={2} />
            </AreaChart>
          </ResponsiveContainer>
        </div>
        <div className="glass rounded-2xl p-5 border-gradient">
          <h3 className="font-medium mb-4">Cognitive profile</h3>
          <ResponsiveContainer width="100%" height={280}>
            <RadarChart data={radar}>
              <PolarGrid stroke="oklch(1 0 0 / 0.1)" />
              <PolarAngleAxis dataKey="s" stroke="oklch(0.68 0.025 260)" fontSize={11} />
              <Radar dataKey="v" stroke="oklch(0.7 0.22 295)" fill="oklch(0.7 0.22 295)" fillOpacity={0.3} />
            </RadarChart>
          </ResponsiveContainer>
        </div>
      </div>
      <div className="grid lg:grid-cols-3 gap-4 mt-4">
        {["Retention", "Velocity", "Engagement"].map((t, i) => (
          <div key={t} className="glass rounded-2xl p-5 border-gradient">
            <div className="text-xs text-muted-foreground">{t}</div>
            <div className="text-3xl font-display font-semibold text-gradient mt-1">{[87, 92, 78][i]}%</div>
            <div className="text-xs text-accent mt-1">+{[4, 6, 9][i]}% this week</div>
          </div>
        ))}
      </div>
    </AppShell>
  ),
});
