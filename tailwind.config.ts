import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        display: ['"Fraunces"', 'Georgia', 'serif'],
        serif:   ['"Cormorant Garamond"', 'Georgia', 'serif'],
        quote:   ['"Lora"', 'Georgia', 'serif'],
        sans:    ['"DM Sans"', 'system-ui', 'sans-serif'],
      },
      colors: {
        border: "#9E8EB3",
        input: "#D9D9D9",
        ring: "#3D3B63",
        background: "#E8E3F7",
        foreground: "#070546",
        primary: {
          DEFAULT: "#070546",
          foreground: "#E8E3F7",
        },
        secondary: {
          DEFAULT: "#D9D9D9",
          foreground: "#3D3B63",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "#D9D9D9",
          foreground: "#3D3B63",
        },
        accent: {
          DEFAULT: "#9E8EB3",
          foreground: "#070546",
        },
        popover: {
          DEFAULT: "#E8E3F7",
          foreground: "#070546",
        },
        card: {
          DEFAULT: "#E8E3F7",
          foreground: "#070546",
        },
        sage: {
          DEFAULT: "#9E8EB3",
          light: "#D9D9D9",
          dark: "#3D3B63",
        },
        cream: {
          DEFAULT: "#E8E3F7",
          warm: "#D9D9D9",
        },
        clay: {
          DEFAULT: "#D9D9D9",
          dark: "#9E8EB3",
        },
        fog: "#D9D9D9",
        earth: {
          DEFAULT: "#070546",
          light: "#3D3B63",
        },
        earthy: {
          rust: "#9E8EB3",
          forest: "#3D3B63",
          ochre: "#9E8EB3",
          clay: "#D9D9D9",
          sun: "#E8E3F7",
        },
        amber: {
          50: "#E8E3F7",
          100: "#E8E3F7",
          200: "#D9D9D9",
          300: "#D9D9D9",
          400: "#9E8EB3",
          500: "#9E8EB3",
          600: "#9E8EB3",
          700: "#3D3B63",
          800: "#3D3B63",
          900: "#070546",
          950: "#070546",
        },
        sidebar: {
          DEFAULT: "#E8E3F7",
          foreground: "#070546",
          primary: "#070546",
          "primary-foreground": "#E8E3F7",
          accent: "#D9D9D9",
          "accent-foreground": "#070546",
          border: "#9E8EB3",
          ring: "#3D3B63",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "blur-in": {
          "0%": { opacity: "0", filter: "blur(20px)" },
          "100%": { opacity: "1", filter: "blur(0px)" },
        },
        "breathe": {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.02)" },
        },
        "float": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-up": "fade-up 0.8s ease-out forwards",
        "fade-in": "fade-in 0.6s ease-out forwards",
        "blur-in": "blur-in 1.2s ease-out forwards",
        "breathe": "breathe 6s ease-in-out infinite",
        "float": "float 6s ease-in-out infinite",
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    plugin(function ({ addBase, theme }) {
      addBase({
        "h1, h2, h3, h4, h5, h6": {
          transition: "color 0.4s ease-out, transform 0.4s ease-out",
          "&:hover": {
            color: theme("colors.earthy.rust"),
            transform: "translateY(-2px)",
          },
        },
      });
    }),
  ],
} satisfies Config;
