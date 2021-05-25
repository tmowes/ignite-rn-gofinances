export const dark = {
  colors: {
    background: '#2b2735',
    backgroundColor: '#15161E',
    inputs: '#211e29',
    black: '#27242e',
    shape: '#59689C',

    primary: '#157DFA',

    secondary: '#FF872C',
    secondaryAlpha: '#FF872C4D',

    success: '#12A454',
    successAlpha: '#12A45480',

    error: '#E83F5B',
    errorAlpha: '#E83F5B80',

    whiteIsh: '#F4EDE8',
    white: '#FFFFFF',

    transparent: 'transparent',

    title: '#363f5f',
    text: '#969cb2',

    toasts: {
      info: {
        color: '#3172b7',
        background: '#ebf8ff',
      },
      success: {
        color: '#2e656a',
        background: '#e6fffa',
      },
      error: {
        color: '#c53030',
        background: '#fddede',
      },
      warning: {
        color: '#FF9000',
        background: '#f0f0cd',
      },
    },
  },
  fonts: {
    regular: 'Poppins_400Regular',
    medium: 'Poppins_500Medium',
    bold: 'Poppins_700Bold',
  },
  radii: {
    default: '0.8rem',
  },
} as const
