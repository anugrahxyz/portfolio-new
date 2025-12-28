export interface Project {
  id: string;
  title: string;
  description: string;
  status: "exploring" | "building" | "shipped" | "paused";
  currentFocus?: string;
  relatedPersonas: string[];
  links: {
    github?: string;
    demo?: string;
    notes?: string;
  };
  visibility: "public" | "private";
}

export const projects: Project[] = [
  {
    id: "askred-mitra-apps",
    title: "Askred Mitra Apps",
    description: "It is used for seamless application integration between Askrindo and BRI, covering insurance pre-sale, post-sale, and distribution for manufacturing companies",
    status: "shipped",
    currentFocus: "Maintaining and optimizing the app",
    relatedPersonas: ["fullstack-developer", "devops-engineer"],
    links: {},
    visibility: "private",
  },
  {
    id: "akk-apps",
    title: "A.K.K Apps",
    description: "It is used to simplify the claims process for Askrindo Mitra and to provide more transparent and seamless claims analytics from Askrindo.",
    status: "building",
    currentFocus: "Enhancing and Implementing new features",
    relatedPersonas: ["fullstack-developer", "devops-engineer"],
    links: {},
    visibility: "private",
  },
  {
    id: "promptbase-prompt-seller",
    title: "Promptbase Prompt Seller",
    description: "Sell-ready prompt, fully optimized and ready to use on Promptbase.com.",
    status: "exploring",
    currentFocus: "Enhancing and Implementing new features",
    relatedPersonas: ["prompt-engineer"],
    links: {},
    visibility: "public",
  },
  {
    id: "portfolio-project",
    title: "Portfolio Project",
    description: "My personal portfolio website to showcase my projects, skills, and experiences.",
    status: "shipped",
    currentFocus: "Adding new features and updating content",
    relatedPersonas: ["fullstack-developer", "devops-engineer", "indie-mobile-developer"],
    links: {},
    visibility: "public",
  },
];
