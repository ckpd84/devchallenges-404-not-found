module.exports = {
	purge: [],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			fontFamily: {
				inconsolata: "Inconsolata, monospace",
				montserrat: "Montserrat, sans-serif",
				mono: "Space Mono, monospace",
			},
			screens: {
				mobile: "375px",
				desktop: "1440px",
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
