import { ArrowUpRight, ChevronLeft, ChevronRight } from 'lucide-react'
import { useCallback, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { useReducedMotion } from 'framer-motion'
import { projects } from '../config/projects'
import { cn } from '../lib/utils'

/** Hero visual: a small carousel cycling through the featured projects. */
export function HeroVisual() {
  const [index, setIndex] = useState(0)
  const reduceMotion = useReducedMotion()
  const count = projects.length

  const go = useCallback(
    (dir: 1 | -1) => setIndex((i) => (i + dir + count) % count),
    [count],
  )

  const project = projects[index] ?? projects[0]!

  return (
    <div className="relative mx-auto w-full max-w-md lg:max-w-none">
      <div className="absolute -inset-4 rounded-[2rem] bg-sand blur-2xl" aria-hidden />
      <figure className="relative overflow-hidden rounded-2xl border border-border bg-card shadow-[0_20px_50px_-24px_rgba(43,40,36,0.4)]">
        <div className="flex items-center justify-between border-b border-border px-5 py-3">
          <span className="text-xs font-semibold tracking-wide text-muted uppercase">Selected work</span>
          <span className="text-xs font-semibold tabular-nums text-muted" aria-hidden>
            {index + 1} / {count}
          </span>
        </div>

        <div className="relative">
          <AnimatePresence mode="wait" initial={false}>
            <motion.a
              key={project.id}
              href={project.viewProject.url ?? '#projects'}
              target="_blank"
              rel="noopener noreferrer"
              initial={reduceMotion ? { opacity: 1 } : { opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              exit={reduceMotion ? { opacity: 1 } : { opacity: 0, x: -24 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className="block"
              aria-label={`Open ${project.title}`}
            >
              <img
                src={project.thumbnail ?? '/projects/sales-performance-dashboard.webp'}
                alt={project.thumbnailAlt}
                width={1008}
                height={508}
                className="block aspect-[16/9] h-auto w-full object-cover object-top"
                decoding="async"
              />
              <figcaption className="flex items-start justify-between gap-3 px-5 py-3">
                <div>
                  <p className="text-sm font-semibold text-ink">{project.title}</p>
                  <p className="mt-0.5 line-clamp-1 text-xs text-muted">{project.technologies.join(' · ')}</p>
                </div>
                <ArrowUpRight
                  size={16}
                  className="mt-0.5 shrink-0 text-sage"
                  aria-hidden
                />
              </figcaption>
            </motion.a>
          </AnimatePresence>

          <button
            type="button"
            onClick={() => go(-1)}
            aria-label="Previous project"
            className="absolute top-1/2 left-3 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-card/90 text-ink shadow-sm backdrop-blur transition hover:border-sage/60 hover:bg-sand"
          >
            <ChevronLeft size={18} aria-hidden />
          </button>
          <button
            type="button"
            onClick={() => go(1)}
            aria-label="Next project"
            className="absolute top-1/2 right-3 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-card/90 text-ink shadow-sm backdrop-blur transition hover:border-sage/60 hover:bg-sand"
          >
            <ChevronRight size={18} aria-hidden />
          </button>
        </div>

        <div className="flex items-center justify-center gap-2 border-t border-border px-5 py-3" role="tablist" aria-label="Featured projects">
          {projects.map((p, i) => (
            <button
              key={p.id}
              type="button"
              role="tab"
              aria-selected={i === index}
              aria-label={`Show ${p.title}`}
              onClick={() => setIndex(i)}
              className={cn(
                'h-2 w-2 rounded-full transition',
                i === index ? 'scale-110 bg-sage' : 'bg-ink/20 hover:bg-ink/40',
              )}
            />
          ))}
        </div>
      </figure>
    </div>
  )
}
