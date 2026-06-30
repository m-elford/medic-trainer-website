import Button from "@/components/ui/Button";

export default function HomeHero() {
  return (
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
  );
}