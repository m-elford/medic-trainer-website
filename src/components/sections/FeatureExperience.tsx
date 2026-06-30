import DeviceFrame from "@/components/ui/DeviceFrame";
import FadeIn from "@/components/animations/FadeIn";

const featureExperience = [
  {
    eyebrow: "Prepare",
    title: "Preparation begins before the timer starts.",
    text: "Review equipment before every drill so preparation becomes part of the training rhythm, not an afterthought.",
    image: "/images/screenshots/equipment.png",
  },
  {
    eyebrow: "Perform",
    title: "Every second counts.",
    text: "Countdown-based tasks help reinforce performance under time pressure while keeping the training structure clear.",
    image: "/images/screenshots/timer.png",
  },
  {
    eyebrow: "Assess",
    title: "Objective review builds confidence.",
    text: "Evidence checks support consistent after-action review and help users identify what needs to improve.",
    image: "/images/screenshots/home.png",
  },
  {
  eyebrow: "Improve",
  title: "Progress should be measurable.",
  text: "Training history helps users review completed drills, identify patterns and keep repeating the skills that matter.",
  image: "/images/screenshots/history.png",
},
];

export default function FeatureExperience() {
  return (
    <section className="bg-background px-6 py-32">
      <div className="mx-auto flex max-w-7xl flex-col gap-28">
        {featureExperience.map((feature, index) => (
          <FadeIn
            key={feature.title}
            className={`grid items-center gap-14 md:grid-cols-2 ${
              index % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""
            }`}
          >
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.35em] text-primary">
                {feature.eyebrow}
              </p>

              <h2 className="mt-4 text-4xl font-black uppercase leading-tight md:text-6xl">
                {feature.title}
              </h2>

              <p className="mt-6 max-w-xl text-lg leading-8 text-text-muted">
                {feature.text}
              </p>
            </div>

            <DeviceFrame src={feature.image} alt={feature.title} />
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
