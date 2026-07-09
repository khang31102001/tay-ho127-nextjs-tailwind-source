// Import Image để hiển thị logo Google/Michelin.
import Image from "next/image";
// Import Container chuẩn.
import { Container } from "@/components/ui/Container";
// Import SectionHeader chuẩn.
import { SectionHeader } from "@/components/ui/SectionHeader";
// Import dữ liệu chứng thực và asset.
import { brandProofs, site } from "@/data/site";

// Section chứng thực thương hiệu: Google + Michelin + di sản địa phương.
export function BrandProof() {
  // Render trên nền kem để badge/logo nổi bật mà không nặng mắt.
  return (
    <section className="section-padding bg-brand-cream">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[.9fr_1.1fr] lg:items-end">
          <SectionHeader
            eyebrow="Trust signals"
            title="Nhận diện nhanh, tin ngay từ lần đầu nhìn"
            description="Các asset được gom về public/images và dữ liệu được gom về src/data/site.js để khi đổi logo, đổi badge hoặc đổi nội dung chỉ cần sửa một chỗ."
          />
          <div className="grid grid-cols-2 gap-4">
            <div className="card-surface flex min-h-44 items-center justify-center p-6">
              <Image src={site.assets.google} alt="Google logo" width={260} height={88} className="h-auto w-full max-w-[220px]" />
            </div>
            <div className="card-surface flex min-h-44 items-center justify-center p-6">
              <Image src={site.assets.michelin} alt="Michelin 2026" width={116} height={155} className="h-auto w-24" />
            </div>
          </div>
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {brandProofs.map((item) => (
            <article key={item.title} className="card-surface p-7">
              <p className="text-sm font-black uppercase tracking-[0.18em] text-brand-red">{item.title}</p>
              <h3 className="mt-3 text-2xl font-black text-brand-ink">{item.value}</h3>
              <p className="mt-3 text-sm leading-7 text-brand-muted">{item.description}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
