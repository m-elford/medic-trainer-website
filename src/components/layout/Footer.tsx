import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#050806] px-6 py-10 text-sm text-[#b8b8aa]">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <p>© 2026 Medic Trainer. All rights reserved.</p>

        <div className="flex gap-6">
          <Link href="/support">Support</Link>
          <Link href="/privacy-policy">Privacy Policy</Link>
          <Link href="/beta-testing">Beta Testing</Link>
        </div>
      </div>
    </footer>
  );
}