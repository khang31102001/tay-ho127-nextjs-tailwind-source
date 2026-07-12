import Image from "next/image";
import { Container } from "../ui/Container";
import { Reveal } from "../common/animation";

export function StorySection() {
  return (
    <section className="min-h-svh snap-start bg-brand-cream py-20">
      <Container className=" grid items-center gap-16 md:grid-cols-[0.96fr_1.04fr]">
        <div className="grid h-[330px] grid-cols-[1fr_0.72fr] gap-5">
        <Reveal type="slide-left" delay={0.2}  once={false}>
            <div className="space-y-5">
            <Image 
              src="/images/banh-cuon-dish.jpg"alt="Story 1"
              height={150} width={300} 
              className="placeholder-box h-[150px]" 
            />
             <Image 
              src="/images/banh-cuon-dish.jpg" alt="Story 1" 
              height={140} width={300}
              className="placeholder-box h-[140px]" 
            />
          </div>
        </Reveal>
          <Reveal type="slide-left" delay={0.3}  once={false}>
             <Image 
              src="/images/story-col-1.png" alt="Story 1" 
              height={220} width={220}
              className="placeholder-box mt-2 h-[215px]" 
            />
          </Reveal>
        </div>

        <article>
          <Reveal type="fade-up" delay={0.2} duration={0.8} once={false}>
            <h2 className="heading-section space-x-2">
            <span className="text-brand-red">Nửa thế kỷ</span>
            <span className="text-brand-green">gìn giữ vị xưa</span>
          </h2>
          </Reveal>
          
         <Reveal type="fade-up" delay={0.4} duration={0.8}once={false}>
           <div className="mt-7 space-y-5 text-[16px] font-medium leading-6 text-[#26351e]">
            <p>
              Bánh Cuốn Tây Hồ bắt đầu từ một cửa hàng nhỏ tại phố cổ Hà Nội vào năm 1972. Với công thức gia truyền độc đáo và tình yêu dành cho ẩm thực truyền thống Việt Nam, chúng tôi đã dần xây dựng được thương hiệu uy tín và được yêu mến trong lòng người dân Hà Nội.
            </p>
            <p>
              Trải qua hơn 5 thập kỷ, Bánh Cuốn Tây Hồ vẫn giữ nguyên hương vị truyền thống với bột gạo tươi được làm thủ công mỗi ngày, nhân thịt thơm ngon, và nước chấm đặc trưng theo công thức bí truyền.
            </p>
            <p>
              Ngày nay, Bánh Cuốn Tây Hồ đã phát triển thành chuỗi nhà hàng trên khắp Việt Nam, nhưng chúng tôi vẫn luôn giữ vững triết lý kinh doanh: tôn trọng truyền thống, đảm bảo chất lượng, và không ngừng đổi mới để mang đến trải nghiệm tốt nhất cho khách hàng.
            </p>
          </div>
         </Reveal>
        </article>
      </Container>
    </section>
  );
}
