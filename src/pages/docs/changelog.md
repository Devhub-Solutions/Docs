---
layout: ../../layouts/DocLayout.astro
title: Changelog
description: Lịch sử thay đổi và cập nhật của DevHub Docs.
badge: Changelog
order: 10
---

Tất cả các thay đổi quan trọng của dự án sẽ được ghi lại tại đây.

Format dựa trên [Keep a Changelog](https://keepachangelog.com/vi/1.0.0/), và dự án này tuân theo [Semantic Versioning](https://semver.org/lang/vi/).

---

## [1.0.0] — 2025-04-06

### ✨ Thêm mới

- **Trang chủ** với hero section, feature grid, và CTA
- **Tài liệu cơ bản** gồm: Giới thiệu, Cài đặt, Cấu hình, Viết nội dung
- **Giao diện** zinc dark theme + lime accent theo Tailwind CSS
- **CI/CD pipeline** với GitHub Actions tự động deploy lên GitHub Pages
- **Navbar** responsive với mobile menu
- **Sidebar** navigation với active state highlight
- **Footer** với links và branding
- **Table of Contents** tự động từ headings (JavaScript)
- **Syntax highlighting** với Shiki (theme: github-dark)
- **Typography** tùy chỉnh với `@tailwindcss/typography`
- **SEO** meta tags, Open Graph, sitemap tự động
- **Scrollbar** tùy chỉnh (zinc + lime hover)

### 🎨 Thiết kế

- Màu nền chính: `zinc-900` (`#18181b`)
- Màu surface: `zinc-800` (`#27272a`)
- Màu văn bản: `zinc-200` (`#e4e4e7`)
- Màu accent: `lime-500` (`#84cc16`)
- Font: Inter (sans), JetBrains Mono (code)

### 🔧 Kỹ thuật

- **Astro** v5.5.5 — Static site generation
- **Tailwind CSS** v3.4.17 — Utility-first styling
- **MDX** v4.0.8 — Markdown + components
- **@astrojs/sitemap** v3.2.1 — Auto sitemap

---

## Kế hoạch tương lai

### [1.1.0] — Dự kiến

- [ ] Tích hợp tìm kiếm toàn văn bản (Pagefind)
- [ ] Dark/light mode toggle
- [ ] Thêm hình ảnh và screenshots
- [ ] Component showcase page
- [ ] i18n (Tiếng Anh / Tiếng Việt)

### [1.2.0] — Dự kiến

- [ ] Trang blog/tin tức
- [ ] Comment system (Giscus)
- [ ] Analytics (Plausible)
- [ ] PDF export

---

Có đề xuất? [Tạo issue trên GitHub →](https://github.com/Devhub-Solutions/Docs/issues)
