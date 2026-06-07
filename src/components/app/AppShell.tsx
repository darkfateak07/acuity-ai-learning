import { Link, useRouterState } from "@tanstack/react-router";
import {
  LayoutDashboard, Bot, BookOpen, FileCheck, BarChart3, Users, Building2, Settings, Sparkles, LogOut, Bell,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { BrandLogo } from "@/components/site/BrandLogo";

const items = [
  { icon: LayoutDashboard, label: "Overview", to: "/dashboard" },
  { icon: Bot, label: "AI Tutor", to: "/ai-tutor" },
  { icon: BookOpen, label: "Modules", to: "/modules" },
  { icon: FileCheck, label: "Assessments", to: "/assessments" },
  { icon: BarChart3, label: "Analytics", to: "/analytics" },
  { icon: Users, label: "Parent View", to: "/parent" },
  { icon: Building2, label: "Admin", to: "/admin" },
  { icon: Settings, label: "Settings", to: "/settings" },
];

export function AppShell({ title, children }: { title: string; children: React.ReactNode }) {
  const path = useRouterState({ select: (s) => s.location.pathname });
  return (
    <div className="min-h-screen flex">
      <aside className="hidden lg:flex w-64 flex-col border-r-2 border-primary/20 bg-sidebar p-4">
        <Link to="/" className="flex items-center gap-2 mb-8 px-2 pt-1">
          <BrandLogo compact showWordmark={false} />
          <span className="font-display text-lg font-semibold tracking-[0.16em] text-primary">ACUITY</span>
        </Link>
        <nav className="space-y-2 flex-1">
          {items.map((i) => {
            const active = path === i.to;
            return (
              <Link
                key={i.to}
                to={i.to}
                className={`flex items-center gap-3 px-4 py-3 rounded-2xl text-sm font-medium transition ${
                  active ? "bg-gradient-primary text-primary-foreground shadow-lg" : "text-foreground hover:bg-primary/10"
                }`}
              >
                <i.icon className="h-5 w-5" />
                {i.label}
                {active && <span className="ml-auto h-2 w-2 rounded-full bg-primary-foreground" />}
              </Link>
            );
          })}
        </nav>
        <div className="glass rounded-2xl p-4 mt-4">
          <div className="flex items-center gap-3 mb-3">
            <div className="h-10 w-10 rounded-full bg-gradient-primary grid place-items-center text-xs font-bold text-primary-foreground">AC</div>
            <div className="text-xs">
              <div className="font-medium">Aria Chen</div>
              <div className="text-muted-foreground">Grade 11</div>
            </div>
          </div>
          <Button asChild variant="ghost" size="sm" className="w-full justify-start text-muted-foreground">
            <Link to="/login"><LogOut className="h-3.5 w-3.5" /> Logout</Link>
          </Button>
        </div>
      </aside>
      <div className="flex-1 flex flex-col min-w-0">
        <header className="h-16 border-b border-border/60 glass-strong flex items-center justify-between px-6">
          <h1 className="font-display text-xl">{title}</h1>
          <div className="flex items-center gap-2">
            <button className="h-9 w-9 grid place-items-center rounded-lg hover:bg-white/5">
              <Bell className="h-4 w-4" />
            </button>
            <Button variant="hero" size="sm">Upgrade</Button>
          </div>
        </header>
        <div className="flex-1 p-6 md:p-8 overflow-auto">{children}</div>
      </div>
    </div>
  );
}
