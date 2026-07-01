import SiteShell from "@/components/layout/SiteShell";
import PageHero from "@/components/sections/PageHero";
import MethodPillars from "@/components/sections/MethodPillars";
import { methodContent } from "@/content/method";

export default function MethodPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow={methodContent.hero.eyebrow}
        title={methodContent.hero.title}
        text={methodContent.hero.text}
        image="/images/branding/hero.png"
        primaryLabel="Explore Features"
        primaryHref="/features"
        secondaryLabel="Join Beta Testing"
        secondaryHref="/beta-testing"
      />

      <MethodPillars />

      <section className="bg-background px-6 py-32">
        <div className="mx-auto max-w-5xl">
          <p className="text-sm font-bold uppercase tracking-[0.35em] text-primary">
            {methodContent.philosophy.eyebrow}
          </p>

          <h2 className="mt-4 text-4xl font-black uppercase leading-tight md:text-6xl">
            {methodContent.philosophy.title}
          </h2>

          {methodContent.philosophy.paragraphs.map((paragraph) => (
            <p
              key={paragraph}
              className="mt-8 text-xl leading-9 text-text-muted"
            >
              {paragraph}
            </p>
          ))}
        </div>
      </section>
    </SiteShell>
  );
}