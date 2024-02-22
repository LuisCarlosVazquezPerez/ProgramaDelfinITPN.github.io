/** @type {import('tailwindcss').Config} */
export default {
	content: [
		'./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
		'./node_modules/tw-elements-react/dist/js/**/*.js',
		'node_modules/flowbite-react/lib/esm/**/*.js',
	],
	theme: {
		extend: {
			fontFamily: {
				'outfit': ['"Outfit", sans-serif'] // Asegúrate de incluir el nombre de la fuente exactamente como aparece en Google Fonts, y agrega una fuente de respaldo.
			  }
		},
	},
	plugins: [require("tw-elements-react/dist/plugin.cjs"), require('flowbite/plugin')],
}
