// Add or edit project cards here. Set featured: true to show a project on the home page.
// For detailed pages, use a matching Markdown filename in src/case-studies/.

export interface Category {
  id: string;
  label: string;
}

export interface Project {
  slug: string;
  title: string;
  category: string;
  tags: string[];
  year: string;
  description: string;
  image: string;
  status?: string;
  github?: string;
  preview?: string;
  featured?: boolean;
}

export const categories: Category[] = [
  { id: "unreal", label: "Unreal Engine" },
  { id: "racing", label: "Racing" },
  { id: "fps", label: "FPS" },
];

export const projects: Project[] = [
  {
    slug: "shine-project",
    title: "SHine Project — Souls-like Prototype",
    category: "unreal",
    tags: ["Unreal Engine", "Blueprints", "C++", "Combat", "Enemy AI", "Level Design"],
    year: "Personal project",
    description:
      "My first Unreal Engine project: a short Souls-like prototype focused on melee combat, enemy AI, animation states, and a dark-fantasy world. I created the mountain terrain in Gaea and used Unreal Marketplace assets for the rest of the environment. I would like to revisit it to fix bugs and refine the combat.",
    image: "/portfolio/images/projects/shine-cover.svg",
    featured: true,
  },
  {
    slug: "racing-game",
    title: "Racing Game — Unity Prototype",
    category: "racing",
    tags: ["Unity", "C#", "AI Opponents", "Ghost Mode", "UI"],
    year: "Student project",
    description:
      "A short Unity racing-game project where I explored AI opponents, race counters, ghost mode, a leaderboard, and lap-time tracking. I created the level design myself and sourced the remaining assets from itch.io.",
    image: "/portfolio/images/projects/racing-cover.svg",
    featured: true,
  },
  {
    slug: "shooter-prototype",
    title: "First-Person Shooter Prototype",
    category: "fps",
    tags: ["FPS", "Gameplay Programming", "Weapon System", "Hit Detection"],
    year: "School assignment",
    description:
      "An FPS prototype focused on learning core mechanics and programming logic rather than visual polish. It explores movement, aiming, shooting, reloading, weapon hit detection, and basic target or enemy reactions to damage.",
    image: "/portfolio/images/projects/shooter-cover.svg",
    featured: true,
  },
];
