export interface BlogPost {
  title: string;
  slug: string;
  category: string;
  excerpt: string;
  publishedAt: string;
  readTime: string;
  featured?: boolean;
}

export const BLOG_POSTS: BlogPost[] = [
  {
    title: 'Tối ưu hiệu năng Docs với Astro Islands',
    slug: 'astro-performance',
    category: 'Astro',
    excerpt: 'Giảm JS không cần thiết, cải thiện tốc độ tải và giữ trải nghiệm đọc mượt trên mọi thiết bị.',
    publishedAt: '2025-03-10',
    readTime: '7 phút đọc',
    featured: true,
  },
  {
    title: 'Chiến lược nội dung tài liệu cho team sản phẩm',
    slug: 'content-strategy',
    category: 'Nội dung',
    excerpt: 'Cách xây dựng danh mục, vòng đời bài viết, và quy trình cập nhật để tài liệu luôn hữu ích.',
    publishedAt: '2025-02-20',
    readTime: '6 phút đọc',
  },
  {
    title: 'SEO cho tài liệu kỹ thuật: từ title đến internal links',
    slug: 'docs-seo',
    category: 'SEO',
    excerpt: 'Tối ưu cấu trúc trang docs/blog để người dùng tìm đúng nội dung và tăng organic traffic.',
    publishedAt: '2025-03-01',
    readTime: '8 phút đọc',
  },
  {
    title: 'Checklist trước khi phát hành phiên bản docs mới',
    slug: 'release-checklist',
    category: 'Quy trình',
    excerpt: 'Danh sách kiểm tra nhanh về chất lượng nội dung, liên kết, build và theo dõi hành vi người đọc.',
    publishedAt: '2025-01-15',
    readTime: '5 phút đọc',
  },
  {
    title: 'Thiết kế taxonomy danh mục cho docs/blog',
    slug: 'taxonomy-design',
    category: 'Nội dung',
    excerpt: 'Cách phân nhóm chủ đề để menu và điều hướng giúp người đọc tìm nội dung nhanh, đúng ngữ cảnh.',
    publishedAt: '2025-02-05',
    readTime: '6 phút đọc',
  },
  {
    title: 'Đo lường hành vi đọc bằng event tracking',
    slug: 'event-tracking',
    category: 'Analytics',
    excerpt: 'Thiết lập sự kiện đọc bài, cuộn trang và CTA để tối ưu nội dung theo dữ liệu thực tế.',
    publishedAt: '2025-01-28',
    readTime: '7 phút đọc',
  },
];

/** localStorage key prefix for real per-post view counts. */
export const VIEWS_STORAGE_PREFIX = 'devhub_views_';

export const formatViews = (value: number) => new Intl.NumberFormat('vi-VN').format(value);

/** Returns posts sorted newest-first (used as server-side default for "top viewed"). */
export const getLatestPosts = (limit: number) =>
  [...BLOG_POSTS]
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
    .slice(0, limit);

export const getCategoriesWithCount = () => {
  const categoryCountMap = BLOG_POSTS.reduce<Record<string, number>>((acc, post) => {
    acc[post.category] = (acc[post.category] || 0) + 1;
    return acc;
  }, {});
  return Object.entries(categoryCountMap).map(([name, count]) => ({ name, count }));
};

/**
 * Returns recommended posts, preferring the same category when provided.
 * Already-surfaced slugs are excluded first.
 */
export const getRecommendedPosts = (
  limit: number,
  excludedSlugs: string[] = [],
  preferCategory?: string,
) => {
  const excluded = new Set(excludedSlugs);
  const available = BLOG_POSTS.filter((post) => !excluded.has(post.slug));
  if (preferCategory) {
    const sameCategory = available.filter((p) => p.category === preferCategory);
    const others = available.filter((p) => p.category !== preferCategory);
    return [...sameCategory, ...others].slice(0, limit);
  }
  return available.slice(0, limit);
};
