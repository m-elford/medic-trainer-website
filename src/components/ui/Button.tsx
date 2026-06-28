import Link from "next/link";

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
};

export default function Button({
  href,
  children,
  variant = "primary",
}: ButtonProps) {
  const styles =
    variant === "primary"
      ? "bg-[#a8d99e] text-[#071109] hover:bg-[#c0efb7]"
      : "border border-[#d8c79a] text-[#f4f1e8] hover:bg-[#d8c79a]/10";

  return (
    <Link
      href={href}
      className={`inline-flex rounded-full px-8 py-4 text-sm font-black uppercase tracking-widest transition ${styles}`}
    >
      {children}
    </Link>
  );
}