// Sample text from your HTML page. These describe web design work, so change them
// to the services you actually want to offer.

export interface Service {
  icon: "monitor" | "code" | "chart";
  title: string;
  text: string;
}

export const services: Service[] = [
  {
    icon: "monitor",
    title: "UI/UX Design",
    text: "From wireframes to polished Figma prototypes. Intuitive, visually compelling interfaces that convert visitors into users and put usability first.",
  },
  {
    icon: "code",
    title: "Frontend Dev",
    text: "Production-grade code with Tailwind CSS and Alpine.js. Pixel-perfect, fully responsive, SEO-friendly and blazing fast — no bloat, no heavy frameworks.",
  },
  {
    icon: "chart",
    title: "Landing Pages",
    text: "High-converting pages for SaaS, apps and personal brands. Designed to communicate value instantly and drive action from the first scroll.",
  },
];
