import { CurrentFocusCard } from "./CurrentFocusCard";
import { Profile } from "../../data/profile";
import { Persona } from "../../data/personas";

export interface ProfileCardProps {
  profile: Profile;
  personas: Persona[];
  nowElevated?: boolean;
}

export function ProfileCard({ profile, personas, nowElevated = false }: ProfileCardProps) {
  return (
    <section className="card p-8 mb-8 rounded shadow" style={{backgroundColor: "var(--card-bg)", border: `1px solid var(--card-border)`, boxShadow: `var(--card-shadow)`}}>
      <div className="flex items-center mb-4">
        <img
          src="/profile.png"
          alt="Profile Image"
          className="w-20 h-20 rounded-full mr-6 border border-gray-300 dark:border-gray-700"
        />
        <div className="flex items-center justify-between flex-grow">
          <div>
            <h1 className="text-3xl font-semibold mb-0 leading-snug" style={{color: "var(--foreground)"}}>
              {profile.name}
            </h1>
            <p className="text-lg italic leading-relaxed mb-0" style={{color: "var(--foreground)"}}>{profile.tagline}</p>
          </div>
          <button onClick={() => window.open('https://www.linkedin.com/in/anugrahxyz', '_blank')} className="px-5 py-2 bg-accent text-white rounded hover:bg-accent-dark focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 whitespace-nowrap">
            Let&apos;s collaborate
          </button>
        </div>
      </div>
      <div
        style={nowElevated ? { borderLeft: `4px solid var(--accent)`, paddingLeft: "1rem", marginBottom: "1.25rem" } : undefined}
        aria-label="Current focus"
      >
        <h2 className="font-semibold mb-2 text-base" style={nowElevated ? { color: "var(--accent)" } : { color: "var(--foreground)" }}>
          Now
        </h2>
        <p style={nowElevated ? { color: "var(--foreground)", fontWeight: "500", fontSize: "0.875rem", lineHeight: "1.5rem" } : { color: "var(--foreground)" }}>
          {profile.now}. A quiet exploration of new ideas and tools.
        </p>
      </div>
      {nowElevated && <CurrentFocusCard profile={profile} personas={personas} />}
    </section>
  );
}


