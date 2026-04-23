const overgrownBrush = Array.from({ length: 90 }, (_, i) => ({
  cx: (i * 53) % 1600,
  cy: 120 + ((i * 97) % 600),
  r: 14 + ((i * 7) % 22),
  fill: i % 3 === 0 ? '#3F2A15' : i % 3 === 1 ? '#6B3E19' : '#2D5A3D',
}))

const clearedStubble = Array.from({ length: 140 }, (_, i) => ({
  x: (i * 41) % 1600,
  y: 500 + ((i * 29) % 300),
  w: 2,
  h: 3 + ((i * 5) % 5),
}))

export default function BrushPlotSVG({ state = 'before', className = '' }) {
  const isBefore = state === 'before'
  return (
    <svg
      viewBox="0 0 1600 900"
      preserveAspectRatio="xMidYMid slice"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id={`sky-${state}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#FEFAE0" />
          <stop offset="100%" stopColor="#F2D8A7" />
        </linearGradient>
        <linearGradient id={`ground-${state}`} x1="0" y1="0" x2="0" y2="1">
          <stop
            offset="0%"
            stopColor={isBefore ? '#8A4E18' : '#D9A55C'}
          />
          <stop
            offset="100%"
            stopColor={isBefore ? '#4A2A0F' : '#A66E33'}
          />
        </linearGradient>
      </defs>

      <rect width="1600" height="480" fill={`url(#sky-${state})`} />
      <rect y="440" width="1600" height="460" fill={`url(#ground-${state})`} />

      {isBefore ? (
        <g opacity="0.9">
          {overgrownBrush.map((b, i) => (
            <circle
              key={i}
              cx={b.cx}
              cy={b.cy + 340}
              r={b.r}
              fill={b.fill}
            />
          ))}
          {[120, 380, 720, 1040, 1360].map((x, i) => (
            <g key={`tree-${i}`} transform={`translate(${x}, 500)`}>
              <polygon points="0,0 -40,120 40,120" fill="#1B4332" />
              <polygon
                points="0,40 -50,180 50,180"
                fill="#1B4332"
                opacity="0.9"
              />
              <rect x="-6" y="178" width="12" height="20" fill="#2D1A08" />
            </g>
          ))}
        </g>
      ) : (
        <g>
          {clearedStubble.map((s, i) => (
            <rect
              key={i}
              x={s.x}
              y={s.y}
              width={s.w}
              height={s.h}
              fill="#8A6A2F"
              opacity="0.5"
            />
          ))}
          {[260, 820, 1280].map((x, i) => (
            <g key={`stump-${i}`} transform={`translate(${x}, 720)`}>
              <ellipse cx="0" cy="0" rx="24" ry="8" fill="#6B4A1E" />
              <rect x="-22" y="-14" width="44" height="14" fill="#8A5A26" />
            </g>
          ))}
          <g fill="#FEFAE0">
            {[
              [360, 700],
              [400, 710],
              [440, 702],
              [960, 690],
              [1000, 698],
            ].map(([x, y], i) => (
              <g key={`goat-${i}`} transform={`translate(${x}, ${y})`}>
                <ellipse cx="0" cy="0" rx="14" ry="8" />
                <circle cx="12" cy="-4" r="5" />
                <rect x="-8" y="6" width="2" height="7" fill="#2B2D42" />
                <rect x="5" y="6" width="2" height="7" fill="#2B2D42" />
              </g>
            ))}
          </g>
        </g>
      )}
    </svg>
  )
}
