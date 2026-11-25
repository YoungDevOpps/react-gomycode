import { motion } from "motion/react"
import type { ReactNode } from "react"

// Apparition douce au scroll, utilisée une seule fois par bloc.
export function Reveal({ children, delay = 0, className }: { children: ReactNode; delay?: number; className?: string }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  )
}

export function SectionHeading({ title, text }: { title: string; text: string }) {
  return (
    <Reveal className="mb-12 max-w-2xl">
      <h2 className="text-3xl font-bold sm:text-4xl">{title}</h2>
      <p className="mt-3 text-lg text-muted-foreground">{text}</p>
    </Reveal>
  )
}
