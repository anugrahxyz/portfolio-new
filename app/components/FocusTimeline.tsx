import { FocusTimelinePhase } from "../../data/focusTimeline";
import { Persona } from "../../data/personas";
import { Project } from "../../data/projects";

interface FocusTimelineProps {
  focusTimeline: FocusTimelinePhase[];
  personas: Persona[];
  projects: Project[];
}

export function FocusTimeline({ focusTimeline, personas, projects }: FocusTimelineProps) {
  const getPersonaName = (id: string) => {
    const p = personas.find((x) => x.id === id);
    return p ? p.name : id;
  };
  const getProjectTitle = (id: string) => {
    const p = projects.find((x) => x.id === id);
    return p ? p.title : id;
  };

  return (
    <section aria-label="Focus timeline" className="mb-8">
      <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100">Focus Timeline</h2>
      <ol className="relative ml-2">
        <span className="absolute top-0 bottom-0 left-3 border-l-2 border-gray-300 dark:border-gray-700"></span>
        {focusTimeline.map((phase) => (
          <li key={phase.id} className="mb-6 relative pl-10">
            <span className="absolute left-0 top-3 flex h-6 w-6 items-center justify-center rounded-full bg-blue-600 text-white font-bold">•</span>
            <div className="mb-1 font-semibold text-lg text-gray-900 dark:text-gray-100">
              {phase.title}
            </div>
            <time className="block mb-2 text-sm text-gray-500 dark:text-gray-400">
              {phase.timeRange}
            </time>
            <p className="mb-2 text-gray-700 dark:text-gray-300">{phase.description}</p>
            <div className="mb-3 text-gray-700 dark:text-gray-300">
              <strong>Connected personas:</strong>{' '}
              {phase.connectedPersonas.map((id) => (
                <a 
                  key={id} 
                  href="#" 
                  className="mr-2 cursor-pointer underline text-blue-600"
                  aria-label={`Link to persona ${getPersonaName(id)}`}
                >
                  {getPersonaName(id)}
                </a>
              ))}
            </div>
            <div className="mb-3 text-gray-700 dark:text-gray-300">
              <strong>Influenced projects:</strong>{' '}
              {phase.influencedProjects.map((id) => (
                <a
                  key={id}
                  href="#"
                  className="mr-2 cursor-pointer underline text-blue-600"
                  aria-label={`Link to project ${getProjectTitle(id)}`}
                >
                  {getProjectTitle(id)}
                </a>
              ))}
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
