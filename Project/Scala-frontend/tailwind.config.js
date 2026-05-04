export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx,html}'
  ],
  darkMode: 'media',
  theme: {
    extend: {
      colors: {
        bg: 'var(--bg)',            // page background
        surface: 'var(--bg2)',      // cards, inputs
        border: 'var(--border)',    // borders
        primary: 'var(--accent)',   // primary/accent color
        'primary-bg': 'var(--accent-bg)',
        text: 'var(--text)',
        muted: 'var(--text-dim)'
      }
    }
  },
  plugins: []
}
