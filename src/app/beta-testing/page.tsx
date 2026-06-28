import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageHero from "@/components/sections/PageHero";
import SectionHeader from "@/components/ui/SectionHeader";
import Button from "@/components/ui/Button";

export default function BetaTestingPage() {
  return (
    <main className="min-h-screen bg-[#071109] text-[#f4f1e8]">
      <Navbar />

      <PageHero
        eyebrow="Beta Testing"
        title="Help shape Medic Trainer."
        text="Join the Medic Trainer beta program and help test the app workflow, drill timing, equipment preparation, evidence checks and performance tracking."
        image="/images/branding/hero.png"
        primaryLabel="Contact for Beta Access"
        primaryHref="mailto:medictrainer.app@gmail.com"
      />

      <section className="px-6 py-28">
        <SectionHeader
          eyebrow="Tester Workflow"
          title="Simple, structured feedback."
          text="Beta testers are asked to complete drills, review the app workflow and report issues or improvement ideas."
        />

        <div className="mx-auto mt-16 grid max-w-7xl gap-6 md:grid-cols-3">
          {[
            ["01", "Install", "Access Medic Trainer through TestFlight."],
            ["02", "Train", "Complete timed drills using the app workflow."],
            ["03", "Report", "Submit bugs, usability issues and suggestions."],
          ].map(([number, title, text]) => (
            <div key={title} className="rounded-3xl border border-white/10 bg-white/[0.04] p-8">
              <p className="text-4xl font-black text-[#a8d99e]">{number}</p>
              <h2 className="mt-6 text-2xl font-bold text-[#d8c79a]">{title}</h2>
              <p className="mt-4 leading-7 text-[#b8b8aa]">{text}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Button href="mailto:medictrainer.app@gmail.com">Email Medic Trainer</Button>
        </div>
      </section>

      <Footer />
    </main>
  );
}