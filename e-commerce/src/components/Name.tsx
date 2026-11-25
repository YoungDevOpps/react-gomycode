import type { Product } from '../types'

function Name({ product }: { product: Product }) {
  return <h3 className="text-base font-semibold">{product.name}</h3>
}

export default Name
