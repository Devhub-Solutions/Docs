---
layout: ../../layouts/DocLayout.astro
title: API Reference
description: Tham khảo đầy đủ các props, options và cấu hình của DevHub Docs.
badge: Tham khảo
order: 8
---

## Frontmatter Properties

Mỗi trang tài liệu (`.md` hoặc `.mdx`) có thể dùng các properties sau trong frontmatter:

| Property | Kiểu | Bắt buộc | Mô tả |
|----------|------|----------|-------|
| `layout` | `string` | ✅ | Đường dẫn tới layout file |
| `title` | `string` | ✅ | Tiêu đề trang (hiển thị trong `<h1>` và `<title>`) |
| `description` | `string` | ❌ | Mô tả cho SEO (≤160 ký tự) |
| `badge` | `string` | ❌ | Nhãn nhỏ hiển thị trên tiêu đề |
| `order` | `number` | ❌ | Thứ tự sắp xếp trong sidebar |

### Ví dụ đầy đủ

```yaml
---
layout: ../../layouts/DocLayout.astro
title: Tên trang tài liệu
description: Mô tả ngắn gọn cho trang này, tối đa 160 ký tự.
badge: Mới
order: 1
---
```

## Layout Props

### `Layout.astro`

| Prop | Kiểu | Mặc định | Mô tả |
|------|------|----------|-------|
| `title` | `string` | — | Tiêu đề trang |
| `description` | `string` | `'DevHub Documentation...'` | Meta description |
| `image` | `string` | — | URL ảnh OG (Open Graph) |

### `DocLayout.astro`

| Prop | Kiểu | Mặc định | Mô tả |
|------|------|----------|-------|
| `title` | `string` | — | Tiêu đề (overridden bởi frontmatter) |
| `description` | `string` | — | Mô tả |
| `frontmatter` | `object` | — | Frontmatter object từ Astro |

### `Sidebar.astro`

| Prop | Kiểu | Mặc định | Mô tả |
|------|------|----------|-------|
| `currentPath` | `string` | `''` | URL hiện tại để highlight active link |

## Astro Config API

```typescript
// astro.config.mjs
interface AstroConfig {
  site: string;          // URL đầy đủ của site
  base: string;          // Base path (default: '/')
  output: 'static';      // Luôn là 'static' cho GitHub Pages
  integrations: Array;   // [tailwind(), mdx(), sitemap()]
  markdown: {
    shikiConfig: {
      theme: string;     // Code highlight theme
      wrap: boolean;     // Wrap long lines
    };
  };
}
```

## Tailwind Classes Reference

### Colors

```css
/* Zinc (backgrounds & text) */
bg-zinc-950  /* #09090b — rất tối */
bg-zinc-900  /* #18181b — nền chính */
bg-zinc-800  /* #27272a — surface */
bg-zinc-700  /* #3f3f46 — elevated */
text-zinc-100 /* #f4f4f5 — heading */
text-zinc-200 /* #e4e4e7 — body */
text-zinc-300 /* #d4d4d8 — muted */
text-zinc-400 /* #a1a1aa — subtle */
text-zinc-500 /* #71717a — disabled */

/* Lime (accents) */
bg-lime-500   /* #84cc16 — CTA */
bg-lime-400   /* #a3e635 — hover */
text-lime-400 /* #a3e635 — links */
text-lime-300 /* #bef264 — code */
border-lime-500 /* active border */
```

### Component Classes

```css
.btn-primary    /* Primary CTA button */
.btn-secondary  /* Secondary button */
.card           /* Card container */
.badge          /* Base badge */
.badge-lime     /* Lime accent badge */
.badge-zinc     /* Zinc neutral badge */
.sidebar-link   /* Sidebar navigation link */
.sidebar-link.active /* Active sidebar link */
```

## GitHub Actions Workflow

```yaml
# .github/workflows/deploy.yml

# Triggers
on:
  push:
    branches: [main]      # Deploy khi push lên main
  workflow_dispatch:       # Deploy thủ công

# Permissions cần thiết
permissions:
  contents: read
  pages: write
  id-token: write

# Concurrency — chỉ deploy một lần
concurrency:
  group: pages
  cancel-in-progress: false

# Jobs
jobs:
  build:                   # Build site
    runs-on: ubuntu-latest
  deploy:                  # Deploy lên GitHub Pages
    needs: build
    environment: github-pages
```

## Cấu trúc thư mục

```
src/
├── components/
│   ├── Navbar.astro        # Header navigation
│   ├── Sidebar.astro       # Docs sidebar
│   └── Footer.astro        # Site footer
├── layouts/
│   ├── Layout.astro        # Base HTML layout
│   └── DocLayout.astro     # Documentation page layout
├── pages/
│   ├── index.astro         # Homepage (/)
│   └── docs/
│       ├── getting-started.md
│       ├── installation.md
│       └── ...
└── styles/
    └── global.css          # Global Tailwind + custom styles
```

---

Xem thêm: [Ví dụ →](/Docs/docs/examples)
