// Import Link cho navigation.
import Link from "next/link";
// Import Container để giữ layout đồng nhất.
import { Container } from "@/components/ui/Container";
// Import Logo dùng chung.
import { Logo } from "@/components/ui/Logo";
// Import ButtonLink cho CTA đặt món.
import { ButtonLink } from "@/components/ui/ButtonLink";
// Import navItems từ data để tránh lặp menu nhiều nơi.
import { navItems } from "@/data/site";

// Navbar dạng sticky, dùng chung trên tất cả page.
export function Navbar() {
  // Render thanh điều hướng cố định phía trên.
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-brand-ink/90 backdrop-blur-xl">
      <Container className="flex h-20 items-center justify-between gap-6">
        <Logo tone="white" className="h-auto w-40 md:w-48" />
        <nav aria-label="Điều hướng chính" className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="focus-ring rounded-full text-sm font-bold uppercase tracking-[0.16em] text-white/80 transition hover:text-white">
              {item.label}
            </Link>
          ))}
        </nav>
        <ButtonLink href="/thuc-don" variant="primary" className="hidden md:inline-flex">
          Xem món
        </ButtonLink>
        <Link href="/thuc-don" className="focus-ring inline-flex rounded-full bg-white px-4 py-2 text-xs font-black uppercase tracking-[0.16em] text-brand-red md:hidden">
          Menu
        </Link>
      </Container>
    </header>
  );
}
