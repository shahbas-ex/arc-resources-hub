import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Resources from "@/components/Resources";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen text-white">
        <Hero />
        <Resources />
      </main>

      <Footer />
    </>
  );
}