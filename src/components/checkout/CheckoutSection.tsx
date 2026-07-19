"use client";

import Image from "next/image";

import { useCart } from "@/contexts/cart-context";
import { formatCurrency } from "@/data/menu-items";

type RadioDotProps = {
  checked?: boolean;
};

function RadioDot({ checked = false }: RadioDotProps) {
  return (
    <span
      aria-hidden="true"
      className={`inline-block h-3 w-3 rounded-full border border-tayho-green ${
        checked ? "bg-tayho-green" : "bg-white"
      }`}
    />
  );
}

export function CheckoutSection() {
  const {
    cartItems,
    totalPrice,
    updateQuantity,
    removeFromCart,
  } = useCart();

  return (
    <main className="site-shell food-pattern min-h-screen px-5 py-28 md:px-0">
      <div className="mx-auto max-w-[730px] space-y-3">
        {/* Danh sách món trong giỏ hàng */}
        <section className="rounded-lg bg-white p-7 shadow-soft">
          <h1 className="mb-5 text-[18px] font-black text-brand-green">
            THỰC ĐƠN CỦA BẠN HÔM NAY
          </h1>

          {cartItems.length === 0 ? (
            <div className="rounded border border-dashed border-[#9cae9e] p-10 text-center text-[15px] text-[#4b4b4b]">
              Giỏ hàng trống. Hãy chọn món và thêm vào giỏ hàng để tiếp tục.
            </div>
          ) : (
            <div>
              {cartItems.map((item) => (
                <article
                  key={item.id}
                  className="grid grid-cols-1 gap-4 border-b border-black py-3 last:border-b-0 sm:grid-cols-[115px_1fr_120px]"
                >
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={105}
                    height={88}
                    className="h-[88px] w-[105px] rounded object-cover"
                  />

                  <div>
                    <h2 className="text-[16px] font-black text-brand-greenDark">
                      {item.name}
                    </h2>

                    <div className="mt-2 flex flex-wrap items-center gap-2 text-[13px] font-bold text-black">
                      <span>Số lượng</span>

                      <button
                        type="button"
                        aria-label={`Giảm số lượng ${item.name}`}
                        onClick={() =>
                          updateQuantity(item.id, item.quantity - 1)
                        }
                        className="flex h-7 w-7 items-center justify-center rounded border border-gray-300"
                      >
                        −
                      </button>

                      <strong>{item.quantity}</strong>

                      <button
                        type="button"
                        aria-label={`Tăng số lượng ${item.name}`}
                        onClick={() =>
                          updateQuantity(item.id, item.quantity + 1)
                        }
                        className="flex h-7 w-7 items-center justify-center rounded border border-gray-300"
                      >
                        +
                      </button>

                      <button
                        type="button"
                        onClick={() => removeFromCart(item.id)}
                        className="ml-2 text-sm font-bold text-brand-red"
                      >
                        Xóa
                      </button>
                    </div>
                  </div>

                  <div className="self-center text-left text-[16px] font-black text-black sm:text-right">
                    {formatCurrency(item.price * item.quantity)}
                  </div>
                </article>
              ))}
            </div>
          )}
        </section>

        {/* Thông tin người đặt hàng */}
        <section className="rounded-lg bg-white p-7 shadow-soft">
          <h2 className="mb-4 text-[18px] font-black text-tayho-green">
            THÔNG TIN ĐẶT HÀNG
          </h2>

          <div className="space-y-2 text-[13px] font-medium text-tayho-greenDark">
            <label className="block">
              <span className="sr-only">Tên người đặt hàng</span>
              <input
                type="text"
                name="customerName"
                placeholder="Tên"
                className="h-10 w-full rounded-full border border-[#0f9b55] px-4"
              />
            </label>

            <label className="block">
              <span className="sr-only">Số điện thoại</span>
              <input
                type="tel"
                name="phone"
                placeholder="Số điện thoại"
                className="h-10 w-full rounded-full border border-[#0f9b55] px-4"
              />
            </label>

            <label className="block">
              <span className="sr-only">Địa chỉ giao hàng</span>
              <input
                type="text"
                name="address"
                placeholder="Địa chỉ giao hàng"
                className="h-10 w-full rounded-full border border-[#0f9b55] px-4"
              />
            </label>

            <label className="block">
              <span className="sr-only">Ghi chú đơn hàng</span>
              <textarea
                name="note"
                placeholder="Nhập yêu cầu của bạn tại đây..."
                className="h-[120px] w-full resize-none rounded-xl border border-[#0f9b55] px-4 py-3"
              />
            </label>
          </div>
        </section>

        {/* Phí giao hàng */}
        <section className="rounded-lg bg-white p-7 shadow-soft">
          <h2 className="mb-4 text-[18px] font-black text-tayho-green">
            PHÍ SHIP
          </h2>

          <div className="grid gap-4 text-[13px] md:grid-cols-[1fr_1fr_85px]">
            <p>Thời gian giao dự kiến: khoảng 1 tiếng</p>

            <div className="space-y-2">
              <label className="flex items-center gap-2">
                <RadioDot checked />
                Khoảng cách giao hàng ≤ 5 km
              </label>

              <label className="flex items-center gap-2">
                <RadioDot />
                Khoảng cách giao hàng &gt; 5 km
              </label>
            </div>

            <div className="text-left font-black md:text-right">
              <p className="text-tayho-green">Freeship!</p>
              <p className="mt-2 text-[#9a9a9a]">10.000 ₫</p>
            </div>
          </div>
        </section>

        {/* Phương thức thanh toán */}
        <section className="rounded-lg bg-white p-7 shadow-soft">
          <h2 className="mb-4 text-[18px] font-black text-tayho-green">
            PHƯƠNG THỨC THANH TOÁN
          </h2>

          <div className="grid gap-2 text-[13px] md:grid-cols-2">
            <label className="flex items-center gap-2">
              <RadioDot checked />
              Tiền mặt
            </label>

            <label className="flex items-center gap-2">
              <RadioDot />
              Chuyển khoản
            </label>
          </div>
        </section>

        {/* Chi tiết thanh toán */}
        <section className="rounded-lg bg-white p-7 shadow-soft">
          <h2 className="mb-4 text-[18px] font-black text-tayho-green">
            CHI TIẾT THANH TOÁN
          </h2>

          <div className="space-y-2 text-[13px]">
            <div className="flex justify-between gap-4">
              <span>Tổng tiền món ăn</span>
              <strong>{formatCurrency(totalPrice)}</strong>
            </div>

            <div className="flex justify-between gap-4">
              <span>Phí vận chuyển</span>
              <strong>0 ₫</strong>
            </div>

            <div className="flex justify-between gap-4">
              <span>Giảm giá</span>
              <strong>0 ₫</strong>
            </div>

            <div className="flex justify-between gap-4 pt-2 font-black">
              <span>Tổng thanh toán</span>
              <strong>{formatCurrency(totalPrice)}</strong>
            </div>
          </div>
        </section>

        {/* Xác nhận đặt hàng */}
        <div className="flex flex-col items-stretch justify-end gap-5 py-10 text-white sm:flex-row sm:items-center sm:gap-8">
          <strong className="text-[24px]">
            TỔNG CỘNG: {formatCurrency(totalPrice)}
          </strong>

          <button
            type="button"
            disabled={cartItems.length === 0}
            className="rounded-md bg-brand-red px-12 py-4 text-[16px] font-black disabled:cursor-not-allowed disabled:opacity-50"
          >
            ĐẶT ĐƠN
          </button>
        </div>
      </div>
    </main>
  );
}