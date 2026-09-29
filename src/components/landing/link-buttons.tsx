import type { ReactNode } from 'react'

import { cn } from '#/lib/utils'

interface LinkButtonProps {
  children: ReactNode
  href?: string
  className?: string
}

export function PrimaryButton({
  children,
  href = '#pricing',
  className,
}: LinkButtonProps) {
  return (
    <a
      href={href}
      className={cn(
        'inline-flex items-center justify-center gap-2 rounded-full bg-(--sea-ink) px-5 py-2.5 text-sm font-semibold text-white no-underline shadow-[0_8px_20px_rgba(23,58,64,0.25)] hover:-translate-y-0.5 hover:bg-(--lagoon-deep) hover:text-white',
        className,
      )}
    >
      {children}
    </a>
  )
}

export function SecondaryButton({
  children,
  href = '#features',
  className,
}: LinkButtonProps) {
  return (
    <a
      href={href}
      className={cn(
        'inline-flex items-center justify-center gap-2 rounded-full border border-(--chip-line) bg-(--chip-bg) px-5 py-2.5 text-sm font-semibold text-(--sea-ink) no-underline hover:bg-(--link-bg-hover) hover:text-(--sea-ink)',
        className,
      )}
    >
      {children}
    </a>
  )
}
