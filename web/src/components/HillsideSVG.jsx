export default function HillsideSVG({ className = '' }) {
  return (
    <svg
      viewBox="0 0 1600 900"
      preserveAspectRatio="xMidYMid slice"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#FEFAE0" />
          <stop offset="70%" stopColor="#F2D8A7" />
          <stop offset="100%" stopColor="#E9B86F" />
        </linearGradient>
        <linearGradient id="farHill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#C4894A" />
          <stop offset="100%" stopColor="#A66E33" />
        </linearGradient>
        <linearGradient id="midHill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#BC6C25" />
          <stop offset="100%" stopColor="#8A4E18" />
        </linearGradient>
        <linearGradient id="nearHill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#2D5A3D" />
          <stop offset="100%" stopColor="#1B4332" />
        </linearGradient>
      </defs>

      <rect width="1600" height="900" fill="url(#sky)" />

      <circle cx="1280" cy="260" r="70" fill="#FEFAE0" opacity="0.85" />

      <path
        d="M0,520 C 260,470 480,520 720,500 C 960,480 1220,520 1600,490 L 1600,900 L 0,900 Z"
        fill="url(#farHill)"
      />

      <g opacity="0.75">
        {[180, 320, 520, 780, 1040, 1280, 1460].map((x, i) => (
          <polygon
            key={i}
            points={`${x},520 ${x - 14},560 ${x + 14},560`}
            fill="#7A4A1C"
          />
        ))}
      </g>

      <path
        d="M0,620 C 200,570 420,640 680,610 C 920,585 1160,640 1600,600 L 1600,900 L 0,900 Z"
        fill="url(#midHill)"
      />

      <path
        d="M0,760 C 220,720 480,780 760,750 C 1040,720 1280,790 1600,750 L 1600,900 L 0,900 Z"
        fill="url(#nearHill)"
      />

      <g fill="#1B4332">
        {[
          [80, 740],
          [260, 720],
          [440, 745],
          [640, 725],
          [880, 748],
          [1100, 725],
          [1320, 745],
          [1520, 728],
        ].map(([x, y], i) => (
          <g key={i} transform={`translate(${x}, ${y})`}>
            <polygon points="0,0 -18,40 18,40" />
            <rect x="-3" y="38" width="6" height="10" />
          </g>
        ))}
      </g>

      <g fill="#FEFAE0" opacity="0.95">
        {[
          [520, 700],
          [560, 710],
          [600, 702],
          [900, 730],
          [940, 735],
        ].map(([x, y], i) => (
          <g key={i} transform={`translate(${x}, ${y})`}>
            <ellipse cx="0" cy="0" rx="10" ry="6" />
            <circle cx="9" cy="-3" r="4" />
            <rect x="-6" y="4" width="2" height="5" fill="#2B2D42" />
            <rect x="4" y="4" width="2" height="5" fill="#2B2D42" />
          </g>
        ))}
      </g>
    </svg>
  )
}
