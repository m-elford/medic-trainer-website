import SiteShell from "@/components/layout/SiteShell";
import PageHero from "@/components/sections/PageHero";
import DeviceFrame from "@/components/ui/DeviceFrame";
import FadeIn from "@/components/animations/FadeIn";
import { featuresContent } from "@/content/features";

export default function FeaturesPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow={featuresContent.hero.eyebrow}
        title={featuresContent.hero.title}
        text={featuresContent.hero.text}
        image="/images/branding/hero.png"
        primaryLabel="Join Beta Testing"
        primaryHref="/beta-testing"
      />

      <section className="bg-background-soft px-6 py-32">
        <div className="mx-auto flex max-w-7xl flex-col gap-28">
          {featuresContent.sections.map((feature, index) => (
            <FadeIn
              key={feature.title}
              className={`grid items-center gap-14 md:grid-cols-2 ${
                index % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""
              }`}
            >
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.35em] text-primary">
                  {feature.eyebrow}
                </p>

                <h2 className="mt-4 text-4xl font-black uppercase leading-tight md:text-6xl">
                  {feature.title}
                </h2>

                <p className="mt-6 max-w-xl text-lg leading-8 text-text-muted">
                  {feature.text}
                </p>
              </div>

              <DeviceFrame src={feature.image} alt={feature.title} />
            </FadeIn>
          ))}
        </div>
      </section>
    </SiteShell>
  );
}