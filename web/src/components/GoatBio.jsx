const palettes = {
  a: { bg: '#BC6C25', ear: '#8A4E18', face: '#FEFAE0' },
  b: { bg: '#2D5A3D', ear: '#1B4332', face: '#FEFAE0' },
  c: { bg: '#2B2D42', ear: '#1B1C2A', face: '#FEFAE0' },
}

function GoatPortrait({ palette }) {
  const p = palettes[palette] ?? palettes.a
  return (
    <svg
      viewBox="0 0 200 200"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className="w-full h-full"
    >
      <rect width="200" height="200" fill={p.bg} />
      <ellipse cx="100" cy="210" rx="110" ry="60" fill={p.ear} opacity="0.4" />
      <ellipse cx="70" cy="85" rx="14" ry="28" fill={p.ear} />
      <ellipse cx="130" cy="85" rx="14" ry="28" fill={p.ear} />
      <ellipse cx="100" cy="120" rx="46" ry="52" fill={p.face} />
      <ellipse cx="85" cy="115" rx="4" ry="6" fill="#2B2D42" />
      <ellipse cx="115" cy="115" rx="4" ry="6" fill="#2B2D42" />
      <ellipse cx="100" cy="148" rx="10" ry="6" fill="#BC6C25" />
      <path
        d="M70 70 Q60 40 80 45"
        stroke="#2B2D42"
        strokeWidth="3"
        fill="none"
      />
      <path
        d="M130 70 Q140 40 120 45"
        stroke="#2B2D42"
        strokeWidth="3"
        fill="none"
      />
    </svg>
  )
}

export default function GoatBio({ name, role, body, palette = 'a' }) {
  return (
    <article className="bg-cream border border-forest/10 overflow-hidden flex flex-col">
      <div className="aspect-square w-full">
        <GoatPortrait palette={palette} />
      </div>
      <div className="p-6">
        <p className="font-sans text-xs uppercase tracking-widest text-ochre">
          {role}
        </p>
        <h3 className="mt-2 font-serif text-2xl text-forest">{name}</h3>
        <p className="mt-3 font-sans text-sm text-slate/80 leading-relaxed">
          {body}
        </p>
      </div>
    </article>
  )
}
