---
layout: ../../layouts/DocLayout.astro
title: Cấu hình
description: Tùy chỉnh DevHub Docs theo nhu cầu của bạn — từ URL, theme đến tích hợp.
badge: Cấu hình
order: 3
---

## File cấu hình chính

Cấu hình của DevHub Docs được chia thành hai file chính:

- **`astro.config.mjs`** — Cấu hình framework Astro
- **`tailwind.config.mjs`** — Cấu hình Tailwind CSS

## Cấu hình Astro (`astro.config.mjs`)

```js
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  // URL của site sau khi deploy
  site: 'https://ten-to-chuc.github.io',
  
  // Base path (tên repository nếu deploy lên project site)
  base: '/ten-repository',
  
  integrations: [
    tailwind(),    // Tích hợp Tailwind CSS
    mdx(),         // Hỗ trợ MDX
    sitemap(),     // Tự động tạo sitemap.xml
  ],
  
  output: 'static',  // Static site generation
  
  markdown: {
    shikiConfig: {
      theme: 'github-dark',  // Theme cho code blocks
      wrap: true,
    },
  },
});
```

### Các tùy chọn quan trọng

| Tùy chọn | Mặc định | Mô tả |
|----------|----------|-------|
| `site` | — | URL đầy đủ của site (bắt buộc cho sitemap) |
| `base` | `/` | Đường dẫn gốc khi deploy vào subdirectory |
| `output` | `'static'` | Chế độ render: `'static'` hoặc `'server'` |

## Cấu hình Tailwind (`tailwind.config.mjs`)

```js
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Thêm màu tùy chỉnh nếu cần
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
```

### Bảng màu mặc định

DevHub Docs sử dụng bảng màu **zinc + lime**:

| Token | Giá trị | Dùng cho |
|-------|---------|---------|
| `bg-zinc-900` | `#18181b` | Nền trang chính |
| `bg-zinc-800` | `#27272a` | Card, sidebar, navbar |
| `text-zinc-200` | `#e4e4e7` | Văn bản chính |
| `text-zinc-400` | `#a1a1aa` | Văn bản phụ |
| `lime-500` | `#84cc16` | Điểm nhấn, CTA |
| `lime-400` | `#a3e635` | Hover state, links |

## Cấu hình Navigation

Chỉnh sửa `src/components/Sidebar.astro` để thêm/xóa mục sidebar:

```js
const sections = [
  {
    title: 'Tên section',
    items: [
      { href: '/Docs/docs/ten-trang', label: 'Tên hiển thị', icon: '📄' },
    ],
  },
];
```

## Biến môi trường

Tạo file `.env` ở thư mục gốc (không commit vào Git):

```env
# Ví dụ biến môi trường
PUBLIC_SITE_URL=https://devhub-solutions.github.io/Docs
PUBLIC_ALGOLIA_APP_ID=your_app_id
PUBLIC_ALGOLIA_API_KEY=your_search_key
```

> ⚠️ Chỉ các biến có tiền tố `PUBLIC_` mới có thể truy cập từ client-side code.

## Cấu hình SEO

Mỗi trang tài liệu có thể có meta data riêng qua frontmatter:

```md
---
layout: ../../layouts/DocLayout.astro
title: Tiêu đề trang
description: Mô tả ngắn cho SEO và social sharing
badge: Nhãn hiển thị
---
```

---

Tiếp theo: [Cách viết nội dung →](/Docs/docs/writing-content)
