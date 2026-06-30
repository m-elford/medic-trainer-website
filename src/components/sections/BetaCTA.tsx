import { betaStats } from "@/data/features";
import Button from "@/components/ui/Button";
import SectionHeader from "@/components/ui/SectionHeader";

export default function BetaCTA() {
  return (
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
          {betaStats.map(([number, label]) => (
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
  );
}