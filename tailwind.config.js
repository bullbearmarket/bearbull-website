/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Institutional Dark
        brand: {
          dark: "#0a0a0f",
          gray: "#64748b",
          lightGray: "#f8f9fa",
          border: "#e2e8f0",
        },
        // Premium Accents
        neon: {
          DEFAULT: "#00ff88",
          dark: "#00cc6d",
          glow: "rgba(0, 255, 136, 0.4)",
        },
        gold: {
          DEFAULT: "#ffd700",
          dark: "#b8860b",
          glow: "rgba(255, 215, 0, 0.3)",
        },
        // Semantic Colors
        background: "#ffffff",
        surface: "#fcfcfd",
      },
      fontFamily: {
        sans: [
          '"Inter"',
          'system-ui',
          '-apple-system',
          'sans-serif',
        ],
      },
      boxShadow: {
        'premium-sm': '0 2px 4px rgba(0,0,0,0.02), 0 1px 2px rgba(0,0,0,0.03)',
        'premium-md': '0 4px 20px -2px rgba(0,0,0,0.05), 0 2px 10px -1px rgba(0,0,0,0.03)',
        'premium-lg': '0 20px 40px -12px rgba(0,0,0,0.08), 0 10px 20px -5px rgba(0,0,0,0.04)',
        'premium-xl': '0 32px 64px -16px rgba(0,0,0,0.12)',
        'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.04)',
        'neon-glow': '0 0 20px rgba(0, 255, 136, 0.25)',
      },
      borderRadius: {
        '2xl': '1.25rem',
        '3xl': '1.75rem',
        '4xl': '2.5rem',
        '5xl': '4rem',
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '30': '7.5rem',
      },
      letterSpacing: {
        'tighter': '-0.04em',
        'tight': '-0.02em',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'slow-spin': 'spin 12s linear infinite',
        'subtle-pulse': 'subtle-pulse 4s ease-in-out infinite',
        'marquee': 'marquee 40s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'subtle-pulse': {
          '0%, 100%': { opacity: 1, transform: 'scale(1)' },
          '50%': { opacity: 0.85, transform: 'scale(0.98)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        }
      }
    },
  },
  plugins: [],
}
