import type { Product } from '../types'
import ProductCard from './ProductCard'

type Props = {
  products: Product[]
  favorites: number[]
  onAdd: (product: Product) => void
  onToggleFavorite: (id: number) => void
}

// Affiche une liste de produits en grille (utilisé par Boutique et Favoris)
function ProductGrid({ products, favorites, onAdd, onToggleFavorite }: Props) {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {products.map((product, index) => (
        // delay : chaque carte apparaît un peu après la précédente
        <div key={product.id} className="animate-fade-up opacity-0" style={{ animationDelay: `${index * 0.06}s` }}>
          <ProductCard
            product={product}
            isFavorite={favorites.includes(product.id)}
            onAdd={onAdd}
            onToggleFavorite={onToggleFavorite}
          />
        </div>
      ))}
    </div>
  )
}

export default ProductGrid
