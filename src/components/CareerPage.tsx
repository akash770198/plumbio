"use client";

import { ChangeEvent, FormEvent, useState } from "react";
import Link from "next/link";
import { site } from "@/data";
import { Reveal } from "./Reveal";

type CareerPageData = typeof site.careerPage;

export function CareerPage({ data }: { data?: CareerPageData }) {
  const pageData = data || site.careerPage;
  const { sidebar, form, backgroundTitle } = pageData;

  const [employmentType, setEmploymentType] = useState<string>("Full-time");
  const [resumeName, setResumeName] = useState<string>("");
  const [coverLetterName, setCoverLetterName] = useState<string>("");
  const [agreedToTerms, setAgreedToTerms] = useState<boolean>(false);
  const [submitted, setSubmitted] = useState<boolean>(false);

  const handleResumeChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setResumeName(e.target.files[0].name);
    }
  };

  const handleCoverLetterChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setCoverLetterName(e.target.files[0].name);
    }
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="relative overflow-hidden bg-[#f7f9fc] py-[3.25rem] lg:py-[3.75rem]">
      {/* Subtle background text watermark */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-8 -translate-x-1/2 select-none whitespace-nowrap text-[clamp(80px,12vw,160px)] font-extrabold leading-none tracking-tight text-[#e8edf5]/70"
      >
        {backgroundTitle}
      </div>

      <div className="shell relative">
        <div className="grid gap-8 lg:grid-cols-[320px_1fr] xl:grid-cols-[360px_1fr] xl:gap-10 items-start">
          {/* Left Sidebar: Position Details & Benefits */}
          <Reveal>
            <div className="rounded-2xl bg-[#f0f4fa]/70 border border-[#e2e8f0] p-6 sm:p-7 space-y-7">
              {/* Position Details */}
              <div>
                <h3 className="text-lg font-bold text-[#0a1f5c] mb-4">
                  {sidebar.positionDetailsTitle}
                </h3>
                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 shrink-0 rounded-full bg-[#dbeafe] text-[#1e6fd0] flex items-center justify-center">
                    {/* Vacuum / Tool Icon */}
                    <svg
                      viewBox="0 0 24 24"
                      className="h-6 w-6 fill-none stroke-current"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden
                    >
                      <path d="M4 14.5A2.5 2.5 0 0 0 6.5 17H7v4h4v-4h.5a2.5 2.5 0 0 0 2.5-2.5V8H4v6.5z" />
                      <path d="M7 8V4a2 2 0 0 1 2-2h0a2 2 0 0 1 2 2v4" />
                      <path d="M14 11h4a2 2 0 0 1 2 2v8" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-[16px] font-bold text-[#0a1f5c]">
                      {sidebar.position.title}
                    </h4>
                    <p className="mt-1 flex items-center gap-1.5 text-xs font-semibold text-[#6e7278]">
                      {/* Location Pin Icon */}
                      <svg
                        viewBox="0 0 24 24"
                        className="h-4 w-4 fill-none stroke-current text-[#1e6fd0]"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden
                      >
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                        <circle cx="12" cy="10" r="3" />
                      </svg>
                      {sidebar.position.location}
                    </p>
                  </div>
                </div>
                <p className="mt-3.5 text-sm text-[#555] leading-relaxed">
                  {sidebar.position.description}
                </p>
              </div>

              <hr className="border-[#e2e8f0]" />

              {/* Why Join Us? */}
              <div>
                <h3 className="text-lg font-bold text-[#0a1f5c] mb-4">
                  {sidebar.whyJoinUsTitle}
                </h3>
                <ul className="space-y-4">
                  {sidebar.benefits.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-3.5">
                      <span className="h-9 w-9 rounded-full bg-[#dbeafe] text-[#1e6fd0] flex items-center justify-center shrink-0">
                        {item.icon === "salary" && (
                          <svg
                            viewBox="0 0 24 24"
                            className="h-4 w-4 fill-none stroke-current"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <line x1="12" y1="1" x2="12" y2="23" />
                            <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                          </svg>
                        )}
                        {item.icon === "health" && (
                          <svg
                            viewBox="0 0 24 24"
                            className="h-4 w-4 fill-none stroke-current"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                          </svg>
                        )}
                        {item.icon === "growth" && (
                          <svg
                            viewBox="0 0 24 24"
                            className="h-4 w-4 fill-none stroke-current"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
                            <polyline points="17 6 23 6 23 12" />
                          </svg>
                        )}
                        {item.icon === "environment" && (
                          <svg
                            viewBox="0 0 24 24"
                            className="h-4 w-4 fill-none stroke-current"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                            <circle cx="9" cy="7" r="4" />
                            <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                            <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                          </svg>
                        )}
                      </span>
                      <span className="text-sm font-bold text-[#0a1f5c]">
                        {item.title}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <hr className="border-[#e2e8f0]" />

              {/* Have Questions? */}
              <div>
                <h3 className="text-lg font-bold text-[#0a1f5c] mb-4">
                  {sidebar.questionsTitle}
                </h3>
                <div className="space-y-3">
                  <a
                    href={`mailto:${sidebar.contactEmail}`}
                    className="flex items-center gap-3 text-sm font-bold text-[#0a1f5c] hover:text-[#1e6fd0] transition"
                  >
                    <span className="grid h-8 w-8 place-items-center rounded-lg bg-[#dbeafe]/70 text-[#1e6fd0]">
                      <svg
                        viewBox="0 0 24 24"
                        className="h-4 w-4 fill-none stroke-current"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                        <path d="M22 6l-10 7L2 6" />
                      </svg>
                    </span>
                    {sidebar.contactEmail}
                  </a>

                  <a
                    href={`tel:${sidebar.contactPhone}`}
                    className="flex items-center gap-3 text-sm font-bold text-[#0a1f5c] hover:text-[#1e6fd0] transition"
                  >
                    <span className="grid h-8 w-8 place-items-center rounded-lg bg-[#dbeafe]/70 text-[#1e6fd0]">
                      <svg
                        viewBox="0 0 24 24"
                        className="h-4 w-4 fill-none stroke-current"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.12.96.3 1.88.57 2.77a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.89.27 1.81.45 2.77.57A2 2 0 0122 16.92z" />
                      </svg>
                    </span>
                    {sidebar.contactPhone}
                  </a>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Right Main Card: Application Form */}
          <Reveal delay={80}>
            <div className="rounded-2xl bg-white border border-[#e2e8f0] p-6 sm:p-8 lg:p-10 shadow-[0_10px_35px_rgba(10,31,92,0.05)]">
              {submitted ? (
                <div className="flex min-h-[420px] flex-col items-center justify-center py-10 text-center">
                  <div className="grid h-16 w-16 place-items-center rounded-full bg-[#e7f7ee] text-[#1f9d55] shadow-sm">
                    <svg
                      viewBox="0 0 24 24"
                      className="h-8 w-8 fill-none stroke-current"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden
                    >
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-[#0a1f5c] mt-6">
                    {form.successTitle}
                  </h3>
                  <p className="section-desc mt-3 max-w-md">
                    {form.successMessage}
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setResumeName("");
                      setCoverLetterName("");
                      setAgreedToTerms(false);
                    }}
                    className="mt-8 rounded-xl bg-[#1e6fd0] px-6 py-3 text-sm font-bold text-white transition hover:bg-[#165bb0]"
                  >
                    Submit Another Application
                  </button>
                </div>
              ) : (
                <>
                  <h2 className="text-xl sm:text-2xl font-bold text-[#0a1f5c] mb-7">
                    {form.title}
                  </h2>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Row 1: Full Name & Email Address */}
                    <div className="grid gap-5 sm:grid-cols-2">
                      <div>
                        <label className="block text-[14px] font-bold text-[#0a1f5c] mb-2">
                          Full Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          required
                          placeholder={form.fullNamePlaceholder}
                          className="w-full rounded-xl border border-[#e2e8f0] bg-white px-4 py-3 text-[15px] text-[#0a1f5c] outline-none placeholder:text-[#9aa3b2] focus:border-[#1e6fd0] focus:ring-2 focus:ring-[#1e6fd0]/20 transition"
                        />
                      </div>
                      <div>
                        <label className="block text-[14px] font-bold text-[#0a1f5c] mb-2">
                          Email Address <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="email"
                          required
                          placeholder={form.emailPlaceholder}
                          className="w-full rounded-xl border border-[#e2e8f0] bg-white px-4 py-3 text-[15px] text-[#0a1f5c] outline-none placeholder:text-[#9aa3b2] focus:border-[#1e6fd0] focus:ring-2 focus:ring-[#1e6fd0]/20 transition"
                        />
                      </div>
                    </div>

                    {/* Row 2: Phone Number & Location */}
                    <div className="grid gap-5 sm:grid-cols-2">
                      <div>
                        <label className="block text-[14px] font-bold text-[#0a1f5c] mb-2">
                          Phone Number <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="tel"
                          required
                          placeholder={form.phonePlaceholder}
                          className="w-full rounded-xl border border-[#e2e8f0] bg-white px-4 py-3 text-[15px] text-[#0a1f5c] outline-none placeholder:text-[#9aa3b2] focus:border-[#1e6fd0] focus:ring-2 focus:ring-[#1e6fd0]/20 transition"
                        />
                      </div>
                      <div>
                        <label className="block text-[14px] font-bold text-[#0a1f5c] mb-2">
                          Location <span className="text-red-500">*</span>
                        </label>
                        <div className="relative">
                          <select
                            required
                            defaultValue=""
                            className="w-full appearance-none rounded-xl border border-[#e2e8f0] bg-white px-4 py-3 pr-10 text-[15px] text-[#0a1f5c] outline-none focus:border-[#1e6fd0] focus:ring-2 focus:ring-[#1e6fd0]/20 transition"
                          >
                            <option value="" disabled>
                              {form.locationPlaceholder}
                            </option>
                            {form.locationOptions
                              .filter((opt) => opt !== form.locationPlaceholder)
                              .map((opt, i) => (
                                <option key={i} value={opt}>
                                  {opt}
                                </option>
                              ))}
                          </select>
                          <div className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 text-[#9aa3b2]">
                            <svg
                              className="h-5 w-5 fill-none stroke-current"
                              viewBox="0 0 24 24"
                              strokeWidth="2"
                            >
                              <polyline points="6 9 12 15 18 9" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Row 3: Position Applied For & Employment Type */}
                    <div className="grid gap-5 sm:grid-cols-2 items-start">
                      <div>
                        <label className="block text-[14px] font-bold text-[#0a1f5c] mb-2">
                          Position Applied For <span className="text-red-500">*</span>
                        </label>
                        <div className="relative">
                          <select
                            required
                            defaultValue=""
                            className="w-full appearance-none rounded-xl border border-[#e2e8f0] bg-white px-4 py-3 pr-10 text-[15px] text-[#0a1f5c] outline-none focus:border-[#1e6fd0] focus:ring-2 focus:ring-[#1e6fd0]/20 transition"
                          >
                            <option value="" disabled>
                              {form.positionAppliedPlaceholder}
                            </option>
                            {form.positionOptions
                              .filter((opt) => opt !== form.positionAppliedPlaceholder)
                              .map((opt, i) => (
                                <option key={i} value={opt}>
                                  {opt}
                                </option>
                              ))}
                          </select>
                          <div className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 text-[#9aa3b2]">
                            <svg
                              className="h-5 w-5 fill-none stroke-current"
                              viewBox="0 0 24 24"
                              strokeWidth="2"
                            >
                              <polyline points="6 9 12 15 18 9" />
                            </svg>
                          </div>
                        </div>
                      </div>

                      <div>
                        <label className="block text-[14px] font-bold text-[#0a1f5c] mb-2">
                          Employment Type <span className="text-red-500">*</span>
                        </label>
                        <div className="flex flex-wrap items-center gap-x-5 gap-y-3 pt-2">
                          {form.employmentTypeOptions.map((typeOption) => (
                            <label
                              key={typeOption}
                              className="flex items-center gap-2 cursor-pointer select-none text-sm font-semibold text-[#0a1f5c]"
                            >
                              <input
                                type="radio"
                                name="employmentType"
                                value={typeOption}
                                checked={employmentType === typeOption}
                                onChange={(e) => setEmploymentType(e.target.value)}
                                className="h-4 w-4 text-[#1e6fd0] focus:ring-[#1e6fd0] accent-[#1e6fd0]"
                              />
                              <span>{typeOption}</span>
                            </label>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Row 4: Experience */}
                    <div>
                      <label className="block text-[14px] font-bold text-[#0a1f5c] mb-2">
                        Experience <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <select
                          required
                          defaultValue=""
                          className="w-full appearance-none rounded-xl border border-[#e2e8f0] bg-white px-4 py-3 pr-10 text-[15px] text-[#0a1f5c] outline-none focus:border-[#1e6fd0] focus:ring-2 focus:ring-[#1e6fd0]/20 transition"
                        >
                          <option value="" disabled>
                            {form.experiencePlaceholder}
                          </option>
                          {form.experienceOptions
                            .filter((opt) => opt !== form.experiencePlaceholder)
                            .map((opt, i) => (
                              <option key={i} value={opt}>
                                {opt}
                              </option>
                            ))}
                        </select>
                        <div className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 text-[#9aa3b2]">
                          <svg
                            className="h-5 w-5 fill-none stroke-current"
                            viewBox="0 0 24 24"
                            strokeWidth="2"
                          >
                            <polyline points="6 9 12 15 18 9" />
                          </svg>
                        </div>
                      </div>
                    </div>

                    {/* Row 5: Upload Resume & Cover Letter */}
                    <div className="grid gap-5 sm:grid-cols-2">
                      {/* Resume Upload */}
                      <div>
                        <label className="block text-[14px] font-bold text-[#0a1f5c] mb-2">
                          Upload Resume <span className="text-red-500">*</span>
                        </label>
                        <label className="relative flex min-h-[110px] cursor-pointer flex-col items-center justify-center rounded-xl border-2 border-dashed border-[#d5dfed] bg-[#f8fafc] p-4 text-center transition hover:border-[#1e6fd0] hover:bg-[#f0f6ff] group">
                          <input
                            type="file"
                            accept=".pdf,.doc,.docx"
                            required={!resumeName}
                            onChange={handleResumeChange}
                            className="sr-only"
                          />
                          <svg
                            viewBox="0 0 24 24"
                            className="h-8 w-8 fill-none stroke-current text-[#1e6fd0] mb-1.5 transition-transform group-hover:scale-110"
                            strokeWidth="1.8"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                            <polyline points="17 8 12 3 7 8" />
                            <line x1="12" y1="3" x2="12" y2="15" />
                          </svg>
                          <span className="text-sm font-semibold text-[#0a1f5c]">
                            {resumeName ? (
                              <span className="text-[#1e6fd0] font-bold">{resumeName}</span>
                            ) : (
                              form.resumeText
                            )}
                          </span>
                          <span className="mt-1 text-xs text-[#828b9a]">
                            {form.resumeSubtext}
                          </span>
                        </label>
                      </div>

                      {/* Cover Letter Upload */}
                      <div>
                        <label className="block text-[14px] font-bold text-[#0a1f5c] mb-2">
                          {form.coverLetterLabel}
                        </label>
                        <label className="relative flex min-h-[110px] cursor-pointer flex-col items-center justify-center rounded-xl border-2 border-dashed border-[#d5dfed] bg-[#f8fafc] p-4 text-center transition hover:border-[#1e6fd0] hover:bg-[#f0f6ff] group">
                          <input
                            type="file"
                            accept=".pdf,.doc,.docx"
                            onChange={handleCoverLetterChange}
                            className="sr-only"
                          />
                          <svg
                            viewBox="0 0 24 24"
                            className="h-8 w-8 fill-none stroke-current text-[#1e6fd0] mb-1.5 transition-transform group-hover:scale-110"
                            strokeWidth="1.8"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                            <polyline points="17 8 12 3 7 8" />
                            <line x1="12" y1="3" x2="12" y2="15" />
                          </svg>
                          <span className="text-sm font-semibold text-[#0a1f5c]">
                            {coverLetterName ? (
                              <span className="text-[#1e6fd0] font-bold">{coverLetterName}</span>
                            ) : (
                              form.coverLetterText
                            )}
                          </span>
                          <span className="mt-1 text-xs text-[#828b9a]">
                            {form.coverLetterSubtext}
                          </span>
                        </label>
                      </div>
                    </div>

                    {/* Row 6: Additional Information */}
                    <div>
                      <label className="block text-[14px] font-bold text-[#0a1f5c] mb-2">
                        {form.additionalInfoLabel}
                      </label>
                      <textarea
                        rows={4}
                        placeholder={form.additionalInfoPlaceholder}
                        className="w-full min-h-[110px] resize-none rounded-xl border border-[#e2e8f0] bg-white p-4 text-[15px] text-[#0a1f5c] outline-none placeholder:text-[#9aa3b2] focus:border-[#1e6fd0] focus:ring-2 focus:ring-[#1e6fd0]/20 transition"
                      />
                    </div>

                    {/* Row 7: Checkbox & Submit Button */}
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 pt-3">
                      <label className="flex items-center gap-3 cursor-pointer select-none text-sm text-[#555]">
                        <input
                          type="checkbox"
                          required
                          checked={agreedToTerms}
                          onChange={(e) => setAgreedToTerms(e.target.checked)}
                          className="h-4 w-4 rounded border-[#d5dfed] text-[#1e6fd0] focus:ring-[#1e6fd0] accent-[#1e6fd0]"
                        />
                        <span>
                          I agree to the{" "}
                          <Link href="/terms" className="font-semibold text-[#1e6fd0] hover:underline">
                            Terms & Conditions
                          </Link>{" "}
                          and{" "}
                          <Link href="/terms" className="font-semibold text-[#1e6fd0] hover:underline">
                            Privacy Policy.
                          </Link>
                        </span>
                      </label>

                      <button
                        type="submit"
                        className="inline-flex shrink-0 items-center justify-center gap-2.5 rounded-xl bg-[#1e6fd0] hover:bg-[#165bb0] px-7 py-3.5 text-[15px] font-bold text-white shadow-md transition hover:shadow-lg active:scale-[0.98]"
                      >
                        <span>{form.buttonLabel}</span>
                        <svg
                          viewBox="0 0 24 24"
                          className="h-4 w-4 fill-current -rotate-45 -translate-y-0.5"
                          aria-hidden
                        >
                          <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
                        </svg>
                      </button>
                    </div>
                  </form>
                </>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
