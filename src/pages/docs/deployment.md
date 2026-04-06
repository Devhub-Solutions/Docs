---
layout: ../../layouts/DocLayout.astro
title: Triển khai
description: Hướng dẫn tự động deploy lên GitHub Pages với GitHub Actions CI/CD pipeline.
badge: DevOps
order: 7
---

## Tổng quan CI/CD Pipeline

DevHub Docs sử dụng **GitHub Actions** để tự động hóa quá trình build và deploy. Mỗi khi bạn push code lên branch `main`, pipeline sẽ:

1. **Checkout** — Lấy code mới nhất
2. **Setup Node.js** — Cài đặt Node.js 20
3. **Install dependencies** — Chạy `npm install`
4. **Build** — Chạy `npm run build`
5. **Deploy** — Upload `dist/` lên GitHub Pages

```
Push to main
     │
     ▼
GitHub Actions triggered
     │
     ▼
┌─────────────────┐
│  build job      │
│  - checkout     │
│  - setup node   │
│  - npm install  │
│  - npm build    │
│  - upload pages │
└─────────────────┘
     │
     ▼
┌─────────────────┐
│  deploy job     │
│  - deploy pages │
└─────────────────┘
     │
     ▼
Live tại GitHub Pages 🚀
```

## Thiết lập GitHub Pages

### Bước 1: Bật GitHub Pages

1. Vào **Settings** của repository
2. Chọn **Pages** trong sidebar
3. Trong phần **Build and deployment**:
   - **Source**: Chọn `GitHub Actions`
4. Lưu lại

### Bước 2: Cấu hình URL trong `astro.config.mjs`

```js
export default defineConfig({
  // Thay bằng URL GitHub Pages của bạn
  site: 'https://ten-to-chuc.github.io',
  
  // Thay bằng tên repository (bỏ qua nếu là user/org site)
  base: '/ten-repository',
});
```

Ví dụ cho repository `Devhub-Solutions/Docs`:

```js
export default defineConfig({
  site: 'https://devhub-solutions.github.io',
  base: '/Docs',
});
```

### Bước 3: Workflow file đã được cấu hình

File `.github/workflows/deploy.yml` đã có sẵn và được cấu hình đầy đủ. Bạn chỉ cần push code là CI/CD sẽ tự chạy.

## File Workflow chi tiết

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]
  workflow_dispatch:  # Cho phép trigger thủ công

permissions:
  contents: read
  pages: write
  id-token: write

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'

      - name: Install dependencies
        run: npm ci

      - name: Build site
        run: npm run build

      - name: Upload Pages artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: dist/

  deploy:
    needs: build
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

## Kiểm tra trạng thái Deploy

Sau khi push code:

1. Vào tab **Actions** của repository
2. Chọn workflow run mới nhất
3. Theo dõi progress của các job
4. Khi hoàn thành, truy cập URL được hiển thị

## Trigger deploy thủ công

Nếu muốn deploy mà không cần push code:

1. Vào **Actions** tab
2. Chọn workflow **"Deploy to GitHub Pages"**
3. Click **"Run workflow"**
4. Chọn branch và click **"Run workflow"**

## Xử lý lỗi deploy

### Lỗi "Permission denied"

Đảm bảo đã bật GitHub Pages và cấu hình source là `GitHub Actions`:
- Settings → Pages → Source: **GitHub Actions**

### Lỗi Build

Kiểm tra log trong Actions tab để xem lỗi cụ thể. Thường gặp:

```bash
# Test build cục bộ trước khi push
npm run build
```

### URL không đúng

Kiểm tra `base` trong `astro.config.mjs` phải khớp với tên repository:

```js
// Repository: github.com/user/my-docs
base: '/my-docs'  // Đúng
base: '/My-Docs'  // Sai (case-sensitive)
```

## Custom domain (tùy chọn)

Nếu bạn có domain riêng:

1. Tạo file `public/CNAME` với nội dung là domain của bạn:

```
docs.example.com
```

2. Cập nhật `site` trong `astro.config.mjs`:

```js
site: 'https://docs.example.com',
base: '/',  // Không cần base path với custom domain
```

3. Cấu hình DNS: Thêm CNAME record trỏ đến `ten-to-chuc.github.io`

---

Xem thêm: [API Reference →](/Docs/docs/api-reference)
