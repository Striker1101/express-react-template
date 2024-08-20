module.exports = {
  darkMode: "class", // or 'media' if you want to use the system's dark mode
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Adjust this path based on where your content files are located
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: "#63b3ed", // light mode primary color
          dark: "#2b6cb0", // dark mode primary color
        },
        background: {
          light: "#ffffff",
          dark: "#1a202c",
        },
        text: {
          light: "#2d3748",
          dark: "#f7fafc",
        },
      },
    },
  },
  plugins: [],
};
