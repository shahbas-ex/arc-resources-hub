export default function Footer() {
  return (
    <footer className="border-t border-zinc-800 mt-20">
      <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-center text-gray-400">

        <div>
          © 2026 Arc Resources Hub
        </div>

        <div className="flex gap-6 mt-4 md:mt-0">
          <a
            href="https://community.arc.io"
            target="_blank"
            className="hover:text-white"
          >
            Community
          </a>

          <a
            href="https://docs.arc.io"
            target="_blank"
            className="hover:text-white"
          >
            Docs
          </a>

          <a
            href="https://github.com/shahbas-ex"
            target="_blank"
            className="hover:text-white"
          >
            GitHub
          </a>
        </div>

      </div>
    </footer>
  );
}