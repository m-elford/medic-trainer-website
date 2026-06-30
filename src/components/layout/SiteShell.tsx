import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

type SiteShellProps = {
  children: React.ReactNode;
};

export default function SiteShell({ children }: SiteShellProps) {
  return (
    <main className="min-h-screen bg-[#071109] text-[#f4f1e8]">
      <Navbar />
      {children}
      <Footer />
    </main>
  );
}