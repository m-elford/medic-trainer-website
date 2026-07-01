"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navigation } from "@/brand/navigation";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto mt-5 max-w-7xl px-6">
        <div className="flex items-center justify-between rounded-full border border-border-soft bg-background/70 px-6 py-4 backdrop-blur-xl">

          <Link href="/" className="group">

            <p className="text-lg font-black uppercase tracking-wide text-text-main transition group-hover:text-primary">
              Medic Trainer
            </p>

            <p className="text-[11px] uppercase tracking-[0.3em] text-text-muted">
              Tactical Medical Training
            </p>

          </Link>

          <nav className="hidden items-center gap-8 md:flex">
            {navigation.map((item) => {
              const active = pathname === item.href;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-sm font-bold uppercase tracking-[0.2em] transition ${
                    active
                      ? "text-primary"
                      : "text-text-muted hover:text-text-main"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <Link
            href="/beta-testing"
            className="hidden rounded-full bg-primary px-5 py-3 text-xs font-black uppercase tracking-[0.25em] text-background transition hover:scale-105 lg:inline-flex"
          >
            Join Beta
          </Link>

        </div>
      </div>
    </header>
  );
}