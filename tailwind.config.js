// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}", // Adjust the file extensions as needed
    "./public/index.html",              // Include any other HTML files as needed
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('daisyui'), // Add DaisyUI plugin
  ],
  daisyui: {
    themes: [
      "light",
      "dark",
      "cupcake",
      "bumblebee",
      "emerald",
      "synthwave",
      "retro",
      "valentine",
      "halloween",
      "garden",
      "forest",
      "aqua",
      "lofi",
      "pastel",
      "fantasy",
      "wireframe",
      "dracula",
      "cmyk",
      "autumn",
      "acid",
      "night",
      "coffee",
      "dim",
      "nord",
    ],
  },
};
