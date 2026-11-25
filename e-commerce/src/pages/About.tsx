import { Link } from 'react-router-dom'
import { Gem, Leaf, Users } from 'lucide-react'
import { buttonVariants } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

const values = [
  { icon: Gem, title: 'Qualité', text: 'Nous testons chaque produit avant de le proposer.' },
  { icon: Users, title: 'Proximité', text: 'Un conseil honnête, comme entre amis.' },
  { icon: Leaf, title: 'Durabilité', text: 'Des appareils faits pour durer, et réparables.' },
]

const stats = [
  { value: '12+', label: 'produits sélectionnés' },
  { value: '48 h', label: 'livraison express' },
  { value: '2 ans', label: 'de garantie' },
]

function About() {
  return (
    <div className="animate-fade-up mx-auto max-w-6xl px-4 py-12">
      <h2 className="mb-6 text-center text-3xl font-extrabold">À propos</h2>
      <p className="mx-auto max-w-2xl text-center text-lg text-muted-foreground">
        Ibrahim Shop est né d’une passion simple : la technologie. Nous sélectionnons le meilleur
        du matériel audio, informatique, mobile et gaming pour que vous n’ayez plus à comparer
        pendant des heures.
      </p>

      {/* grid : les 3 cartes ont automatiquement la même hauteur */}
      <div className="my-8 grid gap-6 md:grid-cols-3">
        {values.map(({ icon: Icon, title, text }) => (
          <Card key={title} className="border-0 shadow-md ring-0">
            <CardContent className="p-6">
              <Icon size={34} className="mb-3 text-brand" />
              <h3 className="text-lg font-semibold">{title}</h3>
              <p className="text-muted-foreground">{text}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="flex flex-wrap justify-around gap-5 rounded-2xl bg-foreground p-9 text-center">
        {stats.map((stat) => (
          <div key={stat.label}>
            <strong className="block text-4xl text-primary">{stat.value}</strong>
            <span className="text-white">{stat.label}</span>
          </div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <Link to="/contact" className={buttonVariants()}>
          Une question ? Contactez-nous
        </Link>
      </div>
    </div>
  )
}

export default About
