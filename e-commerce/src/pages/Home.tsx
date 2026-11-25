import { useState } from 'react'
import { BadgeCheck, Headset, ShieldCheck, Truck } from 'lucide-react'
import { buttonVariants } from '@/components/ui/button'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { products } from '../product'
import type { Product } from '../types'
import ProductGrid from '../components/ProductGrid'

type Props = {
  favorites: number[]
  onAdd: (product: Product) => void
  onToggleFavorite: (id: number) => void
}

const categories = ['Tous', 'Audio', 'Ordinateurs', 'Mobiles', 'Gaming', 'Connecté']

const advantages = [
  { icon: Truck, title: 'Livraison rapide', text: 'En 48 h partout en France' },
  { icon: ShieldCheck, title: 'Paiement sécurisé', text: 'Vos données sont protégées' },
  { icon: BadgeCheck, title: 'Garantie 2 ans', text: 'Sur tous nos produits' },
  { icon: Headset, title: 'Support 7j/7', text: 'Une équipe à votre écoute' },
]

function Home({ favorites, onAdd, onToggleFavorite }: Props) {
  const [category, setCategory] = useState('Tous')

  // On garde seulement les produits de la catégorie choisie
  const shownProducts =
    category === 'Tous' ? products : products.filter((p) => p.category === category)

  return (
    <>
      <section className="bg-white pb-28 pt-16">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 lg:grid-cols-2">
          <div>
            <p className="animate-fade-up text-sm font-semibold uppercase tracking-[0.15em] text-brand">
              Nouvelle collection 2026
            </p>
            <h1 className="animate-fade-up my-3 text-4xl font-extrabold leading-tight md:text-5xl">
              La tech qui vous <span className="text-brand">ressemble</span>.
            </h1>
            <p className="animate-fade-up mb-7 text-lg text-muted-foreground">
              Casques, ordinateurs, smartphones et gaming : une sélection courte, testée par
              Ibrahim, au meilleur prix.
            </p>
            <a href="#produits" className={buttonVariants({ size: 'lg' })}>
              Découvrir la boutique
            </a>
          </div>
          <img
            className="animate-fade-up w-full rounded-2xl shadow-2xl"
            src="/images/hero.jpg"
            alt="Bureau avec casque, montre, téléphone et ordinateur"
          />
        </div>
      </section>

      <div className="relative z-10 mx-auto -mt-10 grid max-w-6xl grid-cols-2 gap-3 px-4 lg:grid-cols-4">
        {advantages.map(({ icon: Icon, title, text }) => (
          <div
            key={title}
            className="flex items-center gap-3.5 rounded-xl bg-white p-4 shadow-lg transition-transform hover:-translate-y-1"
          >
            <Icon size={28} className="shrink-0 text-brand" />
            <div>
              <strong className="block text-sm">{title}</strong>
              <small className="text-muted-foreground">{text}</small>
            </div>
          </div>
        ))}
      </div>

      <section id="produits" className="mx-auto my-12 max-w-6xl px-4">
        <h2 className="mb-6 text-center text-3xl font-extrabold">
          Nos produits
          <span className="mx-auto mt-2 block h-1 w-14 rounded bg-primary" />
        </h2>

        <div className="mb-9 flex flex-wrap justify-center gap-2.5">
          {categories.map((name) => (
            <Button
              key={name}
              variant="outline"
              onClick={() => setCategory(name)}
              className={cn(
                'border-foreground bg-white hover:bg-foreground hover:text-primary',
                name === category && 'bg-foreground text-primary',
              )}
            >
              {name}
            </Button>
          ))}
        </div>

        <ProductGrid
          products={shownProducts}
          favorites={favorites}
          onAdd={onAdd}
          onToggleFavorite={onToggleFavorite}
        />
      </section>
    </>
  )
}

export default Home
