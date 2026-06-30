import SiteShell from "@/components/layout/SiteShell";
import PageHero from "@/components/sections/PageHero";
import MethodPillars from "@/components/sections/MethodPillars";

export default function MethodPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="Method"
        title="A repeatable system for deliberate practice."
        text="Medic Trainer is built around a simple training method: prepare the equipment, perform the drill, assess the result and improve through repetition."
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
            Training Philosophy
          </p>

          <h2 className="mt-4 text-4xl font-black uppercase leading-tight md:text-6xl">
            Confidence is built before it is tested.
          </h2>

          <p className="mt-8 text-xl leading-9 text-text-muted">
            Timed medical drills are not only about speed. They are about
            preparation, procedural discipline, objective review and repeated
            exposure to decision-making under pressure.
          </p>

          <p className="mt-6 text-xl leading-9 text-text-muted">
            Medic Trainer supports this cycle by giving users a consistent
            structure for practising, recording and reviewing their training.
          </p>
        </div>
      </section>
    </SiteShell>
  );
}