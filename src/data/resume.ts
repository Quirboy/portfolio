// PLACEHOLDERS: replace each entry with your own. Delete an entry to remove it,
// or leave a list empty ([]) to hide that group completely.

export interface TimelineItem {
  date: string;
  title: string;
  place?: string;
}

export const experience: TimelineItem[] = [
  { date: "Start – End", title: "Role title", place: "Company or project" },
];

export const education: TimelineItem[] = [
  { date: "Start year – ongoing", title: "Your degree or program", place: "Your school" },
];

export const certifications: TimelineItem[] = [
  { date: "Month Year", title: "Certificate name", place: "Issuer" },
];
