import { appScreenshots } from "@/data/screenshots";
import DeviceFrame from "@/components/ui/DeviceFrame";
import SectionHeader from "@/components/ui/SectionHeader";
import FadeIn from "@/components/animations/FadeIn";

export default function AppWorkflow() {
  return (
    <section className="border-y border-border-soft bg-background-soft px-6 py-32">
      <SectionHeader
        eyebrow="Training Workflow"
        title="The same process. Every drill."
        text="Medic Trainer reinforces a repeatable training loop designed to build preparation, time discipline, evidence-based review and measurable improvement."
      />

      <div className="mx-auto mt-24 flex max-w-7xl flex-col gap-28">
        {appScreenshots.map((item, index) => (
          <FadeIn
            key={item.title}
            className={`grid items-center gap-14 md:grid-cols-2 ${
              index % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""
            }`}
          >
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.35em] text-primary">
                Step 0{index + 1}
              </p>

              <h3 className="mt-4 text-4xl font-black uppercase leading-tight md:text-6xl">
                {item.title}
              </h3>

              <p className="mt-6 max-w-xl text-lg leading-8 text-text-muted">
                {item.text}
              </p>
            </div>

            <DeviceFrame src={item.image} alt={item.title} />
          </FadeIn>
        ))}
      </div>
    </section>
  );
}