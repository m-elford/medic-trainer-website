import SiteShell from "@/components/layout/SiteShell";
import PageHero from "@/components/sections/PageHero";
import PhoneMockup from "@/components/ui/PhoneMockup";

const features = [
  {
    title: "Prepare before the timer starts.",
    text: "Every drill begins with equipment review, reinforcing preparation before performance.",
    image: "/images/screenshots/equipment.png",
  },
  {
    title: "Perform under time.",
    text: "Countdown-based drills help users practise time discipline during medical training tasks.",
    image: "/images/screenshots/timer.png",
  },
  {
    title: "Assess against evidence.",
    text: "Evidence checks support structured review after each repetition.",
    image: "/images/screenshots/home.png",
  },
  {
    title: "Track improvement.",
    text: "Training history helps users identify repetition, performance and progress over time.",
    image: "/images/screenshots/history.png",
  },
];

export default function FeaturesPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="Features"
        title="Training discipline, built into every drill."
        text="Medic Trainer is designed around a repeatable skills maintenance cycle: prepare, perform, assess and improve."
        image="/images/branding/hero.png"
        primaryLabel="Join Beta Testing"
        primaryHref="/beta-testing"
      />

      <section className="bg-background-soft px-6 py-32">
        <div className="mx-auto flex max-w-7xl flex-col gap-28">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className={`grid items-center gap-14 md:grid-cols-2 ${
                index % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""
              }`}
            >
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.35em] text-primary">
                  Capability 0{index + 1}
                </p>

                <h2 className="mt-4 text-4xl font-black uppercase leading-tight md:text-6xl">
                  {feature.title}
                </h2>

                <p className="mt-6 max-w-xl text-lg leading-8 text-text-muted">
                  {feature.text}
                </p>
              </div>

              <PhoneMockup src={feature.image} alt={feature.title} />
            </div>
          ))}
        </div>
      </section>
    </SiteShell>
  );
}