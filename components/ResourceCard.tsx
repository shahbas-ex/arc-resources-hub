import {
  ArrowUpRight,
  BookOpen,
  FileText,
  Users,
  Globe,
  GraduationCap,
} from "lucide-react";
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
  const getIcon = () => {
    switch (title) {
      case "Official Documentation":
        return <BookOpen size={28} className="text-blue-400" />;

      case "Whitepaper":
        return <FileText size={28} className="text-green-400" />;

      case "Community":
        return <Users size={28} className="text-purple-400" />;

      case "GitHub":
  return <Globe size={28} className="text-blue-400" />;

      case "Blog":
        return <GraduationCap size={28} className="text-yellow-400" />;

      default:
        return <ArrowUpRight size={28} className="text-blue-400" />;
    }
  };

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="group rounded-2xl border border-zinc-800 bg-zinc-900 p-6 transition-all duration-300 hover:-translate-y-2 hover:border-blue-500 hover:shadow-xl hover:shadow-blue-500/20"
    >
      <div className="flex items-center justify-between mb-5">
        {getIcon()}

        <ArrowUpRight className="transition group-hover:translate-x-1 group-hover:-translate-y-1" />
      </div>

      <h3 className="text-xl font-semibold mb-3">
        {title}
      </h3>

      <p className="text-gray-400">
        {description}
      </p>
    </a>
  );
}