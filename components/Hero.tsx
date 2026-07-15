export default function Hero() {
  return (
     <section className="max-w-6xl mx-auto px-6 pt-24 pb-16 text-center">
      <div className="inline-block rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-1 text-sm text-blue-400 mb-6">
        🚀 Build Faster on Arc
      </div>

      <h1 className="text-6xl font-extrabold leading-tight">
        Everything You Need
        <br />
        <span className="text-blue-500 drop-shadow-[0_0_20px_rgba(59,130,246,0.6)]">
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
          className="rounded-xl bg-blue-600 px-6 py-3 font-semibold transition-all duration-300 hover:bg-blue-700 hover:scale-105"
        >
          Get Started
        </a>

        <a
          href="https://docs.arc.io"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-xl border border-zinc-700 px-6 py-3 font-semibold transition-all duration-300 hover:bg-zinc-900 hover:scale-105"
        >
          Documentation
        </a>
      </div>
    </section>
  );
}