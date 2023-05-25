/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      screens: {
        xs: "460px",
      },
      fontFamily: {
        sans: ["Gotham SSm A", "sans-serif"],
      },
      fontSize: {
        xs: "10px",
        sm: "12px",
        base: "14px",
        md: "16px",
        lg: "18px",
        xl: "21px",
      },
    },
  },
  plugins: [
    require("tailwindcss-animated"),
    function ({ addComponents }) {
      addComponents({
        h1: { "@apply text-[36px] sm:text-[40px]": {} },
        h2: { "@apply text-[24px] sm:text-[28px]": {} },
        h3: { "@apply text-[20px] sm:text-[24px] font-medium": {} },
        ".container": { "@apply w-[87%] mx-auto": {} },
        ".flex-center": { "@apply flex items-center justify-center": {} },
        '[class*="animate-delay"]': { "@apply animate-fade-up animate-duration-500": {} },
        body: { "@apply text-base": {} },
        ".btn-dark": {
          "@apply w-full sm:w-[264px] h-[40px] flex-center rounded font-medium text-white bg-[#171A20] hover:bg-[#171a20de] transition-colors duration-300":
            {},
        },
        ".btn-dark--blur": {
          "@apply w-full sm:w-[264px] h-[40px] flex-center rounded font-medium text-white bg-[rgba(23,_26,_32,_0.8)] hover:bg-[#171A20] transition-colors duration-300":
            {},
        },
        ".btn-light": {
          "@apply w-full sm:w-[264px] h-[40px] flex-center rounded font-medium text-black bg-white hover:bg-[#e2e3e3] transition-colors duration-300":
            {},
        },
        ".btn-light--blur": {
          "@apply w-full sm:w-[264px] h-[40px] flex-center rounded font-medium bg-[rgba(244,_244,_244,_0.65)] text-[#393c41] hover:bg-white hover:text-black transition-colors duration-300":
            {},
        },
        ".btn-light--outline": {
          "@apply w-full sm:w-[264px] h-[40px] flex-center rounded border-[3px] font-medium text-white border-white hover:bg-white hover:text-black transition-colors duration-300":
            {},
        },
      });
    },
  ],
};
