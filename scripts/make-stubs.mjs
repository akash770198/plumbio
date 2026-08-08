import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const pages = {
  about: "About Us",
  services: "Services",
  projects: "Projects",
  blog: "Blog",
  contact: "Contact",
  team: "Our Team",
  pricing: "Pricing",
  faq: "FAQ",
  testimonials: "Testimonials",
};

const tpl = (title) => `import { Header } from "@/components/Header";

export default function Page() {
  return (
    <>
      <Header />
      <main className="bg-white">
        <div className="mx-auto max-w-shell px-6 py-28 lg:px-12">
          <h1 className="text-[clamp(28px,3vw,40px)] font-bold text-brand-head">${title}</h1>
          <p className="mt-4 text-[15px] text-body">This page is coming next.</p>
        </div>
      </main>
    </>
  );
}
`;

for (const [slug, title] of Object.entries(pages)) {
  const dir = join("src", "app", slug);
  mkdirSync(dir, { recursive: true });
  writeFileSync(join(dir, "page.tsx"), tpl(title), "utf8");
}

console.log("created", Object.keys(pages).length, "stub pages");
