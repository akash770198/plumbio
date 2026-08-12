import Image from "next/image";
import Link from "next/link";
import { AccentTitle } from "@/components/AccentTitle";
import { Header } from "@/components/Header";
import { BlogSection } from "@/components/BlogSection";
import { PageBanner } from "@/components/PageBanner";
import { Reveal } from "@/components/Reveal";
import { site } from "@/data";

function SectionDivider() {
  return (
    <div aria-hidden className="section-divider">
      <span className="section-divider-line" />
    </div>
  );
}

function CalendarIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={`${className} fill-none stroke-current`}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
    </svg>
  );
}

function SearchIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-5 w-5 fill-none stroke-current"
      strokeWidth="2.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.35-4.35" />
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

function BlogDetails() {
  const { details } = site.blog;

  return (
    <section className="bg-white pt-0 pb-[3.25rem] lg:pb-[3.75rem]">
      <div className="shell">
        <Reveal>
          <AccentTitle
            className="text-center"
            before={details.headingBefore}
            accent={details.headingAccent}
          />
        </Reveal>

        {/* Full shell width — same left/right gutters as other pages */}
        <div className="mt-10 grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(280px,340px)] xl:gap-14">
          <Reveal>
            <article className="min-w-0 pb-2">
              <div className="relative">
                <div className="absolute -right-4 -top-4 hidden h-[96%] w-[88%] bg-[#1f65b1] lg:block" />
                <div
                  className="absolute -top-4 left-[14%] hidden h-4 w-[72%] bg-[#1f65b1] lg:block"
                  style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 12px 100%)" }}
                />
                <div className="relative aspect-[1.73/1] overflow-hidden bg-[#eef4fb]">
                  <Image
                    src={details.heroImage}
                    alt={details.heroImageAlt}
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 70vw"
                    className="object-cover"
                  />
                </div>
              </div>

              <div className="pt-6">
                <MetaLine
                  date={details.date}
                  author={details.author}
                  comments={details.comments}
                />

                <p className="section-desc mt-8">
                  {details.intro}
                </p>

                <blockquote className="section-desc relative mt-8 border-l-4 border-[#1f65b1] bg-[#f3f5f8] px-7 py-7 sm:px-9 sm:py-8">
                  <p>{details.quote}</p>
                  <footer className="section-desc mt-4">
                    <span className="font-bold text-[#0051a8]">
                      - {details.quoteAuthor}
                    </span>
                    <span className="ml-1 text-[#888]">
                      {details.quoteRole}
                    </span>
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
                    <h3 className="section-title">
                      {section.title}
                    </h3>
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
              </div>
            </article>
          </Reveal>

          <aside className="min-w-0 space-y-8">
            <Reveal delay={100}>
              <div className="bg-white p-7 shadow-[0_14px_35px_rgba(4,65,148,0.08)] sm:p-9">
                <h3 className="section-title text-[clamp(22px,2vw,28px)]">
                  Search
                </h3>
                <label className="mt-5 flex h-12 items-center bg-[#f7f7f9] px-5 text-[#0051a8]">
                  <span className="sr-only">Search blog posts</span>
                  <input
                    type="search"
                    placeholder={details.searchPlaceholder}
                    className="section-desc min-w-0 flex-1 bg-transparent text-[#6b7280] outline-none placeholder:text-[#6b7280]"
                  />
                  <SearchIcon />
                </label>
              </div>
            </Reveal>

            <Reveal delay={180}>
              <div className="bg-white p-7 shadow-[0_14px_35px_rgba(4,65,148,0.08)] sm:p-9">
                <h3 className="section-title text-[clamp(22px,2vw,28px)]">
                  {details.recentPostsTitle}
                </h3>
                <div className="mt-6 space-y-8">
                  {details.recentPosts.map((post) => (
                    <article key={post.title}>
                      <Link href={post.href} className="group block">
                        <div className="relative aspect-[1.55/1] overflow-hidden bg-[#eef4fb]">
                          <Image
                            src={post.image}
                            alt={post.imageAlt}
                            fill
                            sizes="340px"
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                          <div className="absolute bottom-[-1px] left-0 flex h-[54px] w-[54px] flex-col items-center justify-center rounded-tr-[28px] bg-[#1f65b1] text-white">
                            <span className="section-desc text-[12px] font-bold leading-none text-white">
                              {post.dateMonth}
                            </span>
                            <span className="section-title text-[22px] leading-none text-white">
                              {post.dateDay}
                            </span>
                          </div>
                        </div>
                        <div className="mt-3">
                          <MetaLine author={post.author} comments={post.comments} />
                          <h4 className="section-title mt-3 text-[clamp(18px,1.6vw,20px)] transition-colors group-hover:text-[#0051d4]">
                            {post.title}
                          </h4>
                        </div>
                      </Link>
                    </article>
                  ))}
                </div>
              </div>
            </Reveal>
          </aside>
        </div>
      </div>
    </section>
  );
}

export default function Page() {
  const { blogBanner } = site;

  return (
    <>
      <Header />
      <main className="block">
        <PageBanner
          title={blogBanner.title}
          breadcrumbs={blogBanner.breadcrumbs}
          backgroundImage={blogBanner.backgroundImage}
          backgroundImageAlt={blogBanner.backgroundImageAlt}
        />
        <BlogSection
          className="relative overflow-hidden bg-[#fafbfc] pt-[3.25rem] pb-0 lg:pt-[3.75rem]"
          items={site.blog.pageItems}
        />
        <SectionDivider />
        <BlogDetails />
      </main>
    </>
  );
}
