import { menuItems } from "@/data/menu-items";
import { ProductCard } from "./ProductCard";

const categories = ["Tất cả", "Món mặn", "Món chay", "Ăn kèm"];

export function MenuGrid() {
  return (
    <section className="relative bg-brand-cream py-24">
      <div className="pointer-events-none absolute left-2 top-3 hidden space-y-4 md:block">
        {Array.from({ length: 3 }).map((_, index) => (
          <div key={index} className="h-12 w-24 rounded-[50%_50%_12%_12%] border-2 border-orange-300" />
        ))}
      </div>

      <div className="mx-auto max-w-[790px] px-5 md:px-0">
        <h1 className="heading-section mb-24 text-center text-brand-green text-[44px] md:text-[48px]">Hôm nay bạn muốn ăn gì?</h1>

        <div className="mb-5 flex h-7 items-center rounded-full border-2 border-[#1e9f5a] bg-white px-3 text-[13px] text-[#9aa49a]">
          🔍 <span className="ml-2">Tìm kiếm món ăn...</span>
        </div>

        <div className="mb-14 flex flex-wrap gap-2">
          {categories.map((category, index) => (
            <button key={category} className={index === 0 ? "rounded bg-brand-green px-3 py-1 text-[11px] font-black text-white" : "rounded border border-tayho-red bg-white px-3 py-1 text-[11px] font-black text-tayho-red"}>
              {category}
            </button>
          ))}
        </div>

        <div className="grid gap-x-10 gap-y-8 sm:grid-cols-2 md:grid-cols-3">
          {menuItems.map((item) => (
            <ProductCard key={item.id} item={item} />
          ))}
        </div>

        <div className="mt-14 text-center">
          <button className="rounded-md bg-brand-red px-16 py-3 text-[18px] font-medium text-white">Xem thêm</button>
        </div>
      </div>
    </section>
  );
}
