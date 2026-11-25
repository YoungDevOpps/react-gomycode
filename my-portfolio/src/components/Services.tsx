import { Card, CardContent } from "@/components/ui/card"
import { Reveal, SectionHeading } from "@/components/Reveal"
import { services } from "@/data"

export function Services() {
  return (
    <section id="services" className="mx-auto max-w-6xl px-5 py-24">
      <SectionHeading title="Ce que je peux faire pour vous" text="Quatre services pour lancer, vendre, gérer et faire durer votre activité en ligne." />
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((s, i) => (
          <Reveal key={s.title} delay={i * 0.08}>
            <Card className="group h-full transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10">
              <CardContent className="space-y-4">
                <span className="flex size-12 items-center justify-center rounded-xl bg-accent text-accent-foreground transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <s.icon className="size-6" />
                </span>
                <h3 className="text-xl font-semibold">{s.title}</h3>
                <p className="text-muted-foreground">{s.text}</p>
              </CardContent>
            </Card>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
