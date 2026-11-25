import { Reveal, SectionHeading } from "@/components/Reveal"
import { steps } from "@/data"

export function Process() {
  return (
    <section id="methode" className="mx-auto max-w-6xl px-5 py-24">
      <SectionHeading title="Comment on travaille ensemble" text="Quatre étapes simples, avec votre validation à chaque fois." />
      <ol className="grid gap-8 md:grid-cols-4">
        {steps.map((s, i) => (
          <Reveal key={s.title} delay={i * 0.1}>
            <li className="relative list-none">
              <div className="mb-4 flex items-center gap-3">
                <span className="flex size-12 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <s.icon className="size-5" />
                </span>
                {i < steps.length - 1 && <span aria-hidden className="hidden h-px flex-1 border-t-2 border-dashed border-primary/30 md:block" />}
              </div>
              <h3 className="text-lg font-semibold">
                <span className="text-primary">{i + 1}.</span> {s.title}
              </h3>
              <p className="mt-2 text-muted-foreground">{s.text}</p>
            </li>
          </Reveal>
        ))}
      </ol>
    </section>
  )
}
