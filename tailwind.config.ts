
import type { Config } from 'tailwindcss';
import animate from 'tailwindcss-animate';

const config: Config = {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
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
				display: ['"Playfair Display"', 'serif'],
				sans: ['"Inter"', 'sans-serif'],
			},
			colors: {
				border: "hsl(var(--border))",
				input: "hsl(var(--input))",
				ring: "hsl(var(--ring))",
				background: "#FFFFFF",
				foreground: "#2C3E2F",
				primary: {
					DEFAULT: "#40513B", // Dark Forest Green
					foreground: "#FFFFFF",
					light: "#628141",
					dark: "#2C3E2F",
				},
				secondary: {
					DEFAULT: "#E67E22", // Warm Orange
					foreground: "#FFFFFF",
					light: "#F39C12",
					dark: "#CA6F1E",
				},
				accent: {
					DEFAULT: "#628141", // Olive Green
					foreground: "#FFFFFF",
				},
				cream: {
					DEFAULT: "#E5D9B6",
					light: "#F2EDD7",
					dark: "#D4C5A0",
				},
				brown: {
					DEFAULT: "#40513B",
					light: "#628141",
					dark: "#2C3E2F",
				},
			},
			keyframes: {
				"fade-in": {
					"0%": { opacity: "0" },
					"100%": { opacity: "1" },
				},
				"fade-up": {
					"0%": { opacity: "0", transform: "translateY(20px)" },
					"100%": { opacity: "1", transform: "translateY(0)" },
				},
				"gentle-float": {
					"0%, 100%": { transform: "translateY(0)" },
					"50%": { transform: "translateY(-8px)" },
				},
				"scale-in": {
					"0%": { opacity: "0", transform: "scale(0.95)" },
					"100%": { opacity: "1", transform: "scale(1)" },
				},
			},
			animation: {
				"fade-in": "fade-in 0.6s ease-out",
				"fade-up": "fade-up 0.6s ease-out",
				"gentle-float": "gentle-float 3s ease-in-out infinite",
				"scale-in": "scale-in 0.4s ease-out",
			},
			backgroundImage: {
				'hero-gradient': "linear-gradient(135deg, #40513B 0%, #628141 100%)",
				'organic-pattern': "radial-gradient(circle at 20% 50%, rgba(64, 81, 59, 0.08) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(230, 126, 34, 0.06) 0%, transparent 50%)",
				'accent-gradient': "linear-gradient(135deg, #628141 0%, #40513B 100%)",
				'warm-gradient': "linear-gradient(135deg, #E67E22 0%, #CA6F1E 100%)",
			},
			boxShadow: {
				'soft': '0 2px 15px rgba(0, 0, 0, 0.08)',
				'card': '0 4px 20px rgba(0, 0, 0, 0.1)',
				'hover': '0 8px 30px rgba(0, 0, 0, 0.12)',
			},
		},
	},
	plugins: [animate],
};

export default config;
