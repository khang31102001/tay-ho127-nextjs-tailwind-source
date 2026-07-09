// Import Container để giữ padding/max-width đồng bộ.
import { Container } from "@/components/ui/Container";
// Import Logo dùng lại ở footer.
import { Logo } from "@/components/ui/Logo";
// Import dữ liệu site và nav tập trung.
import { navItems, site } from "@/data/site";
// Import Link cho các đường dẫn footer.
import Link from "next/link";

// Footer chứa thông tin liên hệ và menu phụ.
export function Footer() {
  // Render footer nền tối tương phản với nền kem.
  return (
    <footer id="lien-he" className="bg-brand-ink text-white">
      <Container className="grid gap-10 py-12 md:grid-cols-[1.2fr_.8fr_.8fr] md:py-16">
        <div>
          <Logo tone="white" className="h-auto w-56" />
          <p className="mt-6 max-w-md text-sm leading-7 text-white/70">{site.tagline}</p>
        </div>
        <div>
          <h3 className="text-sm font-black uppercase tracking-[0.22em] text-white">Thông tin</h3>
          <div className="mt-5 space-y-3 text-sm leading-6 text-white/70">
            <p>{site.address}</p>
            <p>{site.openingHours}</p>
            <p>{site.phone}</p>
          </div>
        </div>
        <div>
          <h3 className="text-sm font-black uppercase tracking-[0.22em] text-white">Điều hướng</h3>
          <div className="mt-5 grid gap-3 text-sm text-white/70">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="transition hover:text-white">
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </Container>
      <div className="border-t border-white/10 py-5 text-center text-xs uppercase tracking-[0.18em] text-white/50">
        © 2026 {site.name}. Frontend source by Next.js + TailwindCSS.
      </div>
    </footer>
  );
}
