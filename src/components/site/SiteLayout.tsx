import { Outlet } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";

export function SiteLayout({ children }: { children?: React.ReactNode }) {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <Navbar />
      <main>{children ?? <Outlet />}</main>
      <Footer />
    </div>
  );
}
