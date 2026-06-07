import { Link } from "@tanstack/react-router";
import { Github, Twitter, Linkedin, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { BrandLogo } from "./BrandLogo";

const cols = [
  {
    title: "Product",
    links: [
      { label: "AI Tutor", to: "/ai-tutor" },
      { label: "Assessments", to: "/assessments" },
      { label: "Modules", to: "/modules" },
      { label: "Analytics", to: "/analytics" },
    ],
  },
  {
    title: "Audience",
    links: [
      { label: "Students", to: "/dashboard" },
      { label: "Parents", to: "/parent" },
      { label: "Schools", to: "/admin" },
      { label: "Pricing", to: "/pricing" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", to: "/about" },
      { label: "Contact", to: "/contact" },
      { label: "FAQ", to: "/faq" },
      { label: "Settings", to: "/settings" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="relative mt-32 border-t border-border/60">
      <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
      <div className="mx-auto max-w-7xl px-6 py-16 grid gap-12 lg:grid-cols-5">
        <div className="lg:col-span-2 space-y-4">
          <Link to="/" className="flex items-center gap-2">
            <BrandLogo compact showWordmark={false} />
            <span className="font-display text-lg font-semibold tracking-[0.16em] text-primary">
              ACUITY
            </span>
          </Link>
          <p className="text-sm text-muted-foreground max-w-sm">
            Next-generation AI learning infrastructure for students, parents, and institutions.
          </p>
          <div className="flex gap-2 pt-2">
            <Input placeholder="Your email" className="bg-white/5 border-white/10" />
            <Button variant="hero" size="sm">Subscribe</Button>
          </div>
          <div className="flex gap-3 pt-4">
            {[Twitter, Github, Linkedin].map((Icon, i) => (
              <a key={i} href="#" className="h-9 w-9 grid place-items-center rounded-lg glass hover:bg-white/10 transition">
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
        {cols.map((c) => (
          <div key={c.title}>
            <h4 className="text-sm font-semibold mb-4">{c.title}</h4>
            <ul className="space-y-2.5">
              {c.links.map((l) => (
                <li key={l.label}>
                  <Link to={l.to} className="text-sm text-muted-foreground hover:text-foreground transition">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-border/60">
        <div className="mx-auto max-w-7xl px-6 py-6 flex flex-col sm:flex-row justify-between items-center gap-2">
          <p className="text-xs text-muted-foreground">© 2026 Acuity Learning Hub. All rights reserved.</p>
          <div className="flex gap-4 text-xs text-muted-foreground">
            <a href="#" className="hover:text-foreground">Privacy</a>
            <a href="#" className="hover:text-foreground">Terms</a>
            <a href="#" className="hover:text-foreground">Security</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
