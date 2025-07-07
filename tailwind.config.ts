import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
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
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "#2A9D8F", // Forest Green - header, nav, main buttons
          foreground: "#FFFFFF",
        },
        secondary: {
          DEFAULT: "#E76F51", // Rich Terracotta - secondary buttons, accent icons
          foreground: "#FFFFFF",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        // Natural & Modern Color Palette
        forest: {
          DEFAULT: "#2A9D8F", // Forest Green - main brand color
          dark: "#238B7A", // Darker shade for hover states
          light: "#3FB3A3", // Lighter shade if needed
        },
        terracotta: {
          DEFAULT: "#E76F51", // Rich Terracotta - accent color
          dark: "#D85A3F", // Darker shade for hover states
          light: "#EB8269", // Lighter shade if needed
        },
        sage: {
          DEFAULT: "#A8C686", // Soft Sage - decorative elements
          dark: "#96B574", // Darker shade for hover states
          light: "#B8D196", // Lighter shade if needed
        },
        beige: {
          DEFAULT: "#F4E1D2", // Creamy Beige - main background
          dark: "#F0D7C4", // Slightly darker for subtle variations
          light: "#F8E9DC", // Lighter shade if needed
        },
        charcoal: {
          DEFAULT: "#264653", // Deep Charcoal - main text color
          light: "#3A5A68", // Lighter shade for secondary text
          dark: "#1A3238", // Darker shade if needed
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
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config
