import { Persona } from "../../data/personas";

export interface PersonaEvolutionProps {
  persona: Persona;
}

export function PersonaEvolution({ persona }: PersonaEvolutionProps) {
  if (!persona || !persona.evolution || persona.evolution.length === 0) {
    return null;
  }

  return (
    <section aria-label={`Evolution history of ${persona.name}`} role="region" tabIndex={-1} className="mb-8">
      <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-gray-100">
        Identity Shifts
      </h3>
      <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
        {persona.evolution.map((event, idx) => (
          <li key={idx} className="mb-1">
            <strong>{event.date}:</strong> {event.description}
          </li>
        ))}
      </ul>
    </section>
  );
}

