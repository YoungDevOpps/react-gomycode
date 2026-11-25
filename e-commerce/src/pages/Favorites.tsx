import { Link } from 'react-router-dom'
import { Heart } from 'lucide-react'
import { buttonVariants } from '@/components/ui/button'
import { products } from '../product'
import type { Product } from '../types'
import ProductGrid from '../components/ProductGrid'

type Props = {
  favorites: number[]
  onAdd: (product: Product) => void
  onToggleFavorite: (id: number) => void
}

function Favorites({ favorites, onAdd, onToggleFavorite }: Props) {
  // On garde seulement les produits dont l'id est dans les favoris
  const favoriteProducts = products.filter((p) => favorites.includes(p.id))

  if (favoriteProducts.length === 0) {
    return (
      <div className="animate-fade-up mx-auto max-w-6xl px-4 py-16 text-center">
        <Heart className="animate-float mx-auto mb-4 text-brand" size={80} strokeWidth={1.2} />
        <h2 className="text-2xl font-bold">Aucun favori pour le moment</h2>
        <p className="mb-5 text-muted-foreground">Cliquez sur le cœur d’un produit pour le retrouver ici.</p>
        <Link to="/" className={buttonVariants()}>
          Voir la boutique
        </Link>
      </div>
    )
  }

  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <h2 className="mb-8 text-center text-3xl font-extrabold">Mes favoris</h2>
      <ProductGrid
        products={favoriteProducts}
        favorites={favorites}
        onAdd={onAdd}
        onToggleFavorite={onToggleFavorite}
      />
    </div>
  )
}

export default Favorites
