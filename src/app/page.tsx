import SiteShell from "@/components/layout/SiteShell";
import HomeHero from "@/components/sections/HomeHero";
import CoreFeatures from "@/components/sections/CoreFeatures";
import AppWorkflow from "@/components/sections/AppWorkflow";
import BetaCTA from "@/components/sections/BetaCTA";

export default function Home() {
  return (
    <SiteShell>
      <HomeHero />
      <CoreFeatures />
      <AppWorkflow />
      <BetaCTA />
    </SiteShell>
  );
}