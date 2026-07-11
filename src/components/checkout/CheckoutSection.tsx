import { formatCurrency } from "@/data/menu-items";

const orderLines = [
  {
    name: "Bánh cuốn nhân chà bông tôm",
    qty: 2,
    price: 100000,
    options: ["cay", "không cay", "ớt riêng"]
  },
  {
    name: "Chả quế / Chả lụa (2 miếng)",
    qty: 1,
    price: 24000,
    options: ["chả quế + chả lụa", "chả quế x2", "chả lụa x2"]
  },
  {
    name: "Bánh cuốn lá dứa nhân rau củ, đậu hủ",
    qty: 1,
    price: 35000,
    oldPrice: 44000,
    options: ["cay", "không cay", "ớt riêng"]
  }
];

function RadioDot({ checked = false }: { checked?: boolean }) {
  return <span className={`inline-block h-3 w-3 rounded-full border border-tayho-green ${checked ? "bg-tayho-green" : "bg-white"}`} />;
}

export function CheckoutSection() {
  return (
    <main className="site-shell food-pattern min-h-screen px-5 py-28 md:px-0">
      <div className="mx-auto max-w-[730px] space-y-3">
        <section className="rounded-lg bg-white p-7 shadow-soft">
          <h1 className="mb-5 text-[18px] font-black text-tayho-green">THỰC ĐƠN CỦA BẠN HÔM NAY</h1>
          <div className="space-y-0">
            {orderLines.map((line, index) => (
              <div key={line.name} className="grid grid-cols-[115px_1fr_120px] gap-4 border-b border-black py-3 last:border-b-0">
                <img src="/assets/product-banh-cuon.png" alt={line.name} className="h-[88px] w-[105px] rounded object-cover" />
                <div>
                  <h3 className="text-[16px] font-black text-tayho-greenDark">{line.name}</h3>
                  <p className="mt-2 text-[13px] text-[#8b8b8b]">Số lượng <button className="mx-2 text-black">−</button> <strong className="text-black">{line.qty}</strong> <button className="mx-2 text-black">+</button></p>
                  <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-[12px] text-[#494949]">
                    <span>{index === 1 ? "Loại chả" : "Nước mắm"}</span>
                    {line.options.map((option, optionIndex) => (
                      <label key={option} className="flex items-center gap-1"><RadioDot checked={optionIndex === 0} /> {option}</label>
                    ))}
                  </div>
                </div>
                <div className="self-center text-right text-[16px] font-black text-black">
                  {line.oldPrice && <p className="text-[12px] font-bold text-tayho-orange">-20% <span className="text-[#555] line-through">{formatCurrency(line.oldPrice)}</span></p>}
                  {formatCurrency(line.price)}
                </div>
              </div>
            ))}
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
            <div className="flex justify-between"><span>Tổng tiền bánh</span><strong>159.000 ₫</strong></div>
            <div className="flex justify-between"><span>Tổng tiền phí vận chuyển</span><strong>0 ₫</strong></div>
            <div className="flex justify-between"><span>Giảm giá</span><strong>0 ₫</strong></div>
            <div className="flex justify-between pt-2 font-black"><span>Tổng thanh toán</span><strong>159.000 ₫</strong></div>
          </div>
        </section>

        <div className="flex items-center justify-end gap-8 py-10 text-white">
          <strong className="text-[24px]">TỔNG CỘNG: &nbsp; 159.000 ₫</strong>
          <button className="rounded-md bg-tayho-red px-12 py-4 text-[16px] font-black">ĐẶT ĐƠN</button>
        </div>
      </div>
    </main>
  );
}
