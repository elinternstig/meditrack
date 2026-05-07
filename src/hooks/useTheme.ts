import { useColorScheme } from 'react-native';
import { Theme } from '../constants/theme';

export function useTheme() {
  const scheme = useColorScheme();

  const current = scheme === 'dark' ? Theme.dark : Theme.light;

  return {
    ...current,
    spacing: Theme.spacing,
    fonts: Theme.fonts,
    isDark: scheme === 'dark',
  };
}