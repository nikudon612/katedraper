/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./src/**/*.{svelte,ts,js}',
		// if you ever render components from a shared package, keep this:
		'../../packages/**/*.{svelte,ts,js}'
	],
	theme: { extend: {} },
	plugins: []
};
