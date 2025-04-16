import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        txtWhite: "#FAFAFA",
        bgWhite: "#F5F5F5",
        copyRight: "#303030",
        btnHover:"#E07575",
        reddish:"#DB4444"
      },
    },
  },
  plugins: [],
} satisfies Config;
