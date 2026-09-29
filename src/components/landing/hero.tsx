import { ArrowRight, Sparkles, Zap } from 'lucide-react'

import {
  PrimaryButton,
  SecondaryButton,
} from '#/components/landing/link-buttons'
import { ProductMock } from '#/components/landing/product-mock'

export function Hero() {
  return (
    <section className="page-wrap grid items-center gap-12 pt-16 pb-20 md:grid-cols-[1.05fr_1fr] md:pt-24">
      <div className="rise-in">
        <span className="inline-flex items-center gap-2 rounded-full border border-(--chip-line) bg-(--chip-bg) px-3 py-1 text-xs font-semibold text-(--palm)">
          <Sparkles className="size-3.5" />
          New · AI morning digests
        </span>
        <h1 className="display-title mt-6 text-5xl leading-[1.05] font-bold tracking-tight text-(--sea-ink) md:text-6xl">
          Async standups your team{' '}
          <span className="bg-linear-to-r from-(--lagoon-deep) to-(--palm) bg-clip-text text-transparent">
            actually reads.
          </span>
        </h1>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-(--sea-ink-soft)">
          Driftwave replaces the daily call with a two-minute check-in and one
          clear digest — so your team keeps its mornings and you still know
          exactly what’s moving.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <PrimaryButton>
            Start free <ArrowRight className="size-4" />
          </PrimaryButton>
          <SecondaryButton>See how it works</SecondaryButton>
        </div>
        <p className="mt-5 text-sm text-(--sea-ink-soft)">
          Free for teams up to 8 · No credit card
        </p>
        <a
          href="https://tanstack.com/start"
          className="mt-8 inline-flex items-center gap-2 rounded-full border border-(--line) bg-(--surface) px-3 py-1.5 text-xs font-semibold text-(--sea-ink-soft) no-underline hover:border-(--chip-line) hover:text-(--sea-ink)"
        >
          <Zap className="size-3.5 text-(--lagoon-deep)" />
          Powered by TanStack Start
        </a>
      </div>
      <ProductMock />
    </section>
  )
}
