import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Header } from "@/components/Header";
import { PageBanner } from "@/components/PageBanner";
import { Reveal } from "@/components/Reveal";
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

  const { blog } = site;
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
          title={post.title}
          breadcrumbs={breadcrumbs}
          backgroundImage={site.blogBanner.backgroundImage}
          backgroundImageAlt={site.blogBanner.backgroundImageAlt}
        />

        <section className="bg-white pt-[3.25rem] pb-[3.25rem] lg:pt-[3.75rem] lg:pb-[3.75rem]">
          <div className="shell">
            <Reveal>
              <article className="mx-auto max-w-4xl">
                <div className="relative aspect-[1.73/1] overflow-hidden rounded-xl bg-[#eef4fb]">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    priority
                    sizes="(max-width: 896px) 100vw, 896px"
                    className="object-cover"
                  />
                </div>

                <div className="mt-6 flex flex-wrap items-center gap-4 text-[13px] font-medium text-[#6b7a9a]">
                  <span className="rounded bg-[#0051d4] px-3 py-1 font-bold uppercase text-white">
                    {post.category}
                  </span>
                  <span>{post.date}</span>
                  <span>
                    by <span className="font-semibold text-[#0051d4]">{post.author}</span>
                  </span>
                  <span>{post.comments}</span>
                </div>

                <p className="section-desc mt-8">{post.excerpt}</p>

                {blog.details.sections.map((section) => (
                  <section key={section.title} className="mt-12">
                    <h2 className="section-title">
                      {section.title}
                    </h2>
                    <div className="mt-5 space-y-5">
                      {section.paragraphs.map((paragraph) => (
                        <p key={paragraph} className="section-desc">
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  </section>
                ))}

                <Link
                  href="/blog"
                  className="mt-10 inline-flex items-center gap-2 text-[15px] font-bold text-[#0051d4] transition hover:opacity-80"
                >
                  Back to Blog
                  <svg
                    viewBox="0 0 24 24"
                    className="h-4 w-4 fill-none stroke-current"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden
                  >
                    <path d="M19 12H5M12 19l-7-7 7-7" />
                  </svg>
                </Link>
              </article>
            </Reveal>
          </div>
        </section>
      </main>
    </>
  );
}
