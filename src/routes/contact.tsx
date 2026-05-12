import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Mail, MessageSquare, Building2 } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Acuity Learning Hub" },
      { name: "description", content: "Talk to our team about pilots, partnerships, and platform questions." },
    ],
  }),
  component: () => (
    <SiteLayout>
      <section className="pt-36 pb-24">
        <div className="mx-auto max-w-6xl px-6 grid lg:grid-cols-2 gap-12">
          <div>
            <h1 className="font-display text-5xl font-semibold leading-tight mb-4">
              Let's <span className="text-gradient">talk.</span>
            </h1>
            <p className="text-muted-foreground text-lg mb-10">
              Pilots, partnerships, integrations — or just curious. We answer every message.
            </p>
            <div className="space-y-4">
              {[
                { i: Mail, l: "Email", v: "hello@acuity.ai" },
                { i: MessageSquare, l: "Sales", v: "sales@acuity.ai" },
                { i: Building2, l: "Office", v: "548 Market St, San Francisco" },
              ].map((c) => (
                <div key={c.l} className="flex items-start gap-3 glass rounded-2xl p-4 border-gradient">
                  <div className="h-10 w-10 rounded-lg bg-gradient-primary grid place-items-center">
                    <c.i className="h-4 w-4 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">{c.l}</p>
                    <p className="text-sm">{c.v}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <form className="glass-strong rounded-3xl border-gradient p-8 space-y-4 shadow-elevated">
            <div className="grid grid-cols-2 gap-3">
              <div><Label>First name</Label><Input className="bg-white/5 border-white/10 mt-1.5 h-11" /></div>
              <div><Label>Last name</Label><Input className="bg-white/5 border-white/10 mt-1.5 h-11" /></div>
            </div>
            <div><Label>Email</Label><Input type="email" className="bg-white/5 border-white/10 mt-1.5 h-11" /></div>
            <div><Label>Organization</Label><Input className="bg-white/5 border-white/10 mt-1.5 h-11" /></div>
            <div><Label>Message</Label><Textarea rows={5} className="bg-white/5 border-white/10 mt-1.5" /></div>
            <Button variant="hero" size="lg" className="w-full">Send message</Button>
          </form>
        </div>
      </section>
    </SiteLayout>
  ),
});
