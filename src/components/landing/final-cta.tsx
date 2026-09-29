import { ArrowRight } from 'lucide-react'

import {
  PrimaryButton,
  SecondaryButton,
} from '#/components/landing/link-buttons'

export function FinalCta() {
  return (
    <section className="page-wrap pb-24">
      <div className="island-shell relative overflow-hidden rounded-3xl px-8 py-14 text-center">
        <div className="absolute inset-0 -z-10 bg-linear-to-br from-(--hero-a) via-transparent to-(--hero-b)" />
        <h2 className="display-title text-4xl font-bold tracking-tight text-(--sea-ink) md:text-5xl">
          Give your team its mornings back.
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-lg text-(--sea-ink-soft)">
          Set up your first check-in in under five minutes. Your first digest
          lands tomorrow morning.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <PrimaryButton>
            Start free <ArrowRight className="size-4" />
          </PrimaryButton>
          <SecondaryButton>Book a demo</SecondaryButton>
        </div>
      </div>
    </section>
  )
}
