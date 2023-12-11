/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        kaushan: ["var(--font-kaushan)"],
        poppins: ["var(--font-poppins)"],
        autography: ["Autography"],
        "doctor-glitch": ["Doctor Glitch"],
      },
      colors: {
        "gray-global": "#444444",
        "gray-dark": "#292929",
        "gray-light": "#999",
        "blue-global": "#007fff",
        "blue-light": "#4da5ff",
        "blue-ultra-light": "#7698ff",
        "off-white": "#d8e1ff",
      },
      backgroundImage: {
        "banner-img": "url('/img/bg_header.jpg')",
        "bg-black": "url('/img/bg_mirror.jpg')",
      },
      boxShadow: {
        "2xl": "0 25px 50px 0 rgba(0, 0, 0, 0.045)",
      },
    },
  },
  plugins: [],
};
