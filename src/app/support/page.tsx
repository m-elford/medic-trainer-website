import SiteShell from "@/components/layout/SiteShell";
import PageHero from "@/components/sections/PageHero";
import Button from "@/components/ui/Button";

const supportItems = [
  ["Bug Reports", "Include the app screen, what happened, what you expected, and screenshots where possible."],
  ["Beta Access", "Request TestFlight access or report installation issues."],
  ["Feature Requests", "Suggest workflow improvements, new training tasks, or equipment-list refinements."],
  ["Technical Issues", "Include your device model, iOS version, and Medic Trainer app version."],
];

export default function SupportPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="Support"
        title="Support for Medic Trainer."
        text="For beta access, technical issues, bug reports or feature suggestions, contact the Medic Trainer support address."
        image="/images/branding/hero.png"
        primaryLabel="Email Support"
        primaryHref="mailto:medictrainer.app@gmail.com"
      />

      <section className="bg-background-soft px-6 py-32">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.35em] text-primary">
                Contact
              </p>

              <h2 className="mt-4 text-4xl font-black uppercase leading-tight md:text-6xl">
                Need help or want to report an issue?
              </h2>

              <p className="mt-6 text-lg leading-8 text-text-muted">
                Send support requests, beta feedback, bugs and feature ideas to
                the Medic Trainer support email.
              </p>

              <div className="mt-10">
                <Button href="mailto:medictrainer.app@gmail.com">
                  medictrainer.app@gmail.com
                </Button>
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {supportItems.map(([title, text]) => (
                <div
                  key={title}
                  className="rounded-[2rem] border border-border-soft bg-white/[0.04] p-8"
                >
                  <h3 className="text-2xl font-black uppercase text-secondary">
                    {title}
                  </h3>
                  <p className="mt-4 leading-7 text-text-muted">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}