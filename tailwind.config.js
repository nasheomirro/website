/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		colors: {
			transparent: 'transparent',
			white: '#fff',
			black: '#000',
			primary: {
				50: '#FEF5FA',
				100: '#FDE2F4',
				200: '#FBC1F0',
				300: '#F896F7',
				400: '#E066F5',
				500: '#AB18F0',
				600: '#A50CC0',
				700: '#990A97',
				800: '#81086B',
				900: '#600640',
				950: '#51052A'
			},
			surface: {
				50: '#FCFCFC',
				100: '#F6F7F8',
				200: '#EBEEF5',
				300: '#DDE4F3',
				400: '#CDD9F3',
				500: '#B9CCF9',
				600: '#7B99E0',
				700: '#466ABE',
				800: '#3B4C73',
				900: '#252932',
				950: '#171717'
			}
		}
	},
	plugins: []
};
