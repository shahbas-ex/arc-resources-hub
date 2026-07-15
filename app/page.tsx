import Navbar from "@/components/Navbar";

const cards = [
  {
    title: "📚 Documentation",
    description: "Official docs, whitepaper, and developer guides.",
  },
  {
    title: "🛠 Developer Tools",
    description: "SDKs, APIs, GitHub repositories, and utilities.",
  },
  {
    title: "👥 Community",
    description: "Discord, X, Telegram, and Office Hours.",
  },
  {
    title: "🎥 Learn",
    description: "Videos, tutorials, and blog posts to get started.",
  },
];

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-black text-white">
        <section className="text-center py-24 px-6">
          <h1 className="text-5xl font-bold mb-6">
            Arc Resources Hub
          </h1>

          <p className="text-gray-400 max-w-2xl mx-auto mb-8">
            Everything you need to build on Arc in one place.
          </p>

          <div className="flex justify-center gap-4">
            <button className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-xl">
              Get Started
            </button>

            <button className="border border-gray-700 hover:bg-gray-900 px-6 py-3 rounded-xl">
              Documentation
            </button>
          </div>
        </section>

        <section className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-6 pb-20">
          {cards.map((card) => (
            <div
              key={card.title}
              className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 hover:border-blue-500 transition"
            >
              <h2 className="text-xl font-semibold mb-3">
                {card.title}
              </h2>

              <p className="text-gray-400">
                {card.description}
              </p>
            </div>
          ))}
        </section>
      </main>
    </>
  );
}