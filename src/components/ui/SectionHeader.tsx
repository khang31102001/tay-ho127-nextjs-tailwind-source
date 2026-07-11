// Component tiêu đề section để giữ format đồng nhất.
type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export function SectionHeader({ eyebrow, title, description, align = "left" }: SectionHeaderProps) {
  // Xác định căn giữa hoặc căn trái theo props.
  const alignment = align === "center" ? "mx-auto text-center" : "";

  // Render cụm eyebrow, title và mô tả.
  return (
    <div className={`max-w-3xl ${alignment}`}>
      {eyebrow ? <span className="eyebrow">{eyebrow}</span> : null}
      <h2 className="heading-section mt-5">{title}</h2>
      {description ? <p className="body-lead mt-5">{description}</p> : null}
    </div>
  );
}
