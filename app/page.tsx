"use client";

import React, { useState } from "react";
import { profile } from "../data/profile";
import { personas } from "../data/personas";
import { projects } from "../data/projects";
import { activities } from "../data/activities";
import { focusTimeline } from "../data/focusTimeline";
import { learningLogs } from "../data/learningLogs";

import { ProfileCard } from "./components/ProfileCard";
import { PersonaCard } from "./components/PersonaCard";
import { ProjectCard } from "./components/ProjectCard";
import { ActivityFeed } from "./components/ActivityFeed";
import { FocusTimeline } from "./components/FocusTimeline";
import { LearningLog } from "./components/LearningLog";
import { PersonaEvolution } from "./components/PersonaEvolution";

export default function Home() {
  const [selectedPersona, setSelectedPersona] = useState<string | null>(null);

  const filteredProjects = selectedPersona
    ? projects.filter((p) => p.relatedPersonas.includes(selectedPersona))
    : projects;

  const filteredActivities = selectedPersona
    ? activities.filter((a) => a.relatedPersona === selectedPersona).slice().reverse()
    : activities.slice().reverse();

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-black p-8 font-sans">
      <main className="max-w-4xl mx-auto flex flex-col gap-8" role="main">
        <ProfileCard profile={profile} personas={personas} nowElevated />

        <nav
          className="flex gap-4 overflow-x-auto mb-8 scrollbar-hide"
          aria-label="Personas navigation"
          role="list"
        >
          {personas.map((persona) => (
            <PersonaCard
              key={persona.id}
              persona={persona}
              selected={persona.id === selectedPersona}
              onClick={(id) => setSelectedPersona(id === selectedPersona ? null : id)}
              aria-pressed={persona.id === selectedPersona}
            />
          ))}
        </nav>

        <section aria-labelledby="projects-heading" role="region" tabIndex={-1}>
          <h2
            id="projects-heading"
            className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100"
          >
            Projects
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {filteredProjects.length === 0 ? (
              <p className="text-center text-gray-500 dark:text-gray-400">No projects to show.</p>
            ) : (
              filteredProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))
            )}
          </div>
        </section>

        {filteredProjects.length === 0 ? null : filteredActivities.length === 0 ? (
          <p className="text-center text-sm text-gray-400 dark:text-gray-600 py-6 italic select-none">No activities to show.</p>
        ) : (
          <ActivityFeed activities={filteredActivities} />
        )}

        <FocusTimeline focusTimeline={focusTimeline} personas={personas} projects={filteredProjects}/>

        {filteredProjects.length === 0 ? null : (learningLogs.length === 0 ? (
          <p className="text-center text-gray-500 dark:text-gray-400">No learning logs to show.</p>
        ) : (
          <LearningLog learningLogs={learningLogs} personas={personas} projects={filteredProjects}/>
        ))}

        {selectedPersona && (
          <article tabIndex={-1} aria-label="Persona evolution history">
            <PersonaEvolution persona={personas.find(p => p.id === selectedPersona)!} />
          </article>
        )}
      </main>
    </div>
  );
}
