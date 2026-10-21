// Edit these lists to match what you know. Each list can be shorter or longer.

export interface Tool {
  name: string;
  icon: string; // a Simple Icons name, see https://simpleicons.org
}

export const technicalSkills = [
  "Gameplay programming",
  "3D modelling",
  "Level design",
  "Problem solving",
];

export const coreTools: Tool[] = [
  { name: "Unity", icon: "unity" },
  { name: "C#", icon: "csharp" },
  { name: "Unreal Engine", icon: "unrealengine" },
  { name: "C++", icon: "cplusplus" },
  { name: "Blender", icon: "blender" },
  { name: "GitHub", icon: "github" },
];

// Smaller, less important tools. Leave empty to hide the group.
export const secondaryTools: Tool[] = [];
