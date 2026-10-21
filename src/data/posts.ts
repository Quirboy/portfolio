import type { MarkdownInstance } from "astro";

// Every Markdown file in src/posts/ becomes a blog post at /blog/<file-name>.
// The file name (without .md) is the post's URL, so use lowercase words with dashes.

export interface PostFrontmatter {
  title: string;
  description: string;
  date: string; // "YYYY-MM-DD" (keep the quotes)
  category: string;
  image: string;
}

const modules = import.meta.glob<MarkdownInstance<PostFrontmatter>>("../posts/*.md", {
  eager: true,
});

export const posts = Object.entries(modules)
  .map(([path, post]) => {
    const slug = path.split("/").pop()!.replace(/\.md$/, "");
    const words = post.rawContent().split(/\s+/).filter(Boolean).length;
    return {
      slug,
      ...post.frontmatter,
      readingTime: `${Math.max(1, Math.round(words / 200))} min read`,
      Content: post.Content,
    };
  })
  .sort((a, b) => b.date.localeCompare(a.date));

export type Post = (typeof posts)[number];

export const postCategories = [...new Set(posts.map((p) => p.category))];

export function formatDate(date: string) {
  return new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
    timeZone: "UTC",
  }).format(new Date(date));
}
