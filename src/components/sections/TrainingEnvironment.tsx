import FadeIn from "@/components/animations/FadeIn";

export default function TrainingEnvironment() {
  return (
    <section className="relative overflow-hidden px-6 py-40">
      <div className="absolute inset-0 bg-[url('/images/branding/training.png')] bg-cover bg-center opacity-45" />
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/35" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/40" />

      <FadeIn className="relative z-10 mx-auto max-w-7xl">
        <p className="text-sm font-bold uppercase tracking-[0.35em] text-primary">
          Designed for Military Training
        </p>

        <h2 className="mt-4 max-w-4xl text-4xl font-black uppercase leading-tight md:text-7xl">
          Built for realistic skills maintenance.
        </h2>

        <p className="mt-8 max-w-2xl text-xl leading-9 text-text-muted">
          Medic Trainer is designed for tactical medical repetition, individual
          skills maintenance, instructor-led practice and structured training
          environments.
        </p>
      </FadeIn>
    </section>
  );
}