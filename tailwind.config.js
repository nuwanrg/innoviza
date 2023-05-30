module.exports = {
  mode: 'jit',
  purge: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './layouts/**/*.{js,ts,jsx,tsx}',
    './styles/**/*.{scss,css}',
  ],
  darkMode: 'class',
  theme: {
    container: {
      center: true,
    },
    fontFamily: {
      sans: ['Poppins', 'system-ui', 'sans-serif'],
    },
    colors: {
      'N': {
        paletteName: 'Neutral',
        base: '#273040',
        darkest: '#040D1F',
        10: '#F8FBFD',
        50: '#ECF2F6',
        100: '#E5EDF4',
        200: '#D8E1EC',
        300: '#C2D0DE',
        400: '#A1AFC1',
        500: '#728197',
        600: '#4B5669',
        700: '#273040',
        800: '#040D1F',
        900: '#3AC9E8',
      },
      'white': '#ffffff',
      'off-white': 'rgba(255, 255, 255, 0.65)',
      'black': '#000',
      'something': '#FF65AB',
      'error': '#FF0000',
      'accordion-hover': 'rgba(255, 255, 255, 0.13)',
      'accordion-active': 'rgba(255, 255, 255, 0.16)',
    },
    fontSize: {
      'sm': [
        '14px',
        {
          lineHeight: '28px',
        },
      ],
      'base': [
        '16px',
        {
          lineHeight: '28px',
        },
      ],
      'md': [
        '18px',
        {
          lineHeight: '28px',
        },
      ],
      'display': [
        '100px',
        {
          lineHeight: '108px',
          letterSpacing: '-3px',
        },
      ],
      'h1': [
        '100px',
        {
          lineHeight: '108px',
          letterSpacing: '-4px',
        },
      ],
      'h1-md': [
        '76px',
        {
          lineHeight: '84px',
          letterSpacing: '-4px',
        },
      ],
      'h2': [
        '80px',
        {
          lineHeight: '108px',
          letterSpacing: '-2px',
        },
      ],
      'h2-md': [
        '48px',
        {
          lineHeight: '60px',
          letterSpacing: '-2px',
        },
      ],
      'h3': [
        '44px',
        {
          lineHeight: '60px',
          letterSpacing: '-1.25px',
        },
      ],
      'h3-md': [
        '28px',
        {
          lineHeight: '36px',
          letterSpacing: '-1.25px',
        },
      ],
      'h4': [
        '36px',
        {
          lineHeight: '72px',
          letterSpacing: '-1.25px',
        },
      ],
      'h5': [
        '24px',
        {
          lineHeight: '48px',
          letterSpacing: '-0.64px',
        },
      ],
      'h5-md': [
        '20px',
        {
          lineHeight: '36px',
          letterSpacing: '-0.64px',
        },
      ],
      'h6': [
        '22px',
        {
          lineHeight: '48px',
          letterSpacing: '-0.64px',
        },
      ],
    },
    fontWeight: {
      400: '400',
      500: '500',
      600: '600',
      700: '700',
      800: '800',
    },
    extend: {
      animation: {
        scrollRight: 'scrollRight 120s linear infinite',
        scrollLeft: 'scrollLeft 120s linear infinite',
      },
      keyframes: {
        scrollRight: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        scrollLeft: {
          '100%': { transform: 'translateX(0)' },
          '0%': { transform: 'translateX(-100%)' },
        },
      },
    },
    screens: {
      sm: '540px',
      md: '768px',
      lg: '1170px',
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
