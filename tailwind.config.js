module.exports = {
  mode: 'jit',
  darkMode: 'class',
  purge: [
    'components/**/*.vue',
    'layouts/**/*.vue',
    'pages/**/*.vue',
    'plugins/**/*.js',
    'nuxt.config.js',
  ],
  theme: {
    container: {
      center: true,
    },
    screens: {
      sm: '360px',
      md: '600px',
      lg: '900px',
      xl: '1300px',
      '2xl': '1536px',
      '3xl': '1920px',
    },
    extend: {
      screens: {
        xl: '1500px',
        lg: '1100px',
        md: '900px',
        sm: '500px',
      },
      colors: {
        'blue-star-dark': '#002856',
        'blue-star-light': '#53BAAA',
      },
      backgroundImage: {
        logo: "url('/images/logo.svg')",
      },
      opacity: {
        40: '0.40',
        65: '0.65',
        95: '0.95',
      },
      fontFamily: {
        morpheus: ['Morpheus'], // a-la-croisee-des-mondes
        booter: ['Booter'], // l-autre
        'caslon-antique': ['Caslon Antique'], // ewilan
        immortal: ['Immortal'], // les-ames-croisees
        pelagiad: ['Pelagiad'], // morrowind
      },
    },
  },
  variants: {
    extend: {
      display: ['dark'],
      opacity: ['dark'],
      textColor: ['responsive', 'hover', 'focus', 'group-hover', 'dark'],
      scale: ['responsive', 'hover', 'focus', 'active', 'group-hover'],
      boxShadow: ['dark'],
      translate: ['responsive', 'hover', 'focus', 'active', 'group-hover'],
      backgroundColor: ['hover', 'focus', 'group-hover', 'dark'],
      backgroundOpacity: ['dark'],
      borderColor: ['hover', 'focus', 'group-hover'],
      borderRadius: ['dark'],
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/line-clamp'),
    require('tailwindcss-debug-screens'),
  ],
}
