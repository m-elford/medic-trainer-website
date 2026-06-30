import SiteShell from "@/components/layout/SiteShell";

const sections = [
  [
    "Overview",
    "Medic Trainer is a medical skills training application designed to assist users in conducting timed training drills, recording training activity, and exporting training records. We respect your privacy and are committed to protecting any information stored by the App.",
  ],
  [
    "Information We Collect",
    "Medic Trainer does not collect, transmit, sell, rent, or share personal information. The App does not require user accounts and does not collect names, email addresses, phone numbers, location information, contacts, health records, patient information, or financial information.",
  ],
  [
    "Data Stored on Your Device",
    "Medic Trainer stores training task library data, custom tasks, training history, equipment usage history, and application preferences locally on your device. This information remains on your device and is not transmitted to external servers.",
  ],
  [
    "Data Sharing",
    "Medic Trainer does not share data with third parties. When users choose to export training history or equipment usage reports, exported files are shared only through the method selected by the user.",
  ],
  [
    "Analytics and Tracking",
    "Medic Trainer does not use analytics services, advertising services, tracking technologies, or behavioural profiling.",
  ],
  [
    "Third-Party Services",
    "Medic Trainer may utilise standard Apple iOS functionality, including file sharing and system sharing services. Any use of such services is governed by Apple’s own privacy policies and terms.",
  ],
  [
    "Data Retention",
    "All data remains on the user’s device until it is deleted by the user or removed when the application is uninstalled.",
  ],
  [
    "Children’s Privacy",
    "Medic Trainer is not specifically directed toward children under the age of 13.",
  ],
  [
    "Medical Disclaimer",
    "Medic Trainer is intended solely as a training aid. The App does not provide medical advice, diagnosis, treatment recommendations, or clinical direction. Users remain responsible for following applicable organisational procedures, clinical guidelines, policies, and supervision requirements.",
  ],
  [
    "Changes to This Privacy Policy",
    "This Privacy Policy may be updated from time to time. Any updates will be reflected by revising the “Last Updated” date at the top of this document.",
  ],
  [
    "Contact",
    "For questions regarding this Privacy Policy, please contact medictrainer.app@gmail.com.",
  ],
];

export default function PrivacyPolicyPage() {
  return (
    <SiteShell>
      <section className="bg-background px-6 pb-24 pt-40">
        <div className="mx-auto max-w-4xl">
          <p className="text-sm font-bold uppercase tracking-[0.35em] text-primary">
            Privacy Policy
          </p>

          <h1 className="mt-4 text-5xl font-black uppercase leading-tight md:text-7xl">
            Medic Trainer Privacy Policy
          </h1>

          <p className="mt-6 text-text-muted">Last Updated: June 2026</p>

          <div className="mt-12 rounded-[2rem] border border-border-soft bg-white/[0.04] p-8 md:p-12">
            <div className="space-y-10">
              {sections.map(([title, text]) => (
                <section key={title}>
                  <h2 className="text-2xl font-black uppercase text-secondary">
                    {title}
                  </h2>
                  <p className="mt-4 leading-8 text-text-muted">{text}</p>
                </section>
              ))}
            </div>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}