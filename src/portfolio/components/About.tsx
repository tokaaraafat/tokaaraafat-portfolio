import { ScrollReveal } from './ScrollReveal'
import { SectionHeading } from './SectionHeading'

export function About() {
  return (
    <section id="about" className="section-pad py-20 sm:py-24" aria-labelledby="about-heading">
      <div className="container-page">
        <ScrollReveal>
          <SectionHeading title="About Me" id="about-heading" />
        </ScrollReveal>

        <ScrollReveal>
          <div className="relative max-w-3xl rounded-2xl border border-border bg-card p-6 shadow-sm sm:p-8">
            <div className="absolute top-0 left-6 h-1 w-16 rounded-full bg-sage" aria-hidden />
            <div className="space-y-5 text-base leading-relaxed text-muted sm:text-[1.05rem]">
              <p>
                I studied Software Engineering and spent a year working as a developer before moving
                into data analysis. I now apply that experience to analytical problems.
              </p>
              <p>
                It makes me a more careful analyst: I test before I trust, validate data before I
                report on it, and ask what the business actually needs before I build anything. I
                learned to gather requirements from different teams and turn them into something
                that works, and I bring the same approach to every dashboard.
              </p>
              <p>
                My projects cover Excel KPI dashboards, Power Query data modelling and a Python
                pipeline, working with about 10,000 order records, return tracking and multi-year
                trends. I&apos;m building toward data science through the IBM Data Scientist track.
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
