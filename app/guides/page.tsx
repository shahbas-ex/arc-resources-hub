import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function GuidesPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-gradient-to-b from-black via-zinc-950 to-black px-6 py-20 text-white">
        <div className="mx-auto max-w-6xl">
          <h1 className="mb-6 text-5xl font-bold">Guides</h1>

          <p className="text-lg text-gray-400">
            Step-by-step tutorials for building on Arc.
          </p>
        </div>
      </main>

      <Footer />
    </>
  );
}