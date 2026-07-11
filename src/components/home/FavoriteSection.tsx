import Link from "next/link";
import { menuItems } from "@/data/menu-items";
import { ProductCard } from "@/components/menu/ProductCard";
import { MoveLeftIcon } from "lucide-react";

export function FavoriteSection() {
  const favorites = menuItems.slice(0, 3);

  return (
    <section className="food-pattern py-16 text-white">
      <div className="mx-auto max-w-[880px] px-5 md:px-0">
        <div className="mb-10 flex items-center justify-end gap-6">
          <h2 className="text-center font-display text-[32px] font-black md:text-[34px]">
            Những lựa chọn được yêu thích nhất
          </h2>
          <Link href="/menu" className="hidden  rounded-md bg-brand-green px-6 py-3 text-[14px] font-black md:inline-flex">
            <span className="flex items-center gap-2">
              Xem thực đơn <MoveLeftIcon className="ml-2 h-4 w-4 rotate-180" />
            </span>
          </Link>
        </div>

        <div className="relative">
          <button className="absolute -left-14 top-1/2 hidden h-11 w-11 -translate-y-1/2 rounded-full bg-white text-tayho-orange md:block">‹</button>
          <div className="grid gap-6 md:grid-cols-3">
            {favorites.map((item) => (
              <ProductCard key={item.id} item={item} />
            ))}
          </div>
          <button className="absolute -right-14 top-1/2 hidden h-11 w-11 -translate-y-1/2 rounded-full bg-white text-tayho-orange md:block">›</button>
        </div>
      </div>
    </section>
  );
}
