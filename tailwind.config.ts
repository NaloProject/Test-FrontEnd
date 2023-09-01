import type { Config } from 'tailwindcss'

const config: Config = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/ui/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/layout/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/domains/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			fontFamily: {
				sans: ['var(--font-inter)'],
				maven: ['var(--font-maven-pro)'],
			},
			colors: {
				nalo: {
					pink: '#F1E3E6',
					purple: '#4A52C6',
				},
			},
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic':
					'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
			},
			gridTemplateRows: {
				'home-layout': 'auto 1fr auto',
				'news-layout': '1fr auto',
			},
			boxShadow: {
				box: '0px 0px 50px -25px rgba(0,0,0,0.175);',
			},
		},
	},
	plugins: [],
}
export default config
