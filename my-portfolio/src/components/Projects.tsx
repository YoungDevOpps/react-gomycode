import { useState } from "react"
import { AnimatePresence, motion } from "motion/react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { SectionHeading } from "@/components/Reveal"
import { projects, type Category } from "@/data"

const filters = ["Tous", "Site vitrine", "E-commerce", "Application"] as const

export function Projects() {
  const [filter, setFilter] = useState<string>("Tous")
  const visible = projects.filter((p) => filter === "Tous" || p.category === (filter as Category))

  return (
    <section id="projets" className="bg-muted/40 py-24">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading
          title="Réalisations"
          text="Des projets de démonstration qui montrent le type de travail que je peux réaliser pour vous."
        />

        <Tabs value={filter} onValueChange={(v) => setFilter(String(v))} className="mb-8">
          <TabsList className="h-auto flex-wrap">
            {filters.map((f) => (
              <TabsTrigger key={f} value={f} className="px-4 py-1.5">{f}</TabsTrigger>
            ))}
          </TabsList>
        </Tabs>

        <motion.div layout className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {visible.map((p) => (
              <motion.div
                key={p.title}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="group h-full overflow-hidden p-0 transition-shadow duration-300 hover:shadow-xl hover:shadow-primary/10">
                  <div
                    className="relative flex h-44 items-center justify-center overflow-hidden"
                    style={{ background: `linear-gradient(135deg, oklch(0.78 0.12 ${p.hue}), oklch(0.5 0.14 ${p.hue + 40}))` }}
                  >
                    <div className="absolute inset-x-8 top-6 bottom-0 rounded-t-xl bg-white/90 p-3 shadow-xl transition-transform duration-500 group-hover:-translate-y-2 dark:bg-black/60">
                      <div className="mb-2 flex gap-1">
                        <span className="size-1.5 rounded-full bg-black/20 dark:bg-white/30" />
                        <span className="size-1.5 rounded-full bg-black/20 dark:bg-white/30" />
                        <span className="size-1.5 rounded-full bg-black/20 dark:bg-white/30" />
                      </div>
                      <div className="h-2 w-2/3 rounded bg-black/15 dark:bg-white/25" />
                      <div className="mt-2 h-2 w-1/2 rounded bg-black/10 dark:bg-white/15" />
                    </div>
                    <p.icon className="relative size-12 text-white drop-shadow-lg transition-transform duration-500 group-hover:scale-110" />
                  </div>
                  <CardContent className="space-y-3 pb-5">
                    <div className="flex items-center justify-between gap-2">
                      <h3 className="text-xl font-semibold">{p.title}</h3>
                      <Badge variant="outline">{p.category}</Badge>
                    </div>
                    <p className="text-muted-foreground">{p.text}</p>
                    <ul className="flex flex-wrap gap-2 pt-1">
                      {p.stack.map((s) => (
                        <li key={s} className="rounded-md bg-secondary px-2 py-0.5 text-xs font-medium text-secondary-foreground">{s}</li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}
