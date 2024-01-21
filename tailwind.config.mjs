/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				"josefin": ["Josefin Sans", ...defaultTheme.fontFamily.sans],
				"playfair": ["Playfair Display", ...defaultTheme.fontFamily.sans],
			},
		},
	},
	plugins: [],
}
