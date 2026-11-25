import { useState } from 'react'
import type { FormEvent } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import type { User } from '../types'

type Props = {
  user: User | null
  onSave: (user: User) => void
  onLogout: () => void
}

function Account({ user, onSave, onLogout }: Props) {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')

  function handleSubmit(event: FormEvent) {
    event.preventDefault() // empêche le rechargement de la page
    onSave({ firstName, lastName, email })
  }

  // Si le compte existe, on affiche le profil
  if (user) {
    return (
      <div className="animate-fade-up mx-auto max-w-md px-4 py-12">
        <Card className="border-0 shadow-xl ring-0">
          <CardContent className="p-8 text-center">
            <div className="animate-bump mx-auto mb-4 flex size-24 items-center justify-center rounded-full bg-primary text-4xl font-extrabold text-foreground">
              {user.firstName[0].toUpperCase()}
            </div>
            <h2 className="text-2xl font-bold">
              {user.firstName} {user.lastName}
            </h2>
            <p className="mb-5 text-muted-foreground">{user.email}</p>
            <Button variant="outline" onClick={onLogout}>
              Se déconnecter
            </Button>
          </CardContent>
        </Card>
      </div>
    )
  }

  // Sinon, on affiche le formulaire de création de compte
  return (
    <div className="animate-fade-up mx-auto max-w-md px-4 py-12">
      <Card className="border-0 shadow-xl ring-0">
        <CardContent className="p-8">
          <h2 className="mb-6 text-center text-2xl font-bold">Créer un compte</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="firstName">Prénom</Label>
              <Input id="firstName" required value={firstName} onChange={(e) => setFirstName(e.target.value)} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="lastName">Nom</Label>
              <Input id="lastName" required value={lastName} onChange={(e) => setLastName(e.target.value)} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" required type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <Button type="submit" className="w-full">
              Créer mon compte
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}

export default Account
