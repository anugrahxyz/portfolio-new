interface Persona {
  id: string;
  name: string;
  description: string;
  status: string;
}

interface PersonaCardProps {
  persona: Persona;
  selected: boolean;
  onClick: (id: string) => void;
}

export function PersonaCard({ persona, selected, onClick }: PersonaCardProps) {
  return (
    <button
      className={`card p-6 m-2 flex flex-col rounded border transition-colors text-left focus:outline-none min-w-[280px] max-w-[320px]`}
      style={{
        borderColor: selected ? "var(--accent)" : "var(--card-border)",
        backgroundColor: selected ? "var(--accent)" : "transparent",
        color: selected ? "white" : "var(--foreground)",
        boxShadow: selected ? "0 0 8px var(--accent)" : "var(--card-shadow)"
      }}
      onClick={() => onClick(persona.id)}
      aria-pressed={selected}
      aria-label={`Select persona: ${persona.name}`}
    >
      <h3 className="font-semibold text-lg truncate whitespace-nowrap" style={{color: selected ? "white" : "var(--foreground)"}} title={persona.name}>
        {persona.name}
      </h3>
      <hr className="border-t-2 border-accent my-2" />
      <p className="mb-1" style={{color: selected ? "white" : "var(--foreground)"}}>
        {persona.description}
      </p>
      <small className="text-sm" style={{color: selected ? "#dbeafe" : "var(--foreground)"}}>Status: {persona.status}</small>
    </button>
  );
}
