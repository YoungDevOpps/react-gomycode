import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Heart, Menu, ShoppingCart, User as UserIcon, X } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { cn } from '@/lib/utils'
import type { User } from '../types'
import Logo from './Logo'

type Props = {
  cartCount: number
  favoritesCount: number
  user: User | null
}

// Classes d'un lien : turquoise si la page est active
function linkClass({ isActive }: { isActive: boolean }) {
  return cn(
    'flex items-center gap-1.5 py-2 text-white transition-colors hover:text-primary',
    isActive && 'text-primary',
  )
}

function Header({ cartCount, favoritesCount, user }: Props) {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-foreground">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link to="/">
          <Logo />
        </Link>

        {/* Bouton menu (petits écrans) */}
        <button className="text-white md:hidden" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <X /> : <Menu />}
        </button>

        <nav
          onClick={() => setOpen(false)}
          className={cn(
            'absolute left-0 top-full w-full flex-col gap-1 bg-foreground px-4 pb-4 md:static md:flex md:w-auto md:flex-row md:items-center md:gap-6 md:bg-transparent md:p-0',
            open ? 'flex' : 'hidden',
          )}
        >
          <NavLink to="/" className={linkClass}>
            Boutique
          </NavLink>
          <NavLink to="/about" className={linkClass}>
            À propos
          </NavLink>
          <NavLink to="/contact" className={linkClass}>
            Contact
          </NavLink>
          <NavLink to="/favorites" className={linkClass}>
            <Heart size={18} /> Favoris
            {/* key change à chaque modification : l'animation se relance */}
            <Badge key={favoritesCount} className="animate-bump bg-white text-foreground">
              {favoritesCount}
            </Badge>
          </NavLink>
          <NavLink to="/cart" className={linkClass}>
            <ShoppingCart size={18} /> Panier
            <Badge key={cartCount} className="animate-bump bg-white text-foreground">
              {cartCount}
            </Badge>
          </NavLink>
          <NavLink to="/account" className={linkClass}>
            <UserIcon size={18} /> {user ? user.firstName : 'Compte'}
          </NavLink>
        </nav>
      </div>
    </header>
  )
}

export default Header
