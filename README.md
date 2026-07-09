# Bánh Cuốn Tây Hồ 127 — Next.js + TailwindCSS Source

## 1. Cách chạy

```bash
npm install
npm run app
```

Mở trình duyệt tại `http://localhost:3000`.

## 2. Cấu trúc source

```txt
app/
  layout.jsx              # Layout gốc: import CSS, Navbar, Footer
  page.jsx                # Trang chủ index
  thuc-don/page.jsx       # Trang thực đơn
src/
  components/             # Component tái sử dụng
  data/site.js            # Dữ liệu tập trung: menu, thông tin quán, ảnh, nav
  styles/tokens.css       # Màu sắc, font, token thương hiệu
  styles/fonts.css        # Khai báo @font-face local
  styles/components.css   # Class Tailwind dùng chung bằng @apply
  config/theme.js         # Token JS tham khảo cho developer
public/images/            # Ảnh/logo dùng trong UI
public/fonts/             # Bạn tự đặt font local vào đây
```

## 3. Chỗ cần chỉnh khi mở rộng

- Đổi màu thương hiệu: sửa `src/styles/tokens.css` và nếu cần thì sửa đồng bộ `tailwind.config.js`.
- Đổi món/giá/mô tả: sửa `src/data/site.js`.
- Đổi ảnh/logo: thay file trong `public/images` hoặc đổi path trong `src/data/site.js`.
- Thêm trang mới: tạo folder mới trong `app/`, sau đó thêm link vào `navItems` trong `src/data/site.js`.

## 4. Lưu ý về font

Source không đóng gói file font gốc. Bạn copy font đã có quyền sử dụng vào `public/fonts` theo đúng tên trong `public/fonts/README.md`. Khi có font, giao diện sẽ bám sát hơn với thiết kế đã gửi.
