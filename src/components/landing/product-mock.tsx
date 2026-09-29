import { CalendarClock, Sparkles } from 'lucide-react'

import { mockUpdates } from '#/content/landing'
import { cn } from '#/lib/utils'

// A fake app window drawn in JSX, so the hero needs no image assets.
export function ProductMock() {
  return (
    <div className="rise-in relative" style={{ animationDelay: '120ms' }}>
      <div className="absolute -inset-6 -z-10 rounded-4xl bg-linear-to-br from-(--hero-a) to-(--hero-b) blur-2xl" />
      <div className="island-shell overflow-hidden rounded-2xl">
        <div className="flex items-center gap-2 border-b border-(--line) px-4 py-3">
          <span className="size-2.5 rounded-full bg-rose-300" />
          <span className="size-2.5 rounded-full bg-amber-300" />
          <span className="size-2.5 rounded-full bg-emerald-300" />
          <span className="ml-3 text-xs font-semibold text-(--sea-ink-soft)">
            #platform-team · Thursday
          </span>
        </div>
        <div className="space-y-4 p-5 sm:pb-14">
          <div className="rounded-xl border border-(--chip-line) bg-linear-to-br from-[color-mix(in_oklab,var(--lagoon)_14%,white)] to-white p-4">
            <div className="flex items-center gap-2 text-xs font-bold tracking-wide text-(--lagoon-deep) uppercase">
              <Sparkles className="size-3.5" /> Morning digest
            </div>
            <p className="mt-2 text-sm leading-relaxed text-(--sea-ink)">
              3 of 3 checked in. <strong>1 blocker:</strong> search indexing
              needs API keys — Tomás is waiting on Ops. Billing retries shipped
              ahead of plan.
            </p>
          </div>
          {mockUpdates.map((update) => (
            <div key={update.name} className="flex gap-3">
              <span
                className={cn(
                  'grid size-9 shrink-0 place-items-center rounded-full text-xs font-bold text-(--sea-ink)',
                  update.tone,
                )}
              >
                {update.initials}
              </span>
              <div className="min-w-0 flex-1">
                <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
                  <span className="text-sm font-bold text-(--sea-ink)">
                    {update.name}
                  </span>
                  <span className="text-xs text-(--sea-ink-soft)">
                    {update.time}
                  </span>
                  <span
                    className={cn(
                      'ml-auto rounded-full px-2 py-0.5 text-[11px] font-semibold',
                      update.status.className,
                    )}
                  >
                    {update.status.label}
                  </span>
                </div>
                <p className="mt-1 text-sm text-(--sea-ink-soft)">
                  {update.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="island-shell absolute -bottom-6 -left-4 hidden items-center gap-3 rounded-xl px-4 py-3 sm:flex">
        <CalendarClock className="size-5 text-(--lagoon-deep)" />
        <div>
          <p className="text-xs font-bold text-(--sea-ink)">
            Standup call cancelled
          </p>
          <p className="text-[11px] text-(--sea-ink-soft)">
            45 minutes back on your calendar
          </p>
        </div>
      </div>
    </div>
  )
}
