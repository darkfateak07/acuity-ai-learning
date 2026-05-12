import { createFileRoute, Link } from "@tanstack/react-router";
import { AuthShell } from "@/components/site/AuthShell";

export const Route = createFileRoute("/signup")({
  head: () => ({ meta: [{ title: "Sign up — Acuity" }] }),
  component: () => (
    <AuthShell
      isSignup
      title="Start learning."
      subtitle="14 days free. No card required."
      cta="Create account"
      footer={<>Already have an account? <Link to="/login" className="text-foreground hover:underline">Login</Link></>}
    />
  ),
});
