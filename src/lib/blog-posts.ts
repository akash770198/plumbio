import { site } from "@/data";

export type BlogPost = {
  slug: string;
  category: string;
  date: string;
  title: string;
  excerpt: string;
  image: string;
  author: string;
  comments: string;
};

function slugFromLink(link: string) {
  return link.replace(/^\/blog\/?/, "").replace(/\/$/, "");
}

export function getAllBlogPosts(): BlogPost[] {
  const { blog } = site;
  const map = new Map<string, BlogPost>();

  const add = (link: string, post: Omit<BlogPost, "slug">) => {
    const slug = slugFromLink(link);
    if (!slug || map.has(slug)) return;
    map.set(slug, { slug, ...post });
  };

  for (const item of [...blog.items, ...blog.pageItems]) {
    add(item.link, {
      category: item.category,
      date: item.date,
      title: item.title,
      excerpt: item.excerpt,
      image: item.image,
      author: "Admin",
      comments: "2 Comments",
    });
  }

  for (const post of blog.details.recentPosts) {
    add(post.href, {
      category: "PLUMBING TIPS",
      date: `${post.dateMonth} ${post.dateDay}, 2024`,
      title: post.title,
      excerpt: post.title,
      image: post.image,
      author: post.author,
      comments: post.comments,
    });
  }

  return Array.from(map.values());
}

export function getBlogPostBySlug(slug: string) {
  return getAllBlogPosts().find((post) => post.slug === slug);
}
