/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: 'class',
	content: [
		'./src/**/*.{html,js,svelte,ts}',
		require('path').join(require.resolve('@skeletonlabs/skeleton'), '../**/*.{html,js,svelte,ts}')
	],
	theme: {
		screens: {
			'sm': '640px',  
			'md': '768px',
			'lg': '1024px',
			'xl': '1280px',
			'2xl': '1536px',
		},
		extend: {
			screens: {
				'sm-max': { max: '639px' },
				'md-max': { max: '1023px' },
				'lg-max': { max: '1279px' },
				'xl-max': { max: '1535px' },
			},
			spacing: {
				'xscreen': '1024px', // le breakpoint entre md et lg = 1024px = la ou en passe en mode desktop
			}
		}
	},

	plugins: [...require('@skeletonlabs/skeleton/tailwind/skeleton.cjs')()]
};
