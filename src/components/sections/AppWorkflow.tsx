import { appScreenshots } from "@/data/screenshots";
import PhoneMockup from "@/components/ui/PhoneMockup";
import SectionHeader from "@/components/ui/SectionHeader";

export default function AppWorkflow() {
  return (
    <section className="border-y border-white/10 bg-[#0b140d] px-6 py-28">
      <SectionHeader
        eyebrow="App Workflow"
        title="Built around deliberate repetition."
        text="Medic Trainer guides users through a complete training loop: select the task, prepare equipment, perform under time, complete evidence checks and review the outcome."
      />

      <div className="mx-auto mt-20 flex max-w-7xl flex-col gap-24">
        {appScreenshots.map((item, index) => (
          <div
            key={item.title}
            className={`grid items-center gap-12 md:grid-cols-2 ${
              index % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""
            }`}
          >
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.35em] text-[#a8d99e]">
                0{index + 1}
              </p>
              <h3 className="mt-4 text-4xl font-black uppercase md:text-5xl">
                {item.title}
              </h3>
              <p className="mt-6 max-w-xl text-lg leading-8 text-[#b8b8aa]">
                {item.text}
              </p>
            </div>

            <PhoneMockup src={item.image} alt={item.title} />
          </div>
        ))}
      </div>
    </section>
  );
}