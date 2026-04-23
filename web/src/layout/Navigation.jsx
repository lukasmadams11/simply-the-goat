import { NavLink, Link } from 'react-router-dom'

const links = [
  { to: '/', label: 'Home', end: true },
  { to: '/results', label: 'Results' },
  { to: '/about', label: 'About' },
  { to: '/pricing', label: 'Pricing' },
  { to: '/contact', label: 'Contact' },
]

export default function Navigation() {
  return (
    <header className="sticky top-0 z-20 bg-cream/90 backdrop-blur border-b border-forest/10">
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-6 py-5">
        <Link
          to="/"
          className="font-serif text-2xl tracking-wide text-forest"
        >
          Simply the GOAT
        </Link>
        <ul className="flex gap-8">
          {links.map(({ to, label, end }) => (
            <li key={to}>
              <NavLink
                to={to}
                end={end}
                className={({ isActive }) =>
                  [
                    'font-sans text-sm uppercase tracking-widest pb-1 transition-colors',
                    isActive
                      ? 'text-forest border-b-2 border-ochre'
                      : 'text-slate hover:text-forest',
                  ].join(' ')
                }
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
