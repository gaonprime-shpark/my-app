/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontSize: {
        mammoth: '8rem',
      },
      colors: {
        primary: '#ff6363',
        secondary: {
          100: '#e2e2d5',
          200: '#888883',
        },
      },
      fontFamily: {
        body: ['Noto Sans KR'],
      },
    },
  },
  plugins: [],
};
