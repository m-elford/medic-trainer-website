import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const sections = [
  ["Overview", "Medic Trainer is a medical skills training application designed to assist users in conducting timed training drills, recording training activity, and exporting training records. We respect your privacy and are committed to protecting any information stored by the App."],
  ["Information We Collect", "Medic Trainer does not collect, transmit, sell, rent, or share personal information. The App does not require user accounts and does not collect names, email addresses, phone numbers, location information, contacts, health records, patient information, or financial information."],
  ["Data Stored on Your Device", "Medic Trainer stores training task library data, custom tasks, training history, equipment usage history, and application preferences locally on your device. This information remains on your device and is not transmitted to external servers."],
  ["Data Sharing", "Medic Trainer does not share data with third parties. When users choose to export training history or equipment usage reports, exported files are shared only through the method selected by the user."],
  ["Analytics and Tracking", "Medic Trainer does not use analytics services, advertising services, tracking technologies, or behavioural profiling."],
  ["Medical Disclaimer", "Medic Trainer is intended solely as a training aid. The App does not provide medical advice, diagnosis, treatment recommendations, or clinical direction. Users remain responsible for following applicable organisational procedures, clinical guidelines, policies, and supervision requirements."],
  ["Contact", "For questions regarding this Privacy Policy, please contact medictrainer.app@gmail.com."],
];

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-[#071109] text-[#f4f1e8]">
      <Navbar />

      <section className="px-6 pb-20 pt-40">
        <div className="mx-auto max-w-4xl">
          <p className="text-sm font-bold uppercase tracking-[0.35em] text-[#a8d99e]">
            Privacy Policy
          </p>

          <h1 className="mt-4 text-5xl font-black uppercase md:text-7xl">
            Medic Trainer Privacy Policy
          </h1>

          <p className="mt-6 text-[#b8b8aa]">Last Updated: June 2026</p>

          <div className="mt-12 space-y-10">
            {sections.map(([title, text]) => (
              <section key={title}>
                <h2 className="text-2xl font-bold text-[#d8c79a]">{title}</h2>
                <p className="mt-4 leading-8 text-[#b8b8aa]">{text}</p>
              </section>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}