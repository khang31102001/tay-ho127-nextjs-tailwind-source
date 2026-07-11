export function Footer() {
  return (
    <footer className="site-shell bg-tayho-green px-6 py-9 text-white">
      <div className="mx-auto grid max-w-[880px] grid-cols-1 gap-8 md:grid-cols-[1.1fr_1fr_1.25fr] md:items-start">
        <div className="w-[260px]">
          <img src="/assets/logo-white.png" alt="Tây Hồ 127" />
        </div>

        <div>
          <h3 className="mb-4 text-[17px] font-black">Theo dõi chúng tôi</h3>
          <ul className="space-y-3 text-[14px] font-medium">
            <li>🟠 www.tayho127.com</li>
            <li>🟠 Bánh cuốn Tây Hồ Đinh Tiên Hoàng</li>
            <li>🟠 www.facebook.com/banhcuontayho127</li>
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-[17px] font-black">Liên hệ</h3>
          <ul className="space-y-3 text-[14px] font-medium">
            <li>📍 127 Đinh Tiên Hoàng, phường Đa Kao, TP.HCM</li>
            <li>📞 (+84) 28 3820 0584</li>
            <li>🕘 5:30 - 21:30 (Thứ 2 - Chủ Nhật)</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
