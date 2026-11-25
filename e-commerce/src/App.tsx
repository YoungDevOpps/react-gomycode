import { Route, Routes, useNavigate } from 'react-router-dom'
import { toast } from 'sonner'
import { Toaster } from '@/components/ui/sonner'
import { useLocalStorage } from './hooks/useLocalStorage'
import type { CartItem, Product, User } from './types'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Favorites from './pages/Favorites'
import Cart from './pages/Cart'
import Account from './pages/Account'
import About from './pages/About'
import Contact from './pages/Contact'

function App() {
  // Ces états sont sauvegardés dans le localStorage
  const [cart, setCart] = useLocalStorage<CartItem[]>('cart', [])
  const [favorites, setFavorites] = useLocalStorage<number[]>('favorites', [])
  const [user, setUser] = useLocalStorage<User | null>('user', null)

  const navigate = useNavigate()

  // Affiche un petit message (toast) en bas de l'écran
  function showMessage(text: string) {
    toast(text)
  }

  function addToCart(product: Product) {
    const found = cart.find((item) => item.id === product.id)
    if (found) {
      setCart(cart.map((item) => (item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item)))
    } else {
      setCart([...cart, { id: product.id, quantity: 1 }])
    }
    showMessage(`${product.name} ajouté au panier`)
  }

  function changeQuantity(id: number, change: number) {
    const newCart = cart.map((item) => (item.id === id ? { ...item, quantity: item.quantity + change } : item))
    // On enlève les produits dont la quantité tombe à 0
    setCart(newCart.filter((item) => item.quantity > 0))
  }

  function removeFromCart(id: number) {
    setCart(cart.filter((item) => item.id !== id))
  }

  function checkout() {
    setCart([])
    showMessage('Merci pour votre commande !')
    navigate('/')
  }

  // Ajoute le produit aux favoris, ou l'enlève s'il y est déjà
  function toggleFavorite(id: number) {
    if (favorites.includes(id)) {
      setFavorites(favorites.filter((favoriteId) => favoriteId !== id))
    } else {
      setFavorites([...favorites, id])
      showMessage('Ajouté aux favoris')
    }
  }

  function saveUser(newUser: User) {
    setUser(newUser)
    showMessage(`Bienvenue ${newUser.firstName} !`)
  }

  function logout() {
    setUser(null)
  }

  let cartCount = 0
  for (const item of cart) {
    cartCount += item.quantity
  }

  return (
    <>
      <Header cartCount={cartCount} favoritesCount={favorites.length} user={user} />

      <main>
        <Routes>
          <Route
            path="/"
            element={<Home favorites={favorites} onAdd={addToCart} onToggleFavorite={toggleFavorite} />}
          />
          <Route
            path="/favorites"
            element={<Favorites favorites={favorites} onAdd={addToCart} onToggleFavorite={toggleFavorite} />}
          />
          <Route
            path="/cart"
            element={
              <Cart
                cart={cart}
                user={user}
                onChangeQuantity={changeQuantity}
                onRemove={removeFromCart}
                onCheckout={checkout}
              />
            }
          />
          <Route path="/account" element={<Account user={user} onSave={saveUser} onLogout={logout} />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact onSend={() => showMessage('Message envoyé, merci !')} />} />
        </Routes>
      </main>

      <Footer />

      <Toaster position="bottom-right" />
    </>
  )
}

export default App
