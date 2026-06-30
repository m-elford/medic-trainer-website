import { betaStats } from "@/data/features";
import Button from "@/components/ui/Button";

export default function BetaCTA() {
  return (
    <section className="relative overflow-hidden px-6 py-32">
      <div className="absolute inset-0 bg-[url('/images/branding/hero.png')] bg-cover bg-center opacity-25" />
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/60" />

      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-[1fr_0.8fr]">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.35em] text-primary">
            Medic Trainer Beta
          </p>

          <h2 className="mt-4 text-4xl font-black uppercase leading-tight md:text-6xl">
            Help refine the training experience.
          </h2>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-text-muted">
            Join the beta programme to test the app workflow, identify usability
            issues, validate training logic and help shape Medic Trainer before
            wider release.
          </p>

          <div className="mt-10">
            <Button href="/beta-testing">Join Beta Testing</Button>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {betaStats.map(([number, label]) => (
            <div
              key={label}
              className="rounded-[2rem] border border-border-soft bg-white/[0.05] p-8 backdrop-blur-md"
            >
              <p className="text-4xl font-black uppercase text-primary">
                {number}
              </p>
              <p className="mt-3 text-sm uppercase tracking-[0.25em] text-text-muted">
                {label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}