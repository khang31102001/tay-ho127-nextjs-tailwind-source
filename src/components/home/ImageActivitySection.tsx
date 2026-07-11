import Image from "next/image";

export function ImageActivitySection() {
  return (
    <div className="placeholder-box relative h-[340px] w-full overflow-hidden">
      <Image
        src="/images/active-img-1.png"
        alt="Hoạt động tại Bánh Cuốn Tây Hồ 127"
        fill
        className="object-cover"
        sizes="100vw"
        priority
      />
    </div>
  );
}