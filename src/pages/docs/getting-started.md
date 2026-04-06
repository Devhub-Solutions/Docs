---
layout: ../../layouts/DocLayout.astro
title: Giới thiệu
description: Chào mừng đến với DevHub Docs — tài liệu kỹ thuật toàn diện dành cho nhà phát triển.
badge: Bắt đầu
order: 1
---

## DevHub Docs là gì?

**DevHub Docs** là nền tảng tài liệu kỹ thuật được xây dựng với [Astro](https://astro.build) và [Tailwind CSS](https://tailwindcss.com). Hệ thống cho phép bạn viết tài liệu bằng **Markdown** (`.md`) hoặc **MDX** (`.mdx`), sau đó tự động triển khai lên **GitHub Pages** thông qua CI/CD pipeline.

> 💡 **Mục tiêu của chúng tôi**: Cung cấp một nền tảng tài liệu đẹp, nhanh, và dễ sử dụng cho toàn bộ cộng đồng nhà phát triển Việt Nam.

## Tính năng nổi bật

- ✅ **Viết bằng Markdown** — Cú pháp đơn giản, dễ học, dễ duy trì
- ✅ **Giao diện tối zinc + lime** — Thiết kế hiện đại, dễ nhìn trong nhiều giờ
- ✅ **CI/CD tự động** — Push code → GitHub Actions build → Deploy lên GitHub Pages
- ✅ **Responsive** — Tối ưu cho mobile, tablet, và desktop
- ✅ **Tìm kiếm** — Tìm nội dung trong toàn bộ tài liệu
- ✅ **Syntax highlighting** — Màu sắc đẹp cho code blocks
- ✅ **SEO tối ưu** — Meta tags, sitemap, Open Graph

## Công nghệ sử dụng

| Công nghệ | Phiên bản | Mô tả |
|-----------|-----------|-------|
| [Astro](https://astro.build) | v5+ | Framework static site |
| [Tailwind CSS](https://tailwindcss.com) | v3+ | Utility-first CSS |
| [MDX](https://mdxjs.com) | v4+ | Markdown + JSX |
| [GitHub Actions](https://github.com/features/actions) | — | CI/CD pipeline |
| [GitHub Pages](https://pages.github.com) | — | Hosting miễn phí |

## Cấu trúc dự án

```
devhub-docs/
├── .github/
│   └── workflows/
│       └── deploy.yml       # CI/CD workflow
├── src/
│   ├── components/          # Astro components
│   │   ├── Navbar.astro
│   │   ├── Sidebar.astro
│   │   └── Footer.astro
│   ├── layouts/
│   │   ├── Layout.astro     # Base layout
│   │   └── DocLayout.astro  # Layout cho docs
│   ├── pages/
│   │   ├── index.astro      # Trang chủ
│   │   └── docs/            # Các trang tài liệu
│   └── styles/
│       └── global.css       # Global styles
├── public/                  # Static assets
├── astro.config.mjs
├── tailwind.config.mjs
└── package.json
```

## Bước tiếp theo

Sau khi đọc phần giới thiệu này, bạn có thể:

1. **[Cài đặt](/Docs/docs/installation)** — Thiết lập môi trường phát triển
2. **[Cấu hình](/Docs/docs/configuration)** — Tùy chỉnh theo nhu cầu
3. **[Viết nội dung](/Docs/docs/writing-content)** — Bắt đầu viết tài liệu
4. **[Triển khai](/Docs/docs/deployment)** — Deploy lên GitHub Pages

## Yêu cầu hệ thống

Để chạy DevHub Docs, bạn cần:

- **Node.js** ≥ 18.0.0
- **npm** ≥ 8.0.0 (hoặc pnpm/yarn)
- **Git** (để quản lý code)
- Tài khoản **GitHub** (để deploy)

---

Hãy bắt đầu với [hướng dẫn cài đặt →](/Docs/docs/installation)
