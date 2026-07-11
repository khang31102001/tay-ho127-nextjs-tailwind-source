import Image from "next/image";
import { Container } from "../ui/Container";
import { ChevronLeftIcon, ChevronRightIcon, StarIcon } from "lucide-react";

export function Testimonials() {
  return (
    <section className="bg-[#666664] py-16 text-white">
      <Container className=" text-center">
        <h2 className="heading-section font-black">Khách hàng <span className="text-yellow-500">nói gì</span> về chúng tôi</h2>
       <div className="mt-6 flex items-center justify-center gap-3 ">
          <Image 
          src="/images/google-logo.png" alt="Testimonial" 
          height={100} width={100}
          
          />
          <span className="flex items-center  text-[20px] font-black">4.9/5
            <StarIcon className="ml-1 inline-block text-yellow-500" />
          </span>
           <p className=" text-[20px] font-black text-yellow-700">(519 đánh giá)</p>
       </div>

        <div className="mt-12 grid items-center gap-6 md:grid-cols-[1fr_1.45fr_1fr]">
          <button className="mx-auto h-10 w-10 rounded-full bg-white text-2xl text-[#666664]">
            {/* <ChevronLeftIcon className="h-6 w-6 rotate-180" /> */}
          </button>
          <div className="rounded-xl bg-white p-5 text-left text-[#464646] shadow-card">
            <div className="mb-3 flex items-center gap-3">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#17bf5c] font-black text-white">I</span>
              <div>
                <p className="font-black">Hoangusa</p>
                <p className="text-xs text-brand-yellow">★★★★★ 1 tuần trước</p>
              </div>
            </div>
            <p className="text-[14px] leading-6">Một địa điểm tuyệt vời để thưởng thức bánh cuốn! Quán chuyên phục vụ bánh cuốn tươi nóng với các lựa chọn nhân mặn và chay, giá cả rất phải chăng.</p>
          </div>
          <button className="mx-auto h-10 w-10 rounded-full bg-white text-2xl text-[#666664]">
            {/* <ChevronRightIcon className="h-6 w-6" /> */}
          </button>
        </div>
      </Container>
    </section>
  );
}
