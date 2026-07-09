// Import helper nối class dùng chung.
import { cn } from "@/lib/cn";

// Container chuẩn giúp mọi section cùng max-width và padding ngang.
export function Container({ className, children }) {
  // className truyền vào sẽ được merge với container-page.
  return <div className={cn("container-page", className)}>{children}</div>;
}
