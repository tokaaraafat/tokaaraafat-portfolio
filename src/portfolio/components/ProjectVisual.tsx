import { BarChart3, Bike, LineChart, TrendingUp } from 'lucide-react'
import type { Project } from '../config/projects'
import { GitHubIcon } from './icons'

type ProjectVisualProps = {
  project: Project
}

export function ProjectVisual({ project }: ProjectVisualProps) {
  if (project.thumbnail) {
    return (
      <img
        src={project.thumbnail}
        alt={project.thumbnailAlt}
        className="h-full w-full object-cover object-top"
        loading="lazy"
        decoding="async"
      />
    )
  }

  const visuals = {
    excel: {
      icon: BarChart3,
      label: 'Excel Dashboard',
      bars: [45, 70, 55, 85, 60, 90],
      accent: 'from-ink/90 to-sage/70',
    },
    sql: {
      icon: Bike,
      label: 'SQL Exploration',
      bars: [30, 55, 40, 75, 50, 65],
      accent: 'from-ink/80 to-sand',
    },
    stock: {
      icon: TrendingUp,
      label: 'Market Trends',
      bars: [35, 48, 42, 68, 72, 88],
      accent: 'from-sage to-ink/80',
    },
    github: {
      icon: GitHubIcon,
      label: 'Open Projects',
      bars: [50, 40, 65, 55, 80, 70],
      accent: 'from-ink to-ink/70',
    },
  } as const

  const visual = visuals[project.visual]
  const Icon = visual.icon

  return (
    <div className="relative flex h-full min-h-[180px] flex-col justify-between overflow-hidden bg-bg p-5">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(220,231,243,0.9),_transparent_55%)]" />
      <div className="relative z-10 flex items-center justify-between">
        <span className="rounded-full border border-border bg-card px-2.5 py-1 text-[11px] font-semibold tracking-wide text-muted uppercase">
          {visual.label}
        </span>
        <Icon size={18} className="text-sage" aria-hidden />
      </div>

      <div className="relative z-10 mt-6 flex h-24 items-end gap-2">
        {visual.bars.map((h, i) => (
          <div
            key={i}
            className={`flex-1 rounded-t-md bg-gradient-to-t ${visual.accent}`}
            style={{ height: `${h}%`, opacity: 0.65 + (i % 3) * 0.1 }}
          />
        ))}
      </div>

      <div className="relative z-10 mt-4 flex items-center gap-2 text-xs text-muted">
        <LineChart size={14} aria-hidden />
        <span>Custom project visual</span>
      </div>
    </div>
  )
}
