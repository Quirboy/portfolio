// Game-development areas currently explored in projects and coursework.

export interface Service {
  icon: "monitor" | "code" | "chart";
  title: string;
  text: string;
}

export const services: Service[] = [
  {
    icon: "code",
    title: "Gameplay Programming",
    text: "I build and iterate on gameplay mechanics and game logic, using C# in Unity and experimenting with Blueprints and C++ in Unreal Engine.",
  },
  {
    icon: "monitor",
    title: "Combat and Enemy AI",
    text: "My SHine prototype includes melee combat, hit detection, enemy tracking and attack behavior, plus animation-state transitions.",
  },
  {
    icon: "chart",
    title: "Level Design and Environments",
    text: "I work on playable layouts, materials and lighting. For SHine, I modelled the mountain terrain in Gaea and built the scene around a dark-fantasy atmosphere.",
  },
];
