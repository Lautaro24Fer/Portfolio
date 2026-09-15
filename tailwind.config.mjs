/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui"
import defaultTheme from "tailwindcss/defaultTheme"

export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				// Single source of truth for the site's accent.
				// DEFAULT keeps the original flat magenta (badges, background glow);
				// from/to are the ends of the violet -> magenta gradient used on accents.
				brand: {
					DEFAULT: "#e81cff",
					from: "#7c3aed",
					to: "#e81cff",
				},
			},
			fontFamily: {
				mono: ['"JetBrains Mono"', ...defaultTheme.fontFamily.mono],
			},
		},
	},
	plugins: [daisyui],
}
