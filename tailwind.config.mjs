/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
		screens: {
			'3xs': '320px',

			'2xs': '375px',

			'xs': '390px',

			'sm': '640px',
			// => @media (min-width: 640px) { ... }
	  
			'md': '768px',
			// => @media (min-width: 768px) { ... }
	  
			'lg': '1024px',
			// => @media (min-width: 1024px) { ... }
	  
			'xl': '1440px',
			// => @media (min-width: 1280px) { ... }
	  
			'2xl': '1755px',
			// => @media (min-width: 1536px) { ... }
		  }
	},
	plugins: [
		require('flowbite/plugin')
	],
	}
}
