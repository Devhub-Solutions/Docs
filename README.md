# DevHub Docs

Trang tài liệu kỹ thuật toàn diện được xây dựng với **Astro** và **Tailwind CSS**.

## Tính năng

- 📄 **Viết bằng Markdown** — Nội dung đầy đủ, có thể nhúng hình ảnh
- 🎨 **Giao diện zinc/lime** — Nền tối `bg-zinc-800/900` + điểm nhấn `lime-500/600`
- 🚀 **CI/CD tự động** — GitHub Actions deploy lên GitHub Pages
- ⚡ **Astro static** — Hiệu năng cao, SEO tốt
- 📱 **Responsive** — Tối ưu mọi thiết bị

## Cài đặt

```bash
npm install
npm run dev      # http://localhost:4321/Docs
npm run build    # Build production
npm run preview  # Preview build
```

## Cấu trúc

```
src/
├── components/   # Navbar, Sidebar, Footer
├── layouts/      # Layout.astro, DocLayout.astro
├── pages/
│   ├── index.astro
│   └── docs/     # Tài liệu Markdown
└── styles/
    └── global.css
```

## Deploy

Tự động deploy khi push lên `main` → GitHub Actions → GitHub Pages.

Xem tại: https://devhub-solutions.github.io/Docs
