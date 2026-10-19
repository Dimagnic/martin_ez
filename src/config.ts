export const SITE = {
  name: 'Martín EZ',
  phone: '522224382362',
  phoneLabel: '+52 222 438 2362',
  instagram: 'https://www.instagram.com/martinezbohem',
  youtube: 'https://www.youtube.com/@martinezbohem',
  agencyUrl: 'https://cero-new-generation-e19z.vercel.app/',
} as const;

export const waLink = (text = 'Hola Martín, me interesa contratarte para un evento.'): string =>
  `https://wa.me/${SITE.phone}?text=${encodeURIComponent(text)}`;
