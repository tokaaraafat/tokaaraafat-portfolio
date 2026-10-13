import { ArrowRight, Download, Mail } from 'lucide-react'
import { useReducedMotion, motion } from 'framer-motion'
import { siteConfig } from '../config/site'
import { scrollToId } from '../lib/utils'
import { HeroVisual } from './HeroVisual'

const facts = [
  { value: '1 yr', label: 'professional experience as a developer' },
  { value: '~10k', label: 'order lines modelled in Power Query' },
  { value: 'IBM', label: 'Data Scientist track (DEPI)' },
]

export function Hero() {
  const reduceMotion = useReducedMotion()

  const fade = (delay = 0) =>
    reduceMotion
      ? {}
      : {
          initial: { opacity: 0, y: 18 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.55, ease: 'easeOut' as const, delay },
        }

  return (
    <section id="home" className="section-pad relative overflow-hidden pt-28 pb-16 sm:pt-32 sm:pb-24 lg:pb-28">
      <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden>
        <div className="bg-data-grid absolute inset-0" />
        <div className="absolute top-20 right-0 h-72 w-72 rounded-full bg-sand blur-3xl" />
        <div className="absolute bottom-10 left-0 h-56 w-56 rounded-full bg-sage/15 blur-3xl" />
      </div>

      <div className="container-page grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
        <div>
          <motion.h1 className="heading-display text-4xl leading-[1.08] sm:text-5xl lg:text-[3.4rem]" {...fade(0.08)}>
            {siteConfig.role}
            <span className="mt-3 block font-display text-2xl font-normal text-sage italic sm:text-3xl">
              {siteConfig.tagline}
            </span>
          </motion.h1>

          <motion.p className="mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg" {...fade(0.16)}>
            I&apos;m Tokaa, a {siteConfig.role} with a software engineering degree and a year of experience as an
            Odoo ERP developer. I build Excel and Python dashboards, clean and validate data, and explain what
            it means for the business. I&apos;m currently completing the IBM Data Scientist track with DEPI.
          </motion.p>

          <motion.div className="mt-8 flex flex-wrap gap-3" {...fade(0.24)}>
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-lg bg-ink px-5 py-3 text-sm font-semibold text-on-ink transition hover:-translate-y-0.5 hover:bg-ink/90"
              onClick={(e) => {
                e.preventDefault()
                scrollToId('projects')
              }}
            >
              View My Projects
              <ArrowRight size={16} aria-hidden />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-5 py-3 text-sm font-semibold text-ink transition hover:-translate-y-0.5 hover:border-sage/60 hover:bg-sand"
              onClick={(e) => {
                e.preventDefault()
                scrollToId('contact')
              }}
            >
              <Mail size={16} aria-hidden />
              Contact Me
            </a>
            {siteConfig.cvUrl ? (
              <a
                href={siteConfig.cvUrl}
                download
                className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-5 py-3 text-sm font-semibold text-ink transition hover:-translate-y-0.5 hover:border-sage/60 hover:bg-sand"
              >
                <Download size={16} aria-hidden />
                Download CV
              </a>
            ) : null}
          </motion.div>

          <motion.dl className="mt-10 grid max-w-xl grid-cols-3 gap-4 border-t border-border pt-6" {...fade(0.32)}>
            {facts.map((fact) => (
              <div key={fact.value}>
                <dt className="font-display text-2xl font-semibold text-ink">{fact.value}</dt>
                <dd className="mt-1 text-xs leading-snug text-muted">{fact.label}</dd>
              </div>
            ))}
          </motion.dl>
        </div>

        <motion.div {...fade(0.2)}>
          <HeroVisual />
        </motion.div>
      </div>
    </section>
  )
}
