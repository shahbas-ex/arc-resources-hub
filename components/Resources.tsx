"use client";

import { useState } from "react";
import ResourceCard from "./ResourceCard";
import { resources } from "@/data/resources";

const categories = [
  "All",
  "Docs",
  "Whitepaper",
  "Tools",
  "Community",
  "Ecosystem",
  "News",
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
    <section id="resources" className="max-w-6xl mx-auto px-6 pb-24">
      {/* Featured Resource */}
      <div className="mb-16 rounded-3xl border border-blue-500/30 bg-gradient-to-r from-blue-600/20 to-cyan-600/20 p-8 shadow-lg shadow-blue-500/10">
        <p className="mb-2 font-semibold text-blue-400">
          ⭐ Featured Resource
        </p>

        <h2 className="mb-4 text-4xl font-bold">
          Official Documentation
        </h2>

        <p className="mb-6 max-w-2xl text-gray-300">
          New to Arc? Start here. The official documentation covers
          everything from setup to building and deploying applications.
        </p>

        <a
          href="https://docs.arc.io"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block rounded-xl bg-blue-600 px-6 py-3 font-semibold transition hover:bg-blue-700"
        >
          Open Documentation →
        </a>
      </div>

      <h2 className="mb-3 text-4xl font-bold">
        Resources
      </h2>

      <p className="mb-8 text-gray-400">
        Everything you need to start building on Arc.
      </p>

      <input
        type="text"
        placeholder="🔍 Search resources..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="mb-6 w-full rounded-xl border border-zinc-700 bg-zinc-900 px-4 py-3 text-white outline-none focus:border-blue-500"
      />

      <div className="mb-10 flex flex-wrap gap-3">
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
  category={item.category}
  url={item.url}
/>
        ))}
      </div>

      {filteredResources.length === 0 && (
        <div className="mt-10 rounded-2xl border border-zinc-800 bg-zinc-900 p-10 text-center">
          <h3 className="mb-2 text-2xl font-bold">
            No resources found
          </h3>

          <p className="text-gray-400">
            Try a different search term or choose another category.
          </p>
        </div>
      )}
    </section>
  );
}