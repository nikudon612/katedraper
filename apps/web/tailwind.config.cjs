/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./src/**/*.{svelte,ts,js}',
		// if you ever render components from a shared package, keep this:
		'../../packages/**/*.{svelte,ts,js}'
	],
	theme: {
		extend: {
			colors: {
				brand: '#7b170f',
				muted: '#a08f84',
				sand: '#e8e2d7',
				paper: '#ddd8cc'
			}
		}
	},
	plugins: []
};
