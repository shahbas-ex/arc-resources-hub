import Navbar from "@/components/Navbar";
const resources = [
  {
    title: "Official Documentation",
    description: "Learn how to build on Arc.",
    url: "https://docs.arc.io",
  },
  {
    title: "Whitepaper",
    description: "Read the Arc whitepaper.",
    url: "https://www.arc.io/arc-token-whitepaper",
  },
  {
    title: "Community",
    description: "Join the Arc community.",
    url: "https://community.arc.io",
  },
  {
    title: "GitHub",
    description: "Explore developer repositories.",
    url: "https://github.com",
  },
  {
    title: "Blog",
    description: "Latest updates and articles.",
    url: "https://community.arc.io/public/resources",
  },
  {
    title: "Office Hours",
    description: "Builder sessions and project feedback.",
    url: "https://community.arc.io/public/resources/project-submission-form-for-office-hours",
  },
];
export default function Home() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-gradient-to-b from-black via-zinc-950 to-black text-white">
        <section className="max-w-6xl mx-auto px-6 py-24 text-center">

          <div className="inline-block rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-1 text-sm text-blue-400 mb-6">
            🚀 Build Faster on Arc
          </div>

          <h1 className="text-6xl font-extrabold leading-tight">
            Everything You Need
            <br />
            <span className="text-blue-500">
              To Build on Arc
            </span>
          </h1>

          <p className="text-gray-400 max-w-2xl mx-auto mt-6 text-lg">
            Discover official documentation, developer tools,
            community resources, tutorials, and everything
            needed to start building on Arc.
          </p>

          <div className="mt-10 flex justify-center gap-4">

            <a
              href="#resources"
              className="rounded-xl bg-blue-600 px-6 py-3 hover:bg-blue-700 transition"
            >
              Get Started
            </a>

            <a
              href="https://docs.arc.io"
              target="_blank"
              className="rounded-xl border border-zinc-700 px-6 py-3 hover:bg-zinc-900 transition"
            >
              Documentation
            </a>

          </div>

               </section>

        {/* Resources Section */}
        <section
          id="resources"
          className="max-w-6xl mx-auto px-6 pb-24"
        >
          <h2 className="text-4xl font-bold mb-3">
            Resources
          </h2>

          <p className="text-gray-400 mb-10">
            Everything you need to start building on Arc.
          </p>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {resources.map((item) => (
              <a
                key={item.title}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6 hover:border-blue-500 hover:-translate-y-1 transition-all"
              >
                <h3 className="text-xl font-semibold mb-2">
                  {item.title}
                </h3>

                <p className="text-gray-400">
                  {item.description}
                </p>

                <p className="mt-5 text-blue-400 font-medium">
                  Open →
                </p>
              </a>
            ))}
          </div>
        </section>

      </main>
    </>
  );
}