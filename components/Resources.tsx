import ResourceCard from "./ResourceCard";

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

export default function Resources() {
  return (
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
          <ResourceCard
            key={item.title}
            title={item.title}
            description={item.description}
            url={item.url}
          />
        ))}
      </div>
    </section>
  );
}