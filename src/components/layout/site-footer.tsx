import { Logo } from '#/components/layout/logo'
import { footerColumns } from '#/content/landing'

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="page-wrap grid gap-10 py-12 md:grid-cols-[1.4fr_repeat(3,1fr)]">
        <div>
          <Logo />
          <p className="mt-4 max-w-xs text-sm text-(--sea-ink-soft)">
            Async standups and morning digests for teams that work across
            timezones.
          </p>
        </div>
        {footerColumns.map((column) => (
          <div key={column.title}>
            <p className="text-sm font-bold text-(--sea-ink)">{column.title}</p>
            <ul className="mt-4 space-y-2.5">
              {column.links.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-sm text-(--sea-ink-soft) no-underline hover:text-(--sea-ink)"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-(--line)">
        <div className="page-wrap flex flex-col gap-2 py-6 text-xs text-(--sea-ink-soft) sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Driftwave. A demo product.</p>
          <p>
            Built with <a href="https://tanstack.com/start">TanStack Start</a> ·
            Deployed on <a href="https://rock8.cloud">Rock8Cloud</a>
          </p>
        </div>
      </div>
    </footer>
  )
}
