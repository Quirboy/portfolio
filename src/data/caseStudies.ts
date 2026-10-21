import type { MarkdownInstance } from "astro";

// Every Markdown file in src/case-studies/ becomes a page at /projects/<file-name>.
// Give a project in projects.ts the same slug and its card links here automatically.

export interface CaseStudyFrontmatter {
  title: string;
  summary: string;
  cover: string;
  tags: string[];
  year: string;
  duration: string;
  facts: { label: string; value: string }[];
  stats: { value: string; label: string }[];
}

const modules = import.meta.glob<MarkdownInstance<CaseStudyFrontmatter>>(
  "../case-studies/*.md",
  { eager: true },
);

export const caseStudies = Object.entries(modules).map(([path, study]) => ({
  slug: path.split("/").pop()!.replace(/\.md$/, ""),
  ...study.frontmatter,
  Content: study.Content,
}));

export const caseStudySlugs = new Set(caseStudies.map((s) => s.slug));
