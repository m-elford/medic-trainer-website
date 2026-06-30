import SiteShell from "@/components/layout/SiteShell";
import HomeHero from "@/components/sections/HomeHero";
import FeatureExperience from "@/components/sections/FeatureExperience";
import AppWorkflow from "@/components/sections/AppWorkflow";
import BetaCTA from "@/components/sections/BetaCTA";
import MissionStatement from "@/components/sections/MissionStatement";
import MethodPillars from "@/components/sections/MethodPillars";
import ProductStatement from "@/components/sections/ProductStatement";
import TrainingEnvironment from "@/components/sections/TrainingEnvironment";

export default function Home() {
  return (
    <SiteShell>
  <HomeHero />
  <MissionStatement />
  <ProductStatement />
  <MethodPillars />
  <TrainingEnvironment />
  <FeatureExperience />
  <AppWorkflow />
  <BetaCTA />
</SiteShell>
  );
}