/** @type {import('tailwindcss').Config} */

import { myTheme, Themes, customConfig } from './configs.js';

module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {},
	},
	daisyui: {
		themes: [
			{
				...myTheme,
			},
			...Themes,
			{ procyon: customConfig }
		],
		darkTheme: 'dark',
		base: true,
		styled: true,
		utils: true,
		logs: true
	},
	plugins: [require('daisyui')],
}
