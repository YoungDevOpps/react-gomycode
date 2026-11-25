import { identity } from "@/data"

export function Footer() {
  return (
    <footer className="border-t py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-5 text-sm text-muted-foreground sm:flex-row">
        <span className="font-heading font-bold text-foreground">Tangara<span className="text-primary">.</span></span>
        <p>© {new Date().getFullYear()} {identity.name}. Développeur fullstack à Abidjan.</p>
      </div>
    </footer>
  )
}
