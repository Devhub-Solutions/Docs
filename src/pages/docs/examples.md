---
layout: ../../layouts/DocLayout.astro
title: Ví dụ thực tế
description: Các ví dụ cụ thể giúp bạn nhanh chóng bắt đầu với DevHub Docs.
badge: Ví dụ
order: 9
---

## Ví dụ 1: Trang tài liệu đơn giản

Tạo file `src/pages/docs/my-guide.md`:

```md
---
layout: ../../layouts/DocLayout.astro
title: Hướng dẫn của tôi
description: Một ví dụ trang tài liệu đơn giản
badge: Hướng dẫn
---

## Giới thiệu

Đây là trang tài liệu mẫu của tôi.

## Cài đặt

```bash
npm install my-package
```

## Sử dụng

```javascript
import { myFunction } from 'my-package';
myFunction({ option: 'value' });
```
```

## Ví dụ 2: Trang với bảng so sánh

```md
---
layout: ../../layouts/DocLayout.astro
title: So sánh các framework
---

## Framework JavaScript phổ biến

| Framework | Stars | Bundle size | Learning curve |
|-----------|-------|-------------|----------------|
| React | ⭐⭐⭐⭐⭐ | ~40kb | Trung bình |
| Vue | ⭐⭐⭐⭐ | ~30kb | Dễ |
| Svelte | ⭐⭐⭐⭐ | ~5kb | Dễ |
| Astro | ⭐⭐⭐⭐⭐ | ~0kb | Dễ |

> 💡 Astro xuất zero JS mặc định — chỉ ship HTML và CSS!
```

## Ví dụ 3: Hướng dẫn step-by-step

```md
---
layout: ../../layouts/DocLayout.astro
title: Tạo project mới
---

## Quy trình tạo project

### Bước 1: Khởi tạo

Tạo thư mục project:

```bash
mkdir my-project && cd my-project
git init
```

### Bước 2: Cài đặt

```bash
npm install
```

### Bước 3: Chạy dev

```bash
npm run dev
```

✅ Xong! Truy cập http://localhost:4321
```

## Ví dụ 4: Trang API với code samples

```md
---
layout: ../../layouts/DocLayout.astro
title: API Client
description: Cách sử dụng API client trong JavaScript và Python
---

## Khởi tạo client

### JavaScript

```javascript
import { DevHubClient } from '@devhub/client';

const client = new DevHubClient({
  apiKey: process.env.DEVHUB_API_KEY,
  baseUrl: 'https://api.devhub.io',
});
```

### Python

```python
from devhub import Client

client = Client(
    api_key=os.environ['DEVHUB_API_KEY'],
    base_url='https://api.devhub.io'
)
```

## Lấy dữ liệu

```javascript
// Lấy danh sách users
const users = await client.users.list({
  page: 1,
  limit: 20,
});

console.log(users.data);
// [{ id: 1, name: 'Alice' }, ...]
```
```

## Ví dụ 5: Thêm hình ảnh vào tài liệu

Đặt hình ảnh vào `public/images/` và reference trong markdown:

```md
---
layout: ../../layouts/DocLayout.astro
title: Hướng dẫn có hình ảnh
---

## Kiến trúc hệ thống

Dưới đây là sơ đồ kiến trúc tổng quan:

![Kiến trúc hệ thống](/Docs/images/architecture.svg)

## Dashboard

Giao diện dashboard sau khi đăng nhập:

![Dashboard screenshot](/Docs/images/dashboard.png)
```

## Ví dụ workflow hoàn chỉnh

Quy trình từ viết đến deploy:

```bash
# 1. Tạo branch mới
git checkout -b docs/add-new-guide

# 2. Tạo file markdown mới
cat > src/pages/docs/new-guide.md << 'EOF'
---
layout: ../../layouts/DocLayout.astro
title: Hướng dẫn mới
description: Mô tả hướng dẫn mới
---

## Nội dung
...
EOF

# 3. Preview local
npm run dev

# 4. Build kiểm tra
npm run build

# 5. Commit và push
git add .
git commit -m "docs: add new guide"
git push origin docs/add-new-guide

# 6. Tạo Pull Request → Merge vào main → CI/CD tự deploy
```

---

Xem thêm: [Changelog →](/Docs/docs/changelog)
