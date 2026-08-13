"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import type { BlogPost } from "@/lib/blog-posts";

function SearchIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-5 w-5 fill-none stroke-current"
      strokeWidth="2.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.35-4.35" />
    </svg>
  );
}

export function BlogSearch({
  posts,
  placeholder = "Search...",
}: {
  posts: BlogPost[];
  placeholder?: string;
}) {
  const [query, setQuery] = useState("");

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (q.length < 2) return [];

    return posts
      .filter((post) => {
        const haystack = `${post.title} ${post.excerpt} ${post.category}`.toLowerCase();
        return haystack.includes(q);
      })
      .slice(0, 6);
  }, [posts, query]);

  return (
    <div className="relative">
      <label className="flex h-12 items-center rounded-md bg-white px-5 text-[#0051a8] shadow-sm">
        <span className="sr-only">Search blog posts</span>
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={placeholder}
          className="section-desc min-w-0 flex-1 bg-transparent text-[#6b7280] outline-none placeholder:text-[#6b7280]"
        />
        <SearchIcon />
      </label>

      {query.trim().length >= 2 ? (
        <div className="absolute left-0 right-0 top-[calc(100%+8px)] z-20 overflow-hidden rounded-md border border-[#e8edf5] bg-white shadow-[0_12px_30px_rgba(10,31,92,0.12)]">
          {results.length > 0 ? (
            <ul className="max-h-72 overflow-y-auto py-2">
              {results.map((post) => (
                <li key={post.slug}>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="block px-4 py-3 transition hover:bg-[#f3f7ff]"
                    onClick={() => setQuery("")}
                  >
                    <p className="section-label text-[#1e6fd0]">{post.category}</p>
                    <p className="section-desc mt-1 font-bold text-brand">
                      {post.title}
                    </p>
                  </Link>
                </li>
              ))}
            </ul>
          ) : (
            <p className="section-desc px-4 py-4 text-[#6b7a9a]">
              No posts found for “{query.trim()}”.
            </p>
          )}
        </div>
      ) : null}
    </div>
  );
}
