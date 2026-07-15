import {
  ArrowUpRight,
  BookOpen,
  FileText,
  Users,
  Globe,
  GraduationCap,
  Newspaper,
  Layers,
} from "lucide-react";

type ResourceCardProps = {
  title: string;
  description: string;
  url: string;
  category?: string;
};

export default function ResourceCard({
  title,
  description,
  url,
  category,
}: ResourceCardProps) {
  const getIcon = () => {
    switch (category) {
      case "Docs":
        return <BookOpen size={28} className="text-blue-400" />;

      case "Whitepaper":
        return <FileText size={28} className="text-green-400" />;

      case "Community":
        return <Users size={28} className="text-purple-400" />;

      case "Tools":
        return <Globe size={28} className="text-cyan-400" />;

      case "News":
        return <Newspaper size={28} className="text-orange-400" />;

      case "Ecosystem":
        return <Layers size={28} className="text-pink-400" />;

      default:
        return <GraduationCap size={28} className="text-yellow-400" />;
    }
  };

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="group rounded-2xl border border-zinc-800 bg-zinc-900 p-6 transition-all duration-300 hover:-translate-y-2 hover:border-blue-500 hover:shadow-xl hover:shadow-blue-500/20"
    >
      <div className="mb-4 flex items-center justify-between">
        {getIcon()}

        <ArrowUpRight className="transition group-hover:translate-x-1 group-hover:-translate-y-1" />
      </div>

      {category && (
        <span className="mb-3 inline-block rounded-full bg-blue-600/20 px-3 py-1 text-xs font-semibold text-blue-400">
          {category}
        </span>
      )}

      <h3 className="mb-3 text-xl font-semibold">
        {title}
      </h3>

      <p className="text-gray-400">
        {description}
      </p>
    </a>
  );
}