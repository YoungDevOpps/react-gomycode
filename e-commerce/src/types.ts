// Un produit de la boutique
export type Product = {
  id: number
  name: string
  price: number
  description: string
  image: string // chemin de la photo (dans public/images)
  category: string
}

// Une ligne du panier : on garde seulement l'id et la quantité
export type CartItem = {
  id: number
  quantity: number
}

// Le compte de l'utilisateur
export type User = {
  firstName: string
  lastName: string
  email: string
}
