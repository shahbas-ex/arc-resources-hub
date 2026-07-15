"use client";

import { useState } from "react";
import ResourceCard from "./ResourceCard";

const resources = [
  {
    title: "Official Documentation",
    description: "Learn how to build on Arc.",
    category: "Docs",
    url: "https://docs.arc.io",
  },
  {
    title: "Whitepaper",
    description: "Read the Arc whitepaper.",
    category: "Docs",
    url: "https://www.arc.io/arc-token-whitepaper",
  },
  {
    title: "Community",
    description: "Join the Arc community.",
    category: "Community",
    url: "https://community.arc.io",
  },
  {
    title: "GitHub",
    description: "Explore developer repositories.",
    category: "Tools",
    url: "https://github.com",
  },
  {
    title: "Blog",
    description: "Latest updates and articles.",
    category: "Learn",
    url: "https://community.arc.io/public/resources",
  },
  {
    title: "Office Hours",
    description: "Builder sessions and project feedback.",
    category: "Community",
    url: "https://community.arc.io/public/resources/project-submission-form-for-office-hours",
  },
];

const categories = [
  "All",
  "Docs",
  "Tools",
  "Community",
  "Learn",
];

export default function Resources() {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredResources = resources.filter((resource) => {
    const matchesSearch =
      resource.title.toLowerCase().includes(search.toLowerCase()) ||
      resource.description.toLowerCase().includes(search.toLowerCase());

    const matchesCategory =
      selectedCategory === "All" ||
      resource.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <section
      id="resources"
      className="max-w-6xl mx-auto px-6 pb-24"
    >
      <h2 className="text-4xl font-bold mb-3">
        Resources
      </h2>

      <p className="text-gray-400 mb-8">
        Everything you need to start building on Arc.
      </p>

      <input
        type="text"
        placeholder="🔍 Search resources..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full mb-6 rounded-xl border border-zinc-700 bg-zinc-900 px-4 py-3 text-white outline-none focus:border-blue-500"
      />

      <div className="flex flex-wrap gap-3 mb-10">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`rounded-lg px-4 py-2 transition ${
              selectedCategory === category
                ? "bg-blue-600 text-white"
                : "bg-zinc-900 text-gray-300 hover:bg-zinc-800"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredResources.map((item) => (
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