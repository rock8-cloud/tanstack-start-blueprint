import { SectionHeading } from '#/components/landing/section-heading'
import { features } from '#/content/landing'

export function Features() {
  return (
    <section id="features" className="page-wrap scroll-mt-20 py-20">
      <SectionHeading
        kicker="Features"
        title="Everything the daily call did. None of the call."
        body="Driftwave keeps the rhythm of a standup and drops the part where twelve people wait for their turn."
      />
      <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((feature, index) => (
          <article
            key={feature.title}
            className="feature-card rise-in rounded-2xl border border-(--line) p-6"
            style={{ animationDelay: `${index * 70}ms` }}
          >
            <span className="grid size-11 place-items-center rounded-xl bg-[color-mix(in_oklab,var(--lagoon)_18%,white)] text-(--lagoon-deep)">
              <feature.icon className="size-5" />
            </span>
            <h3 className="mt-5 text-lg font-bold text-(--sea-ink)">
              {feature.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-(--sea-ink-soft)">
              {feature.body}
            </p>
          </article>
        ))}
      </div>
    </section>
  )
}
