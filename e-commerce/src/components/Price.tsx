import type { Product } from '../types'
import { formatPrice } from '../utils'

function Price({ product }: { product: Product }) {
  return <span className="text-xl font-extrabold">{formatPrice(product.price)}</span>
}

export default Price
