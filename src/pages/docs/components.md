---
layout: ../../layouts/DocLayout.astro
title: Components
description: Thư viện các components tái sử dụng trong DevHub Docs.
badge: UI
order: 6
---

## Tổng quan

DevHub Docs bao gồm các Astro components được thiết kế với theme zinc/lime. Tất cả đều nằm trong `src/components/`.

## Navbar

File: `src/components/Navbar.astro`

Component navigation bar cố định ở đầu trang với:
- Logo + tên site
- Các link điều hướng
- Search bar (UI)
- GitHub link
- Mobile menu responsive

```astro
---
// Tùy chỉnh links trong array navLinks
const navLinks = [
  { href: '/Docs/docs/getting-started', label: 'Tài liệu' },
  { href: '/Docs/docs/api-reference', label: 'API' },
  { href: 'https://github.com/Devhub-Solutions', label: 'GitHub', external: true },
];
---
```

## Sidebar

File: `src/components/Sidebar.astro`

Component sidebar điều hướng với:
- Nhóm các link theo sections
- Highlight trang hiện tại
- Quick start button
- Links phản hồi

```astro
---
// Cấu hình sections trong Sidebar.astro
const sections = [
  {
    title: 'Bắt đầu',
    items: [
      { href: '/Docs/docs/getting-started', label: 'Giới thiệu', icon: '🚀' },
    ],
  },
];
---
```

## DocLayout

File: `src/layouts/DocLayout.astro`

Layout chính cho tất cả trang tài liệu:

```astro
---
// Props của DocLayout
export interface Props {
  title: string;
  description?: string;
  frontmatter?: {
    title?: string;
    description?: string;
    badge?: string;
  };
}
---
```

Cấu trúc layout:
- **Sidebar** (trái, ≥1024px)
- **Main content** (giữa, markdown rendered)
- **Table of Contents** (phải, ≥1280px, tự động từ headings)

## Utility Classes

Các class helper được định nghĩa trong `src/styles/global.css`:

### `.btn-primary`
Button chính với background lime:

```html
<a href="/docs" class="btn-primary">Bắt đầu</a>
```

### `.btn-secondary`
Button phụ với border zinc:

```html
<button class="btn-secondary">Hủy</button>
```

### `.card`
Card container với hover effect:

```html
<div class="card">
  <h3>Tiêu đề</h3>
  <p>Nội dung</p>
</div>
```

### `.badge-lime` và `.badge-zinc`
Nhãn nhỏ:

```html
<span class="badge-lime">Mới</span>
<span class="badge-zinc">v1.0.0</span>
```

### `.sidebar-link`
Link cho sidebar navigation:

```html
<a href="/docs" class="sidebar-link active">Trang hiện tại</a>
<a href="/docs/other" class="sidebar-link">Trang khác</a>
```

## Thêm Component mới

Tạo file `.astro` mới trong `src/components/`:

```astro
---
// src/components/Alert.astro
export interface Props {
  type: 'info' | 'warning' | 'success' | 'error';
  message: string;
}

const { type, message } = Astro.props;

const styles = {
  info: 'bg-blue-500/10 border-blue-500/30 text-blue-300',
  warning: 'bg-yellow-500/10 border-yellow-500/30 text-yellow-300',
  success: 'bg-lime-500/10 border-lime-500/30 text-lime-300',
  error: 'bg-red-500/10 border-red-500/30 text-red-300',
};
---

<div class:list={['border rounded-lg p-4', styles[type]]}>
  {message}
</div>
```

Sử dụng trong MDX:

```mdx
import Alert from '../../components/Alert.astro';

<Alert type="success" message="Cài đặt thành công!" />
```

---

Tiếp theo: [Triển khai →](/Docs/docs/deployment)
