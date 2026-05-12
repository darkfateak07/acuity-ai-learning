import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

export function FinalCTA() {
  return (
    <section className="relative py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="relative overflow-hidden rounded-3xl glass-strong border-gradient p-12 md:p-20 text-center">
          <div className="absolute inset-0 grid-bg opacity-50" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[400px] w-[800px] rounded-full bg-primary/30 blur-[120px] pointer-events-none" />
          <div className="relative">
            <h2 className="font-display text-4xl md:text-6xl font-semibold leading-[1.05] mb-5">
              Build minds <br />
              <span className="text-gradient">that build the future.</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-8">
              Join the institutions and learners reshaping how the world learns.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Button asChild variant="hero" size="lg">
                <Link to="/signup">Start Learning <ArrowRight className="h-4 w-4" /></Link>
              </Button>
              <Button asChild variant="glass" size="lg">
                <Link to="/contact">Request Demo</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
