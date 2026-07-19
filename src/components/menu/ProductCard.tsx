"use client";

import { useCart } from "@/contexts/cart-context";
import type { UiProduct } from "@/types/menu";
import { formatCurrency } from "@/data/menu-items";
import { UiProduct } from "@/types/menu";
import Image from "next/image";

type ProductCardProps = {
  item: UiProduct;
};

export function ProductCard({ item }: ProductCardProps) {
  const { addToCart } = useCart();

  const cartProduct = {
    id: String(item.id),
    name: item.name,
    price: item.price,
    image: item.image,
  };

  return (
    <article className="relative overflow-hidden rounded-md border border-brand-red bg-brand-cream shadow-card">
      <div className="relative h-[142px] overflow-hidden">
        <Image src={item.image} alt={item.name} width={100} height={142} className="h-full w-full object-cover transition-transform duration-500 ease-out hover:scale-105" />
        {item.badge && (
          <span className="absolute right-2 top-2 rounded bg-brand-red px-2 py-1 text-[10px] font-black text-white">
            {item.badge}
          </span>
        )}
        {item.id === 1 && (
          <span className="absolute left-0 top-0 bg-brand-red px-2 py-1 text-[11px] font-black text-white">Best seller</span>
        )}
      </div>

      <div className="min-h-[136px] px-3 pb-2 pt-3">
        <h3 className="min-h-[48px] text-[16px] font-black leading-5 text-brand-greenDark">{item.name}</h3>
        <div className="mt-3 flex items-end justify-end gap-2">
          <div className="text-right text-[15px] font-black text-black">
            {item.oldPrice && <span className="mr-1 text-[13px] text-[#5f5f5f] line-through">{formatCurrency(item.oldPrice)}</span>}
            <span>{formatCurrency(item.price)}</span>
          </div>
        </div>

        <div className="mt-3 flex items-center justify-between text-sm gap-1">
          <div className="text-[#1f1f1f]">★★★★★ ({item.ratingCount}) đánh giá</div>
          <div className="flex justify-end gap-2">
            <button
              type="button"
              onClick={() => addToCart(cartProduct)}
              className="flex h-6 w-6 items-center justify-center rounded bg-brand-red text-lg font-black leading-none text-white"
            >
              +
            </button>
            <button
              type="button"
              onClick={() => addToCart(cartProduct)}
              className="h-6 rounded bg-brand-red px-3 text-[12px] font-bold text-white text-center"
            >
              Đặt ngay
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}
