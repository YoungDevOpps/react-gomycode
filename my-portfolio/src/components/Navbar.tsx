import { useEffect, useState } from "react"
import { motion, useScroll, useSpring } from "motion/react"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTitle, SheetTrigger, SheetClose } from "@/components/ui/sheet"
import { ThemeToggle } from "@/components/ThemeToggle"
import { navLinks } from "@/data"
import { cn } from "@/lib/utils"

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const { scrollYProgress } = useScroll()
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30 })

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-40 transition-all duration-300",
        scrolled && "border-b bg-background/80 backdrop-blur-md",
      )}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5" aria-label="Navigation principale">
        <a href="#accueil" className="font-heading text-xl font-bold">
          Tangara<span className="text-primary">.</span>
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {navLinks.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Button className="hidden h-9 px-4 md:inline-flex" render={<a href="#contact" />}>
            Demander un devis
          </Button>

          <Sheet>
            <SheetTrigger render={<Button variant="outline" size="icon" className="md:hidden" aria-label="Ouvrir le menu" />}>
              <Menu className="size-4" />
            </SheetTrigger>
            <SheetContent>
              <SheetTitle className="px-6 pt-6 font-heading text-lg">Menu</SheetTitle>
              <div className="flex flex-col gap-1 px-4">
                {navLinks.map((l) => (
                  <SheetClose key={l.href} render={<a href={l.href} className="rounded-md px-3 py-3 text-base font-medium hover:bg-muted" />}>
                    {l.label}
                  </SheetClose>
                ))}
                <SheetClose render={<a href="#contact" className="mt-4 rounded-lg bg-primary px-4 py-3 text-center font-medium text-primary-foreground" />}>
                  Demander un devis
                </SheetClose>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
      <motion.div style={{ scaleX: progress }} className="h-0.5 origin-left bg-primary" />
    </header>
  )
}
