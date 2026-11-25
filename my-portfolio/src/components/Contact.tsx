import { useState, type FormEvent } from "react"
import { Mail, MapPin, Phone, Send } from "lucide-react"
import { toast } from "sonner"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Reveal } from "@/components/Reveal"
import { identity } from "@/data"

const infos = [
  { icon: Mail, label: "Email", value: identity.email, href: `mailto:${identity.email}` },
  { icon: Phone, label: "Téléphone", value: identity.phone, href: identity.phoneHref },
  { icon: MapPin, label: "Adresse", value: identity.location, href: undefined },
]

export function Contact() {
  const [sending, setSending] = useState(false)

  // Pas de serveur : le formulaire ouvre le client mail avec le message prérempli.
  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const f = new FormData(e.currentTarget)
    setSending(true)
    const subject = encodeURIComponent(`Demande de devis de ${f.get("name")}`)
    const body = encodeURIComponent(`${f.get("message")}\n\n${f.get("name")} — ${f.get("email")}`)
    window.location.href = `mailto:${identity.email}?subject=${subject}&body=${body}`
    toast.success("Votre messagerie s'ouvre avec le message prêt à envoyer.")
    setTimeout(() => setSending(false), 1200)
  }

  return (
    <section id="contact" className="mx-auto max-w-6xl px-5 py-24">
      <Reveal>
        <div className="grid gap-12 overflow-hidden rounded-3xl bg-primary p-8 text-primary-foreground sm:p-12 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold sm:text-4xl">Parlons de votre projet</h2>
            <p className="mt-4 max-w-md text-lg opacity-90">
              Décrivez votre besoin en quelques lignes. Je vous réponds sous 48 h avec une première idée et un devis.
            </p>
            <ul className="mt-8 space-y-4">
              {infos.map((i) => (
                <li key={i.label} className="flex items-start gap-3">
                  <i.icon className="mt-1 size-5 shrink-0" />
                  <div>
                    <p className="text-sm opacity-75">{i.label}</p>
                    {i.href ? <a href={i.href} className="font-medium underline-offset-4 hover:underline">{i.value}</a> : <p className="font-medium">{i.value}</p>}
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <form onSubmit={onSubmit} className="space-y-4 rounded-2xl bg-background p-6 text-foreground shadow-xl">
            <div className="space-y-2">
              <Label htmlFor="name">Nom</Label>
              <Input id="name" name="name" required autoComplete="name" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" name="email" type="email" required autoComplete="email" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">Votre projet</Label>
              <Textarea id="message" name="message" rows={4} required placeholder="Ex. : un site pour présenter mon restaurant et recevoir des réservations" />
            </div>
            <Button type="submit" disabled={sending} className="h-11 w-full gap-2 text-base">
              <Send className="size-4" /> Envoyer ma demande
            </Button>
          </form>
        </div>
      </Reveal>
    </section>
  )
}
