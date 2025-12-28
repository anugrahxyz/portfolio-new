export interface Persona {
  id: string;
  name: string;
  description: string;
  status: "active" | "exploring" | "paused";
  createdAt?: string;
  evolution?: { date: string; description: string }[];
  visibility: "public" | "private";
}

export const personas: Persona[] = [
  {
    id: "fullstack-developer",
    name: "Fullstack Developer",
    description: "building E2E Web Apps, specialized in Backend Apps with Spring Boot and Frontend with Angular.",
    status: "active",
    createdAt: "2022-01-17",
    evolution: [],
    visibility: "public",
  },
  {
    id: "prompt-engineer",
    name: "Prompt Engineer",
    description: "Design AI Prompt, specialized in Text-to-Image and Text-to-Text Prompt Engineering.",
    status: "exploring",
    createdAt: "2025-12-25",
    evolution: [],
    visibility: "public",
  },
  {
    id: "devops-engineer",
    name: "Dev-Ops Engineer",
    description: "Handling Apps-to-Market Deployment, specialized in CI/CD with GitHub Actions and Infrastructure with Terraform.",
    status: "exploring",
    createdAt: "2021-03-05",
    evolution: [],
    visibility: "public",
  },
  {
    id: "indie-mobile-developer",
    name: "Indie Mobile Developer",
    description: "Making portfolio mobile apps, specialized in Android with Kotlin and iOS with Swift.",
    status: "exploring",
    createdAt: "2021-12-25",
    evolution: [],
    visibility: "public",
  },
];
