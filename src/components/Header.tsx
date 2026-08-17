"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { site, SectionProps, ServicesHeaderData } from "@/data";
import { Icon } from "./Icon";

export function Header({ data }: SectionProps<ServicesHeaderData> = {}) {
  const header = data?.header || site.header;
  const nav = data?.nav || site.nav;
  const siteInfo = data?.site || site.site;
  const topbar = site.topbar;
  const [open, setOpen] = useState(false);
  const [openSub, setOpenSub] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <header className="sticky top-0 z-[60] flex w-full items-stretch bg-white shadow-[0_8px_24px_rgba(0,0,0,0.06)]">
      {/* Left Column: Logo Block — blue runs to the viewport edge; content aligns with --page-gutter */}
      <Link
        href="/"
        className="flex shrink-0 items-center gap-2 bg-brand py-3 pl-[var(--page-gutter)] pr-3 sm:gap-3 sm:pr-5 lg:pr-8"
      >
        <Image
          src={siteInfo.logo}
          alt={`${siteInfo.name} logo`}
          width={50}
          height={50}
          className="h-9 w-9 object-contain sm:h-[50px] sm:w-[50px]"
        />
        <span className="text-[22px] font-bold leading-none tracking-[-0.015em] text-white sm:text-[30px]">
          {siteInfo.name}
        </span>
      </Link>

      {/* Right Column: Top Bar + Main Bar stacked */}
      <div className="flex min-w-0 flex-1 flex-col">
        {/* Thin top utility bar */}
        <div className="flex h-[32px] shrink-0 items-center justify-between gap-4 border-l border-white/20 bg-brand pl-5 pr-[var(--page-gutter)] text-[11.5px] text-white lg:pl-6">
          <p className="flex items-center gap-1.5">
            <Icon name="shieldOutline" className="h-[12px] w-[12px] opacity-90" />
            <span className="truncate">{topbar.note}</span>
          </p>
          <div className="flex items-center gap-4">
            <p className="hidden items-center gap-1.5 sm:flex">
              <Icon name="clock" className="h-[12px] w-[12px] opacity-90" />
              {topbar.support}
            </p>
            <ul className="flex items-center gap-[6px]">
              {topbar.socials.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    aria-label={s.label}
                    className="grid h-[18px] w-[18px] place-items-center rounded-[3px] bg-white/15 transition hover:bg-white hover:text-brand"
                  >
                    <Icon name={s.icon} className="h-[10px] w-[10px]" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Main bar — items-stretch so the CTA button can fill full height */}
        <div className="flex min-h-[82px] flex-1 items-stretch bg-white pl-5 pr-[var(--page-gutter)] lg:pl-6">
          {/* desktop nav — vertically centered */}
          <nav className="mr-auto hidden items-center xl:flex" aria-label="Primary">
            <ul className="flex items-center gap-7 xl:gap-8">
              {nav.map((item) => {
                const hasChildren = "children" in item && item.children;
                const active = hasChildren
                  ? item.children!.some(
                      (child) =>
                        child.href === "/"
                          ? pathname === "/"
                          : pathname.startsWith(child.href)
                    )
                  : item.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(item.href);

                const navLinkClass = [
                  "relative inline-flex items-center gap-1 pb-1.5 text-[15px] font-semibold text-brand",
                  "after:absolute after:bottom-0 after:left-0 after:h-[2.5px] after:w-full after:origin-left after:rounded-full after:bg-[#1e6fd0] after:transition-transform after:duration-200",
                  active
                    ? "after:scale-x-100"
                    : "after:scale-x-0 group-hover:after:scale-x-100",
                ].join(" ");

                return (
                  <li key={item.label} className="group relative">
                    {hasChildren ? (
                      <span className={`${navLinkClass} cursor-default`}>
                        {item.label}
                        <Icon name="chevron" className="h-[12px] w-[12px]" />
                      </span>
                    ) : (
                      <Link href={item.href} className={navLinkClass}>
                        {item.label}
                      </Link>
                    )}

                    {hasChildren && (
                      <ul className="invisible absolute left-0 top-full z-20 w-[190px] translate-y-2 rounded-md border border-line bg-white py-2 opacity-0 shadow-[0_18px_40px_rgba(4,65,148,.16)] transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                        {item.children!.map((c) => (
                          <li key={c.label}>
                            <Link
                              href={c.href}
                              className="block px-4 py-2 text-[14px] font-medium text-brand-link transition hover:bg-[#f2f6fd] hover:text-brand"
                            >
                              {c.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Phone + CTA */}
          <div className="flex items-center gap-0">
            <span className="mr-6 hidden h-[44px] w-px bg-line md:block" />
            <a href={header.phoneHref} className="mr-6 hidden text-right leading-tight md:block">
              <span className="block text-[12px] font-medium text-[#8a8d94]">{header.callLabel}</span>
              <span className="mt-0.5 flex items-center justify-end gap-1.5 text-[20px] font-bold leading-none text-accent-red">
                <Icon name="phoneFill" className="h-[16px] w-[16px] text-brand" />
                {header.phone}
              </span>
            </a>
            {/* self-stretch makes it fill the exact height of the white bar, flush top & bottom */}
            <Link
              href={header.cta.href}
              className="hidden items-center self-center rounded-[2px] bg-brand px-6 py-3 text-[14px] font-bold text-white transition hover:bg-brand-deep sm:flex"
            >
              {header.cta.label}
            </Link>
            <button
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              aria-expanded={open}
              className="ml-4 grid h-10 w-10 place-items-center rounded-[2px] bg-brand text-xl text-white xl:hidden"
            >
              <Icon name="menu" />
            </button>
          </div>
        </div>
      </div>

      {/* mobile drawer */}
      <div
        className={`fixed inset-0 z-[120] bg-[rgba(2,30,72,.55)] backdrop-blur-[2px] transition-opacity duration-300 xl:hidden ${
          open ? "visible opacity-100" : "invisible opacity-0"
        }`}
        onClick={() => setOpen(false)}
      />
      <aside
        className={`fixed inset-y-0 right-0 z-[130] w-[min(320px,86vw)] overflow-y-auto bg-white px-6 py-6 shadow-[-20px_0_60px_rgba(0,0,0,.2)] transition-transform duration-300 xl:hidden ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="mb-6 flex items-center justify-between">
          <span className="flex items-center gap-2">
            <Image
              src={siteInfo.logo}
              alt={`${siteInfo.name} logo`}
              width={36}
              height={36}
              className="h-9 w-9 object-contain"
            />
            <span className="text-[22px] font-bold text-brand">{siteInfo.name}</span>
          </span>
          <button
            onClick={() => setOpen(false)}
            aria-label="Close menu"
            className="grid h-9 w-9 place-items-center rounded-[2px] bg-page text-lg text-brand"
          >
            <Icon name="close" />
          </button>
        </div>
        <ul className="grid gap-1">
          {nav.map((item) => (
            <li key={item.label}>
              {"children" in item && item.children ? (
                <>
                  <button
                    onClick={() => setOpenSub((v) => !v)}
                    className="flex w-full items-center justify-between rounded-[4px] px-3 py-2.5 text-[15px] font-semibold text-brand-link"
                  >
                    {item.label}
                    <Icon
                      name="chevron"
                      className={`h-4 w-4 transition-transform ${openSub ? "rotate-180" : ""}`}
                    />
                  </button>
                  {openSub && (
                    <ul className="ml-3 grid gap-1 border-l border-line pl-3">
                      {item.children.map((c) => (
                        <li key={c.label}>
                          <Link
                            href={c.href}
                            onClick={() => setOpen(false)}
                            className="block py-2 text-[14px] font-medium text-brand-link"
                          >
                            {c.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </>
              ) : (
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-[4px] px-3 py-2.5 text-[15px] font-semibold text-brand-link hover:bg-[#f2f6fd]"
                >
                  {item.label}
                </Link>
              )}
            </li>
          ))}
        </ul>
        <Link
          href={header.cta.href}
          onClick={() => setOpen(false)}
          className="mt-5 block rounded-[2px] bg-brand py-3 text-center text-[13.5px] font-semibold text-white"
        >
          {header.cta.label}
        </Link>
      </aside>
    </header>
  );
}
