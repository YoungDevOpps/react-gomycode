import { Link } from 'react-router-dom'
import { Minus, Plus, ShoppingCart, Trash2 } from 'lucide-react'
import { Button, buttonVariants } from '@/components/ui/button'
import { products } from '../product'
import type { CartItem, User } from '../types'
import { formatPrice } from '../utils'

type Props = {
  cart: CartItem[]
  user: User | null
  onChangeQuantity: (id: number, change: number) => void
  onRemove: (id: number) => void
  onCheckout: () => void
}

function Cart({ cart, user, onChangeQuantity, onRemove, onCheckout }: Props) {
  // On retrouve le produit complet à partir de l'id
  const lines = cart.map((item) => ({
    product: products.find((p) => p.id === item.id)!,
    quantity: item.quantity,
  }))

  let total = 0
  for (const line of lines) {
    total += line.product.price * line.quantity
  }

  if (cart.length === 0) {
    return (
      <div className="animate-fade-up mx-auto max-w-6xl px-4 py-16 text-center">
        <ShoppingCart className="animate-float mx-auto mb-4 text-brand" size={80} strokeWidth={1.2} />
        <h2 className="mb-5 text-2xl font-bold">Votre panier est vide</h2>
        <Link to="/" className={buttonVariants()}>
          Découvrir la boutique
        </Link>
      </div>
    )
  }

  return (
    <div className="animate-fade-up mx-auto max-w-6xl px-4 py-12">
      <h2 className="mb-6 text-3xl font-extrabold">Mon panier</h2>

      <div className="overflow-x-auto rounded-2xl bg-white shadow-md">
        <table className="w-full text-left">
          <thead className="border-b text-sm text-muted-foreground">
            <tr>
              <th className="p-4">Produit</th>
              <th className="p-4">Prix</th>
              <th className="p-4">Quantité</th>
              <th className="p-4">Sous-total</th>
              <th className="p-4"></th>
            </tr>
          </thead>
          <tbody>
            {lines.map(({ product, quantity }) => (
              <tr key={product.id} className="border-b last:border-0">
                <td className="p-4">
                  <div className="flex items-center gap-3">
                    <img className="h-12 w-[70px] rounded-lg object-cover" src={product.image} alt={product.name} />
                    <strong>{product.name}</strong>
                  </div>
                </td>
                <td className="p-4">{formatPrice(product.price)}</td>
                <td className="p-4">
                  <div className="flex items-center gap-2">
                    <Button size="icon-sm" variant="outline" onClick={() => onChangeQuantity(product.id, -1)}>
                      <Minus />
                    </Button>
                    <span className="w-6 text-center">{quantity}</span>
                    <Button size="icon-sm" variant="outline" onClick={() => onChangeQuantity(product.id, 1)}>
                      <Plus />
                    </Button>
                  </div>
                </td>
                <td className="p-4 font-semibold">{formatPrice(product.price * quantity)}</td>
                <td className="p-4">
                  <Button size="icon-sm" variant="outline" onClick={() => onRemove(product.id)} aria-label="Supprimer">
                    <Trash2 />
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-6 flex flex-col items-end gap-3">
        <h3 className="text-2xl font-bold">Total : {formatPrice(total)}</h3>
        {user ? (
          <Button size="lg" onClick={onCheckout}>
            Valider la commande
          </Button>
        ) : (
          <p className="text-muted-foreground">
            <Link to="/account" className="font-semibold text-brand underline">
              Créez un compte
            </Link>{' '}
            pour valider votre commande.
          </p>
        )}
      </div>
    </div>
  )
}

export default Cart
