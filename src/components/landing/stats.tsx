import { stats } from '#/content/landing'

export function Stats() {
  return (
    <section className="page-wrap py-10">
      <div className="grid gap-8 rounded-3xl bg-linear-to-br from-(--sea-ink) to-[#0f2a2f] px-8 py-12 text-white shadow-xl sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.label}>
            <p className="display-title text-4xl font-bold text-[#8de5db]">
              {stat.value}
            </p>
            <p className="mt-2 text-sm text-white/75">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
