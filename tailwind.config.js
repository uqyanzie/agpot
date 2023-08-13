/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#8bdd61",        
          "secondary": "#01b558",       
          "accent": "#f4ba61",       
          "neutral": "#211d2a",       
          "base-100": "#f8f9fc",        
          "info": "#5ed3f3",        
          "success": "#16b159",       
          "warning": "#f4cb62",        
          "error": "#f75f64",
        },
      },
    ],
  },
  plugins: [
    require('daisyui'),
  ],
}

