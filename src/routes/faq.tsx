import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { FAQ } from "@/components/site/FAQ";

export const Route = createFileRoute("/faq")({
  head: () => ({ meta: [{ title: "FAQ — Acuity Learning Hub" }] }),
  component: () => (
    <SiteLayout>
      <div className="pt-28"><FAQ /></div>
    </SiteLayout>
  ),
});
