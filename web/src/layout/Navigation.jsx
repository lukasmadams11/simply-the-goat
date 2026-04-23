import { useEffect, useState } from 'react'
import { NavLink, Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

const links = [
  { to: '/', label: 'Home', end: true },
  { to: '/results', label: 'Results' },
  { to: '/about', label: 'About' },
  { to: '/pricing', label: 'Pricing' },
  { to: '/contact', label: 'Contact' },
]

const linkClass = ({ isActive }) =>
  [
    'font-sans text-sm uppercase tracking-widest pb-1 transition-colors',
    isActive
      ? 'text-forest border-b-2 border-ochre'
      : 'text-slate hover:text-forest',
  ].join(' ')

export default function Navigation() {
  const [open, setOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    setOpen(false)
  }, [location.pathname])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header className="sticky top-0 z-30 bg-cream/90 backdrop-blur border-b border-forest/10">
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-6 py-5">
        <Link to="/" className="font-serif text-2xl tracking-wide text-forest">
          Simply the GOAT
        </Link>

        <ul className="hidden md:flex gap-8">
          {links.map(({ to, label, end }) => (
            <li key={to}>
              <NavLink to={to} end={end} className={linkClass}>
                {label}
              </NavLink>
            </li>
          ))}
        </ul>

        <button
          type="button"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
          className="md:hidden text-forest focus:outline-none focus-visible:ring-2 focus-visible:ring-ochre rounded"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      <div
        id="mobile-nav"
        className={`md:hidden overflow-hidden transition-[max-height] duration-300 ease-out ${
          open ? 'max-h-96' : 'max-h-0'
        }`}
      >
        <ul className="flex flex-col px-6 pb-6 gap-4 border-t border-forest/10 pt-4">
          {links.map(({ to, label, end }) => (
            <li key={to}>
              <NavLink
                to={to}
                end={end}
                className={({ isActive }) =>
                  [
                    'block font-sans text-base uppercase tracking-widest py-2 transition-colors',
                    isActive ? 'text-ochre' : 'text-slate hover:text-forest',
                  ].join(' ')
                }
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </header>
  )
}
