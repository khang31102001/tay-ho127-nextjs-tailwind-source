// Import Hero trang chủ.
import { Hero } from "@/components/sections/Hero";
// Import section chứng thực thương hiệu.
import { BrandProof } from "@/components/sections/BrandProof";
// Import section điểm khác biệt.
import { Highlights } from "@/components/sections/Highlights";
// Import preview thực đơn.
import { MenuPreview } from "@/components/sections/MenuPreview";
// Import section câu chuyện.
import { StorySection } from "@/components/sections/StorySection";
// Import CTA cuối trang.
import { CTASection } from "@/components/sections/CTASection";

// Trang chủ index: gom các section chính theo thứ tự landing page.
export default function HomePage() {
  // Render landing page với hệ section tách nhỏ để dễ bảo trì.
  return (
    <>
      <Hero />
      <BrandProof />
      <Highlights />
      <MenuPreview />
      <StorySection />
      <CTASection />
    </>
  );
}
