// Import Image cho ảnh món ăn/câu chuyện.
import Image from "next/image";
// Import Container chuẩn.
import { Container } from "@/components/ui/Container";
// Import SectionHeader chuẩn.
import { SectionHeader } from "@/components/ui/SectionHeader";
// Import dữ liệu site/story tập trung.
import { site, storyBlocks } from "@/data/site";

// Section câu chuyện thương hiệu.
export function StorySection() {
  // Render bố cục hai cột: nội dung + ảnh món.
  return (
    <section id="cau-chuyen" className="section-padding bg-white">
      <Container className="grid gap-10 lg:grid-cols-[.95fr_1.05fr] lg:items-center">
        <div>
          <SectionHeader
            eyebrow="Câu chuyện"
            title="Truyền thống là nền, trải nghiệm là điểm bán"
            description="Với một quán món Việt lâu đời, website không nên quá phức tạp. Cần làm nổi món ăn, logo, uy tín và hành động xem thực đơn/đến quán."
          />
          <div className="mt-8 space-y-5 text-base leading-8 text-brand-muted">
            {storyBlocks.map((text) => (
              <p key={text}>{text}</p>
            ))}
          </div>
        </div>
        <div className="relative">
          <div className="absolute -inset-4 rounded-[40px] bg-brand-red/10" />
          <div className="card-surface relative overflow-hidden p-4">
            <Image src={site.assets.dishPhoto} alt="Bánh cuốn phủ hành phi" width={738} height={387} className="h-auto w-full rounded-[24px] object-cover" />
            <div className="grid gap-3 p-5 sm:grid-cols-3">
              <div>
                <p className="text-3xl font-black text-brand-red">01</p>
                <p className="mt-1 text-sm font-bold text-brand-muted">Món lõi rõ</p>
              </div>
              <div>
                <p className="text-3xl font-black text-brand-red">02</p>
                <p className="mt-1 text-sm font-bold text-brand-muted">Ảnh lớn</p>
              </div>
              <div>
                <p className="text-3xl font-black text-brand-red">03</p>
                <p className="mt-1 text-sm font-bold text-brand-muted">CTA nhanh</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
