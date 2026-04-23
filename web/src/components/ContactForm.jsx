import { useState } from 'react'
import { Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react'

const ENDPOINT = import.meta.env.VITE_FORMSPREE_ENDPOINT

const vegetationOptions = [
  { value: '', label: 'Select vegetation type' },
  { value: 'grass', label: 'Seasonal grass' },
  { value: 'brush', label: 'Mixed brush' },
  { value: 'mixed', label: 'Grass + brush mixed' },
  { value: 'chaparral', label: 'Heavy chaparral' },
]

const slopeOptions = [
  { value: '', label: 'Select slope' },
  { value: 'flat', label: 'Flat (<10°)' },
  { value: 'moderate', label: 'Moderate (10–30°)' },
  { value: 'steep', label: 'Steep (>30°)' },
]

const initialState = {
  name: '',
  email: '',
  phone: '',
  address: '',
  acreage: '',
  vegetation: '',
  slope: '',
  notes: '',
}

const inputClass =
  'w-full px-4 py-3 bg-cream border border-forest/15 font-sans text-sm text-slate placeholder:text-slate/40 focus:outline-none focus:border-ochre focus:ring-1 focus:ring-ochre'

const labelClass =
  'block font-sans text-xs font-semibold uppercase tracking-widest text-forest mb-2'

export default function ContactForm() {
  const [values, setValues] = useState(initialState)
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState(null)

  const update = (field) => (e) =>
    setValues((v) => ({ ...v, [field]: e.target.value }))

  const onSubmit = async (e) => {
    e.preventDefault()
    setSubmitting(true)
    setError(null)

    try {
      if (ENDPOINT) {
        const res = await fetch(ENDPOINT, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify(values),
        })
        if (!res.ok) {
          throw new Error(
            `Our form service responded with an error (${res.status}). Please try again or call us directly.`
          )
        }
      } else if (import.meta.env.PROD) {
        throw new Error(
          'The contact form is not fully configured yet. Please call us directly while we finish setup.'
        )
      }
      setSubmitted(true)
    } catch (err) {
      setError(err.message ?? 'Something went wrong. Please try again.')
    } finally {
      setSubmitting(false)
    }
  }

  if (submitted) {
    return (
      <div className="border border-forest/15 p-10 text-center flex flex-col items-center">
        <CheckCircle2 size={32} className="text-ochre" aria-hidden="true" />
        <h3 className="mt-4 font-serif text-2xl text-forest">
          Request received.
        </h3>
        <p className="mt-3 font-sans text-slate/80 max-w-md leading-relaxed">
          We’ll review your parcel details and respond within two business days
          with a scoped deployment plan.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5">
      <div className="grid md:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className={labelClass}>
            Name
          </label>
          <input
            id="name"
            type="text"
            required
            value={values.name}
            onChange={update('name')}
            className={inputClass}
            placeholder="Jane Doe"
          />
        </div>
        <div>
          <label htmlFor="email" className={labelClass}>
            Email
          </label>
          <input
            id="email"
            type="email"
            required
            value={values.email}
            onChange={update('email')}
            className={inputClass}
            placeholder="you@example.com"
          />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-5">
        <div>
          <label htmlFor="phone" className={labelClass}>
            Phone
          </label>
          <input
            id="phone"
            type="tel"
            value={values.phone}
            onChange={update('phone')}
            className={inputClass}
            placeholder="(555) 123-4567"
          />
        </div>
        <div>
          <label htmlFor="address" className={labelClass}>
            Property Address
          </label>
          <input
            id="address"
            type="text"
            required
            value={values.address}
            onChange={update('address')}
            className={inputClass}
            placeholder="Street, City, State"
          />
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-5">
        <div>
          <label htmlFor="acreage" className={labelClass}>
            Acreage
          </label>
          <input
            id="acreage"
            type="number"
            min="0"
            step="0.1"
            required
            value={values.acreage}
            onChange={update('acreage')}
            className={inputClass}
            placeholder="e.g. 2.5"
          />
        </div>
        <div>
          <label htmlFor="vegetation" className={labelClass}>
            Vegetation Type
          </label>
          <select
            id="vegetation"
            required
            value={values.vegetation}
            onChange={update('vegetation')}
            className={inputClass}
          >
            {vegetationOptions.map((o) => (
              <option key={o.value} value={o.value} disabled={o.value === ''}>
                {o.label}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="slope" className={labelClass}>
            Slope
          </label>
          <select
            id="slope"
            required
            value={values.slope}
            onChange={update('slope')}
            className={inputClass}
          >
            {slopeOptions.map((o) => (
              <option key={o.value} value={o.value} disabled={o.value === ''}>
                {o.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="notes" className={labelClass}>
          Notes
        </label>
        <textarea
          id="notes"
          rows="4"
          value={values.notes}
          onChange={update('notes')}
          className={inputClass}
          placeholder="Timing constraints, access details, neighboring parcels, etc."
        />
      </div>

      {error && (
        <div
          role="alert"
          aria-live="polite"
          className="flex gap-3 border border-ochre/40 bg-ochre/5 text-ochre px-4 py-3 font-sans text-sm"
        >
          <AlertCircle size={18} className="shrink-0 mt-0.5" aria-hidden="true" />
          <p>{error}</p>
        </div>
      )}

      <button
        type="submit"
        disabled={submitting}
        className="inline-flex items-center gap-2 bg-forest text-cream px-7 py-3 font-sans text-sm font-semibold uppercase tracking-widest hover:bg-forest/90 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-ochre focus-visible:ring-offset-2 focus-visible:ring-offset-cream disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {submitting ? (
          <>
            Sending
            <Loader2 size={16} className="animate-spin" aria-hidden="true" />
          </>
        ) : (
          <>
            Submit Request <Send size={16} aria-hidden="true" />
          </>
        )}
      </button>
    </form>
  )
}
