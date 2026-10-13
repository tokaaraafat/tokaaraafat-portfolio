import { educationItems } from '../config/experience'
import { ScrollReveal } from './ScrollReveal'
import { SectionHeading } from './SectionHeading'

const statusLabel = {
  completed: 'Completed',
  'in-progress': 'In Progress',
  coursework: 'Coursework',
} as const

export function Education() {
  return (
    <section id="education" className="section-pad py-20 sm:py-24" aria-labelledby="education-heading">
      <div className="container-page">
        <ScrollReveal>
          <SectionHeading
            title="Education & Professional Development"
            id="education-heading"
          />
        </ScrollReveal>

        <div className="grid gap-5 md:grid-cols-2">
          {educationItems.map((item, index) => (
            <ScrollReveal key={item.id} delay={index * 0.05}>
              <article className="flex h-full flex-col rounded-2xl border border-border bg-card p-6 shadow-sm">
                <span className="w-fit rounded-full border border-border bg-bg px-2.5 py-1 text-xs font-medium text-muted">
                  {statusLabel[item.status]}
                  {item.year ? ` · ${item.year}` : ''}
                </span>
                <h3 className="mt-4 font-display text-lg font-bold text-ink">{item.title}</h3>
                <p className="mt-2 text-sm font-medium text-ink/80">{item.institution}</p>
                <p className="mt-3 text-sm leading-relaxed text-muted">{item.detail}</p>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
