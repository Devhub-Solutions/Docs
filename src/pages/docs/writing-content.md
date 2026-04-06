---
layout: ../../layouts/DocLayout.astro
title: Viết nội dung
description: Hướng dẫn đầy đủ về cách viết và tổ chức nội dung tài liệu với Markdown.
badge: Hướng dẫn
order: 4
---

## Cú pháp Markdown cơ bản

Tài liệu DevHub Docs được viết bằng Markdown thuần hoặc MDX. Dưới đây là các cú pháp thường dùng nhất.

## Tiêu đề (Headings)

```md
# Tiêu đề H1 — chỉ dùng một lần, là tên trang
## Tiêu đề H2 — phần chính
### Tiêu đề H3 — mục con
#### Tiêu đề H4 — chi tiết nhỏ
```

## Định dạng văn bản

```md
**In đậm** hoặc __in đậm__
*In nghiêng* hoặc _in nghiêng_
~~Gạch ngang~~
`code nội tuyến`
```

Kết quả: **In đậm**, *In nghiêng*, ~~Gạch ngang~~, `code nội tuyến`

## Liên kết và hình ảnh

```md
[Tên liên kết](https://url.com)
[Liên kết nội bộ](/Docs/docs/installation)

![Mô tả hình ảnh](./path/to/image.png)
![Logo DevHub](/images/logo.svg)
```

## Danh sách

```md
- Mục không thứ tự
- Mục thứ hai
  - Mục con (dùng 2 space)
  - Mục con khác

1. Mục có thứ tự
2. Mục thứ hai
3. Mục thứ ba
```

## Code blocks

Chỉ định ngôn ngữ để có syntax highlighting:

````md
```javascript
const greeting = 'Xin chào DevHub!';
console.log(greeting);
```

```python
def hello():
    print("Xin chào từ Python!")
```

```bash
npm install && npm run build
```
````

Ví dụ thực tế:

```javascript
// Ví dụ JavaScript
const fetchDocs = async (slug) => {
  const response = await fetch(`/api/docs/${slug}`);
  return response.json();
};
```

```python
# Ví dụ Python
def calculate_sum(numbers: list[int]) -> int:
    return sum(numbers)

result = calculate_sum([1, 2, 3, 4, 5])
print(f"Tổng: {result}")  # Tổng: 15
```

## Bảng (Tables)

```md
| Cột 1 | Cột 2 | Cột 3 |
|-------|-------|-------|
| Dữ liệu 1 | Dữ liệu 2 | Dữ liệu 3 |
| Dữ liệu 4 | Dữ liệu 5 | Dữ liệu 6 |
```

| Tên | Phiên bản | Mô tả |
|-----|-----------|-------|
| Astro | v5.x | Framework |
| Tailwind | v3.x | CSS |
| MDX | v4.x | Markdown mở rộng |

## Blockquotes

```md
> Đây là một blockquote.
> Có thể có nhiều dòng.

> 💡 **Mẹo**: Thêm emoji để làm nổi bật blockquote.
```

> 💡 **Mẹo**: Dùng blockquote để làm nổi bật thông tin quan trọng hoặc cảnh báo.

> ⚠️ **Cảnh báo**: Đây là thông tin cần lưu ý.

> ✅ **Thành công**: Bước này hoàn thành đúng.

## Frontmatter (Metadata)

Mỗi file `.md` cần có frontmatter ở đầu file:

```md
---
layout: ../../layouts/DocLayout.astro
title: Tiêu đề trang
description: Mô tả cho SEO (160 ký tự)
badge: Nhãn  # Tùy chọn
order: 1     # Số thứ tự trong sidebar
---
```

## Tổ chức file tài liệu

Tất cả tài liệu đặt trong `src/pages/docs/`:

```
src/pages/docs/
├── getting-started.md   # /Docs/docs/getting-started
├── installation.md      # /Docs/docs/installation
├── configuration.md     # /Docs/docs/configuration
├── writing-content.md   # /Docs/docs/writing-content
└── deployment.md        # /Docs/docs/deployment
```

Tên file → URL slug tự động. Ví dụ:
- `my-first-page.md` → `/Docs/docs/my-first-page`

## Thêm hình ảnh

Đặt hình ảnh trong thư mục `public/images/`:

```md
![Mô tả hình](/Docs/images/screenshot.png)
```

Hoặc relative path từ file markdown:

```md
![Diagram](../../public/images/diagram.svg)
```

## Best practices

1. **Tiêu đề rõ ràng** — Mỗi trang chỉ có một H1 (là `title` trong frontmatter)
2. **Mô tả ngắn gọn** — `description` nên dưới 160 ký tự
3. **Code có chú thích** — Luôn ghi chú ngôn ngữ cho code blocks
4. **Link nội bộ** — Dùng đường dẫn `/Docs/docs/...` thay vì URL đầy đủ
5. **Hình ảnh có alt text** — Giúp accessibility và SEO

---

Tiếp theo: [Giao diện & CSS →](/Docs/docs/styling)
