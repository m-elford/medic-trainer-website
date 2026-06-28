import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageHero from "@/components/sections/PageHero";
import PhoneMockup from "@/components/ui/PhoneMockup";
import SectionHeader from "@/components/ui/SectionHeader";

const features = [
  {
    title: "Timed drills",
    text: "Run structured countdown-based training tasks that support repetition, pressure and procedural discipline.",
    image: "/images/screenshots/timer.png",
  },
  {
    title: "Equipment preparation",
    text: "Review required equipment before each drill so preparation becomes part of the training cycle.",
    image: "/images/screenshots/equipment.png",
  },
  {
    title: "Evidence checks",
    text: "Use evidence criteria to support consistent assessment and after-action review.",
    image: "/images/screenshots/home.png",
  },
  {
    title: "Performance history",
    text: "Track completed sessions, pass status and training progression over time.",
    image: "/images/screenshots/history.png",
  },
];

export default function FeaturesPage() {
  return (
    <main className="min-h-screen bg-[#071109] text-[#f4f1e8]">
      <Navbar />

      <PageHero
        eyebrow="Features"
        title="A complete training workflow."
        text="Medic Trainer is designed around the full repetition cycle: select the task, prepare equipment, perform under time, assess evidence and review performance."
        image="/images/branding/hero.png"
        primaryLabel="Join Beta Testing"
        primaryHref="/beta-testing"
      />

      <section className="px-6 py-28">
        <SectionHeader
          eyebrow="Product Capabilities"
          title="Built for tactical medical repetition."
          text="Each feature supports one purpose: helping users practise critical medical skills with structure, consistency and accountability."
        />

        <div className="mx-auto mt-20 flex max-w-7xl flex-col gap-24">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className={`grid items-center gap-12 md:grid-cols-2 ${
                index % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""
              }`}
            >
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.35em] text-[#a8d99e]">
                  0{index + 1}
                </p>
                <h2 className="mt-4 text-4xl font-black uppercase md:text-6xl">
                  {feature.title}
                </h2>
                <p className="mt-6 max-w-xl text-lg leading-8 text-[#b8b8aa]">
                  {feature.text}
                </p>
              </div>

              <PhoneMockup src={feature.image} alt={feature.title} />
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}