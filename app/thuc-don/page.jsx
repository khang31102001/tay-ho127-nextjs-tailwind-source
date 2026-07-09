// Import hero riêng cho trang thực đơn.
import { MenuHero } from "@/components/sections/MenuHero";
// Import grid danh sách món.
import { MenuGrid } from "@/components/sections/MenuGrid";
// Import CTA cuối trang dùng chung.
import { CTASection } from "@/components/sections/CTASection";

// Metadata riêng cho trang thực đơn.
export const metadata = {
  // Tiêu đề SEO cho trang menu.
  title: "Thực đơn | Bánh Cuốn Tây Hồ 127",
  // Mô tả SEO ngắn cho trang menu.
  description: "Thực đơn bánh cuốn, món thêm và đồ uống của Bánh Cuốn Tây Hồ 127.",
};

// Trang thực đơn: layout thứ hai theo yêu cầu.
export default function MenuPage() {
  // Render page menu bằng component tái sử dụng.
  return (
    <>
      <MenuHero />
      <MenuGrid />
      <CTASection />
    </>
  );
}
