import { ClipboardCheck, Truck, FileText } from 'lucide-react'
import SectionHeader from '../components/SectionHeader'
import ContactForm from '../components/ContactForm'
import Seo from '../components/Seo'

const steps = [
  {
    icon: ClipboardCheck,
    title: 'Assess',
    body: 'Within two business days we review your parcel, request any missing details, and schedule an on-site walkthrough.',
  },
  {
    icon: Truck,
    title: 'Deploy',
    body: 'Herd, herders, fencing, and water arrive on the agreed date. You’ll meet your dedicated project lead on day one.',
  },
  {
    icon: FileText,
    title: 'Report',
    body: 'After the graze we send a post-deployment report with fuel-load reduction figures and insurance-ready documentation.',
  },
]

export default function Contact() {
  return (
    <>
      <Seo
        title="Contact"
        path="/contact"
        description="Request a wildfire-mitigation site assessment. Share your parcel details and we'll return a scoped deployment plan within two business days."
      />
      <section className="bg-cream border-b border-forest/10">
        <div className="max-w-6xl mx-auto px-6 py-20 md:py-28">
          <SectionHeader
            eyebrow="Deployment"
            title="Start a site assessment."
            lede="Tell us about your parcel. The more specific the details, the faster we can return a scoped deployment plan."
          />
        </div>
      </section>

      <section className="bg-cream">
        <div className="max-w-6xl mx-auto px-6 py-16 md:py-20 grid lg:grid-cols-[1.3fr_1fr] gap-12 lg:gap-20">
          <div>
            <ContactForm />
          </div>

          <aside className="space-y-8">
            <div>
              <p className="font-sans text-xs font-semibold uppercase tracking-widest text-ochre">
                What to expect
              </p>
              <h2 className="mt-2 font-serif text-3xl text-forest">
                From request to report in three steps.
              </h2>
            </div>

            <ol className="space-y-6">
              {steps.map(({ icon: Icon, title, body }, i) => (
                <li key={title} className="flex gap-5">
                  <div className="shrink-0 flex flex-col items-center">
                    <div className="w-12 h-12 rounded-full bg-forest text-cream flex items-center justify-center">
                      <Icon size={20} aria-hidden="true" />
                    </div>
                    {i !== steps.length - 1 && (
                      <div className="w-px flex-1 bg-forest/15 mt-2" />
                    )}
                  </div>
                  <div className="pb-2">
                    <p className="font-sans text-xs font-semibold uppercase tracking-widest text-ochre">
                      Step {i + 1}
                    </p>
                    <h3 className="font-serif text-xl text-forest">{title}</h3>
                    <p className="mt-2 font-sans text-sm text-slate/80 leading-relaxed">
                      {body}
                    </p>
                  </div>
                </li>
              ))}
            </ol>

            <div className="border-t border-forest/10 pt-6">
              <p className="font-sans text-xs font-semibold uppercase tracking-widest text-ochre">
                Direct line
              </p>
              <p className="mt-2 font-sans text-slate">
                Urgent fire-season scheduling:{' '}
                <a
                  href="tel:+15550100000"
                  className="text-forest font-semibold hover:text-ochre"
                >
                  (555) 010-0000
                </a>
              </p>
            </div>
          </aside>
        </div>
      </section>
    </>
  )
}
