import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Resources from "@/components/Resources";

export default function ResourcesPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen text-white">
        <Resources />
      </main>

      <Footer />
    </>
  );
}