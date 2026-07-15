import { ArrowUpRight } from "lucide-react";

type ResourceCardProps = {
  title: string;
  description: string;
  url: string;
};

export default function ResourceCard({
  title,
  description,
  url,
}: ResourceCardProps) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="group rounded-2xl border border-zinc-800 bg-zinc-900 p-6 transition-all duration-300 hover:border-blue-500 hover:shadow-lg hover:shadow-blue-500/20 hover:-translate-y-1"
    >
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-semibold">{title}</h3>

        <ArrowUpRight
          className="group-hover:translate-x-1 group-hover:-translate-y-1 transition"
          size={20}
        />
      </div>

      <p className="text-gray-400">
        {description}
      </p>
    </a>
  );
}