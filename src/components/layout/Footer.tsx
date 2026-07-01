import Link from "next/link";
import Button from "@/components/ui/Button";

export default function Footer() {
  return (
    <footer className="border-t border-border-soft bg-background-soft px-6 pt-24 pb-12">
      <div className="mx-auto max-w-7xl">

        <div className="grid gap-16 lg:grid-cols-[2fr_1fr_1fr_1fr]">

          <div>
            <p className="text-sm font-black uppercase tracking-[0.35em] text-primary">
              Medic Trainer
            </p>

            <p className="mt-2 text-xs uppercase tracking-[0.35em] text-text-muted">
              Tactical Medical Training
            </p>

            <h2 className="mt-8 max-w-md text-3xl font-black uppercase leading-tight">
              Military Medical Skills.
              <br />
              Practised Under Pressure.
            </h2>

            <p className="mt-6 max-w-md leading-8 text-text-muted">
              Built to support deliberate, measurable tactical medical
              training through preparation, performance, assessment and
              continuous improvement.
            </p>

            <div className="mt-10">
              <Button href="/beta-testing">
                Join Beta Testing
              </Button>
            </div>
          </div>

          <div>
            <p className="text-sm font-black uppercase tracking-[0.25em] text-secondary">
              Platform
            </p>

            <div className="mt-6 flex flex-col gap-3 text-text-muted">
              <Link href="/">Home</Link>
              <Link href="/method">Method</Link>
              <Link href="/features">Features</Link>
              <Link href="/beta-testing">Beta Testing</Link>
              <Link href="/support">Support</Link>
            </div>
          </div>

          <div>
            <p className="text-sm font-black uppercase tracking-[0.25em] text-secondary">
              Resources
            </p>

            <div className="mt-6 flex flex-col gap-3 text-text-muted">
              <Link href="/privacy-policy">
                Privacy Policy
              </Link>

              <span className="opacity-50">
                Release Notes
              </span>

              <span className="opacity-50">
                Knowledge Base
              </span>
            </div>
          </div>

          <div>
            <p className="text-sm font-black uppercase tracking-[0.25em] text-secondary">
              Contact
            </p>

            <p className="mt-6 leading-8 text-text-muted">
              medictrainer.app@gmail.com
            </p>

            <div className="mt-10">
              <p className="text-xs uppercase tracking-[0.25em] text-primary">
                Website
              </p>

              <p className="mt-2 text-text-muted">
                Version 1.0
              </p>

              <p className="mt-4 text-xs uppercase tracking-[0.25em] text-primary">
                App
              </p>

              <p className="mt-2 text-text-muted">
                Build 1.0.0 (1)
              </p>
            </div>
          </div>

        </div>

        <div className="mt-20 border-t border-border-soft pt-8 flex flex-col gap-3 md:flex-row md:justify-between">

          <p className="text-sm text-text-muted">
            © 2026 Matthew Elford. Medic Trainer.
          </p>

          <p className="text-sm text-text-muted">
            Designed and built with Next.js.
          </p>

        </div>

      </div>
    </footer>
  );
}