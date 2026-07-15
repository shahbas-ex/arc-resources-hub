import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Resources from "@/components/Resources";

export default function ResourcesPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-gradient-to-b from-black via-zinc-950 to-black text-white pt-12">
        <Resources />
      </main>

      <Footer />
    </>
  );
}