import Link from "next/link";

export function CartBar() {
  return (
    <div className="sticky bottom-0 z-40 bg-tayho-orange py-6 text-white">
      <div className="mx-auto flex max-w-[790px] items-center justify-between px-5 md:px-0">
        <p className="text-[24px] font-light">Giỏ hàng (4)</p>
        <div className="flex items-center gap-8">
          <strong className="text-[34px] font-black">159.000 ₫</strong>
          <Link href="/checkout" className="rounded-md bg-tayho-red px-7 py-3 text-[16px] font-bold">Đặt ngay</Link>
        </div>
      </div>
    </div>
  );
}
