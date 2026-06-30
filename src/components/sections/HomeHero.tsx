import Button from "@/components/ui/Button";

export default function HomeHero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden px-6 pt-24">
      <div className="absolute inset-0 bg-[url('/images/branding/hero.png')] bg-cover bg-center" />
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/25" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/20" />

      <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-16 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <p className="mb-5 text-sm font-bold uppercase tracking-[0.45em] text-primary">
            Tactical Medical Training
          </p>

          <h1 className="max-w-5xl text-5xl font-black uppercase leading-[0.92] tracking-tight md:text-7xl xl:text-8xl">
            Military Medical Skills.
            <br />
            Practised Under Pressure.
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-text-muted md:text-xl">
            Medic Trainer is built around deliberate repetition: select the
            drill, prepare the equipment, perform under time, assess evidence,
            and track improvement.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Button href="/beta-testing">Join Beta Testing</Button>
            <Button href="/features" variant="secondary">
              Explore Features
            </Button>
          </div>
        </div>

        <div className="hidden rounded-[2rem] border border-border-soft bg-white/[0.04] p-6 backdrop-blur-md lg:block">
          <p className="text-sm font-bold uppercase tracking-[0.35em] text-primary">
            Training Method
          </p>

          <div className="mt-8 space-y-5">
            {[
              "Select the task",
              "Review equipment",
              "Start the timer",
              "Assess evidence",
              "Record performance",
            ].map((item, index) => (
              <div
                key={item}
                className="flex items-center gap-4 rounded-2xl border border-border-soft bg-background/60 p-4"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-sm font-black text-background">
                  {index + 1}
                </span>
                <span className="font-bold text-text-main">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}