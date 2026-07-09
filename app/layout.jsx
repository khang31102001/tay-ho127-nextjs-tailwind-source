// Import CSS font-face local trước để các biến font có hiệu lực sớm.
import "@/styles/fonts.css";
// Import token màu/font tập trung cho toàn bộ website.
import "@/styles/tokens.css";
// Import Tailwind layer và reset global.
import "./globals.css";
// Import class component dùng chung sau Tailwind để @apply hoạt động đúng.
import "@/styles/components.css";
// Import Navbar dùng chung cho mọi trang.
import { Navbar } from "@/components/layout/Navbar";
// Import Footer dùng chung cho mọi trang.
import { Footer } from "@/components/layout/Footer";
// Import thông tin site tập trung từ data.
import { site } from "@/data/site";

// Metadata SEO cơ bản của Next.js App Router.
export const metadata = {
  // Tiêu đề mặc định của website.
  title: `${site.name} | Bánh cuốn truyền thống`,
  // Mô tả ngắn hiển thị cho công cụ tìm kiếm.
  description: site.tagline,
  // Icon tab browser dùng logo màu nếu muốn thay favicon sau này.
  icons: {
    // Đường dẫn favicon placeholder; bạn có thể thay bằng /favicon.ico.
    icon: "/images/logo-color.png",
  },
};

// RootLayout bọc tất cả page để giữ header/footer nhất quán.
export default function RootLayout({ children }) {
  // Trả về cấu trúc HTML chính của Next.js.
  return (
    <html lang="vi">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
