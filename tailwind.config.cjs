/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: 'class',
	content: [
		'./src/**/*.{html,js,svelte,ts}',
		require('path').join(require.resolve('@skeletonlabs/skeleton'), '../**/*.{html,js,svelte,ts}')
	],
	theme: {
		extend: {
			screens: {
				'md-max': { max: '1024px' }
			},
			spacing: {
				'xscreen': '1024px', // le breakpoint entre md et lg = 1024px = la ou en passe en mode desktop
			}
		}
	},

	plugins: [...require('@skeletonlabs/skeleton/tailwind/skeleton.cjs')()]
};
