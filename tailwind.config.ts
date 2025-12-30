
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
				background: "#050505", // Void Black
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
				}
			},
			keyframes: {
				"glitch-anim-1": {
					"0%": { clipPath: "polygon(0 2%, 100% 2%, 100% 5%, 0 5%)", transform: "translate(0)" },
					"20%": { clipPath: "polygon(0 15%, 100% 15%, 100% 15%, 0 15%)", transform: "translate(-2px, 2px)" },
					"40%": { clipPath: "polygon(0 10%, 100% 10%, 100% 20%, 0 20%)", transform: "translate(-2px, -2px)" },
					"60%": { clipPath: "polygon(0 1%, 100% 1%, 100% 2%, 0 2%)", transform: "translate(2px, 2px)" },
					"80%": { clipPath: "polygon(0 33%, 100% 33%, 100% 33%, 0 33%)", transform: "translate(2px, -2px)" },
					"100%": { clipPath: "polygon(0 2%, 100% 2%, 100% 5%, 0 5%)", transform: "translate(0)" },
				},
				"glitch-anim-2": {
					"0%": { clipPath: "polygon(0 25%, 100% 25%, 100% 30%, 0 30%)", transform: "translate(0)" },
					"20%": { clipPath: "polygon(0 10%, 100% 10%, 100% 15%, 0 15%)", transform: "translate(2px, -2px)" },
					"40%": { clipPath: "polygon(0 20%, 100% 20%, 100% 25%, 0 25%)", transform: "translate(-2px, 2px)" },
					"60%": { clipPath: "polygon(0 50%, 100% 50%, 100% 55%, 0 55%)", transform: "translate(2px, 2px)" },
					"80%": { clipPath: "polygon(0 60%, 100% 60%, 100% 65%, 0 65%)", transform: "translate(-2px, -2px)" },
					"100%": { clipPath: "polygon(0 25%, 100% 25%, 100% 30%, 0 30%)", transform: "translate(0)" },
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
				"glitch-1": "glitch-anim-1 2.5s infinite linear alternate-reverse",
				"glitch-2": "glitch-anim-2 3s infinite linear alternate-reverse",
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
