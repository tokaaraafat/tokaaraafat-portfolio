import { ArrowUpRight, Link2Off } from 'lucide-react'
import type { Project, ProjectLink } from '../config/projects'
import { cn } from '../lib/utils'
import { ProjectVisual } from './ProjectVisual'

type ProjectCardProps = {
  project: Project
  /** Lays the card out horizontally on wide screens (used for a lone last card). */
  wide?: boolean
}

function ProjectAction({ link }: { link: ProjectLink }) {
  if (!link.url) {
    return (
      <span
        className="inline-flex items-center gap-1.5 text-sm font-medium text-muted"
        title="Add a verified URL in src/config/projects.ts"
      >
        <Link2Off size={14} aria-hidden />
        {link.label} — pending
      </span>
    )
  }

  return (
    <a
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group/link inline-flex items-center gap-1.5 text-sm font-semibold text-ink transition hover:text-sage"
    >
      <span className="border-b border-sage/60 group-hover/link:border-sage">{link.label}</span>
      <ArrowUpRight
        size={14}
        className="transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
        aria-hidden
      />
    </a>
  )
}

export function ProjectCard({ project, wide = false }: ProjectCardProps) {
  return (
    <article
      className={cn(
        'group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition duration-300 hover:-translate-y-1 hover:border-sage/60 hover:shadow-lg',
        wide && 'md:flex-row',
      )}
    >
      <div
        className={cn(
          'aspect-[16/10] overflow-hidden border-b border-border',
          wide && 'md:aspect-auto md:w-2/5 md:shrink-0 md:border-r md:border-b-0',
        )}
      >
        <div className="h-full w-full transition-transform duration-500 ease-out group-hover:scale-[1.03] motion-reduce:transition-none motion-reduce:group-hover:scale-100">
          <ProjectVisual project={project} />
        </div>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-display text-xl font-semibold text-ink">{project.title}</h3>
          {project.period ? (
            <span className="shrink-0 rounded-full border border-border bg-bg px-2.5 py-1 text-xs font-medium text-muted">
              {project.period}
            </span>
          ) : null}
        </div>
        <p className="mt-3 text-sm leading-relaxed text-ink/90">
          <span className="mr-1.5 text-xs font-semibold tracking-wide text-sage uppercase">Question</span>
          {project.question}
        </p>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">{project.description}</p>

        {project.outcome ? (
          <p className="mt-4 border-l-2 border-sage pl-3 text-sm leading-relaxed text-ink/90">
            {project.outcome}
          </p>
        ) : null}

        <ul className="mt-4 flex flex-wrap gap-2" aria-label="Technologies used">
          {project.technologies.map((tech) => (
            <li
              key={tech}
              className="rounded-full border border-border bg-bg px-2.5 py-1 text-xs font-medium text-muted"
            >
              {tech}
            </li>
          ))}
        </ul>

        <div className="mt-5 flex flex-wrap items-center gap-4 border-t border-border pt-4">
          <ProjectAction link={project.viewProject} />
          {project.viewCode ? <ProjectAction link={project.viewCode} /> : null}
        </div>
      </div>
    </article>
  )
}
