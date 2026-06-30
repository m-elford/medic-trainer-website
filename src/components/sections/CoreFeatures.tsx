import { coreFeatures } from "@/data/features";

export default function CoreFeatures() {
  return (
    <section id="features" className="px-6 py-24">
      <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-3">
        {coreFeatures.map(({ title, text }) => (
          <div
            key={title}
            className="rounded-3xl border border-white/10 bg-white/[0.04] p-8"
          >
            <h3 className="text-2xl font-bold text-[#d8c79a]">{title}</h3>
            <p className="mt-4 leading-7 text-[#b8b8aa]">{text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}