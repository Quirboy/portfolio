// These entries describe project experience with tools, not paid employment.
// Leave education or certification arrays empty if you don't want those groups displayed.

export interface TimelineItem {
  date: string;
  title: string;
  place?: string;
}

export const experience: TimelineItem[] = [
  {
    date: "2.5 years",
    title: "Unreal Engine",
    place: "Hobby projects · Blueprints and C++ scripting, materials, lighting, and level design.",
  },
  {
    date: "2.5 years",
    title: "Unity",
    place: "School projects · C# scripting, simple AI behavior, UI, and the Unity Input System.",
  },
  {
    date: "2.5 years",
    title: "C#",
    place: "Mostly used in Unity to script gameplay mechanics, interactive logic, and classes.",
  },
];

export const education: TimelineItem[] = [];
export const certifications: TimelineItem[] = [];
