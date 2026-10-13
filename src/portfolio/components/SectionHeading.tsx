type SectionHeadingProps = {
  eyebrow?: string
  title: string
  subtitle?: string
  id?: string
}

export function SectionHeading({ eyebrow, title, subtitle, id }: SectionHeadingProps) {
  return (
    <div className="mb-10 max-w-2xl md:mb-14">
      {eyebrow ? (
        <p className="mb-3 text-sm font-medium tracking-wide text-sage uppercase">{eyebrow}</p>
      ) : null}
      <h2 id={id} className="heading-display text-3xl sm:text-4xl">
        {title}
      </h2>
      {subtitle ? <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">{subtitle}</p> : null}
    </div>
  )
}
