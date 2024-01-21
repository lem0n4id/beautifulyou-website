/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				josefin: "Josefin Sans, sans-serif",
				playfair: "Playfair Display, sans-serif",
			},
		},
	},
	plugins: [],
}
