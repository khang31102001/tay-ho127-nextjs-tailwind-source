"use client";

import { useCart } from "@/contexts/cart-context";
import { formatCurrency } from "@/data/menu-items";

function RadioDot({ checked = false }: { checked?: boolean }) {
  return <span className={`inline-block h-3 w-3 rounded-full border border-tayho-green ${checked ? "bg-tayho-green" : "bg-white"}`} />;
}

export function CheckoutSection() {
  const { cartItems, totalPrice, updateQuantity, removeFromCart } = useCart();

  return (
    <main className="site-shell food-pattern min-h-screen px-5 py-28 md:px-0">
      <div className="mx-auto max-w-[730px] space-y-3">
        <section className="rounded-lg bg-white p-7 shadow-soft">
          <h1 className="mb-5 text-[18px] font-black text-brand-green">THỰC ĐƠN CỦA BẠN HÔM NAY</h1>
          <div className="space-y-0">
            {cartItems.length === 0 ? (
              <div className="rounded border border-dashed border-[#9cae9e] p-10 text-center text-[15px] text-[#4b4b4b]">
                Giỏ hàng trống. Hãy chọn món và thêm vào giỏ hàng để tiếp tục.
              </div>
            ) : (
              cartItems.map((item) => (
                <div key={item.id} className="grid grid-cols-[115px_1fr_120px] gap-4 border-b border-black py-3 last:border-b-0">
                  <img src={item.image} alt={item.name} className="h-[88px] w-[105px] rounded object-cover" />
                  <div>
                    <h3 className="text-[16px] font-black text-brand-greenDark">{item.name}</h3>
                    <p className="mt-2 text-[13px] font-bold text-black">
                      Số lượng
                      <button
                        type="button"
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="mx-2 text-black"
                      >
                        −
                      </button>
                      <strong className="text-black">{item.quantity}</strong>
                      <button
                        type="button"
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="mx-2 text-black"
                      >
                        +
                      </button>
                      <button
                        type="button"
                        onClick={() => removeFromCart(item.id)}
                        className="ml-4 text-sm font-bold text-brand-red"
                      >
                        Xóa
                      </button>
                    </p>
                  </div>
                  <div className="self-center text-right text-[16px] font-black text-black">
                    {formatCurrency(item.price * item.quantity)}
                  </div>
                </div>
              ))
            )}
          </div>
        </section>

        <section className="rounded-lg bg-white p-7 shadow-soft">
          <h2 className="mb-4 text-[18px] font-black text-tayho-green">THÔNG TIN ĐẶT HÀNG</h2>
          <div className="space-y-2 text-[13px] font-medium text-tayho-greenDark">
            <input className="h-8 w-full rounded-full border border-[#0f9b55] px-4" defaultValue="Tên     NGỌC PHỤNG" />
            <input className="h-8 w-full rounded-full border border-[#0f9b55] px-4" defaultValue="SĐT     0364052006" />
            <input className="h-8 w-full rounded-full border border-[#0f9b55] px-4" defaultValue="Địa chỉ    44/26 NGÔ TẤT TỐ, PHƯỜNG THẠNH MỸ TÂY, TP.HCM" />
            <textarea className="h-[120px] w-full resize-none rounded-xl border border-[#0f9b55] px-4 py-3" defaultValue={"Ghi chú đơn hàng\nNhập yêu cầu của bạn tại đây..."} />
          </div>
        </section>

        <section className="rounded-lg bg-white p-7 shadow-soft">
          <h2 className="mb-4 text-[18px] font-black text-tayho-green">PHÍ SHIP</h2>
          <div className="grid gap-4 text-[13px] md:grid-cols-[1fr_1fr_85px]">
            <p>Thời gian giao dự kiến: 18:03 (~ 1 tiếng)</p>
            <div className="space-y-2">
              <label className="flex items-center gap-2"><RadioDot checked /> Khoảng cách giao hàng ≤5km</label>
              <label className="flex items-center gap-2"><RadioDot /> Khoảng cách giao hàng &gt;5km</label>
            </div>
            <div className="text-right font-black">
              <p className="text-tayho-green">Freeship!</p>
              <p className="mt-2 text-[#9a9a9a]">10.000</p>
            </div>
          </div>
        </section>

        <section className="rounded-lg bg-white p-7 shadow-soft">
          <h2 className="mb-4 text-[18px] font-black text-tayho-green">PHƯƠNG THỨC THANH TOÁN</h2>
          <div className="grid gap-2 text-[13px] md:grid-cols-2">
            <label className="flex items-center gap-2"><RadioDot checked /> Tiền mặt</label>
            <label className="flex items-center gap-2"><RadioDot /> Chuyển khoản</label>
          </div>
        </section>

        <section className="rounded-lg bg-white p-7 shadow-soft">
          <h2 className="mb-4 text-[18px] font-black text-tayho-green">CHI TIẾT THANH TOÁN</h2>
          <div className="space-y-2 text-[13px]">
            <div className="flex justify-between"><span>Tổng tiền bánh</span><strong>{formatCurrency(totalPrice)}</strong></div>
            <div className="flex justify-between"><span>Tổng tiền phí vận chuyển</span><strong>0 ₫</strong></div>
            <div className="flex justify-between"><span>Giảm giá</span><strong>0 ₫</strong></div>
            <div className="flex justify-between pt-2 font-black"><span>Tổng thanh toán</span><strong>{formatCurrency(totalPrice)}</strong></div>
          </div>
        </section>

        <div className="flex items-center justify-end gap-8 py-10 text-white">
          <strong className="text-[24px]">TỔNG CỘNG: &nbsp; {formatCurrency(totalPrice)}</strong>
          <button className="rounded-md bg-brand-red px-12 py-4 text-[16px] font-black">ĐẶT ĐƠN</button>
        </div>
      </div>
    </main>
  );
}
