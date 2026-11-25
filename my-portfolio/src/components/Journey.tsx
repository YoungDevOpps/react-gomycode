import { useRef, useState } from "react"
import { useInView } from "motion/react"
import { GraduationCap } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Reveal, SectionHeading } from "@/components/Reveal"
import { education, experiences, qualities, skillGroups } from "@/data"

function Skills() {
  const [group, setGroup] = useState(skillGroups[0].id)
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: "-80px" })
  const current = skillGroups.find((g) => g.id === group) ?? skillGroups[0]

  return (
    <div ref={ref}>
      <h3 className="mb-4 text-2xl font-semibold">Compétences</h3>
      <Tabs value={group} onValueChange={(v) => setGroup(String(v))}>
        <TabsList className="h-auto flex-wrap">
          {skillGroups.map((g) => (
            <TabsTrigger key={g.id} value={g.id} className="px-3 py-1.5">{g.label}</TabsTrigger>
          ))}
        </TabsList>
      </Tabs>
      <ul className="mt-6 space-y-5">
        {current.skills.map((s) => (
          <li key={s.name}>
            <div className="mb-1.5 flex justify-between text-sm font-medium">
              <span>{s.name}</span>
              <span className="text-muted-foreground">{s.value} %</span>
            </div>
            <Progress value={inView ? s.value : 0} aria-label={s.name} className="[&_[data-slot=progress-indicator]]:duration-1000" />
          </li>
        ))}
      </ul>
    </div>
  )
}

export function Journey() {
  return (
    <section id="parcours" className="bg-muted/40 py-24">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading title="Mon parcours" text="Quatre ans en entreprise à construire et maintenir des outils que des équipes utilisent chaque jour." />

        <div className="grid gap-14 lg:grid-cols-2">
          <Reveal>
            <h3 className="mb-6 text-2xl font-semibold">Expérience</h3>
            <ol className="relative space-y-8 border-l-2 border-primary/20 pl-8">
              {experiences.map((e) => (
                <li key={e.period} className="relative">
                  <span className={`absolute top-1.5 -left-[2.6rem] size-4 rounded-full border-4 border-background ${e.current ? "bg-primary" : "bg-primary/40"}`} />
                  <div className="flex flex-wrap items-center gap-2">
                    <h4 className="text-lg font-semibold">{e.role}</h4>
                    {e.current && <Badge>En poste</Badge>}
                  </div>
                  <p className="text-sm text-muted-foreground">{e.company} · {e.period}</p>
                  <ul className="mt-3 list-disc space-y-1 pl-5 text-muted-foreground marker:text-primary">
                    {e.tasks.map((t) => <li key={t}>{t}</li>)}
                  </ul>
                </li>
              ))}
            </ol>

            <div className="mt-10 flex gap-4 rounded-xl border bg-card p-5">
              <GraduationCap className="mt-0.5 size-6 shrink-0 text-primary" />
              <div>
                <h4 className="font-semibold">{education.title}</h4>
                <p className="text-sm text-muted-foreground">{education.school} · {education.period}</p>
              </div>
            </div>

            <ul className="mt-6 flex flex-wrap gap-2">
              {qualities.map((q) => <li key={q}><Badge variant="secondary" className="h-7 px-3 text-sm">{q}</Badge></li>)}
            </ul>
          </Reveal>

          <Reveal delay={0.1}><Skills /></Reveal>
        </div>
      </div>
    </section>
  )
}
