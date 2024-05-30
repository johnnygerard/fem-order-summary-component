import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";
import plugin from "tailwindcss/plugin";

export default {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      backgroundImage: {
        curve: "url('/background.svg')",
      },
      boxShadow: {
        button: "0px 20px 20px 0px rgba(56, 42, 225, 0.19)",
        main: "0px 40px 40px -20px rgba(13, 48, 189, 0.15)",
      },
      colors: {
        canvas: "#e0e8ff",
      },
      fontFamily: {
        sans: ["'Red Hat Display'", ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        xs: ["13px", "normal"],
        sm: ["14px", "normal"],
        base: ["15px", "normal"],
        lg: ["16px", "normal"],
        xl: ["22px", "normal"],
        "2xl": ["28px", "normal"],
      },
    },
  },
  plugins: [
    plugin(({ addVariant }) => {
      addVariant("hocus-visible", ["&:hover", "&:focus-visible"]);
    }),
  ],
} satisfies Config;
