// Pill nhỏ dùng cho tag, badge hoặc thông tin nhanh.
type PillProps = {
  children: React.ReactNode;
  tone?: "red" | "green";
};

export function Pill({ children, tone = "green" }: PillProps) {
  // Tone đỏ hoặc xanh để bám hệ màu logo.
  const toneClass = tone === "red" ? "bg-brand-red text-white" : "bg-brand-green text-white";

  // Render pill bo tròn dễ tái sử dụng.
  return <span className={`inline-flex rounded-full px-3 py-1 text-xs font-black uppercase tracking-[0.18em] ${toneClass}`}>{children}</span>;
}
