"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { navigation } from "@/data/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-[#071109]/80 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-3">
          <img
            src="/images/logos/logo-main.png"
            alt="Medic Trainer logo"
            className="h-10 w-10 rounded-full object-cover"
          />
          <div>
            <p className="text-sm font-black uppercase tracking-[0.25em] text-[#f4f1e8]">
              Medic Trainer
            </p>
            <p className="text-[10px] uppercase tracking-[0.28em] text-[#a8d99e]">
              Tactical Medical Training
            </p>
          </div>
        </Link>

        <div className="hidden items-center gap-8 text-sm text-[#d8d8cf] md:flex">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={
                pathname === item.href
                  ? "font-bold text-[#a8d99e]"
                  : "hover:text-[#f4f1e8]"
              }
            >
              {item.label}
            </Link>
          ))}
        </div>

        <button
          className="text-[#f4f1e8] md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X /> : <Menu />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-white/10 bg-[#071109] px-6 py-6 md:hidden">
          <div className="flex flex-col gap-5">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={
                  pathname === item.href
                    ? "font-bold text-[#a8d99e]"
                    : "text-[#d8d8cf]"
                }
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}