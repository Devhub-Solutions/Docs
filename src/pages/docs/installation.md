---
layout: ../../layouts/DocLayout.astro
title: Cài đặt
description: Hướng dẫn cài đặt DevHub Docs trên máy tính của bạn từng bước một.
badge: Thiết lập
order: 2
---

## Yêu cầu trước khi cài đặt

Đảm bảo máy tính của bạn đã cài đặt:

- **Node.js** phiên bản 18 trở lên → [tải tại nodejs.org](https://nodejs.org)
- **Git** → [tải tại git-scm.com](https://git-scm.com)
- Tài khoản **GitHub** để lưu trữ và deploy

Kiểm tra phiên bản hiện tại:

```bash
node --version   # >= 18.0.0
npm --version    # >= 8.0.0
git --version
```

## Bước 1: Clone repository

```bash
git clone https://github.com/Devhub-Solutions/Docs.git
cd Docs
```

Hoặc bắt đầu từ đầu với repository mới:

```bash
mkdir my-docs && cd my-docs
git init
```

## Bước 2: Cài đặt dependencies

```bash
npm install
```

> ⏱️ Quá trình này mất khoảng 30–60 giây tùy tốc độ mạng.

Sau khi cài đặt, cấu trúc thư mục `node_modules` sẽ xuất hiện. Đây là thư mục được tự động tạo — **không commit** thư mục này vào Git.

## Bước 3: Chạy môi trường development

```bash
npm run dev
```

Kết quả mong đợi:

```
🚀 astro v5.x.x started in XXms
  ┌─────────────────────────────────────────────┐
  │ local    http://localhost:4321/Docs/         │
  │ network  http://192.168.x.x:4321/Docs/      │
  └─────────────────────────────────────────────┘
```

Mở trình duyệt và truy cập `http://localhost:4321/Docs/` để xem kết quả.

## Bước 4: Build cho production

```bash
npm run build
```

File build sẽ được tạo trong thư mục `dist/`. Bạn có thể preview trước khi deploy:

```bash
npm run preview
```

## Các lệnh hữu ích

| Lệnh | Mô tả |
|------|-------|
| `npm run dev` | Chạy dev server với hot reload |
| `npm run build` | Build cho production |
| `npm run preview` | Preview bản build production |
| `npm run astro` | Chạy Astro CLI trực tiếp |

## Xử lý lỗi phổ biến

### Lỗi "Cannot find module"

```bash
# Xóa node_modules và cài lại
rm -rf node_modules package-lock.json
npm install
```

### Lỗi Port đã được sử dụng

```bash
# Chạy trên port khác
npm run dev -- --port 4322
```

### Lỗi TypeScript

Kiểm tra file `tsconfig.json`:

```json
{
  "extends": "astro/tsconfigs/base",
  "compilerOptions": {
    "strictNullChecks": true
  }
}
```

## Cài đặt với pnpm (tùy chọn)

Nếu bạn muốn dùng **pnpm** thay vì npm (nhanh hơn và tiết kiệm disk space):

```bash
# Cài pnpm
npm install -g pnpm

# Cài dependencies
pnpm install

# Chạy dev
pnpm dev
```

---

Tiếp theo: [Cấu hình dự án →](/Docs/docs/configuration)
