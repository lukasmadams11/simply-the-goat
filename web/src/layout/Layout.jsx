import { Outlet } from 'react-router-dom'
import Navigation from './Navigation'
import Footer from './Footer'

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col bg-cream text-slate">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50 focus:bg-forest focus:text-cream focus:px-4 focus:py-2 focus:font-sans focus:text-sm focus:uppercase focus:tracking-widest"
      >
        Skip to content
      </a>
      <Navigation />
      <main id="main" className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
