import { notFound } from "next/navigation";
import { BlogDetail } from "@/components/BlogDetail";
import { Header } from "@/components/Header";
import { PageBanner } from "@/components/PageBanner";
import { site } from "@/data";
import { getAllBlogPosts, getBlogPostBySlug } from "@/lib/blog-posts";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getAllBlogPosts().map((post) => ({ slug: post.slug }));
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Blog", href: "/blog" },
    { label: post.title, href: `/blog/${post.slug}` },
  ];

  return (
    <>
      <Header />
      <main className="block">
        <PageBanner
          title="Blog Details"
          breadcrumbs={breadcrumbs}
          backgroundImage={site.blogBanner.backgroundImage}
          backgroundImageAlt={site.blogBanner.backgroundImageAlt}
        />
        <BlogDetail post={post} />
      </main>
    </>
  );
}
