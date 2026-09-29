import { PrimaryButton } from '#/components/landing/link-buttons'
import { Logo } from '#/components/layout/logo'
import { navLinks } from '#/content/landing'

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-30 border-b border-(--line) bg-(--header-bg) backdrop-blur-md">
      <div className="page-wrap flex h-16 items-center justify-between gap-6">
        <Logo />
        <nav className="hidden items-center gap-8 text-sm font-semibold md:flex">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="nav-link">
              {link.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <a
            href="#pricing"
            className="hidden text-sm font-semibold text-(--sea-ink-soft) no-underline hover:text-(--sea-ink) sm:inline"
          >
            Sign in
          </a>
          <PrimaryButton className="px-4 py-2">Start free</PrimaryButton>
        </div>
      </div>
    </header>
  )
}
