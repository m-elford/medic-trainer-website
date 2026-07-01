import FadeIn from "@/components/animations/FadeIn";
import DeviceShowcase from "@/components/device/DeviceShowcase";
import { homeContent } from "@/content/home";

export default function ProductStatement() {
  return (
    <section className="relative overflow-hidden bg-background px-6 py-36">
      <div className="absolute inset-x-0 top-0 h-px bg-border-soft" />

      <FadeIn className="mx-auto max-w-6xl text-center">
        <p className="text-sm font-bold uppercase tracking-[0.4em] text-primary">
          {homeContent.statement.eyebrow}
        </p>

        <h2 className="mt-8 text-5xl font-black uppercase leading-[0.95] md:text-8xl">
          {homeContent.statement.title}
        </h2>

        <p className="mx-auto mt-10 max-w-3xl text-2xl leading-10 text-text-muted">
          {homeContent.statement.text}
        </p>
      </FadeIn>

      <div className="mt-24">
        <DeviceShowcase
          variant="triple"
          images={homeContent.statement.devices}
        />
      </div>
    </section>
  );
}