import { extendTheme } from '@mui/joy/styles';

export const theme = extendTheme({
  colorSchemes: {
    light: {
      palette: {
        primary: {
          50: '#fff7ed',
          100: '#ffedd5',
          200: '#fed7aa',
          300: '#fdba74',
          400: '#fb923c',
          500: '#f97316',
          600: '#ea580c',
          700: '#c2410c',
          800: '#9a3412',
          900: '#7c2d12',
          solidBg: 'var(--joy-palette-primary-400)',
          solidActiveBg: 'var(--joy-palette-primary-500)',
          outlinedBorder: 'var(--joy-palette-primary-500)',
          outlinedColor: 'var(--joy-palette-primary-700)',
          outlinedActiveBg: 'var(--joy-palette-primary-100)',
          softColor: 'var(--joy-palette-primary-800)',
          softBg: 'var(--joy-palette-primary-200)',
          softActiveBg: 'var(--joy-palette-primary-300)',
          plainColor: 'var(--joy-palette-primary-700)',
          plainActiveBg: 'var(--joy-palette-primary-100)',
        },
      },
    },
    dark: {
      palette: {
        primary: {
          50: '#fff7ed',
          100: '#ffedd5',
          200: '#fed7aa',
          300: '#fdba74',
          400: '#fb923c',
          500: '#f97316',
          600: '#ea580c',
          700: '#c2410c',
          800: '#9a3412',
          900: '#7c2d12',
          solidBg: 'var(--joy-palette-primary-400)',
          solidActiveBg: 'var(--joy-palette-primary-500)',
          outlinedBorder: 'var(--joy-palette-primary-700)',
          outlinedColor: 'var(--joy-palette-primary-600)',
          outlinedActiveBg: 'var(--joy-palette-primary-900)',
          softColor: 'var(--joy-palette-primary-500)',
          softBg: 'var(--joy-palette-primary-900)',
          softActiveBg: 'var(--joy-palette-primary-800)',
          plainColor: 'var(--joy-palette-primary-500)',
          plainActiveBg: 'var(--joy-palette-primary-900)',
        },
      },
    },
  },
});
