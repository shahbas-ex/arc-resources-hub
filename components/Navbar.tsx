import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full border-b border-gray-800 bg-black/80 backdrop-blur">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        <Link href="/" className="text-2xl font-bold text-blue-500">
          Arc Resources Hub
        </Link>

        <div className="flex gap-6 text-gray-300">
          <Link href="/">Home</Link>
          <Link href="#resources">Resources</Link>
          <Link href="#community">Community</Link>
          <Link href="#about">About</Link>
        </div>
      </div>
    </nav>
  );
}