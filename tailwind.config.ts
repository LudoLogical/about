import { type Config } from 'tailwindcss';
import defaultTheme from 'tailwindcss/defaultTheme';
import daisyui from 'daisyui';

export default {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-mulish)', ...defaultTheme.fontFamily.sans]
      }
    },
    screens: {
      xxs: '450px',
      xs: '520px',
      ...defaultTheme.screens
    }
  },
  plugins: [daisyui],
  daisyui: {
    themes: [
      {
        ludo: {
          primary: '#FFEF14',
          secondary: '#0569F3',
          accent: '#8AE9C1',
          neutral: '#191D24',
          'base-100': '#2A303C',
          info: '#3ABFF8',
          success: '#36D399',
          warning: '#FBDD23',
          error: '#F87272'
        }
      }
    ]
  }
} satisfies Config;
