/** @type {import('next').NextConfig} */
const nextConfig = {
  // Giữ source đơn giản: dùng ảnh nội bộ trong thư mục /public/images.
  images: {
    // Cho phép Next tối ưu ảnh local bằng component <Image />.
    unoptimized: false,
  },
  // Bật strict mode để phát hiện lỗi render trong quá trình phát triển.
  reactStrictMode: true,
};

export default nextConfig;
