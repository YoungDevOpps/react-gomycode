import type { Product } from '../types'

function Image({ product }: { product: Product }) {
  return (
    <img
      className="h-52 w-full object-cover transition-transform duration-500 group-hover/card:scale-110"
      src={product.image}
      alt={product.name}
    />
  )
}

export default Image
