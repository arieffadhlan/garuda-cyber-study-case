/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      gap: {
        "4.5": "1.125rem",
        "15": "3.75rem"
      },
			screens: {
				"2xs": "360px",
				"xs": "460px",
        "2md": "992px",
        "2lg": "1200px",
        "2xl": "1440px"
			},
    },
  },
  plugins: [],
}
