import { Heart, ShoppingCart } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { cn } from '@/lib/utils'
import type { Product } from '../types'
import Name from './Name'
import Price from './Price'
import Description from './Description'
import Image from './Image'

type Props = {
  product: Product
  isFavorite: boolean
  onAdd: (product: Product) => void
  onToggleFavorite: (id: number) => void
}

// La carte qui contient les 4 composants du produit
function ProductCard({ product, isFavorite, onAdd, onToggleFavorite }: Props) {
  return (
    <Card className="h-full gap-0 border-0 py-0 shadow-md ring-0 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
      <div className="relative overflow-hidden">
        <Image product={product} />
        <Badge className="absolute left-3 top-3 bg-foreground text-white">{product.category}</Badge>
        <button
          onClick={() => onToggleFavorite(product.id)}
          aria-label="Ajouter aux favoris"
          className={cn(
            'absolute right-2 top-2 flex size-9 items-center justify-center rounded-full bg-white text-foreground transition-transform hover:scale-110 focus-visible:outline-2 focus-visible:outline-foreground',
            isFavorite && 'animate-heart-pop bg-foreground text-primary',
          )}
        >
          <Heart size={18} fill={isFavorite ? 'currentColor' : 'none'} />
        </button>
      </div>
      <CardContent className="flex flex-1 flex-col p-4">
        <Name product={product} />
        <Description product={product} />
        <div className="mt-auto flex items-center justify-between">
          <Price product={product} />
          <Button onClick={() => onAdd(product)}>
            <ShoppingCart /> Ajouter
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

export default ProductCard
