// Import ButtonLink để dẫn sang trang thực đơn.
import { ButtonLink } from "@/components/ui/ButtonLink";
// Import Container chuẩn.
import { Container } from "@/components/ui/Container";
// Import SectionHeader chuẩn.
import { SectionHeader } from "@/components/ui/SectionHeader";
// Import DishCard dùng chung.
import { DishCard } from "@/components/sections/DishCard";
// Import dữ liệu món ăn.
import { dishes } from "@/data/site";

// Section preview thực đơn trên trang chủ.
export function MenuPreview() {
  // Lấy 3 món đầu để trang chủ gọn.
  const featuredDishes = dishes.slice(0, 3);

  // Render preview menu và CTA xem toàn bộ.
  return (
    <section className="section-padding bg-brand-cream">
      <Container>
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <SectionHeader
            eyebrow="Thực đơn nổi bật"
            title="Bánh cuốn nóng, đủ topping, dễ chọn"
            description="Dữ liệu món nằm trong một file site.js. Khi cần thêm món, bạn chỉ thêm object, UI tự render."
          />
          <ButtonLink href="/thuc-don" variant="ghost" className="w-fit">Xem tất cả</ButtonLink>
        </div>
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {featuredDishes.map((dish, index) => (
            <DishCard key={dish.name} dish={dish} priority={index === 0} />
          ))}
        </div>
      </Container>
    </section>
  );
}
