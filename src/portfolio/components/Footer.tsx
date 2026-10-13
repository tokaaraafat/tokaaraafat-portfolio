import { ArrowUp } from 'lucide-react'
import { siteConfig } from '../config/site'
import { scrollToId } from '../lib/utils'
import { GitHubIcon, LinkedInIcon } from './icons'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="section-pad border-t border-border bg-bg py-8">
      <div className="container-page flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-muted">
          © {year} · Designed &amp; Built by {siteConfig.name}
        </p>

        <div className="flex items-center gap-4">
          <a
            href={siteConfig.social.github}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md p-1.5 text-muted transition hover:text-ink"
            aria-label="GitHub profile"
          >
            <GitHubIcon size={18} />
          </a>
          <a
            href={siteConfig.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md p-1.5 text-muted transition hover:text-ink"
            aria-label="LinkedIn profile"
          >
            <LinkedInIcon size={18} />
          </a>
          <button
            type="button"
            className="inline-flex items-center gap-1.5 rounded-md px-2 py-1.5 text-sm font-medium text-muted transition hover:text-ink"
            onClick={() => scrollToId('home')}
          >
            Back to Top
            <ArrowUp size={14} aria-hidden />
          </button>
        </div>
      </div>
    </footer>
  )
}
