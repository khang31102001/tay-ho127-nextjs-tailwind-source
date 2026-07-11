// Import Image để hiển thị ảnh mâm bánh cuốn đã tách nền.
import Image from "next/image";
// Import ButtonLink cho CTA.
import { ButtonLink } from "@/components/ui/ButtonLink";
// Import Container layout.
import { Container } from "@/components/ui/Container";
// Import dữ liệu site tập trung.
import { brandProofs, site } from "@/data/site";

// Hero trang chủ: ưu tiên ảnh món ăn lớn và logo/định vị rõ.
export function Hero() {
  // Render hero nền tối để logo trắng và ảnh món nổi bật.
  return (
    <section className="relative isolate overflow-hidden bg-brand-ink bg-hero text-white">
      <div className="absolute inset-x-0 top-0 -z-10 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />
      <Container className="grid min-h-[calc(100vh-5rem)] items-center gap-12 py-16 lg:grid-cols-[.95fr_1.05fr] lg:py-20">
        <div className="relative z-10">
          <span className="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-black uppercase tracking-[0.24em] text-white/80 backdrop-blur">
            Bánh cuốn truyền thống · Tây Hồ 127
          </span>
          <h1 className="heading-xl mt-7">
            Vị Bắc <span className="text-brand-red">chuẩn</span>
            <br /> giữa Sài Gòn
          </h1>
          <p className="mt-7 max-w-xl text-lg leading-8 text-white/70">
            Bánh cuốn nóng, chả lụa, rau thơm và nước mắm pha cân vị. Giao diện website được setup theo hệ màu đỏ - xanh của logo, ảnh món ăn lớn và CTA rõ ràng.
          </p>
          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <ButtonLink href="/thuc-don" variant="primary">Xem thực đơn</ButtonLink>
            <ButtonLink href="#cau-chuyen" variant="outline">Câu chuyện quán</ButtonLink>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {brandProofs.map((item) => (
              <div key={item.title} className="rounded-3xl border border-white/10 bg-white/10 p-4 backdrop-blur">
                <p className="text-xs font-black uppercase tracking-[0.18em] text-brand-red">{item.title}</p>
                <p className="mt-2 text-sm font-bold text-white/90">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="relative mx-auto w-full max-w-2xl">
          <div className="absolute inset-8 rounded-full bg-brand-red/20 blur-3xl" />
          <Image src={site.assets.heroPlatter} alt="Mâm bánh cuốn Tây Hồ 127" width={1024} height={572} priority className="relative z-10 h-auto w-full drop-shadow-[0_34px_70px_rgba(0,0,0,.38)]" />
          <div className="absolute bottom-4 left-4 z-20 rounded-3xl border border-white/20 bg-brand-ink/80 p-4 shadow-soft backdrop-blur md:bottom-8 md:left-8">
            <p className="text-xs font-black uppercase tracking-[0.18em] text-white/50">Mở cửa</p>
            <p className="mt-1 text-lg font-black text-white">{site.openingHours}</p>
          </div>
        </div>
      </Container>
    </section>
  );
}
