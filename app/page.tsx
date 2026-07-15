import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Resources from "@/components/Resources";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gradient-to-b from-black via-zinc-950 to-black text-white">
        <Hero />
        <Resources />
      </main>
      <Footer />
    </>
  );
}