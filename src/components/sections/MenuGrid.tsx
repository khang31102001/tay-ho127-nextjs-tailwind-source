// Import Container chuẩn.
import { Container } from "@/components/ui/Container";
// Import DishCard dùng chung.
import { DishCard } from "@/components/sections/DishCard";
// Import SectionHeader chuẩn.
import { SectionHeader } from "@/components/ui/SectionHeader";
// Import dữ liệu món chính và món phụ.
import { dishes, sideItems } from "@/data/site";

// Grid thực đơn chính.
export function MenuGrid() {
  // Render danh sách món chính và món phụ.
  return (
    <section className="section-padding bg-brand-cream">
      <Container>
        <SectionHeader
          eyebrow="Menu"
          title="Món chính"
          description="Mỗi món là một object trong data. Muốn đổi giá hoặc mô tả chỉ sửa tại src/data/site.js."
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {dishes.map((dish, index) => (
            <DishCard key={dish.name} dish={dish} priority={index < 2} />
          ))}
        </div>
        <div className="mt-16 grid gap-8 lg:grid-cols-[.8fr_1.2fr] lg:items-start">
          <SectionHeader
            eyebrow="Món thêm & đồ uống"
            title="Gọi thêm cho đủ vị"
            description="Bảng phụ dùng layout nhẹ để khách đọc nhanh trên mobile."
          />
          <div className="card-surface overflow-hidden">
            {sideItems.map((item, index) => (
              <div key={item.name} className="flex items-center justify-between gap-4 border-b border-brand-line px-6 py-5 last:border-b-0">
                <div>
                  <p className="text-base font-black text-brand-ink">{item.name}</p>
                  <p className="mt-1 text-xs uppercase tracking-[0.18em] text-brand-muted">Tùy chọn gọi thêm</p>
                </div>
                <p className="rounded-full bg-brand-red px-4 py-2 text-sm font-black text-white">{item.price}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
