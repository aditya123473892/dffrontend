import type { Config } from "tailwindcss";
const defaultTheme = require("tailwindcss/defaultTheme");
const { nextui } = require("@nextui-org/react");

const config: Config = {
   mode: "jit",
   content: [
      "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
      "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
      "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
      "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
   ],

   theme: {
      extend: {
         backgroundImage: {
            "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
            "gradient-conic":
               "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
         },
         fontFamily: {
            sans: [
               "Poppins",
               "ui-sans-serif",
               "system-ui",
               "-apple-system",
               "BlinkMacSystemFont",
               "Segoe UI",
               "Roboto",
               "Helvetica Neue",
               "Arial",
               "Noto Sans",
               "sans-serif",
               "Apple Color Emoji",
               "Segoe UI Emoji",
               "Segoe UI Symbol",
               "Noto Color Emoji",
            ],
         },
      },
      colors: {
         white: "#ffffff",
         black: "#000000",
         overlay: "#1e293ba1",
         neutral: "#F5F5F5",
         muted: "#777",
         "gray-400": "#f6f6f6",
         "gray-600": "#b3b3b3",
         "neutral-50": "#fffcf3",
         "neutral-300": "#EAEAEA",
         "neutral-400": "#C8C8C8",
         "neutral-500": "#B5B5b5",
         "neutral-600": "#696969",
         "neutral-800": "#3C3C3C",
         "blue-500": "#615EF0",
         "purple-400": "#8773FF",
      },
      boxShadow: {
         custom: '4px 4px 15px rgba(0, 0, 0, 0.1)',
      },
      screens: {
         xs: "320px",   // Extra small devices (phones)
         sm: "480px",   // Small devices (phones)
         md: "768px",   // Medium devices (tablets)
         lg: "1024px",  // Large devices (desktops)
         xl: "1280px",  // Extra large devices (large desktops)
         "2xl": "1536px", // 2X large devices (larger desktops)
         ...defaultTheme.screens,
      },
   },
   plugins: [nextui()],
};
export default config;
