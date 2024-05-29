import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      backgroundImage: {
        curve: "url('/background.svg')",
      },
      colors: {
        canvas: "#e0e8ff",
      },
      fontFamily: {
        sans: ["'Red Hat Display'", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
} satisfies Config;
