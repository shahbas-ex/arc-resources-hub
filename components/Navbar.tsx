import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full border-b border-zinc-800 bg-black/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="text-2xl font-bold text-blue-500"
        >
          Arc Resources Hub
        </Link>

        <div className="flex items-center gap-6 text-gray-300">
          <Link
            href="/"
            className="transition hover:text-blue-400"
          >
            Home
          </Link>

          <Link
            href="/resources"
            className="transition hover:text-blue-400"
          >
            Resources
          </Link>

          <Link
            href="/guides"
            className="transition hover:text-blue-400"
          >
            Guides
          </Link>

          <Link
            href="/tools"
            className="transition hover:text-blue-400"
          >
            Tools
          </Link>

          <Link
            href="/about"
            className="transition hover:text-blue-400"
          >
            About
          </Link>
        </div>
      </div>
    </nav>
  );
}