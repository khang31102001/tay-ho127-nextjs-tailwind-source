import { Header } from "@/components/layout/Header";

export function TopHero() {
  return (
    <section className="relative h-[492px] overflow-hidden bg-black">
   
      <img src="/images/hero-cooking.png" alt="Tráng bánh cuốn thủ công" className="h-full w-full object-cover opacity-90" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-black/10 to-black/30" />

      <button className="absolute left-1/2 top-[245px] z-20 flex h-[78px] w-[78px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-tayho-orange text-3xl text-white shadow-card">
        ▶
      </button>

      <aside className="absolute right-[34px] top-[190px] z-20 hidden w-[260px] rounded-xl bg-white p-4 shadow-card md:block">
        <h3 className="mb-3 text-center text-[16px] font-black text-brand-green">THÔNG TIN ĐẶT HÀNG</h3>
        <input className="mb-2 h-8 w-full rounded-full border border-brand-green px-3 text-sm font-bold" placeholder="Tên" />
        <input className="mb-2 h-8 w-full rounded-full border border-brand-green px-3 text-sm font-bold" placeholder="SĐT" />
        <input className="h-8 w-full rounded-full border border-brand-green px-3 text-sm font-bold" placeholder="Địa chỉ" />
        <p className="mt-3 text-center text-[11px] text-[#777]">Tiếp tục với tài khoản khách</p>
      </aside>

      <div className="absolute bottom-[24px] right-[28px] z-20 flex h-[93px] w-[93px] items-center justify-center rounded-full bg-brand-red text-center text-[13px] font-black leading-tight text-white shadow-card">
        MICHELIN<br />2026
      </div>
    </section>
  );
}
