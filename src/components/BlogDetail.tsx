import Image from "next/image";
import Link from "next/link";
import { site, SectionProps } from "@/data";
import type { BlogPost } from "@/lib/blog-posts";
import { getAllBlogPosts } from "@/lib/blog-posts";
import { SECTION_LIGHT, SECTION_PAD } from "@/lib/section-styles";
import { BlogSearch } from "./BlogSearch";
import { Reveal } from "./Reveal";

function CalendarIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={`${className} fill-none stroke-current`}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
    </svg>
  );
}

function MetaLine({
  date,
  author,
  comments,
}: {
  date?: string;
  author: string;
  comments: string;
}) {
  return (
    <div className="section-desc flex flex-wrap items-center gap-x-4 gap-y-2 font-medium text-[#6b7a9a]">
      {date ? (
        <span className="inline-flex items-center gap-2">
          <CalendarIcon />
          {date}
        </span>
      ) : null}
      <span>
        by <span className="font-bold text-[#0051d4]">{author}</span>
      </span>
      <span>/</span>
      <span>{comments}</span>
    </div>
  );
}

export function BlogDetail({ data: post, className, isEditable, onUpdate }: SectionProps<BlogPost> & { data: BlogPost }) {
  const { details } = site.blog;
  const allPosts = getAllBlogPosts();
  const otherPosts = allPosts.filter((item) => item.slug !== post.slug);

  const recentPosts = otherPosts.slice(0, 3);
  const recentSlugs = new Set(recentPosts.map((item) => item.slug));

  const relatedPool = otherPosts.filter((item) => !recentSlugs.has(item.slug));
  const sameCategory = relatedPool.filter(
    (item) => item.category === post.category
  );
  const relatedPosts = [
    ...sameCategory,
    ...relatedPool.filter((item) => item.category !== post.category),
  ].slice(0, 3);

  return (
    <>
      <section className={`bg-white ${SECTION_PAD}`}>
        <div className="shell">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(280px,340px)] xl:gap-14">
            <Reveal>
              <article className="min-w-0">
                <div className="relative">
                  <div className="absolute -right-4 -top-4 hidden h-[96%] w-[88%] bg-[#1f65b1] lg:block" />
                  <div
                    className="absolute -top-4 left-[14%] hidden h-4 w-[72%] bg-[#1f65b1] lg:block"
                    style={{
                      clipPath: "polygon(0 0, 100% 0, 100% 100%, 12px 100%)",
                    }}
                  />
                  <div className="relative aspect-[1.73/1] overflow-hidden bg-[#eef4fb]">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      priority
                      sizes="(max-width: 1024px) 100vw, 70vw"
                      className="object-cover"
                    />
                  </div>
                </div>

                <div className="pt-6">
                  <div className="mb-4 flex flex-wrap items-center gap-3">
                    <span className="section-label rounded bg-[#0051d4] px-3 py-1 text-[11px] tracking-[0.1em] text-white">
                      {post.category}
                    </span>
                    <MetaLine
                      date={post.date}
                      author={post.author}
                      comments={post.comments}
                    />
                  </div>

                  <h1 className="section-title text-[clamp(26px,3vw,36px)]">
                    {post.title}
                  </h1>

                  <p className="section-desc mt-6">{post.excerpt}</p>
                  <p className="section-desc mt-5">{details.intro}</p>

                  <blockquote className="section-desc relative mt-8 border-l-4 border-[#1f65b1] bg-[#f7f9fc] px-7 py-7 sm:px-9 sm:py-8">
                    <p>{details.quote}</p>
                    <footer className="section-desc mt-4">
                      <span className="font-bold text-[#0051a8]">
                        - {details.quoteAuthor}
                      </span>
                      <span className="ml-1 text-[#888]">{details.quoteRole}</span>
                    </footer>
                    <span
                      aria-hidden
                      className="pointer-events-none absolute bottom-[-72px] right-5 select-none font-serif text-[88px] font-bold leading-none text-[#1f65b1] sm:right-7 sm:text-[100px]"
                    >
                      ”
                    </span>
                  </blockquote>

                  {details.sections.map((section) => (
                    <section key={section.title} className="mt-12">
                      <h2 className="section-title">{section.title}</h2>
                      <div className="mt-5 space-y-5">
                        {section.paragraphs.map((paragraph) => (
                          <p key={paragraph} className="section-desc">
                            {paragraph}
                          </p>
                        ))}
                      </div>

                      {section.images ? (
                        <div className="mt-8 grid gap-6 sm:grid-cols-2">
                          {section.images.map((image) => (
                            <div
                              key={image.src}
                              className="relative aspect-[1.45/1] overflow-hidden bg-[#eef4fb]"
                            >
                              <Image
                                src={image.src}
                                alt={image.alt}
                                fill
                                sizes="(max-width: 640px) 100vw, 35vw"
                                className="object-cover"
                              />
                            </div>
                          ))}
                        </div>
                      ) : null}
                    </section>
                  ))}

                  <div className="mt-12 flex flex-wrap items-center justify-between gap-4 border-t border-[#e8edf5] pt-8">
                    <Link
                      href="/blog"
                      className="section-desc inline-flex items-center gap-2 font-bold text-[#0051d4] transition hover:opacity-80"
                    >
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
                      Back to Blog
                    </Link>
                    <Link
                      href="/contact"
                      className="section-desc inline-flex items-center gap-2 rounded-lg bg-[#0051d4] px-6 py-3 font-bold text-white transition hover:bg-[#0041b0]"
                    >
                      Get a Free Quote
                      <svg
                        viewBox="0 0 24 24"
                        className="h-4 w-4 fill-none stroke-current"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden
                      >
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </article>
            </Reveal>

            <aside className="min-w-0 space-y-8 lg:pt-1">
              <Reveal delay={80}>
                <div className="rounded-xl border border-[#e8edf5] bg-[#f7f9fc] p-7 sm:p-9">
                  <h3 className="section-title text-[clamp(20px,1.8vw,24px)]">
                    Search
                  </h3>
                  <div className="mt-5">
                    <BlogSearch
                      posts={allPosts}
                      placeholder={details.searchPlaceholder}
                    />
                  </div>
                </div>
              </Reveal>

              <Reveal delay={140}>
                <div className="rounded-xl border border-[#e8edf5] bg-[#f7f9fc] p-7 sm:p-9">
                  <h3 className="section-title text-[clamp(20px,1.8vw,24px)]">
                    {details.recentPostsTitle}
                  </h3>
                  <div className="mt-6 space-y-7">
                    {recentPosts.map((recent) => (
                      <article key={recent.slug}>
                        <Link href={`/blog/${recent.slug}`} className="group block">
                          <div className="relative aspect-[1.55/1] overflow-hidden bg-[#eef4fb]">
                            <Image
                              src={recent.image}
                              alt={recent.title}
                              fill
                              sizes="340px"
                              className="object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                          </div>
                          <div className="mt-3">
                            <MetaLine
                              date={recent.date}
                              author={recent.author}
                              comments={recent.comments}
                            />
                            <h4 className="section-title mt-2 text-[clamp(16px,1.4vw,18px)] transition-colors group-hover:text-[#0051d4]">
                              {recent.title}
                            </h4>
                          </div>
                        </Link>
                      </article>
                    ))}
                  </div>
                </div>
              </Reveal>

              <Reveal delay={180}>
                <div className="rounded-xl bg-[#0a3d9c] p-7 text-white sm:p-8">
                  <p className="section-label text-white/80">Need Help?</p>
                  <h3 className="section-title mt-2 text-[clamp(20px,1.8vw,24px)] text-white">
                    Talk to Our Experts
                  </h3>
                  <p className="section-desc mt-3 text-white/85">
                    Have a plumbing issue related to this topic? Our team is ready to help.
                  </p>
                  <Link
                    href="/contact"
                    className="section-desc mt-6 inline-flex items-center gap-2 rounded-md bg-white px-5 py-3 font-bold text-[#0a3d9c] transition hover:bg-[#eef5ff]"
                  >
                    Contact Us
                    <svg
                      viewBox="0 0 24 24"
                      className="h-4 w-4 fill-none stroke-current"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden
                    >
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </Reveal>
            </aside>
          </div>
        </div>
      </section>

      {relatedPosts.length > 0 ? (
        <section className={`${SECTION_LIGHT} ${SECTION_PAD}`}>
          <div className="shell">
            <Reveal>
              <div className="mb-8 text-center">
                <p className="section-label">KEEP READING</p>
                <h2 className="section-title mt-3">
                  Related{" "}
                  <span className="text-[#1e6fd0]">Articles</span>
                </h2>
              </div>
            </Reveal>
            <div className="grid auto-rows-fr gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {relatedPosts.map((related, i) => (
                <Reveal key={related.slug} delay={i * 80} className="h-full">
                  <Link
                    href={`/blog/${related.slug}`}
                    className="group flex h-full flex-col overflow-hidden rounded-xl border border-[#e8edf5] bg-white shadow-sm transition hover:shadow-md"
                  >
                    <div className="relative aspect-[1.55/1] shrink-0 overflow-hidden bg-[#eef4fb]">
                      <Image
                        src={related.image}
                        alt={related.title}
                        fill
                        sizes="(max-width: 1024px) 50vw, 33vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div className="flex flex-1 flex-col p-6">
                      <span className="section-label text-[#1e6fd0]">
                        {related.category}
                      </span>
                      <h3 className="section-title mt-3 line-clamp-2 min-h-[2.6em] text-[clamp(17px,1.5vw,19px)] transition-colors group-hover:text-[#0051d4]">
                        {related.title}
                      </h3>
                      <p className="section-desc mt-3 line-clamp-2">
                        {related.excerpt}
                      </p>
                    </div>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      ) : null}
    </>
  );
}
