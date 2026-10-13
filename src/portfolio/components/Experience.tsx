import { Briefcase, Users } from 'lucide-react'
import { experienceItems } from '../config/experience'
import { ScrollReveal } from './ScrollReveal'
import { SectionHeading } from './SectionHeading'

export function Experience() {
  return (
    <section
      id="experience"
      className="section-pad bg-sand/35 py-20 sm:py-24"
      aria-labelledby="experience-heading"
    >
      <div className="container-page">
        <ScrollReveal>
          <SectionHeading
            title="Experience & Background"
            subtitle="Professional experience as a developer, with a current focus on Data Analytics and Data Science."
            id="experience-heading"
          />
        </ScrollReveal>

        <ol className="relative space-y-5 border-l border-border pl-6 sm:pl-8">
          {experienceItems.map((item, index) => {
            const Icon = item.type === 'activity' ? Users : Briefcase
            return (
              <ScrollReveal key={item.id} delay={index * 0.05}>
                <li className="relative">
                  <span className="absolute -left-[1.9rem] top-5 flex h-8 w-8 items-center justify-center rounded-full border border-border bg-card text-sage sm:-left-[2.4rem]">
                    <Icon size={14} aria-hidden />
                  </span>
                  <article className="rounded-2xl border border-border bg-card p-6 shadow-sm">
                    <div className="flex flex-wrap items-start justify-between gap-2">
                      <div>
                        <h3 className="font-display text-lg font-bold text-ink">{item.role}</h3>
                        <p className="mt-1 text-sm font-medium text-muted">{item.organization}</p>
                      </div>
                      {item.dates ? (
                        <span className="rounded-full border border-border bg-bg px-2.5 py-1 text-xs font-medium text-muted">
                          {item.dates}
                        </span>
                      ) : null}
                    </div>
                    {item.highlights?.length ? (
                      <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-relaxed text-muted marker:text-sage">
                        {item.highlights.map((point) => (
                          <li key={point}>{point}</li>
                        ))}
                      </ul>
                    ) : item.description ? (
                      <p className="mt-3 text-sm leading-relaxed text-muted">{item.description}</p>
                    ) : null}
                  </article>
                </li>
              </ScrollReveal>
            )
          })}
        </ol>
      </div>
    </section>
  )
}
