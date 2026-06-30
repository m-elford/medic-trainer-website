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
      ? "bg-primary text-background hover:bg-primary-hover"
      : "border border-secondary text-text-main hover:bg-secondary/10";

  return (
    <Link
      href={href}
      className={`inline-flex rounded-full px-8 py-4 text-sm font-black uppercase tracking-widest transition ${styles}`}
    >
      {children}
    </Link>
  );
}