import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Pricing } from "@/components/site/Pricing";
import { FAQ } from "@/components/site/FAQ";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Pricing — Acuity Learning Hub" },
      { name: "description", content: "Simple, scalable pricing for students, parents, and institutions." },
    ],
  }),
  component: () => (
    <SiteLayout>
      <div className="pt-32"><Pricing /><FAQ /></div>
    </SiteLayout>
  ),
});
