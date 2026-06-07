import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BrandLogo } from "./BrandLogo";

const links = [
  { label: "Features", to: "/#features" },
  { label: "AI Tutor", to: "/ai-tutor" },
  { label: "Analytics", to: "/analytics" },
  { label: "Parents", to: "/parent" },
  { label: "Schools", to: "/admin" },
  { label: "Pricing", to: "/pricing" },
  { label: "Contact", to: "/contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? "py-2" : "py-4"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4">
        <div
          className={`flex items-center justify-between rounded-full px-6 md:px-8 py-3 transition-all duration-500 ${
            scrolled ? "glass-strong shadow-lg" : "glass"
          }`}
        >
          <Link to="/" className="flex items-center gap-2 group">
            <BrandLogo compact showWordmark={false} className="transition-transform group-hover:scale-105" />
            <span className="font-display text-xl font-semibold tracking-[0.12em] text-primary">
              ACUITY
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-2">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.to}
                className="px-4 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors rounded-full hover:bg-primary/10"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-2">
            <Button asChild variant="ghost" size="sm">
              <Link to="/login">Login</Link>
            </Button>
            <Button asChild variant="hero" size="sm">
              <Link to="/signup">Start Learning</Link>
            </Button>
          </div>

          <button
            className="lg:hidden p-2 rounded-full hover:bg-primary/10 transition-colors"
            onClick={() => setOpen(!open)}
            aria-label="Menu"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {open && (
          <div className="lg:hidden mt-3 glass-strong rounded-3xl p-4 space-y-2">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.to}
                onClick={() => setOpen(false)}
                className="block px-4 py-2 text-sm font-medium text-foreground rounded-full hover:bg-primary/15"
              >
                {l.label}
              </a>
            ))}
            <div className="pt-3 flex gap-2">
              <Button asChild variant="ghost" size="sm" className="flex-1">
                <Link to="/login">Login</Link>
              </Button>
              <Button asChild variant="hero" size="sm" className="flex-1">
                <Link to="/signup">Start</Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </motion.header>
  );
}
