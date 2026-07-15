import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function AboutPage() {
  return (
    <>
      <Navbar />

       <main className="min-h-screen text-white">
        <div className="mx-auto max-w-6xl">
          <h1 className="mb-6 text-5xl font-bold">About</h1>

          <p className="text-lg text-gray-400">
            Arc Resources Hub is a community project that helps developers find
            official documentation, tools, and learning resources in one place.
          </p>
        </div>
      </main>

      <Footer />
    </>
  );
}