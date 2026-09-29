import { createFileRoute } from '@tanstack/react-router'

import { CustomerStrip } from '#/components/landing/customer-strip'
import { Features } from '#/components/landing/features'
import { FinalCta } from '#/components/landing/final-cta'
import { Hero } from '#/components/landing/hero'
import { Pricing } from '#/components/landing/pricing'
import { Stats } from '#/components/landing/stats'
import { Testimonial } from '#/components/landing/testimonial'
import { PoweredByBar } from '#/components/layout/powered-by-bar'
import { SiteFooter } from '#/components/layout/site-footer'
import { SiteHeader } from '#/components/layout/site-header'

export const Route = createFileRoute('/')({ component: Home })

function Home() {
  return (
    <div className="min-h-screen">
      <PoweredByBar />
      <SiteHeader />
      <main>
        <Hero />
        <CustomerStrip />
        <Features />
        <Stats />
        <Testimonial />
        <Pricing />
        <FinalCta />
      </main>
      <SiteFooter />
    </div>
  )
}
