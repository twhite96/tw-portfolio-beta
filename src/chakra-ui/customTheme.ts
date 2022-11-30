import { extendTheme, ThemeConfig } from '@chakra-ui/react'

const config: Partial<ThemeConfig> = {
  initialColorMode: 'light',
  useSystemColorMode: false,
}

const borderRadius = {
  radii: {
    none: '0',
    sm: '0.125rem',
    base: '0.25rem',
    md: '0.375rem',
    lg: '0.5rem',
    xl: '0.75rem',
    '2xl': '1rem',
    '3xl': '1.5rem',
    full: '9999px',
  },
}

const fontStyles = {
  fonts: {
    heading: `'Montserrat', sans-serif`,
    body: `'Roboto Mono', monospace`,
  }
}

const customTheme = extendTheme({ config, ...borderRadius, ...fontStyles })

export default customTheme