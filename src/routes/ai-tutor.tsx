import { createFileRoute } from "@tanstack/react-router";
import { AppShell } from "@/components/app/AppShell";
import { Bot, User, Send, Sparkles, BookOpen } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/ai-tutor")({
  head: () => ({ meta: [{ title: "AI Tutor — Acuity" }] }),
  component: TutorPage,
});

const messages = [
  { role: "user", text: "Why does the chain rule work geometrically?" },
  { role: "ai", text: "Picture two gears meshed together. When the outer gear rotates, the rate the inner spins is the product of their ratios — that's f'(g(x)) · g'(x)." },
  { role: "user", text: "Can you show me an example?" },
  { role: "ai", text: "Sure. Take f(g(x)) where g(x) = 3x² and f(u) = sin(u). Then df/dx = cos(3x²) · 6x. Want to try one yourself?" },
];

function TutorPage() {
  return (
    <AppShell title="AI Tutor">
      <div className="grid lg:grid-cols-[1fr_320px] gap-4 h-[calc(100vh-10rem)]">
        <div className="glass-strong rounded-2xl border-gradient flex flex-col overflow-hidden">
          <div className="flex items-center gap-2 p-4 border-b border-white/5">
            <div className="h-8 w-8 rounded-lg bg-gradient-primary grid place-items-center">
              <Bot className="h-4 w-4 text-primary-foreground" />
            </div>
            <div>
              <p className="text-sm font-medium">Acuity Tutor · Calculus</p>
              <p className="text-[10px] text-accent">● Adaptive mode</p>
            </div>
          </div>
          <div className="flex-1 overflow-auto p-6 space-y-4">
            {messages.map((m, i) => (
              <div key={i} className={`flex gap-3 ${m.role === "user" ? "" : "justify-start"}`}>
                {m.role === "ai" && (
                  <div className="h-8 w-8 rounded-full bg-gradient-primary grid place-items-center shrink-0">
                    <Bot className="h-4 w-4 text-primary-foreground" />
                  </div>
                )}
                <div className={`rounded-2xl px-4 py-2.5 max-w-[75%] text-sm ${
                  m.role === "user"
                    ? "ml-auto bg-white/[0.05] border border-white/10"
                    : "bg-gradient-to-br from-primary/15 to-accent/10 border border-primary/20"
                }`}>{m.text}</div>
                {m.role === "user" && (
                  <div className="h-8 w-8 rounded-full bg-white/5 grid place-items-center shrink-0">
                    <User className="h-4 w-4" />
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="p-4 border-t border-white/5 flex gap-2">
            <Input placeholder="Ask anything..." className="bg-white/5 border-white/10 h-11" />
            <Button variant="hero" size="lg"><Send className="h-4 w-4" /></Button>
          </div>
        </div>

        <div className="space-y-3">
          <div className="glass rounded-2xl p-4 border-gradient">
            <div className="flex items-center gap-2 mb-3"><Sparkles className="h-4 w-4 text-primary" /><h4 className="text-sm font-medium">Concept map</h4></div>
            {["Limits", "Derivatives", "Chain rule", "Integration"].map((t) => (
              <div key={t} className="text-sm py-1.5 text-muted-foreground hover:text-foreground cursor-pointer">{t}</div>
            ))}
          </div>
          <div className="glass rounded-2xl p-4 border-gradient">
            <div className="flex items-center gap-2 mb-3"><BookOpen className="h-4 w-4 text-primary" /><h4 className="text-sm font-medium">Suggested practice</h4></div>
            <p className="text-xs text-muted-foreground">10 problems · ~15 min · predicted +6% mastery</p>
            <Button variant="glass" size="sm" className="mt-3 w-full">Begin</Button>
          </div>
        </div>
      </div>
    </AppShell>
  );
}
