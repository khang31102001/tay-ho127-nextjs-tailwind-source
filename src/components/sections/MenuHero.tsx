// Import Image cho ảnh hero trang thực đơn.
import Image from "next/image";
// Import Container chuẩn.
import { Container } from "@/components/ui/Container";
// Import dữ liệu site.
import { site } from "@/data/site";

// Hero riêng cho trang thực đơn.
export function MenuHero() {
  // Render tiêu đề trang thực đơn trên nền tối để đồng bộ trang chủ.
  return (
    <section className="overflow-hidden bg-brand-ink bg-hero text-white">
      <Container className="grid gap-10 py-16 md:py-20 lg:grid-cols-[.9fr_1.1fr] lg:items-center">
        <div>
          <span className="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-black uppercase tracking-[0.24em] text-white/80 backdrop-blur">
            Thực đơn Tây Hồ 127
          </span>
          <h1 className="heading-xl mt-7">Chọn món nhanh, nhìn giá rõ</h1>
          <p className="mt-7 max-w-xl text-lg leading-8 text-white/70">
            Trang thực đơn dùng chung component DishCard với trang chủ. Cấu trúc này giúp mở rộng món mới mà không phải sửa layout nhiều lần.
          </p>
        </div>
        <div className="relative mx-auto w-full max-w-xl">
          <div className="absolute inset-6 rounded-full bg-brand-red/20 blur-3xl" />
          <Image src={site.assets.heroPlatter} alt="Mâm bánh cuốn trong trang thực đơn" width={1024} height={572} priority className="relative h-auto w-full drop-shadow-[0_30px_70px_rgba(0,0,0,.35)]" />
        </div>
      </Container>
    </section>
  );
}
