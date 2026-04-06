---
layout: ../../layouts/DocLayout.astro
title: Giao diện & CSS
description: Chi tiết về hệ thống màu sắc zinc/lime và cách tùy chỉnh giao diện với Tailwind CSS.
badge: Thiết kế
order: 5
---

## Triết lý thiết kế

DevHub Docs sử dụng phong cách thiết kế **"tối tinh tế"** (dark minimal), lấy cảm hứng từ các công cụ developer hiện đại:

- **Nền chính**: Màu zinc tối trung tính (`zinc-900`, `zinc-800`)
- **Văn bản**: Zinc sáng (`zinc-200`, `zinc-300`) để dễ đọc
- **Điểm nhấn**: Lime tươi sáng (`lime-500`, `lime-400`) cho CTAs và hover

## Bảng màu chi tiết

### Nền (Backgrounds)

| Class | Hex | Dùng cho |
|-------|-----|---------|
| `bg-zinc-950` | `#09090b` | Nền rất tối, overlay |
| `bg-zinc-900` | `#18181b` | **Nền trang chính** |
| `bg-zinc-800` | `#27272a` | Card, sidebar, inputs |
| `bg-zinc-700` | `#3f3f46` | Hover backgrounds |

### Văn bản (Text)

| Class | Hex | Dùng cho |
|-------|-----|---------|
| `text-zinc-100` | `#f4f4f5` | Tiêu đề quan trọng |
| `text-zinc-200` | `#e4e4e7` | **Văn bản chính** |
| `text-zinc-300` | `#d4d4d8` | Nội dung tài liệu |
| `text-zinc-400` | `#a1a1aa` | Văn bản phụ, mô tả |
| `text-zinc-500` | `#71717a` | Nhãn, metadata |

### Điểm nhấn (Accents)

| Class | Hex | Dùng cho |
|-------|-----|---------|
| `text-lime-400` | `#a3e635` | Links, active states |
| `bg-lime-500` | `#84cc16` | **CTA buttons, badges** |
| `border-lime-500` | `#84cc16` | Active borders |
| `bg-lime-500/10` | opacity | Subtle backgrounds |

## Components có sẵn

### Buttons

```html
<!-- Primary CTA (lime) -->
<a href="/docs" class="btn-primary">
  Bắt đầu ngay
</a>

<!-- Secondary (zinc) -->
<a href="/github" class="btn-secondary">
  Xem GitHub
</a>
```

### Cards

```html
<div class="card">
  <h3 class="font-semibold text-zinc-100">Tiêu đề card</h3>
  <p class="text-zinc-400 mt-2">Nội dung mô tả...</p>
</div>
```

### Badges

```html
<!-- Lime badge -->
<span class="badge-lime">Mới</span>

<!-- Zinc badge -->
<span class="badge-zinc">v1.0.0</span>
```

## Ví dụ live

Dưới đây là demo các component với màu zinc/lime:

**Điểm nhấn lime** trong văn bản, ví dụ [liên kết này](/Docs/docs/getting-started) sẽ có màu lime.

> 🎨 **Thiết kế**: Màu lime (`#84cc16`) được chọn vì tương phản tốt với nền zinc tối, tạo cảm giác tươi sáng mà không chói mắt.

## Tùy chỉnh màu sắc

Để thay đổi màu accent, chỉnh trong `tailwind.config.mjs`:

```js
// Đổi từ lime sang cyan
theme: {
  extend: {
    // Thêm màu mới nếu cần
  }
}
```

Và cập nhật các class trong `src/styles/global.css`:

```css
/* Đổi accent color */
.btn-primary {
  @apply bg-cyan-500 hover:bg-cyan-400 text-zinc-900;
}
```

## Typography

DevHub Docs dùng `@tailwindcss/typography` plugin để style nội dung Markdown:

```html
<div class="prose prose-invert prose-zinc">
  <!-- Markdown content được render ở đây -->
</div>
```

Các class prose được tùy chỉnh trong `DocLayout.astro` để phù hợp với màu zinc/lime:

```html
class="prose prose-invert 
  prose-a:text-lime-400 
  prose-code:text-lime-300
  prose-blockquote:border-l-lime-500
  prose-li:marker:text-lime-500"
```

## Dark mode

Toàn bộ site luôn ở chế độ **dark** (không có light mode toggle). Mode được set cố định:

```html
<!-- src/layouts/Layout.astro -->
<html lang="vi" class="dark">
```

Và trong Tailwind config:

```js
darkMode: 'class',
```

## Responsive design

Layout tự động điều chỉnh theo kích thước màn hình:

| Breakpoint | Kích thước | Thay đổi |
|-----------|-----------|---------|
| `sm` | ≥ 640px | Search bar hiển thị |
| `md` | ≥ 768px | Mobile menu ẩn |
| `lg` | ≥ 1024px | Sidebar hiển thị |
| `xl` | ≥ 1280px | Table of contents hiển thị |

---

Tiếp theo: [Components →](/Docs/docs/components)
