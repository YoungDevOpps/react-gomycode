import { Link } from 'react-router-dom'
import Logo from './Logo'

function Footer() {
  return (
    <footer className="mt-10 bg-foreground py-8 text-muted-foreground">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 md:flex-row">
        <Logo />
        <div className="flex gap-6">
          {[
            ['/', 'Boutique'],
            ['/about', 'À propos'],
            ['/contact', 'Contact'],
          ].map(([to, label]) => (
            <Link key={to} to={to} className="text-white transition-colors hover:text-primary">
              {label}
            </Link>
          ))}
        </div>
        <small>© 2026 Ibrahim Shop. Tous droits réservés.</small>
      </div>
    </footer>
  )
}

export default Footer
