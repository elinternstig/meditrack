import { Platform } from 'react-native';

export const Theme = {
  light: {
    colors: {
      background: '#f5f5f5',
      textPrimary: '#000000',
      textSecondary: '#646464',
      primaryAccent: '#408A71',
    },
  },
  dark: {
    colors: {
      background: '#000000',
      textPrimary: '#f5f5f5',
      textSecondary: '#646464',
      primaryAccent: '#9DD6B0',
    },
  },
  
  spacing: {
    xs: 4,
    sm: 8,
    md: 16,
    lg: 24,
    xl: 32,
  },

  fonts: Platform.select({
    ios:{
      sans: 'system-ui',
      serif: 'ui-serif',
      mono: 'ui-monospace',
    },
    android: {
      sans: 'normal',
      serif: 'serif',
      mono: 'monospace',
    },
    default: {},
  }),
} as const;