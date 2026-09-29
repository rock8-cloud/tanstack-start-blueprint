interface SectionHeadingProps {
  kicker: string
  title: string
  body: string
}

export function SectionHeading({ kicker, title, body }: SectionHeadingProps) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <p className="island-kicker">{kicker}</p>
      <h2 className="display-title mt-3 text-4xl font-bold tracking-tight text-(--sea-ink) md:text-5xl">
        {title}
      </h2>
      <p className="mt-4 text-lg text-(--sea-ink-soft)">{body}</p>
    </div>
  )
}
