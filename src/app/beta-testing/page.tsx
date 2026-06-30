import SiteShell from "@/components/layout/SiteShell";
import PageHero from "@/components/sections/PageHero";
import Button from "@/components/ui/Button";

const testerSteps = [
  ["01", "Install", "Access Medic Trainer through TestFlight."],
  ["02", "Train", "Complete timed drills across different training tasks."],
  ["03", "Review", "Check equipment flow, evidence criteria and result capture."],
  ["04", "Report", "Submit bugs, usability issues and improvement ideas."],
];

const focusAreas = [
  "TestFlight installation",
  "Task selection workflow",
  "Equipment preparation screen",
  "Timer usability",
  "Evidence checklist clarity",
  "Training history accuracy",
  "Export behaviour",
  "General navigation",
];

export default function BetaTestingPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="Beta Testing"
        title="Help shape Medic Trainer before release."
        text="The beta programme is designed to test real app behaviour: installation, drill flow, equipment preparation, evidence checks, history and export functionality."
        image="/images/branding/hero.png"
        primaryLabel="Email for Beta Access"
        primaryHref="mailto:medictrainer.app@gmail.com"
      />

      <section className="bg-background-soft px-6 py-32">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.35em] text-primary">
              Tester Workflow
            </p>

            <h2 className="mt-4 text-4xl font-black uppercase leading-tight md:text-6xl">
              Test the full training loop.
            </h2>

            <p className="mt-6 text-lg leading-8 text-text-muted">
              Testers should move through the app as a real user would: install,
              select drills, prepare equipment, complete timed tasks, review
              results and report anything that feels unclear, broken or
              inefficient.
            </p>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-4">
            {testerSteps.map(([number, title, text]) => (
              <div
                key={title}
                className="rounded-[2rem] border border-border-soft bg-white/[0.04] p-8"
              >
                <p className="text-4xl font-black text-primary">{number}</p>
                <h3 className="mt-6 text-2xl font-black uppercase text-secondary">
                  {title}
                </h3>
                <p className="mt-4 leading-7 text-text-muted">{text}</p>
              </div>
            ))}
          </div>

          <div className="mt-24 grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.35em] text-primary">
                Testing Priorities
              </p>

              <h2 className="mt-4 text-4xl font-black uppercase leading-tight md:text-5xl">
                What testers should focus on.
              </h2>

              <p className="mt-6 text-lg leading-8 text-text-muted">
                Feedback should focus on issues that affect training flow,
                clarity, reliability or confidence in using Medic Trainer during
                practical repetition.
              </p>

              <div className="mt-10">
                <Button href="mailto:medictrainer.app@gmail.com">
                  Send Feedback
                </Button>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {focusAreas.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-border-soft bg-white/[0.04] p-5 font-bold text-text-main"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}