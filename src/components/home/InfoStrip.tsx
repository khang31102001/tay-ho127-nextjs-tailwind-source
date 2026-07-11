const info = [
  { icon: "📍", title: "Địa chỉ chính", text: "127 Đinh Tiên Hoàng, phường Đa Kao, TP.HCM" },
  { icon: "🕘", title: "Mở cửa hàng ngày", text: "5:30 - 21:30 (T2 - CN)" },
  { icon: "📞", title: "Liên hệ đặt bàn", text: "(+84) 28 3820 0584" }
];

export function InfoStrip() {
  return (
    <section className="bg-tayho-red py-4 text-white">
      <div className="mx-auto grid max-w-[880px] grid-cols-1 gap-4 px-6 md:grid-cols-3 md:px-0">
        {info.map((item) => (
          <div key={item.title} className="flex items-center gap-4">
            <span className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-white text-xl">{item.icon}</span>
            <div>
              <h3 className="text-[15px] font-black">{item.title}</h3>
              <p className="text-[12px] font-medium">{item.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
