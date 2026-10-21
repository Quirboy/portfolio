// SAMPLE CONTENT from the template: replace these with your own projects before publishing.
// Cards show on the home page (the first 4 marked featured) and on /projects.
// If a file with the same slug exists in src/case-studies/, the card links to that page.

export interface Category {
  id: string;
  label: string;
}

export interface Project {
  slug: string;
  title: string;
  category: string; // must match a category id below
  tags: string[];
  year: string;
  description: string;
  image: string;
  status?: string; // optional, e.g. "Deployed". Shown instead of "Category, year"
  github?: string; // optional link to the code
  preview?: string; // optional link to the live project
  featured?: boolean; // show on the home page
}

export const categories: Category[] = [
  { id: "saas", label: "SaaS" },
  { id: "landing", label: "Landing page" },
  { id: "agency", label: "Agency" },
  { id: "ecommerce", label: "E-commerce" },
];

export const projects: Project[] = [
  {
    slug: "novu-saas-dashboard",
    title: "Novu — SaaS Dashboard",
    category: "saas",
    tags: ["SaaS", "Figma", "Tailwind"],
    year: "2025",
    description:
      "Complete redesign of a B2B notification platform. Reduced cognitive load by 40% and improved trial-to-paid conversion.",
    image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=700&q=80",
    featured: true,
  },
  {
    slug: "finlo-fintech-app",
    title: "Finlo — Fintech App",
    category: "landing",
    tags: ["Landing page", "Fintech", "Alpine.js"],
    year: "2024",
    description:
      "Marketing site and onboarding flow for a personal finance app targeting young professionals.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=700&q=80",
    featured: true,
  },
  {
    slug: "orea-creative-agency",
    title: "Orea — Creative Agency",
    category: "agency",
    tags: ["Agency", "Animation"],
    year: "2024",
    description:
      "Bold editorial site for a Paris-based branding studio. Scroll-driven animations and custom cursor.",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=700&q=80",
    featured: true,
  },
  {
    slug: "vesta-real-estate",
    title: "Vesta — Real Estate",
    category: "landing",
    tags: ["Landing page", "Real Estate"],
    year: "2024",
    description:
      "Conversion-focused landing page for a proptech startup entering the French market.",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=700&q=80",
    featured: true,
  },
  {
    slug: "arkio-saas-analytics",
    title: "Arkio — SaaS Analytics",
    category: "saas",
    tags: ["SaaS", "Dashboard", "Figma"],
    year: "2024",
    description:
      "Data visualisation dashboard for a B2B analytics platform. Designed for clarity at high data density.",
    image: "https://images.unsplash.com/photo-1581472723648-909f4851d4ae?w=700&q=80",
  },
  {
    slug: "bloom-ecommerce",
    title: "Bloom — E-commerce",
    category: "ecommerce",
    tags: ["E-commerce", "Shopify"],
    year: "2023",
    description:
      "Custom Shopify theme for a sustainable cosmetics brand. Mobile-first with high emphasis on product imagery.",
    image: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=700&q=80",
  },
  {
    slug: "mira-health-app",
    title: "Mira — Health App",
    category: "landing",
    tags: ["Landing page", "Health", "Tailwind"],
    year: "2023",
    description:
      "App landing page for a mental wellness startup. Warm, accessible design with strong social proof.",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=700&q=80",
  },
  {
    slug: "noto-agency-rebrand",
    title: "Noto — Agency Rebrand",
    category: "agency",
    tags: ["Agency", "Rebrand"],
    year: "2023",
    description: "Full rebrand and website for a digital communications agency in Lyon.",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=700&q=80",
  },
  {
    slug: "kova-ecommerce",
    title: "Kova — E-commerce",
    category: "ecommerce",
    tags: ["E-commerce", "Figma"],
    year: "2023",
    description:
      "Product page redesign and checkout optimisation for a DTC furniture brand. Reduced cart abandonment by 18%.",
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=700&q=80",
  },
];
