import Link from "next/link";
import { site } from "@/data";

export function Footer() {
  const { footer } = site;

  return (
    <footer className="bg-[#003c96] pt-12 text-white md:pt-16">
      <div className="shell">
        <div className="grid gap-8 pb-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 lg:gap-8">
          
          {/* Column 1: About */}
          <div className="lg:pr-4">
            <Link href="/" className="mb-6 flex items-center gap-3">
              {/* Logo SVG matching the image roughly (a stylized drop and pipe) */}
              <svg viewBox="0 0 24 24" className="h-10 w-10 fill-none stroke-white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z" />
                <path d="M12 10v6" />
                <path d="M9 13h6" />
              </svg>
              <span className="text-[26px] font-bold tracking-wide">
                {footer.logoText}
              </span>
            </Link>
            <p className="text-[15px] leading-relaxed text-[#c2d6f9]">
              {footer.description}
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="mb-6 text-[18px] font-bold text-white">
              {footer.columns[0].title}
            </h4>
            <ul className="flex flex-col gap-4">
              {footer.columns[0].links.map((link, i) => (
                <li key={i}>
                  <Link
                    href={link.href}
                    className="flex items-center gap-2 text-[15px] font-medium text-[#c2d6f9] transition-colors hover:text-white"
                  >
                    <span className="text-[14px]">›</span> {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h4 className="mb-6 text-[18px] font-bold text-white">
              {footer.columns[1].title}
            </h4>
            <ul className="flex flex-col gap-4">
              {footer.columns[1].links.map((link, i) => (
                <li key={i}>
                  <Link
                    href={link.href}
                    className="flex items-center gap-2 text-[15px] font-medium text-[#c2d6f9] transition-colors hover:text-white"
                  >
                    <span className="text-[14px]">›</span> {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Support */}
          <div>
            <h4 className="mb-6 text-[18px] font-bold text-white">
              {footer.columns[2].title}
            </h4>
            <ul className="flex flex-col gap-4">
              {footer.columns[2].links.map((link, i) => (
                <li key={i}>
                  <Link
                    href={link.href}
                    className="flex items-center gap-2 text-[15px] font-medium text-[#c2d6f9] transition-colors hover:text-white"
                  >
                    <span className="text-[14px]">›</span> {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 5: Newsletter */}
          <div>
            <h4 className="mb-6 text-[18px] font-bold text-white">
              {footer.newsletter.title}
            </h4>
            <p className="mb-6 text-[15px] leading-relaxed text-[#c2d6f9]">
              {footer.newsletter.description}
            </p>
            <form className="relative flex w-full">
              <input
                type="email"
                placeholder={footer.newsletter.placeholder}
                className="w-full rounded-l bg-white px-4 py-3 text-[14px] text-[#0a1f5c] outline-none"
                required
              />
              <button
                type="submit"
                aria-label="Subscribe"
                className="flex items-center justify-center rounded-r bg-[#1a65d6] px-4 py-3 text-white transition-colors hover:bg-[#1554b5]"
              >
                <svg viewBox="0 0 24 24" className="h-5 w-5 fill-none stroke-current" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>
            </form>
          </div>

        </div>
      </div>

      {/* Copyright */}
      <div className="bg-[#002b6b] py-4 text-center">
        <p className="text-[14px] font-medium text-[#c2d6f9]">
          {footer.copyright}
        </p>
      </div>
    </footer>
  );
}
