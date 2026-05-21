import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import Layout from './layout/Layout'
import ScrollToTop from './layout/ScrollToTop'
import Home from './pages/Home'
import Results from './pages/Results'
import About from './pages/About'
import Pricing from './pages/Pricing'
import Contact from './pages/Contact'
import Assets from './pages/Assets'

const basename = import.meta.env.BASE_URL.replace(/\/$/, '')

export default function App() {
  return (
    <HelmetProvider>
      <BrowserRouter basename={basename}>
        <ScrollToTop />
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="results" element={<Results />} />
            <Route path="about" element={<About />} />
            <Route path="pricing" element={<Pricing />} />
            <Route path="contact" element={<Contact />} />
            <Route path="assets" element={<Assets />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  )
}
