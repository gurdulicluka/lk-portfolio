/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'main-bg':'#E4E4E4'
			},
			fontFamily: {
				poppins: ["Poppins", "sans-serif"],
				braille: ["Braille", "sans-serif"],
			  },
		},
	},
	plugins: [],
}
