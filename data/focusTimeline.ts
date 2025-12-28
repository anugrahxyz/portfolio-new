export interface FocusTimelinePhase {
  id: string;
  title: string;
  timeRange: string;
  description: string;
  connectedPersonas: string[];
  influencedProjects: string[];
}

export const focusTimeline: FocusTimelinePhase[] = [
  {
    id: "phase-1",
    title: "Dev-Ops Mastery",
    timeRange: "2021-05 to 2021-12",
    description: "Mastering Dev-Ops skills including CI/CD and Infrastructure as Code.",
    connectedPersonas: ["devops-engineer"],
    influencedProjects: [],
  },
  {
    id: "phase-2",
    title: "Building Apps for PT Asuransi Kredit Indonesia",
    timeRange: "2022-01 to now",
    description: "Developing and maintaining web applications for Askrindo and Askrindo-BRI integration.",
    connectedPersonas: ["full-stack-developer", "devops-engineer"],
    influencedProjects: ["askred-mitra-apps", "akk-apps"],
  },
  {
    id: "phase-3",
    title: "Selling Prompts on Promptbase.com",
    timeRange: "2025-12 to now",
    description: "Designing and selling AI prompts optimized for various use-cases on Promptbase.com.",
    connectedPersonas: ["prompt-engineer"],
    influencedProjects: ["promptbase-prompt-seller"],
  },
];
