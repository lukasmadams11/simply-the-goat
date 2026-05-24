import { Link } from 'react-router-dom'

const base =
  'inline-flex items-center justify-center gap-2 px-7 py-3 font-sans text-sm font-semibold uppercase tracking-widest transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-cream focus-visible:ring-ochre'

const variants = {
  primary: 'bg-forest text-cream hover:bg-forest/90',
  secondary:
    'border-2 border-ochre text-ochre bg-cream/50 backdrop-blur-sm hover:bg-ochre hover:text-cream hover:[text-shadow:none] hover:[-webkit-text-stroke:0_transparent] [text-shadow:0_1px_3px_rgba(254,250,224,0.95)] [-webkit-text-stroke:0.5px_rgba(0,0,0,0.45)] [paint-order:stroke_fill]',
  ghost: 'text-forest hover:text-ochre',
}

export default function Button({
  as,
  to,
  href,
  variant = 'primary',
  className = '',
  children,
  ...rest
}) {
  const classes = `${base} ${variants[variant]} ${className}`.trim()

  if (to) {
    return (
      <Link to={to} className={classes} {...rest}>
        {children}
      </Link>
    )
  }
  if (href) {
    return (
      <a href={href} className={classes} {...rest}>
        {children}
      </a>
    )
  }
  const Tag = as ?? 'button'
  return (
    <Tag className={classes} {...rest}>
      {children}
    </Tag>
  )
}
