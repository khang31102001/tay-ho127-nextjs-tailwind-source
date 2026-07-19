import Image from "next/image";
import { Reveal } from "../common/animation";

const stats = [
  { value: "60+", label: "Năm kinh nghiệm" },
  { value: "50+", label: "Món ăn đa dạng" },
  { value: "5000+", label: "Khách hàng hài lòng" },
  { value: "50+", label: "Đánh giá 5 sao" }
];

export function StatsMichelin() {
  return (
    <div className="py-16 text-center">
      <Reveal type="fade-up" delay={0.2}>
        <h2 className="heading-section text-[34px] text-brand-green">Hơn 60 năm đồng hành và phục vụ</h2>
      </Reveal>

      <Reveal type="fade-up" delay={0.4}>
        <p className="mt-2 text-[16px] font-medium text-black">chúng tôi tự hào về chất lượng và sự tin tưởng từ khách hàng</p>
      </Reveal>


      <div className="mt-10 grid grid-cols-2 gap-8 md:grid-cols-4">
        {stats.map((item, index) => (
          <Reveal key={item.label} type="fade-up" delay={index * 0.2}>
            <div key={item.label}>
              <div className="font-display text-[48px] font-black leading-none text-brand-green">{item.value}</div>
              <p className="mt-3 text-[14px] font-medium text-black">{item.label}</p>
            </div>
          </Reveal>
        ))}
      </div>
      <Reveal type="fade-up" delay={1.2}>
        <div className="mt-14 grid items-center gap-8 rounded-[22px] bg-[#fff2c3] py-6 px-16 text-left md:grid-cols-[300px_1fr] md:p-0 md:pr-10">
          <Image src="/images/michelin-guide.png" alt="Michelin Guide Ho Chi Minh City" width={275} height={200} className="mx-auto -mt-6 w-[275px] drop-shadow-2xl md:-my-8" />
          <div className="flex flex-col items-center justify-center p-4 md:text-left">
            <Image src="/images/michelin-2026.png" alt="Michelin 2026" width={110} height={110} className="mx-auto mb-5 w-[110px] md:mx-0" />
            <h3 className="text-center text-[21px] font-black italic leading-7 text-brand-green">
              Bước chân đầu tiên mang bản sắc dân tộc<br />đến nền ẩm thực quốc tế.
            </h3>
            <p className="mt-5 text-[15px] font-medium leading-6 text-[#34402c]">
              Tháng 5/2026 đánh dấu một cột mốc đầy tự hào khi Bánh Cuốn Tây Hồ 127 vinh dự được trao ngôi sao Michelin đầu tiên, ghi nhận hành trình bền bỉ gìn giữ và lan tỏa hương vị truyền thống Việt Nam.
            </p>
          </div>
        </div>
      </Reveal>

    </div>
  );
}
