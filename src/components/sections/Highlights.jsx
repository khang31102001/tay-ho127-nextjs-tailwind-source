// Import Container chuẩn.
import { Container } from "@/components/ui/Container";
// Import SectionHeader chuẩn.
import { SectionHeader } from "@/components/ui/SectionHeader";
// Import dữ liệu highlight tập trung.
import { highlights } from "@/data/site";

// Section lợi thế sản phẩm/trải nghiệm.
export function Highlights() {
  // Render 3 card làm rõ lý do khách nên thử món.
  return (
    <section className="section-padding bg-white">
      <Container>
        <SectionHeader
          align="center"
          eyebrow="Điểm khác biệt"
          title="Món quen nhưng trải nghiệm phải gọn, sạch, rõ vị"
          description="Layout ưu tiên typography lớn, card ít chữ và khoảng trắng rộng để phù hợp tinh thần quán truyền thống nhưng vẫn hiện đại."
        />
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {highlights.map((item, index) => (
            <article key={item.title} className="card-surface relative overflow-hidden p-8">
              <span className="absolute -right-3 -top-6 font-display text-8xl font-black text-brand-red/10">0{index + 1}</span>
              <h3 className="relative text-2xl font-black text-brand-ink">{item.title}</h3>
              <p className="relative mt-4 text-sm leading-7 text-brand-muted">{item.text}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
