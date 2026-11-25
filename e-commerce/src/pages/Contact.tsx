import { useState } from 'react'
import type { FormEvent } from 'react'
import { Mail, MapPin, Phone, Send } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'

type Props = {
  onSend: () => void
}

function Contact({ onSend }: Props) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  function handleSubmit(event: FormEvent) {
    event.preventDefault() // empêche le rechargement de la page
    onSend()
    // on vide le formulaire
    setName('')
    setEmail('')
    setMessage('')
  }

  return (
    <div className="animate-fade-up mx-auto max-w-6xl px-4 py-12">
      <h2 className="mb-8 text-center text-3xl font-extrabold">Contact</h2>
      <div className="grid gap-6 md:grid-cols-5">
        <Card className="border-0 shadow-md ring-0 md:col-span-2">
          <CardContent className="space-y-3 p-6">
            <h3 className="text-lg font-semibold">Nos coordonnées</h3>
            <p className="flex items-center gap-2 text-muted-foreground">
              <Mail size={18} className="text-brand" /> ibrahim.tangara777@gmail.com
            </p>
            <p className="flex items-center gap-2 text-muted-foreground">
              <Phone size={18} className="text-brand" /> +225 00 000 000 00
            </p>
            <p className="flex items-center gap-2 text-muted-foreground">
              <MapPin size={18} className="text-brand" /> 12 rue de la Tech, 75000 Paris
            </p>
            <p className="text-sm text-muted-foreground">Du lundi au samedi, de 9h à 19h.</p>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-md ring-0 md:col-span-3">
          <CardContent className="p-6">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Nom</Label>
                <Input id="name" required value={name} onChange={(e) => setName(e.target.value)} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" required type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" required rows={4} value={message} onChange={(e) => setMessage(e.target.value)} />
              </div>
              <Button type="submit">
                <Send /> Envoyer
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default Contact
