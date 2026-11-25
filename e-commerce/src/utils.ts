// Affiche un prix en euros : 59.9 -> "59,90 €"
export function formatPrice(price: number): string {
  return price.toFixed(2).replace('.', ',') + ' €'
}
