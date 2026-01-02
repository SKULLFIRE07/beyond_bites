
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
				display: ['"Syne"', 'sans-serif'],
				mono: ['"Space Mono"', 'monospace'],
				sans: ['"Outfit"', 'sans-serif'],
			},
			colors: {
				border: "hsl(var(--border))",
				input: "hsl(var(--input))",
				ring: "hsl(var(--ring))",
				background: "#120d08", // Deep Jaggery/Coffee Black
				foreground: "#f0f0f0", // Off-white
				primary: {
					DEFAULT: "#ccff00", // Neon Lime
					foreground: "#000000",
				},
				secondary: {
					DEFAULT: "#7f00ff", // Electric Purple
					foreground: "#ffffff",
				},
				accent: {
					DEFAULT: "#ff0099", // Hot Pink
					foreground: "#ffffff",
				},
				neon: {
					lime: "#ccff00",
					purple: "#7f00ff",
					pink: "#ff0099",
					cyan: "#00ffff",
					gold: "#ffcc00",
					orange: "#ff6600",
				}
			},
			keyframes: {
				"pulse-slow": {
					"0%, 100%": { opacity: "0.4", transform: "scale(1)" },
					"50%": { opacity: "0.8", transform: "scale(1.05)" },
				},
				"float-organic": {
					"0%, 100%": { transform: "translate(0, 0) rotate(0deg)" },
					"33%": { transform: "translate(10px, -10px) rotate(2deg)" },
					"66%": { transform: "translate(-5px, 15px) rotate(-1deg)" },
				},
				"marquee": {
					from: { transform: "translateX(0)" },
					to: { transform: "translateX(-100%)" },
				},
				"float-fast": {
					"0%, 100%": { transform: "translateY(0)" },
					"50%": { transform: "translateY(-10px)" },
				}
			},
			animation: {
				"pulse-slow": "pulse-slow 4s ease-in-out infinite",
				"float-organic": "float-organic 10s ease-in-out infinite",
				"marquee": "marquee 20s linear infinite",
				"float-fast": "float-fast 2s ease-in-out infinite",
				"spin-slow": "spin 8s linear infinite",
			},
			backgroundImage: {
				'noise': "url('https://grainy-gradients.vercel.app/noise.svg')",
				'grid-pattern': "linear-gradient(to right, #1a1a1a 1px, transparent 1px), linear-gradient(to bottom, #1a1a1a 1px, transparent 1px)",
			}
		},
	},
	plugins: [animate],
};

export default config;
