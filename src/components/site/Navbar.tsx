import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { BrandLogo } from "@/components/site/BrandLogo";

const links = [
  { label: "Features", to: "/#features" },
  { label: "AI Tutor", to: "/ai-tutor" },
  { label: "Analytics", to: "/analytics" },
  { label: "For Parents", to: "/parent" },
  { label: "For Schools", to: "/admin" },
  { label: "Pricing", to: "/pricing" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${scrolled ? "py-2" : "py-4"}`}
    >
      <div className="mx-auto max-w-7xl px-4">
        <div
          className={`flex items-center justify-between rounded-2xl px-5 md:px-8 py-3 transition-all duration-500 ${
            scrolled
              ? "glass-strong shadow-[0_4px_32px_-8px_rgba(44,95,110,0.2)]"
              : "glass"
          }`}
        >
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group shrink-0">
            <BrandLogo className="h-10 w-auto max-w-[9rem] transition-transform duration-300 group-hover:scale-[1.03]" />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.to}
                className="px-3 py-2 text-sm font-medium rounded-lg transition-all duration-200"
                style={{ color: "#1A3540" }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.background = "rgba(44,95,110,0.08)";
                  (e.currentTarget as HTMLElement).style.color = "#2C5F6E";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.background = "";
                  (e.currentTarget as HTMLElement).style.color = "#1A3540";
                }}
              >
                {l.label}
              </a>
            ))}
          </nav>

          {/* CTA buttons */}
          <div className="hidden md:flex items-center gap-2">
            <Link
              to="/login"
              className="px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200"
              style={{ color: "#2C5F6E" }}
            >
              Sign In
            </Link>
            <Link
              to="/signup"
              className="px-5 py-2.5 text-sm font-semibold rounded-xl text-white shadow-md transition-all duration-200 hover:scale-[1.03] hover:shadow-lg"
              style={{ background: "linear-gradient(135deg, #2C5F6E, #1A3F4A)", boxShadow: "0 4px 20px -6px rgba(44,95,110,0.4)" }}
            >
              Start Free
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden p-2 rounded-xl transition-colors"
            style={{ color: "#2C5F6E" }}
            onClick={() => setOpen(!open)}
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -8, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -8, scale: 0.97 }}
              transition={{ duration: 0.2 }}
              className="lg:hidden mt-2 glass-strong rounded-2xl p-4 space-y-1"
              style={{ border: "1px solid rgba(44,95,110,0.15)" }}
            >
              {links.map((l) => (
                <a
                  key={l.label}
                  href={l.to}
                  onClick={() => setOpen(false)}
                  className="flex items-center px-4 py-2.5 text-sm font-medium rounded-xl transition-all"
                  style={{ color: "#1A3540" }}
                >
                  {l.label}
                </a>
              ))}
              <div className="pt-3 flex gap-2 border-t" style={{ borderColor: "rgba(44,95,110,0.1)" }}>
                <Link to="/login" className="flex-1 text-center px-4 py-2.5 text-sm font-medium rounded-xl transition-all"
                  style={{ color: "#2C5F6E", background: "rgba(44,95,110,0.08)" }}>
                  Sign In
                </Link>
                <Link to="/signup" className="flex-1 text-center px-4 py-2.5 text-sm font-semibold rounded-xl text-white transition-all"
                  style={{ background: "linear-gradient(135deg, #2C5F6E, #1A3F4A)" }}>
                  Start Free
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}
