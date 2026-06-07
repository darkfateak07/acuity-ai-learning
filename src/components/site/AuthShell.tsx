import { Link } from "@tanstack/react-router";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowRight, Quote } from "lucide-react";
import { BrandLogo } from "@/components/site/BrandLogo";

export function AuthShell({
  title, subtitle, cta, footer, isSignup = false,
}: { title: string; subtitle: string; cta: string; footer: React.ReactNode; isSignup?: boolean }) {
  return (
    <div className="relative min-h-screen grid lg:grid-cols-2 bg-background">
      {/* Left — Form panel */}
      <div className="relative flex flex-col justify-center p-8 md:p-14">
        <Link to="/" className="inline-block mb-12">
          <BrandLogo className="h-10 w-auto max-w-[11rem]" />
        </Link>

        <div className="max-w-sm w-full mx-auto lg:mx-0">
          <h1 className="font-display text-3xl md:text-4xl font-bold mb-2" style={{ color: "#1A3540" }}>
            {title}
          </h1>
          <p className="text-sm mb-8" style={{ color: "#6B7E85" }}>{subtitle}</p>

          <form className="space-y-4">
            {isSignup && (
              <div className="space-y-1.5">
                <Label className="text-xs font-semibold uppercase tracking-wide" style={{ color: "#2C5F6E" }}>
                  Full Name
                </Label>
                <Input
                  placeholder="Ada Lovelace"
                  className="h-11 rounded-xl text-sm"
                  style={{ border: "1px solid rgba(44,95,110,0.2)", background: "rgba(44,95,110,0.04)" }}
                />
              </div>
            )}
            <div className="space-y-1.5">
              <Label className="text-xs font-semibold uppercase tracking-wide" style={{ color: "#2C5F6E" }}>
                Email
              </Label>
              <Input
                type="email"
                placeholder="you@institution.edu"
                className="h-11 rounded-xl text-sm"
                style={{ border: "1px solid rgba(44,95,110,0.2)", background: "rgba(44,95,110,0.04)" }}
              />
            </div>
            <div className="space-y-1.5">
              <Label className="text-xs font-semibold uppercase tracking-wide" style={{ color: "#2C5F6E" }}>
                Password
              </Label>
              <Input
                type="password"
                placeholder="••••••••"
                className="h-11 rounded-xl text-sm"
                style={{ border: "1px solid rgba(44,95,110,0.2)", background: "rgba(44,95,110,0.04)" }}
              />
            </div>

            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 h-11 rounded-xl text-sm font-semibold text-white mt-2 transition-all hover:scale-[1.02] hover:shadow-lg"
              style={{ background: "linear-gradient(135deg, #2C5F6E, #1A3F4A)", boxShadow: "0 6px 24px -8px rgba(44,95,110,0.5)" }}
            >
              {cta} <ArrowRight className="h-4 w-4" />
            </button>
          </form>

          {/* Divider */}
          <div className="my-6 flex items-center gap-3">
            <div className="h-px flex-1" style={{ background: "rgba(44,95,110,0.15)" }} />
            <span className="text-xs" style={{ color: "#6B7E85" }}>or continue with</span>
            <div className="h-px flex-1" style={{ background: "rgba(44,95,110,0.15)" }} />
          </div>

          <div className="grid grid-cols-2 gap-3">
            {["Google", "SSO"].map((provider) => (
              <button
                key={provider}
                className="h-11 rounded-xl text-sm font-medium transition-all hover:scale-[1.02]"
                style={{
                  border: "1px solid rgba(44,95,110,0.2)",
                  color: "#2C5F6E",
                  background: "rgba(44,95,110,0.04)",
                }}
              >
                {provider}
              </button>
            ))}
          </div>

          <div className="mt-8 text-sm text-center" style={{ color: "#6B7E85" }}>
            {footer}
          </div>
        </div>
      </div>

      {/* Right — Brand panel */}
      <div className="hidden lg:flex relative overflow-hidden items-center justify-center"
        style={{ background: "linear-gradient(145deg, #1A3F4A 0%, #2C5F6E 55%, #1A3540 100%)" }}>
        {/* Dot texture */}
        <div className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />
        {/* Gold lines */}
        <div className="absolute top-0 left-0 right-0 h-[2px]"
          style={{ background: "linear-gradient(90deg, transparent, #B8943F, transparent)" }} />
        <div className="absolute bottom-0 left-0 right-0 h-[2px]"
          style={{ background: "linear-gradient(90deg, transparent, #B8943F, transparent)" }} />

        <div className="relative z-10 max-w-md p-12">
          {/* Large brand logo */}
          <div className="mb-12 flex justify-center">
            <BrandLogo className="h-20 w-auto max-w-[16rem] brightness-0 invert" />
          </div>

          {/* Quote card */}
          <div className="rounded-2xl p-7 animate-float"
            style={{
              background: "rgba(255,255,255,0.07)",
              border: "1px solid rgba(255,255,255,0.12)",
              backdropFilter: "blur(10px)",
            }}
          >
            <Quote className="h-8 w-8 mb-4 opacity-40" style={{ color: "#D4AF6A" }} />
            <p className="font-display text-xl leading-snug text-white font-medium italic mb-5">
              "Our students improved their assessment scores by an average of 28% within the first month of using Acuity."
            </p>
            <div className="flex items-center gap-3">
              <div className="h-9 w-9 rounded-full grid place-items-center text-sm font-bold text-white"
                style={{ background: "rgba(184,148,63,0.5)" }}>
                P
              </div>
              <div>
                <p className="text-sm font-semibold text-white">Principal, Westbrook Academy</p>
                <p className="text-xs opacity-60 text-white">Secondary School, UK</p>
              </div>
            </div>
          </div>

          <p className="text-center text-xs mt-8 opacity-40 text-white uppercase tracking-widest">
            Where Accuracy Meets Knowledge
          </p>
        </div>
      </div>
    </div>
  );
}
