import { createFileRoute } from "@tanstack/react-router";
import { AppShell } from "@/components/app/AppShell";
import { TrendingUp, Target, Flame, BookOpen, Sparkles, Clock } from "lucide-react";
import { LineChart, Line, ResponsiveContainer, AreaChart, Area, BarChart, Bar, XAxis, Tooltip } from "recharts";

export const Route = createFileRoute("/dashboard")({
  head: () => ({ meta: [{ title: "Student Dashboard — Acuity" }] }),
  component: Dashboard,
});

const data = Array.from({ length: 12 }, (_, i) => ({ d: `W${i+1}`, v: 40 + Math.sin(i / 2) * 20 + i * 3, p: 30 + i * 4 }));
const subjects = [
  { s: "Calculus", v: 84 }, { s: "Physics", v: 71 }, { s: "Chemistry", v: 92 },
  { s: "Biology", v: 65 }, { s: "History", v: 78 },
];

function Dashboard() {
  return (
    <AppShell title="Welcome back, Aria.">
      <div className="grid lg:grid-cols-4 gap-4 mb-4">
        {[
          { i: TrendingUp, l: "Mastery", v: "78%", s: "+6.2%" },
          { i: Target, l: "Accuracy", v: "94%", s: "Top 3%" },
          { i: Flame, l: "Streak", v: "23d", s: "Personal best" },
          { i: Clock, l: "Focus time", v: "8.2h", s: "this week" },
        ].map((s) => (
          <div key={s.l} className="glass rounded-2xl p-5 border-gradient">
            <div className="flex items-center justify-between mb-2">
              <s.i className="h-4 w-4 text-muted-foreground" />
              <span className="text-[10px] text-accent">{s.s}</span>
            </div>
            <div className="text-3xl font-display font-semibold text-gradient">{s.v}</div>
            <div className="text-xs text-muted-foreground mt-1">{s.l}</div>
          </div>
        ))}
      </div>

      <div className="grid lg:grid-cols-3 gap-4 mb-4">
        <div className="glass rounded-2xl p-5 lg:col-span-2 border-gradient">
          <div className="flex justify-between mb-4">
            <h3 className="font-medium">Mastery curve</h3>
            <span className="text-xs text-muted-foreground">12 weeks</span>
          </div>
          <ResponsiveContainer width="100%" height={240}>
            <AreaChart data={data}>
              <defs>
                <linearGradient id="ma" x1="0" x2="0" y1="0" y2="1">
                  <stop offset="0%" stopColor="oklch(0.7 0.22 295)" stopOpacity={0.5} />
                  <stop offset="100%" stopColor="oklch(0.7 0.22 295)" stopOpacity={0} />
                </linearGradient>
              </defs>
              <XAxis dataKey="d" stroke="oklch(0.68 0.025 260)" fontSize={11} />
              <Tooltip contentStyle={{ background: "oklch(0.18 0.025 270)", border: "1px solid oklch(1 0 0 / 0.1)", borderRadius: 12 }} />
              <Area type="monotone" dataKey="v" stroke="oklch(0.7 0.22 295)" fill="url(#ma)" strokeWidth={2} />
              <Line type="monotone" dataKey="p" stroke="oklch(0.78 0.16 215)" strokeWidth={2} dot={false} />
            </AreaChart>
          </ResponsiveContainer>
        </div>
        <div className="glass rounded-2xl p-5 border-gradient">
          <h3 className="font-medium mb-4">Subjects</h3>
          <ResponsiveContainer width="100%" height={240}>
            <BarChart data={subjects}>
              <XAxis dataKey="s" stroke="oklch(0.68 0.025 260)" fontSize={10} />
              <Tooltip contentStyle={{ background: "oklch(0.18 0.025 270)", border: "1px solid oklch(1 0 0 / 0.1)", borderRadius: 12 }} />
              <Bar dataKey="v" fill="oklch(0.78 0.16 215)" radius={[6, 6, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-4">
        <div className="glass rounded-2xl p-5 border-gradient">
          <div className="flex items-center gap-2 mb-4">
            <Sparkles className="h-4 w-4 text-primary" />
            <h3 className="font-medium">AI recommendations</h3>
          </div>
          {["Practice integration by parts", "Review Newton's third law", "Vocabulary sprint: 20 mins"].map((r) => (
            <div key={r} className="flex items-center justify-between py-3 border-b border-white/5 last:border-0">
              <span className="text-sm">{r}</span>
              <button className="text-xs text-accent hover:underline">Start</button>
            </div>
          ))}
        </div>
        <div className="glass rounded-2xl p-5 border-gradient">
          <div className="flex items-center gap-2 mb-4">
            <BookOpen className="h-4 w-4 text-primary" />
            <h3 className="font-medium">Continue learning</h3>
          </div>
          {[
            { t: "Differential Equations", p: 64 },
            { t: "Organic Chemistry", p: 38 },
            { t: "Modern History", p: 81 },
          ].map((m) => (
            <div key={m.t} className="py-3 border-b border-white/5 last:border-0">
              <div className="flex justify-between text-sm mb-1.5"><span>{m.t}</span><span className="text-muted-foreground">{m.p}%</span></div>
              <div className="h-1.5 rounded-full bg-white/5 overflow-hidden">
                <div className="h-full bg-gradient-primary" style={{ width: `${m.p}%` }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </AppShell>
  );
}
