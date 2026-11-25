import type { Product } from '../types'

function Description({ product }: { product: Product }) {
  return <p className="mb-4 mt-1 text-sm text-muted-foreground">{product.description}</p>
}

export default Description
