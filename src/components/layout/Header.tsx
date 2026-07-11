import Link from "next/link";

type HeaderProps = {
  variant?: "dark" | "light";
};

const navItems = [
  { href: "/", label: "Trang chủ" },
  { href: "/menu", label: "Thực đơn" }
];

export function Header({ variant = "light" }: HeaderProps) {
  const isDark = variant === "dark";

  return (
    <header className={isDark ? "sticky left-0 top-0 z-20 w-full" : "relative z-20 bg-tayho-cream"}>
      <div className="mx-auto flex h-[86px] w-full max-w-[880px] items-center justify-between px-5 md:px-0">
        <Link href="/" className="block w-[150px] md:w-[165px]" aria-label="Bánh Cuốn Tây Hồ 127">
          <img src={isDark ? "/images/logo-white.png" : "/images/logo-color.png"} alt="Tây Hồ 127" className="h-auto w-full" />
        </Link>

        <nav className="hidden items-center gap-16 text-[16px] font-black md:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className={isDark ? "text-white" : "text-tayho-greenDark"}>
              {item.label}
            </Link>
          ))}
        </nav>

        <div className={`flex items-center gap-5 text-[16px] font-bold ${isDark ? "text-white" : "text-tayho-greenDark"}`}>
          <span>Vi⌄</span>
          <span className="hidden opacity-90 md:inline">♟ Đăng nhập</span>
        </div>
      </div>
    </header>
  );
}
