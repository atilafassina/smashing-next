import { DATA, getCSP, SELF, UNSAFE_EVAL, UNSAFE_INLINE } from 'csp-header'

const sitePreset = {
  'default-src': [SELF],
  'script-src':
    process.env.NODE_ENV === 'development'
      ? [UNSAFE_EVAL, UNSAFE_INLINE, SELF]
      : [SELF],
  'connect-src': [SELF, 'https://vitals.vercel-insights.com'],
  'style-src': [UNSAFE_INLINE, SELF],
  'font-src': [SELF],
  'object-src': [SELF],
  'img-src': ['*', DATA],
  'frame-ancestors': [SELF],
  'child-src': [SELF],
  'frame-src': [SELF],
  'base-uri': [SELF],
  'form-action': [SELF],
}

export const csp = getCSP({
  presets: [sitePreset],
})
