export interface BlogPost {
  title: string;
  slug: string;
  category: string;
  excerpt: string;
  views: number;
  readTime: string;
  featured?: boolean;
}

export const BLOG_POSTS: BlogPost[] = [
  {
    title: 'Tối ưu hiệu năng Docs với Astro Islands',
    slug: 'astro-performance',
    category: 'Astro',
    excerpt: 'Giảm JS không cần thiết, cải thiện tốc độ tải và giữ trải nghiệm đọc mượt trên mọi thiết bị.',
    views: 4250,
    readTime: '7 phút đọc',
    featured: true,
  },
  {
    title: 'Chiến lược nội dung tài liệu cho team sản phẩm',
    slug: 'content-strategy',
    category: 'Nội dung',
    excerpt: 'Cách xây dựng danh mục, vòng đời bài viết, và quy trình cập nhật để tài liệu luôn hữu ích.',
    views: 2980,
    readTime: '6 phút đọc',
  },
  {
    title: 'SEO cho tài liệu kỹ thuật: từ title đến internal links',
    slug: 'docs-seo',
    category: 'SEO',
    excerpt: 'Tối ưu cấu trúc trang docs/blog để người dùng tìm đúng nội dung và tăng organic traffic.',
    views: 3510,
    readTime: '8 phút đọc',
  },
  {
    title: 'Checklist trước khi phát hành phiên bản docs mới',
    slug: 'release-checklist',
    category: 'Quy trình',
    excerpt: 'Danh sách kiểm tra nhanh về chất lượng nội dung, liên kết, build và theo dõi hành vi người đọc.',
    views: 2110,
    readTime: '5 phút đọc',
  },
];

export const formatViews = (value: number) => new Intl.NumberFormat('vi-VN').format(value);
