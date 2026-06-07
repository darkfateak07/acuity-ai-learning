import { Link } from "@tanstack/react-router";
import { Github, Twitter, Linkedin, Mail } from "lucide-react";
import { BrandLogo } from "@/components/site/BrandLogo";

const cols = [
  {
    title: "Platform",
    links: [
      { label: "AI Tutor", to: "/ai-tutor" },
      { label: "Assessments", to: "/assessments" },
      { label: "Learning Modules", to: "/modules" },
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
      { label: "About Acuity", to: "/about" },
      { label: "Contact Us", to: "/contact" },
      { label: "FAQ", to: "/faq" },
      { label: "Settings", to: "/settings" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="relative mt-28" style={{ borderTop: "1px solid rgba(44,95,110,0.12)" }}>
      {/* Gold accent line at top */}
      <div className="rule-gold w-full absolute -top-px" />

      <div className="mx-auto max-w-7xl px-6 py-16 grid gap-12 lg:grid-cols-5">
        {/* Brand column */}
        <div className="lg:col-span-2 space-y-5">
          <Link to="/" className="inline-block">
            <BrandLogo className="h-10 w-auto max-w-[10rem]" />
          </Link>
          <p className="text-sm leading-relaxed max-w-xs" style={{ color: "#6B7E85" }}>
            Next-generation AI learning infrastructure for students, parents, and institutions — where accuracy meets knowledge.
          </p>

          {/* Newsletter */}
          <div className="pt-1">
            <p className="text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: "#2C5F6E" }}>Stay Updated</p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 text-sm px-3 py-2 rounded-xl outline-none transition-all"
                style={{
                  background: "rgba(44,95,110,0.06)",
                  border: "1px solid rgba(44,95,110,0.15)",
                  color: "#1A3540",
                }}
              />
              <button
                className="px-4 py-2 text-sm font-semibold text-white rounded-xl transition-all hover:scale-[1.03]"
                style={{ background: "linear-gradient(135deg, #2C5F6E, #1A3F4A)" }}
              >
                Subscribe
              </button>
            </div>
          </div>

          {/* Social links */}
          <div className="flex gap-3 pt-1">
            {[
              { Icon: Twitter, href: "#", label: "Twitter" },
              { Icon: Github, href: "#", label: "GitHub" },
              { Icon: Linkedin, href: "#", label: "LinkedIn" },
              { Icon: Mail, href: "#", label: "Email" },
            ].map(({ Icon, href, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="h-9 w-9 grid place-items-center rounded-xl transition-all hover:scale-110"
                style={{
                  background: "rgba(44,95,110,0.08)",
                  color: "#2C5F6E",
                  border: "1px solid rgba(44,95,110,0.14)",
                }}
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        {/* Link columns */}
        {cols.map((c) => (
          <div key={c.title}>
            <h4 className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: "#B8943F" }}>
              {c.title}
            </h4>
            <ul className="space-y-2.5">
              {c.links.map((l) => (
                <li key={l.label}>
                  <Link
                    to={l.to}
                    className="text-sm transition-colors duration-200 hover:text-primary"
                    style={{ color: "#6B7E85" }}
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Bottom bar */}
      <div style={{ borderTop: "1px solid rgba(44,95,110,0.1)" }}>
        <div className="mx-auto max-w-7xl px-6 py-5 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-xs" style={{ color: "#6B7E85" }}>
            © {new Date().getFullYear()} Acuity Learning Hub. All rights reserved.
          </p>
          <div className="flex gap-5 text-xs" style={{ color: "#6B7E85" }}>
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-primary transition-colors">Security</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
