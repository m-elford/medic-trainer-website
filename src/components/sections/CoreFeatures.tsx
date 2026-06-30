import { coreFeatures } from "@/data/features";

export default function CoreFeatures() {
  return (
    <section id="features" className="px-6 py-28">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.35em] text-primary">
            Core Capability
          </p>

          <h2 className="mt-4 text-4xl font-black uppercase md:text-6xl">
            Built for the full training cycle.
          </h2>

          <p className="mt-6 text-lg leading-8 text-text-muted">
            Medic Trainer supports the repeated behaviours that matter during
            skills maintenance: preparation, performance, assessment and review.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {coreFeatures.map(({ title, text }, index) => (
            <div
              key={title}
              className="group rounded-[2rem] border border-border-soft bg-white/[0.04] p-8 transition hover:-translate-y-1 hover:bg-white/[0.07]"
            >
              <div className="mb-10 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary text-xl font-black text-background">
                0{index + 1}
              </div>

              <h3 className="text-2xl font-black uppercase text-secondary">
                {title}
              </h3>

              <p className="mt-4 leading-7 text-text-muted">{text}</p>

              <div className="mt-8 h-px w-full bg-border-soft" />

              <p className="mt-5 text-xs font-bold uppercase tracking-[0.25em] text-primary opacity-70">
                Medic Trainer Method
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}