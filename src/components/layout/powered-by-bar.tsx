import { ArrowRight, Zap } from 'lucide-react'

import { deployUrl } from '#/content/landing'

export function PoweredByBar() {
  return (
    <div className="bg-(--sea-ink) text-white">
      <div className="page-wrap flex flex-wrap items-center justify-center gap-x-2 gap-y-1 py-2 text-center text-xs font-medium">
        <Zap className="size-3.5 text-[#8de5db]" />
        <span>
          This demo is powered by{' '}
          <a
            href="https://tanstack.com/start"
            className="font-bold text-white underline decoration-white/40 hover:text-[#8de5db]"
          >
            TanStack Start
          </a>{' '}
          and deployed on Rock8Cloud.
        </span>
        <a
          href={deployUrl}
          className="inline-flex items-center gap-1 font-bold text-[#8de5db] no-underline hover:text-white"
        >
          Deploy your own <ArrowRight className="size-3.5" />
        </a>
      </div>
    </div>
  )
}
