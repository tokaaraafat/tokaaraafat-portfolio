import { Download, Mail } from 'lucide-react'
import { siteConfig } from '../config/site'
import { GitHubIcon, LinkedInIcon } from './icons'
import { ScrollReveal } from './ScrollReveal'

export function Contact() {
  const hasEmail = Boolean(siteConfig.email.trim())

  return (
    <section id="contact" className="section-pad bg-panel py-20 text-panel-fg sm:py-24" aria-labelledby="contact-heading">
      <div className="container-page">
        <ScrollReveal>
          <div className="max-w-2xl">
            <p className="mb-3 text-sm font-medium tracking-wide text-sage uppercase">Contact</p>
            <h2 id="contact-heading" className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
              Let&apos;s Connect
            </h2>
            <p className="mt-4 text-base leading-relaxed text-panel-fg/75 sm:text-lg">
              I&apos;m always interested in connecting with professionals, exploring data-focused
              opportunities, and collaborating on meaningful projects.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.08}>
          <div className="mt-10 flex flex-wrap gap-3">
            {hasEmail ? (
              <a
                href={`mailto:${siteConfig.email}`}
                className="inline-flex items-center gap-2 rounded-lg bg-panel-fg px-5 py-3 text-sm font-semibold text-panel transition hover:opacity-90"
              >
                <Mail size={16} aria-hidden />
                Email Me
              </a>
            ) : (
              <span
                className="inline-flex items-center gap-2 rounded-lg border border-panel-fg/25 bg-panel-fg/5 px-5 py-3 text-sm font-semibold text-panel-fg/70"
                title="Set siteConfig.email in src/config/site.ts"
              >
                <Mail size={16} aria-hidden />
                Email Me — pending
              </span>
            )}

            {siteConfig.cvUrl ? (
              <a
                href={siteConfig.cvUrl}
                download
                className="inline-flex items-center gap-2 rounded-lg border border-panel-fg/20 bg-transparent px-5 py-3 text-sm font-semibold text-panel-fg transition hover:bg-panel-fg/10"
              >
                <Download size={16} aria-hidden />
                Download CV
              </a>
            ) : null}

            <a
              href={siteConfig.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-panel-fg/20 bg-transparent px-5 py-3 text-sm font-semibold text-panel-fg transition hover:bg-panel-fg/10"
            >
              <LinkedInIcon size={16} aria-hidden />
              Connect on LinkedIn
            </a>

            <a
              href={siteConfig.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-panel-fg/20 bg-transparent px-5 py-3 text-sm font-semibold text-panel-fg transition hover:bg-panel-fg/10"
            >
              <GitHubIcon size={16} aria-hidden />
              View GitHub
            </a>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.12}>
          <ul className="mt-10 space-y-2 text-sm text-panel-fg/65">
            <li>
              <span className="font-medium text-panel-fg/90">GitHub:</span>{' '}
              <a
                href={siteConfig.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="underline-offset-2 hover:text-panel-fg hover:underline"
              >
                github.com/tokaaraafat
              </a>
            </li>
            <li>
              <span className="font-medium text-panel-fg/90">LinkedIn:</span>{' '}
              <a
                href={siteConfig.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="underline-offset-2 hover:text-panel-fg hover:underline"
              >
                linkedin.com/in/tokaaraafat
              </a>
            </li>
            <li>
              <span className="font-medium text-panel-fg/90">Email:</span>{' '}
              {hasEmail ? (
                <a href={`mailto:${siteConfig.email}`} className="underline-offset-2 hover:text-panel-fg hover:underline">
                  {siteConfig.email}
                </a>
              ) : (
                'Add your professional email in site configuration'
              )}
            </li>
            <li>
              <span className="font-medium text-panel-fg/90">Location:</span> {siteConfig.location}
            </li>
          </ul>
        </ScrollReveal>
      </div>
    </section>
  )
}
