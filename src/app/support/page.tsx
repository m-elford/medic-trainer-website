import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageHero from "@/components/sections/PageHero";

export default function SupportPage() {
  return (
    <main className="min-h-screen bg-[#071109] text-[#f4f1e8]">
      <Navbar />

      <PageHero
        eyebrow="Support"
        title="Medic Trainer Support."
        text="For beta access, technical support, bug reports or feature suggestions, contact the Medic Trainer support address."
        image="/images/branding/hero.png"
        primaryLabel="Email Support"
        primaryHref="mailto:medictrainer.app@gmail.com"
      />

      <section className="px-6 py-28">
        <div className="mx-auto max-w-4xl rounded-3xl border border-white/10 bg-white/[0.04] p-10">
          <h2 className="text-3xl font-black uppercase text-[#d8c79a]">
            Contact
          </h2>

          <p className="mt-6 text-lg leading-8 text-[#b8b8aa]">
            Email:{" "}
            <a className="text-[#a8d99e]" href="mailto:medictrainer.app@gmail.com">
              medictrainer.app@gmail.com
            </a>
          </p>

          <p className="mt-6 leading-8 text-[#b8b8aa]">
            Please include your device model, iOS version, app version, a clear
            description of the issue, and screenshots where possible.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}