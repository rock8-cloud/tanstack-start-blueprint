import { testimonial } from '#/content/landing'

export function Testimonial() {
  return (
    <section className="page-wrap py-20">
      <figure className="island-shell mx-auto max-w-3xl rounded-3xl px-8 py-10 text-center md:px-14">
        <blockquote className="display-title text-2xl leading-snug font-medium text-(--sea-ink) md:text-3xl">
          “{testimonial.quote}”
        </blockquote>
        <figcaption className="mt-8 flex items-center justify-center gap-3">
          <span className="grid size-11 place-items-center rounded-full bg-[#f4b183] text-sm font-bold text-(--sea-ink)">
            {testimonial.initials}
          </span>
          <span className="text-left">
            <span className="block text-sm font-bold text-(--sea-ink)">
              {testimonial.name}
            </span>
            <span className="block text-sm text-(--sea-ink-soft)">
              {testimonial.role}
            </span>
          </span>
        </figcaption>
      </figure>
    </section>
  )
}
