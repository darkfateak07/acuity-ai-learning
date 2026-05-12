import { createFileRoute } from "@tanstack/react-router";
import { AppShell } from "@/components/app/AppShell";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/settings")({
  head: () => ({ meta: [{ title: "Settings — Acuity" }] }),
  component: () => (
    <AppShell title="Settings">
      <div className="max-w-2xl space-y-4">
        <div className="glass rounded-2xl p-6 border-gradient space-y-4">
          <h3 className="font-medium">Profile</h3>
          <div><Label>Name</Label><Input defaultValue="Aria Chen" className="bg-white/5 border-white/10 mt-1.5 h-11" /></div>
          <div><Label>Email</Label><Input defaultValue="aria@school.edu" className="bg-white/5 border-white/10 mt-1.5 h-11" /></div>
        </div>
        <div className="glass rounded-2xl p-6 border-gradient space-y-4">
          <h3 className="font-medium">Preferences</h3>
          {[
            "Daily learning reminders",
            "Weekly insight digest",
            "Adaptive difficulty",
            "Sound effects",
          ].map((p, i) => (
            <div key={p} className="flex items-center justify-between py-2 border-b border-white/5 last:border-0">
              <span className="text-sm">{p}</span>
              <Switch defaultChecked={i < 3} />
            </div>
          ))}
        </div>
        <Button variant="hero">Save changes</Button>
      </div>
    </AppShell>
  ),
});
