import { ArrowUpRight } from 'lucide-react'
import { githubExploreUrl, projects } from '../config/projects'
import { ProjectCard } from './ProjectCard'
import { ScrollReveal } from './ScrollReveal'
import { SectionHeading } from './SectionHeading'

export function Projects() {
  const isLoneLast = (index: number) =>
    index === projects.length - 1 && projects.length % 2 === 1

  return (
    <section id="projects" className="section-pad py-20 sm:py-24" aria-labelledby="projects-heading">
      <div className="container-page">
        <ScrollReveal>
          <SectionHeading
            title="Selected Projects"
            subtitle="Practical projects exploring data preparation, analysis, and visualization."
            id="projects-heading"
          />
        </ScrollReveal>

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project, index) => (
            <ScrollReveal
              key={project.id}
              delay={index * 0.06}
              className={isLoneLast(index) ? 'md:col-span-2' : undefined}
            >
              <ProjectCard project={project} wide={isLoneLast(index)} />
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal>
          <div className="mt-10 flex justify-center">
            <a
              href={githubExploreUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-5 py-3 text-sm font-semibold text-ink transition hover:border-ink/20 hover:bg-sand/40"
            >
              Explore More on GitHub
              <ArrowUpRight size={16} aria-hidden />
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
