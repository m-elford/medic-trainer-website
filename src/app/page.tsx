import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PhoneMockup from "@/components/ui/PhoneMockup";
import Button from "@/components/ui/Button";
import SectionHeader from "@/components/ui/SectionHeader";
const showcase = [
  {
    title: "Select the drill.",
    text: "Choose a task, filter by training pack, or randomise the next activity to keep sessions unpredictable.",
    image: "/images/screenshots/tasks.png",
  },
  {
    title: "Prepare the equipment.",
    text: "Review anticipated equipment before the timer starts so every repetition includes kit preparation.",
    image: "/images/screenshots/equipment.png",
  },
  {
    title: "Perform under time.",
    text: "Run countdown-based drills with evidence checks to reinforce procedural discipline under pressure.",
    image: "/images/screenshots/timer.png",
  },
  {
    title: "Review the result.",
    text: "Capture completion time, pass or fail status, and evidence check performance after each drill.",
    image: "/images/screenshots/home.png",
  },
  {
    title: "Track improvement.",
    text: "Review training history, pass rates and drill performance across repeated sessions.",
    image: "/images/screenshots/history.png",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#071109] text-[#f4f1e8]">
      <Navbar />

      <section className="relative flex min-h-screen items-center overflow-hidden px-6 pt-24">
        <div className="absolute inset-0 bg-[url('/images/branding/hero.png')] bg-cover bg-center opacity-45" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#071109] via-[#071109]/85 to-[#071109]/30" />

        <div className="relative z-10 mx-auto max-w-7xl">
          <p className="mb-5 text-sm font-bold uppercase tracking-[0.4em] text-[#a8d99e]">
            Medic Trainer
          </p>

          <h1 className="max-w-5xl text-5xl font-black uppercase tracking-tight md:text-8xl">
            Military Medical Skills.
            <br />
            Practised Under Pressure.
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-[#d8d8cf] md:text-xl">
            A tactical medical training app designed to help users practise timed
            drills, prepare equipment, complete evidence checks and track
            performance over time.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">

  <Button href="/beta-testing">Join Beta Testing</Button>

  <Button href="#features" variant="secondary">

    Explore Features

  </Button>

</div>
        </div>
      </section>

      <section id="features" className="px-6 py-24">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-3">
          {[
            ["Timed Drills", "Run realistic countdown-based medical training tasks."],
            ["Equipment Preparation", "Review required kit before commencing each drill."],
            ["Performance History", "Track completion records and training progression."],
          ].map(([title, text]) => (
            <div
              key={title}
              className="rounded-3xl border border-white/10 bg-white/[0.04] p-8"
            >
              <h3 className="text-2xl font-bold text-[#d8c79a]">{title}</h3>
              <p className="mt-4 leading-7 text-[#b8b8aa]">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-white/10 bg-[#0b140d] px-6 py-28">
        <div className="mx-auto max-w-7xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.35em] text-[#a8d99e]">
            App Workflow
          </p>
          <h2 className="mt-4 text-4xl font-black uppercase md:text-6xl">
            Built around deliberate repetition.
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-[#b8b8aa]">
            Medic Trainer guides users through a complete training loop: select
            the task, prepare equipment, perform under time, complete evidence
            checks and review the outcome.
          </p>
        </div>

        <div className="mx-auto mt-20 flex max-w-7xl flex-col gap-24">
          {showcase.map((item, index) => (
            <div
              key={item.title}
              className={`grid items-center gap-12 md:grid-cols-2 ${
                index % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""
              }`}
            >
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.35em] text-[#a8d99e]">
                  0{index + 1}
                </p>
                <h3 className="mt-4 text-4xl font-black uppercase md:text-5xl">
                  {item.title}
                </h3>
                <p className="mt-6 max-w-xl text-lg leading-8 text-[#b8b8aa]">
                  {item.text}
                </p>
              </div>

              <PhoneMockup src={item.image} alt={item.title} />
            </div>
          ))}
        </div>
      </section>
<section className="relative overflow-hidden px-6 py-28">
  <div className="absolute inset-0 bg-[url('/images/branding/hero.png')] bg-cover bg-center opacity-20" />
  <div className="absolute inset-0 bg-[#071109]/85" />

  <div className="relative z-10 mx-auto max-w-7xl">
    <SectionHeader
      eyebrow="Medic Trainer Beta"
      title="Built for repeated practice."
      text="Designed to support tactical medical skill maintenance through structured drills, equipment preparation, evidence checks and performance review."
    />

    <div className="mt-16 grid gap-6 md:grid-cols-4">
      {[
        ["Timed", "Drills"],
        ["Equipment", "Preparation"],
        ["Evidence", "Checks"],
        ["Offline", "Operation"],
      ].map(([number, label]) => (
        <div
          key={label}
          className="rounded-3xl border border-white/10 bg-white/[0.04] p-8 text-center"
        >
          <p className="text-4xl font-black uppercase text-[#a8d99e]">
            {number}
          </p>
          <p className="mt-3 text-sm uppercase tracking-[0.25em] text-[#b8b8aa]">
            {label}
          </p>
        </div>
      ))}
    </div>

    <div className="mt-16 text-center">
      <Button href="/beta-testing">Join the Beta</Button>
    </div>
  </div>
</section>
      <Footer />
    </main>
  );
}