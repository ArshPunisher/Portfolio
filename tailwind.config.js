module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          'Poppins',
          'ui-sans-serif',
          'system-ui',
          'sans-serif',
        ],
      },
      boxShadow: {
        'custom': '0 0 10px rgba(0, 0, 0, 0.2)',
        'card': '0px 5px 15px rgba(0,0,0,0.35)',
      },
    },
  },
  plugins: [],
}; 