export interface Activity {
  id: string;
  content: string;
  relatedPersona: string;
  relatedProject?: string;
  createdAt: string;
  visibility: "public" | "private" | "draft";
}

export const activities: Activity[] = [];
