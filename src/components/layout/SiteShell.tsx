import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

type SiteShellProps = {
  children: React.ReactNode;
};

export default function SiteShell({ children }: SiteShellProps) {
  return (
    <main className="min-h-screen bg-background text-text-main">
      <Navbar />
      {children}
      <Footer />
    </main>
  );
}