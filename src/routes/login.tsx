import { createFileRoute, Link } from "@tanstack/react-router";
import { AuthShell } from "@/components/site/AuthShell";

export const Route = createFileRoute("/login")({
  head: () => ({ meta: [{ title: "Login — Acuity" }] }),
  component: () => (
    <AuthShell
      title="Welcome back."
      subtitle="Resume your learning journey."
      cta="Login"
      footer={<>No account? <Link to="/signup" className="text-foreground hover:underline">Sign up</Link></>}
    />
  ),
});
