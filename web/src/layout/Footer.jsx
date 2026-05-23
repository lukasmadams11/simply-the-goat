import { Mail, Phone, MapPin } from 'lucide-react'

function InstagramIcon({ size = 18 }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  )
}

export default function Footer() {
  return (
    <footer className="bg-forest text-cream mt-24">
      <div className="max-w-6xl mx-auto px-6 py-14 grid gap-10 md:grid-cols-3 md:items-start">
        <div>
          <p className="font-serif text-2xl">Simply the GOAT</p>
          <p className="mt-2 font-sans text-sm text-cream/70">
            Defensible space, naturally.
          </p>
          <a
            href="https://instagram.com/simplythe_goat"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Simply the GOAT on Instagram"
            className="mt-4 inline-flex items-center gap-2 text-cream/80 hover:text-ochre transition-colors font-sans text-sm"
          >
            <InstagramIcon size={18} />
            <span>@simplythe_goat</span>
          </a>
        </div>

        <div className="font-sans text-sm space-y-5">
          <p className="font-semibold uppercase tracking-widest text-xs text-cream/60">
            Contact
          </p>
          <div className="space-y-1.5">
            <p className="font-semibold text-cream/95">Jim Guggenhime</p>
            <p className="flex items-start gap-2 text-cream/80">
              <Phone size={14} className="mt-0.5 shrink-0" aria-hidden="true" />
              <a href="tel:+15595803559" className="hover:text-ochre transition-colors">
                (559) 580-3559
              </a>
            </p>
            <p className="flex items-start gap-2 text-cream/80">
              <Mail size={14} className="mt-0.5 shrink-0" aria-hidden="true" />
              <a href="mailto:jim@simplythegoat.com" className="hover:text-ochre transition-colors">
                jim@simplythegoat.com
              </a>
            </p>
          </div>
          <div className="space-y-1.5">
            <p className="font-semibold text-cream/95">Luke Adams</p>
            <p className="flex items-start gap-2 text-cream/80">
              <Phone size={14} className="mt-0.5 shrink-0" aria-hidden="true" />
              <a href="tel:+15595803412" className="hover:text-ochre transition-colors">
                (559) 580-3412
              </a>
            </p>
            <p className="flex items-start gap-2 text-cream/80">
              <Mail size={14} className="mt-0.5 shrink-0" aria-hidden="true" />
              <a href="mailto:luke@simplythegoat.com" className="hover:text-ochre transition-colors">
                luke@simplythegoat.com
              </a>
            </p>
          </div>
          <div className="space-y-1.5">
            <p className="font-semibold text-cream/95">Ryan Bartusek</p>
            <p className="flex items-start gap-2 text-cream/80">
              <Phone size={14} className="mt-0.5 shrink-0" aria-hidden="true" />
              <a href="tel:+15595803538" className="hover:text-ochre transition-colors">
                (559) 580-3538
              </a>
            </p>
            <p className="flex items-start gap-2 text-cream/80">
              <Mail size={14} className="mt-0.5 shrink-0" aria-hidden="true" />
              <a href="mailto:ryan@simplythegoat.com" className="hover:text-ochre transition-colors">
                ryan@simplythegoat.com
              </a>
            </p>
          </div>
        </div>

        <div className="font-sans text-sm space-y-3">
          <p className="font-semibold uppercase tracking-widest text-xs text-cream/60">
            Service Area
          </p>
          <p className="flex items-start gap-2 text-cream/85">
            <MapPin size={16} className="mt-0.5 shrink-0" aria-hidden="true" />
            <span>Fresno, Madera, and Coarsegold</span>
          </p>
        </div>
      </div>

      <div className="border-t border-cream/10">
        <div className="max-w-6xl mx-auto px-6 py-5 space-y-2">
          <p className="font-sans text-[11px] leading-relaxed text-cream/55">
            All content on this website is provided for general informational
            purposes only and does not constitute a binding offer, contract,
            warranty, or professional advice. Service descriptions, quotes, and
            timelines shown are illustrative and subject to change without
            notice. A signed written agreement is required to establish any
            service engagement with Simply the GOAT.
          </p>
          <p className="font-sans text-xs text-cream/60">
            &copy; {new Date().getFullYear()} Simply the GOAT
          </p>
        </div>
      </div>
    </footer>
  )
}
