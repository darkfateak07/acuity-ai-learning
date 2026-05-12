import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Hero } from "@/components/site/Hero";
import { TrustedBy } from "@/components/site/TrustedBy";
import { AITutorSection } from "@/components/site/AITutorSection";
import { AdaptiveEngine } from "@/components/site/AdaptiveEngine";
import { StudentDashboardPreview } from "@/components/site/StudentDashboardPreview";
import { ParentSchoolSections } from "@/components/site/ParentSchoolSections";
import { FeatureGrid } from "@/components/site/FeatureGrid";
import { LearningExperience } from "@/components/site/LearningExperience";
import { Testimonials } from "@/components/site/Testimonials";
import { Pricing } from "@/components/site/Pricing";
import { FAQ } from "@/components/site/FAQ";
import { FinalCTA } from "@/components/site/FinalCTA";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Acuity Learning Hub — Next-generation AI learning infrastructure" },
      { name: "description", content: "Adaptive, personalized AI education for students, parents, and institutions." },
      { property: "og:title", content: "Acuity Learning Hub" },
      { property: "og:description", content: "The AI that learns how you learn." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <SiteLayout>
      <Hero />
      <TrustedBy />
      <AITutorSection />
      <AdaptiveEngine />
      <StudentDashboardPreview />
      <ParentSchoolSections />
      <FeatureGrid />
      <LearningExperience />
      <Testimonials />
      <Pricing />
      <FAQ />
      <FinalCTA />
    </SiteLayout>
  );
}
