export interface LearningLog {
  id: string;
  content: string;
  inspiredByPersona: string[];
  linkedProjects: string[];
  createdAt: string;
  visibility: "public" | "private" | "draft";
}

export const learningLogs: LearningLog[] = [];
