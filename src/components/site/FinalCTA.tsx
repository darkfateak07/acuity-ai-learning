import { Link } from "@tanstack/react-router";
import { ArrowRight, PenLine } from "lucide-react";
import { motion } from "framer-motion";

export function FinalCTA() {
  return (
    <section className="relative py-28">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative overflow-hidden rounded-3xl text-center"
          style={{
            background: "linear-gradient(135deg, #1A3F4A 0%, #2C5F6E 50%, #1A3F4A 100%)",
            boxShadow: "0 30px 80px -20px rgba(26,63,74,0.5)",
          }}
        >
          {/* Dot texture overlay */}
          <div className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.4) 1px, transparent 1px)",
              backgroundSize: "28px 28px",
            }}
          />

          {/* Gold accent glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[2px] w-2/3"
            style={{ background: "linear-gradient(90deg, transparent, #B8943F, transparent)" }} />
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[2px] w-2/3"
            style={{ background: "linear-gradient(90deg, transparent, #B8943F, transparent)" }} />

          <div className="relative px-10 md:px-20 py-20">
            {/* Icon */}
            <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl mb-6 mx-auto"
              style={{ background: "rgba(184,148,63,0.2)", border: "1px solid rgba(184,148,63,0.35)" }}>
              <PenLine className="h-7 w-7" style={{ color: "#D4AF6A" }} />
            </div>

            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] mb-5 text-white">
              Where Accuracy
              <br />
              <span style={{
                background: "linear-gradient(135deg, #D4AF6A, #B8943F)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}>
                Meets Knowledge.
              </span>
            </h2>

            <p className="text-base md:text-lg max-w-2xl mx-auto mb-10 leading-relaxed"
              style={{ color: "rgba(255,255,255,0.72)" }}>
              Join the growing network of students, parents, and institutions reshaping the future of education with precision AI learning.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/signup"
                className="inline-flex items-center gap-2 px-8 py-3.5 text-sm font-semibold rounded-xl transition-all hover:scale-[1.04] hover:shadow-xl"
                style={{
                  background: "linear-gradient(135deg, #B8943F, #D4AF6A)",
                  color: "#1A3540",
                  boxShadow: "0 8px 30px -8px rgba(184,148,63,0.6)",
                }}
              >
                Start Learning Free <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-3.5 text-sm font-semibold rounded-xl transition-all hover:scale-[1.02]"
                style={{
                  background: "rgba(255,255,255,0.1)",
                  color: "#FFFFFF",
                  border: "1px solid rgba(255,255,255,0.2)",
                }}
              >
                Request a Demo
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
