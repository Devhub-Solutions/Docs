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
  {
    title: 'Thiết kế taxonomy danh mục cho docs/blog',
    slug: 'taxonomy-design',
    category: 'Nội dung',
    excerpt: 'Cách phân nhóm chủ đề để menu và điều hướng giúp người đọc tìm nội dung nhanh, đúng ngữ cảnh.',
    views: 1870,
    readTime: '6 phút đọc',
  },
  {
    title: 'Đo lường hành vi đọc bằng event tracking',
    slug: 'event-tracking',
    category: 'Analytics',
    excerpt: 'Thiết lập sự kiện đọc bài, cuộn trang và CTA để tối ưu nội dung theo dữ liệu thực tế.',
    views: 1650,
    readTime: '7 phút đọc',
  },
];

export const formatViews = (value: number) => new Intl.NumberFormat('vi-VN').format(value);

export const getTopViewedPosts = (limit: number) =>
  [...BLOG_POSTS].sort((a, b) => b.views - a.views).slice(0, limit);

export const getCategoriesWithCount = () => {
  const categoryCountMap = BLOG_POSTS.reduce<Record<string, number>>((acc, post) => {
    acc[post.category] = (acc[post.category] || 0) + 1;
    return acc;
  }, {});
  return Object.entries(categoryCountMap).map(([name, count]) => ({ name, count }));
};

/**
 * Returns recommended posts while trying to exclude already surfaced posts first.
 */
export const getRecommendedPosts = (limit: number, excludedSlugs: string[] = []) => {
  const excluded = new Set(excludedSlugs);
  return BLOG_POSTS.filter((post) => !excluded.has(post.slug)).slice(0, limit);
};
