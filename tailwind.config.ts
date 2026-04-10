import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        rippro: {
          light: '#FBFBFA',
          'light-accent': '#E4B737',
          brand: '#36CCD7',
          'dark-accent': '#B35E6A',
          dark: '#29487F'
        }
      },
      fontFamily: {
        serif: ['Crimson Text', 'serif'],
        mono: ['JetBrains Mono', 'monospace'],
        display: ['Playfair Display', 'serif']
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out',
        'slide-up': 'slideUp 0.8s ease-out',
        float: 'float 6s ease-in-out infinite'
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' }
        }
      }
    }
  },
  plugins: []
};

export default config;
