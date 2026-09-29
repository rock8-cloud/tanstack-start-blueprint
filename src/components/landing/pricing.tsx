import { Check } from 'lucide-react'

import { SectionHeading } from '#/components/landing/section-heading'
import { tiers } from '#/content/landing'
import { cn } from '#/lib/utils'

export function Pricing() {
  return (
    <section id="pricing" className="page-wrap scroll-mt-20 py-20">
      <SectionHeading
        kicker="Pricing"
        title="Simple plans that grow with you"
        body="Start free, upgrade when your team spans more than one timezone."
      />
      <div className="mt-14 grid items-start gap-5 md:grid-cols-3">
        {tiers.map((tier) => (
          <div
            key={tier.name}
            className={cn(
              'rounded-2xl border p-7',
              tier.featured
                ? 'border-transparent bg-(--sea-ink) text-white shadow-2xl md:-mt-4 md:pb-10'
                : 'feature-card border-(--line)',
            )}
          >
            <div className="flex items-center justify-between">
              <h3
                className={cn(
                  'text-lg font-bold',
                  tier.featured ? 'text-white' : 'text-(--sea-ink)',
                )}
              >
                {tier.name}
              </h3>
              {tier.featured && (
                <span className="rounded-full bg-[#8de5db] px-2.5 py-0.5 text-xs font-bold text-(--sea-ink)">
                  Most popular
                </span>
              )}
            </div>
            <p className="mt-4 flex items-baseline gap-2">
              <span
                className={cn(
                  'display-title text-4xl font-bold',
                  tier.featured ? 'text-white' : 'text-(--sea-ink)',
                )}
              >
                {tier.price}
              </span>
              <span
                className={cn(
                  'text-sm',
                  tier.featured ? 'text-white/70' : 'text-(--sea-ink-soft)',
                )}
              >
                {tier.cadence}
              </span>
            </p>
            <p
              className={cn(
                'mt-3 text-sm',
                tier.featured ? 'text-white/80' : 'text-(--sea-ink-soft)',
              )}
            >
              {tier.blurb}
            </p>
            <ul className="mt-6 space-y-3">
              {tier.perks.map((perk) => (
                <li key={perk} className="flex items-start gap-2 text-sm">
                  <Check
                    className={cn(
                      'mt-0.5 size-4 shrink-0',
                      tier.featured ? 'text-[#8de5db]' : 'text-(--lagoon-deep)',
                    )}
                  />
                  <span
                    className={
                      tier.featured ? 'text-white/90' : 'text-(--sea-ink)'
                    }
                  >
                    {perk}
                  </span>
                </li>
              ))}
            </ul>
            <a
              href="#pricing"
              className={cn(
                'mt-8 flex justify-center rounded-full px-5 py-2.5 text-sm font-semibold no-underline',
                tier.featured
                  ? 'bg-[#8de5db] text-(--sea-ink) hover:bg-white hover:text-(--sea-ink)'
                  : 'border border-(--chip-line) bg-(--chip-bg) text-(--sea-ink) hover:bg-(--link-bg-hover) hover:text-(--sea-ink)',
              )}
            >
              {tier.price === 'Custom' ? 'Talk to sales' : 'Get started'}
            </a>
          </div>
        ))}
      </div>
    </section>
  )
}
