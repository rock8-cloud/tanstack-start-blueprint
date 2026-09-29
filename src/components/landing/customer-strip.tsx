import { customers } from '#/content/landing'

export function CustomerStrip() {
  return (
    <section id="customers" className="page-wrap scroll-mt-20 pb-16">
      <p className="island-kicker text-center">
        Trusted by distributed teams at
      </p>
      <div className="mt-6 flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
        {customers.map((name) => (
          <span
            key={name}
            className="display-title text-xl font-bold text-(--sea-ink-soft) opacity-70"
          >
            {name}
          </span>
        ))}
      </div>
    </section>
  )
}
