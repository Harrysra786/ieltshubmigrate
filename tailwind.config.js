import daisyui from 'daisyui';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],

  theme: {
      extend: {
          screens: {
              sm: '640px',
              md: '768px',
              lg: '1024px',
              xl: '1280px',
              '2xl': '1536px',
              tiny: { max: '920px' },
              tiny2: { max: '700px' },
              big: { min: '921px' }
          }
      }
  },
  plugins: [
      daisyui,
  ],
};
