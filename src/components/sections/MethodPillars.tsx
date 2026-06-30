import { methodPillars } from "@/data/method";
import FadeIn from "@/components/animations/FadeIn";

export default function MethodPillars() {
  return (
    <section className="bg-background-soft px-6 py-32">
      <div className="mx-auto max-w-7xl">
        <FadeIn className="max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.35em] text-primary">
            The Medic Trainer Method
          </p>

          <h2 className="mt-4 text-4xl font-black uppercase leading-tight md:text-6xl">
            Prepare. Perform. Assess. Improve.
          </h2>

          <p className="mt-6 text-lg leading-8 text-text-muted">
            Medic Trainer is built around a simple training cycle that turns
            repetition into structured, measurable practice.
          </p>
        </FadeIn>

        <div className="mt-16 grid gap-6 md:grid-cols-4">
          {methodPillars.map((pillar, index) => (
            <FadeIn
              key={pillar.title}
              delay={index * 0.08}
              className="rounded-[2rem] border border-border-soft bg-white/[0.04] p-8"
            >
              <p className="text-4xl font-black text-primary">0{index + 1}</p>
              <h3 className="mt-6 text-2xl font-black uppercase text-secondary">
                {pillar.title}
              </h3>
              <p className="mt-4 leading-7 text-text-muted">{pillar.text}</p>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}