export interface Profile {
  name: string;
  tagline: string;
  now: string;
  currentFocus: {
    description: string;
    activePersonas: string[];
  };
}

export const profile: Profile = {
  name: "Anugrah Zeputra",
  tagline: "Humanizing technology to make life more easier.",
  now: "Engineering Prompt to sell on Promptbase.com while building web apps at work",
  currentFocus: {
    description: "Engineering Prompt to Sell on Promptbase.com",
    activePersonas: ["fullstack-developer", "prompt-engineer"]
  }
};
