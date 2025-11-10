/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				rose: '#AB7D77',
				rose2: '#C2A797',
				brun: '#9B7760',
				noir: '#272626',
				ivoire: '#F7F6F4',
			},
			fontFamily: {
				title: ['Montserrat', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
				body: ['Gotham', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
				btn: ['Lexend Exa', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
			},
		},
	},
	plugins: [],
}
