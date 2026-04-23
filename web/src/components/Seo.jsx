import { Helmet } from 'react-helmet-async'

const SITE = 'Simply the GOAT'
const DEFAULT_DESCRIPTION =
  'Professional wildfire mitigation through targeted, heartfelt goat grazing. Defensible space, fuel load reduction, and ecological restoration across residential and community parcels.'

export default function Seo({ title, description, path = '/' }) {
  const fullTitle = title ? `${title} — ${SITE}` : SITE
  const desc = description ?? DEFAULT_DESCRIPTION

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={desc} />
      <link rel="canonical" href={`https://simplythegoat.com${path}`} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={SITE} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={desc} />
      <meta property="og:url" content={`https://simplythegoat.com${path}`} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={desc} />
    </Helmet>
  )
}
