import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Sparkles } from "lucide-react";

export function AuthShell({
  title, subtitle, cta, footer, isSignup = false,
}: { title: string; subtitle: string; cta: string; footer: React.ReactNode; isSignup?: boolean }) {
  return (
    <div className="relative min-h-screen grid lg:grid-cols-2">
      <div className="absolute inset-0 grid-bg pointer-events-none opacity-40" />
      <div className="relative flex flex-col justify-center p-8 md:p-16">
        <Link to="/" className="flex items-center gap-2 mb-12">
          <div className="h-8 w-8 rounded-lg bg-gradient-primary grid place-items-center glow-primary">
            <Sparkles className="h-4 w-4 text-primary-foreground" />
          </div>
          <span className="font-display text-lg font-semibold">Acuity<span className="text-gradient">.</span></span>
        </Link>

        <div className="max-w-md w-full mx-auto lg:mx-0">
          <h1 className="font-display text-3xl md:text-4xl font-semibold mb-2">{title}</h1>
          <p className="text-muted-foreground mb-8">{subtitle}</p>

          <form className="space-y-4">
            {isSignup && (
              <div className="space-y-2">
                <Label>Full name</Label>
                <Input placeholder="Ada Lovelace" className="bg-white/5 border-white/10 h-11" />
              </div>
            )}
            <div className="space-y-2">
              <Label>Email</Label>
              <Input type="email" placeholder="you@school.edu" className="bg-white/5 border-white/10 h-11" />
            </div>
            <div className="space-y-2">
              <Label>Password</Label>
              <Input type="password" placeholder="••••••••" className="bg-white/5 border-white/10 h-11" />
            </div>
            <Button variant="hero" size="lg" className="w-full">{cta}</Button>
          </form>

          <div className="my-6 flex items-center gap-3">
            <div className="h-px flex-1 bg-border" />
            <span className="text-xs text-muted-foreground">or</span>
            <div className="h-px flex-1 bg-border" />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <Button variant="glass">Google</Button>
            <Button variant="glass">SSO</Button>
          </div>

          <div className="mt-8 text-sm text-center text-muted-foreground">{footer}</div>
        </div>
      </div>

      <div className="hidden lg:block relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-accent/10" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-primary/30 blur-[120px]" />
        <div className="relative h-full flex items-center justify-center p-12">
          <div className="glass-strong rounded-3xl border-gradient p-8 max-w-md shadow-elevated animate-float">
            <div className="text-xs text-muted-foreground mb-2">Today's insight</div>
            <p className="font-display text-2xl leading-snug mb-4">
              "You learn 32% faster in the late afternoon — your sessions land here for the next 2 weeks."
            </p>
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <Sparkles className="h-3 w-3 text-primary" />
              Acuity adaptive engine
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
