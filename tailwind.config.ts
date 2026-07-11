const { fontFamily } = require("tailwindcss/defaultTheme");
import type { Config } from "tailwindcss";

const config: Config= {
  // Quét toàn bộ app và src để Tailwind chỉ build đúng class đang dùng.
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    
  ],
  theme: {
    extend: {
      // Màu tập trung tại đây và đồng bộ với CSS variables trong src/styles/tokens.css.
      colors: {
        brand: {
          red: "rgb(var(--brand-red-rgb) / <alpha-value>)",
          redDark: "rgb(var(--brand-red-dark-rgb) / <alpha-value>)",
          green: "rgb(var(--brand-green-rgb) / <alpha-value>)",
          greenDark: "rgb(var(--brand-green-dark-rgb) / <alpha-value>)",
          cream: "rgb(var(--brand-cream-rgb) / <alpha-value>)",
          wheat: "rgb(var(--brand-wheat-rgb) / <alpha-value>)",
          ink: "rgb(var(--brand-ink-rgb) / <alpha-value>)",
          muted: "rgb(var(--brand-muted-rgb) / <alpha-value>)",
          wood: "rgb(var(--brand-wood-rgb) / <alpha-value>)",
          line: "var(--brand-line)",
        },
      },
      // Font được gom lại để đổi một lần là toàn bộ UI ăn theo.
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
        display: ["var(--font-display)", ...fontFamily.sans],
      },
      // Shadow chuẩn để card, navbar, CTA dùng lại thống nhất.
      boxShadow: {
        soft: "0 18px 60px rgba(0, 0, 0, 0.10)",
        glow: "0 24px 80px rgba(237, 28, 36, 0.20)",
      },
      // Border radius chuẩn theo hướng mềm, cao cấp, dễ mở rộng.
      borderRadius: {
        brand: "28px",
        card: "32px",
      },
      // Background radial giúp hero có chiều sâu nhưng vẫn nhẹ.
      backgroundImage: {
        hero: "radial-gradient(circle at 80% 20%, rgba(237,28,36,.18), transparent 30%), radial-gradient(circle at 10% 70%, rgba(46,107,58,.22), transparent 34%)",
      },
    },
  },
  plugins: [],
};

export default config;