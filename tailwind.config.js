module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './lib/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          maroon: '#581c2d',
          navy: '#1f2c4d',
          cream: '#f6efe6',
          gold: '#c59d5f',
          sage: '#6e7b58'
        }
      },
      fontFamily: {
        serif: ['Merriweather', 'serif'],
        sans: ['Inter', 'sans-serif']
      }
    }
  },
  plugins: [require('@tailwindcss/typography')]
}
