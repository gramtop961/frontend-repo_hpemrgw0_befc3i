import { Helmet } from 'react-helmet'

export default function SEO({ title = 'BlueCare Hospital', description = 'A modern, patient-first hospital & healthcare center providing comprehensive care.', url = 'https://example.com' }) {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta name="theme-color" content="#0b1220" />
    </Helmet>
  )
}
