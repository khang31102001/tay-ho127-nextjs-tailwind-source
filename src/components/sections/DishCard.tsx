// Import Image để tối ưu ảnh món ăn.
import Image from "next/image";
// Import Pill để hiển thị badge món.
import { Pill } from "@/components/ui/Pill";

type Dish = {
  name: string;
  description: string;
  image: string;
  badge: string;
  price: string;
};

interface DishCardProps {
  dish: Dish;
  priority?: boolean;
}

// Card món ăn dùng chung ở trang chủ và trang thực đơn.
export function DishCard({ dish, priority = false }: DishCardProps) {
  // Render card món với ảnh, badge, tên, mô tả và giá.
  return (
    <article className="card-surface group overflow-hidden">
      <div className="relative aspect-[4/3] overflow-hidden bg-brand-wheat">
        <Image src={dish.image} alt={dish.name} fill priority={priority} className="object-cover transition duration-700 group-hover:scale-105" sizes="(min-width: 1024px) 33vw, 100vw" />
        <div className="absolute left-5 top-5">
          <Pill tone="red">{dish.badge}</Pill>
        </div>
      </div>
      <div className="p-7">
        <div className="flex items-start justify-between gap-4">
          <h3 className="text-2xl font-black leading-tight text-brand-ink">{dish.name}</h3>
          <p className="shrink-0 rounded-full bg-brand-green px-4 py-2 text-sm font-black text-white">{dish.price}</p>
        </div>
        <p className="mt-4 text-sm leading-7 text-brand-muted">{dish.description}</p>
      </div>
    </article>
  );
}
