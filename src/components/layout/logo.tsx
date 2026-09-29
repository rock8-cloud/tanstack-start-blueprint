import { Waves } from 'lucide-react'

export function Logo() {
  return (
    <a
      href="/"
      className="flex items-center gap-2 text-(--sea-ink) no-underline"
    >
      <span className="grid size-8 place-items-center rounded-lg bg-linear-to-br from-(--lagoon) to-(--palm) text-white shadow-sm">
        <Waves className="size-4" strokeWidth={2.5} />
      </span>
      <span className="text-lg font-extrabold tracking-tight">Driftwave</span>
    </a>
  )
}
