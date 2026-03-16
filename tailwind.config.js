/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0A6E7C',      // Teal - Main theme color
        secondary: '#1A3C5E',    // Navy - Secondary color
        accent: '#2ECC71',       // Green - Success/Confirm
        background: '#F4F7FA',   // Light Gray - Page background
        danger: '#E74C3C',       // Red - Cancel/Delete
      }
    },
    fontFamily: {
      'sans': ['Poppins', 'sans-serif'],
    }
  },
  plugins: [],
}