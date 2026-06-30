import FadeIn from "@/components/animations/FadeIn";

export default function MissionStatement() {
  return (
    <section className="bg-background px-6 py-32">
      <FadeIn className="mx-auto max-w-5xl text-center">
        <p className="text-sm font-bold uppercase tracking-[0.35em] text-primary">
          Why Medic Trainer Exists
        </p>

        <h2 className="mt-6 text-4xl font-black uppercase leading-tight md:text-7xl">
          Every repetition matters.
        </h2>

        <p className="mx-auto mt-8 max-w-3xl text-xl leading-9 text-text-muted">
          Whether preparing for assessment, maintaining clinical confidence or
          practising procedural drills, performance is built through deliberate,
          repeated and measurable training.
        </p>

        <p className="mx-auto mt-6 max-w-3xl text-xl leading-9 text-text-muted">
          Medic Trainer exists to support that process: prepare, perform, assess
          and improve.
        </p>
      </FadeIn>
    </section>
  );
}