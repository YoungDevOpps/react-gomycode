import { motion } from "motion/react"
import { ArrowRight, BellRing, MapPin } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { CountUp } from "@/components/CountUp"
import { stats } from "@/data"

const fade = (delay: number) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: "easeOut" as const },
})

// Maquette de site qui se construit bloc par bloc : le moment d'animation principal de la page.
function BuildingMockup() {
  const block = (delay: number) => ({
    initial: { opacity: 0, scale: 0.9 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: 0.4, delay: 0.9 + delay },
  })
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.5 }}
      className="relative"
    >
      <div className="animate-float overflow-hidden rounded-2xl border bg-card shadow-2xl shadow-primary/10">
        <div className="flex items-center gap-1.5 border-b bg-muted/60 px-4 py-3">
          <span className="size-2.5 rounded-full bg-red-400" />
          <span className="size-2.5 rounded-full bg-amber-400" />
          <span className="size-2.5 rounded-full bg-primary" />
          <span className="ml-3 h-5 flex-1 rounded-md bg-background/80 px-3 text-[11px] leading-5 text-muted-foreground">
            votre-entreprise.ci
          </span>
        </div>
        <div className="space-y-4 p-5">
          <motion.div {...block(0)} className="h-24 rounded-xl bg-gradient-to-br from-primary/80 to-primary/30" />
          <div className="grid grid-cols-3 gap-3">
            {[0.15, 0.3, 0.45].map((d) => (
              <motion.div key={d} {...block(d)} className="h-20 rounded-lg bg-muted" />
            ))}
          </div>
          <motion.div {...block(0.6)} className="space-y-2">
            <div className="h-2.5 w-3/4 rounded bg-muted" />
            <div className="h-2.5 w-1/2 rounded bg-muted" />
          </motion.div>
          <motion.div {...block(0.75)} className="h-9 w-32 rounded-lg bg-primary" />
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, x: 30, scale: 0.9 }}
        animate={{ opacity: 1, x: 0, scale: 1 }}
        transition={{ type: "spring", stiffness: 200, damping: 18, delay: 2.1 }}
        className="absolute -bottom-5 -left-3 flex items-center gap-3 rounded-xl border bg-card px-4 py-3 shadow-lg sm:-left-8"
      >
        <span className="flex size-9 items-center justify-center rounded-full bg-accent text-accent-foreground">
          <BellRing className="size-4" />
        </span>
        <div>
          <p className="text-sm font-semibold">Nouvelle demande</p>
          <p className="text-xs text-muted-foreground">Un client vous a écrit</p>
        </div>
      </motion.div>
    </motion.div>
  )
}

export function Hero() {
  return (
    <section id="accueil" className="relative overflow-hidden pt-32 pb-20 sm:pt-40">
      <div aria-hidden className="bg-dots absolute inset-0" />
      <div aria-hidden className="absolute -top-32 left-1/2 size-[36rem] -translate-x-1/2 rounded-full bg-primary/15 blur-3xl" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-16 px-5 lg:grid-cols-[1.1fr_1fr]">
        <div>
          <motion.div {...fade(0)}>
            <Badge variant="secondary" className="h-7 gap-2 px-3 text-sm font-normal">
              <span className="relative flex size-2">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-primary opacity-60" />
                <span className="relative inline-flex size-2 rounded-full bg-primary" />
              </span>
              Disponible pour de nouveaux projets
            </Badge>
          </motion.div>

          <motion.h1 {...fade(0.1)} className="mt-6 text-4xl leading-[1.08] font-extrabold sm:text-6xl">
            Des sites et applications qui font venir vos clients
          </motion.h1>

          <motion.p {...fade(0.25)} className="mt-6 max-w-xl text-lg text-muted-foreground">
            Je suis Yves Ibrahim, développeur fullstack à Abidjan. Je conçois des sites vitrines, des boutiques en ligne
            et des outils de gestion pour les entreprises ivoiriennes.
          </motion.p>

          <motion.div {...fade(0.4)} className="mt-8 flex flex-wrap items-center gap-3">
            <Button size="lg" className="h-11 gap-2 px-6 text-base" render={<a href="#contact" />}>
              Démarrer un projet <ArrowRight className="size-4" />
            </Button>
            <Button size="lg" variant="outline" className="h-11 px-6 text-base" render={<a href="#projets" />}>
              Voir les projets
            </Button>
          </motion.div>

          <motion.p {...fade(0.5)} className="mt-6 flex items-center gap-2 text-sm text-muted-foreground">
            <MapPin className="size-4" /> Adjamé, Abidjan, et à distance partout en Côte d'Ivoire
          </motion.p>

          <motion.dl {...fade(0.6)} className="mt-12 grid max-w-lg grid-cols-3 gap-6 border-t pt-8">
            {stats.map((s) => (
              <div key={s.label}>
                <dt className="font-heading text-3xl font-bold text-primary">
                  <CountUp to={s.value} suffix={s.suffix} />
                </dt>
                <dd className="mt-1 text-xs text-muted-foreground sm:text-sm">{s.label}</dd>
              </div>
            ))}
          </motion.dl>
        </div>

        <BuildingMockup />
      </div>
    </section>
  )
}
