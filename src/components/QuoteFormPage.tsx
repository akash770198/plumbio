"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";
import { site } from "@/data";
import { Reveal } from "./Reveal";

type QuoteLikePage = typeof site.quotePage;

function FeatureIcon({ name }: { name: string }) {
  const props = {
    viewBox: "0 0 24 24",
    className: "h-5 w-5 fill-none stroke-current",
    strokeWidth: 1.8,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true as const,
  };

  switch (name) {
    case "pricing":
      return (
        <svg {...props}>
          <circle cx="12" cy="12" r="9" />
          <path d="M12 7v10M9.5 9.5c.5-1 1.5-1.5 2.5-1.5s2 .7 2 1.8c0 2.2-4 1.6-4 3.8 0 1 .8 1.9 2 1.9s2-.5 2.5-1.4" />
        </svg>
      );
    case "trusted":
    case "award":
      return (
        <svg {...props}>
          <circle cx="12" cy="8" r="5" />
          <path d="M8.5 13.5L7 22l5-2.5L17 22l-1.5-8.5" />
        </svg>
      );
    case "flexible":
    case "clock":
      return (
        <svg {...props}>
          <circle cx="12" cy="12" r="9" />
          <path d="M12 7v5l3 2" />
        </svg>
      );
    case "shield":
      return (
        <svg {...props}>
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <path d="M9 12l2 2 4-4" />
        </svg>
      );
    default:
      return (
        <svg {...props}>
          <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" />
        </svg>
      );
  }
}

function HelpIcon({ name }: { name: string }) {
  const props = {
    viewBox: "0 0 24 24",
    className: "h-4 w-4 fill-none stroke-current",
    strokeWidth: 1.8,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true as const,
  };

  if (name === "phone") {
    return (
      <svg {...props}>
        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.12.96.3 1.88.57 2.77a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.89.27 1.81.45 2.77.57A2 2 0 0122 16.92z" />
      </svg>
    );
  }
  if (name === "clock") {
    return (
      <svg {...props}>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 2" />
      </svg>
    );
  }
  return (
    <svg {...props}>
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <path d="M22 6l-10 7L2 6" />
    </svg>
  );
}

const fieldClass =
  "w-full rounded-md border border-[#d5dbe6] bg-white px-4 py-3 text-[15px] text-[#0a1f5c] outline-none placeholder:text-[#9aa3b2] focus:border-[#1e6fd0] focus:ring-2 focus:ring-[#1e6fd0]/15";

function SuccessMessage({ title, message }: { title: string; message: string }) {
  return (
    <div className="flex min-h-[420px] flex-col items-center justify-center px-4 py-12 text-center">
      <div className="grid h-16 w-16 place-items-center rounded-full bg-[#e7f7ee] text-[#1f9d55]">
        <svg
          viewBox="0 0 24 24"
          className="h-8 w-8 fill-none stroke-current"
          strokeWidth="2.25"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden
        >
          <path d="M20 6L9 17l-5-5" />
        </svg>
      </div>
      <h3 className="section-title mt-6">{title}</h3>
      <p className="section-desc mt-3 max-w-md">{message}</p>
    </div>
  );
}

export function QuoteFormPage({ data }: { data: QuoteLikePage }) {
  const { sidebar, form } = data;
  const fields = form.fields;
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="bg-[#f7f9fc] pt-[3.25rem] pb-[3.25rem] lg:pt-[3.75rem] lg:pb-[3.75rem]">
      <div className="shell">
        <div className="overflow-hidden rounded-2xl border border-[#e8edf5] bg-white shadow-[0_10px_36px_rgba(10,31,92,0.06)]">
          <div className="grid lg:grid-cols-[minmax(280px,0.9fr)_minmax(0,1.4fr)]">
            <Reveal>
              <aside className="h-full bg-[#eef4fb] p-6 sm:p-8 lg:p-9">
                <div className="flex items-center gap-3">
                  <span className="h-[2px] w-8 bg-[#1e6fd0]" />
                  <h2 className="section-title text-[clamp(22px,2.2vw,28px)]">
                    {sidebar.title}
                  </h2>
                </div>

                <ul className="mt-8 space-y-6">
                  {sidebar.features.map((feature) => (
                    <li key={feature.title} className="flex items-start gap-4">
                      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-[#1e6fd0] text-white">
                        <FeatureIcon name={feature.icon} />
                      </span>
                      <div>
                        <p className="text-[15px] font-bold text-[#0a1f5c]">
                          {feature.title}
                        </p>
                        <p className="section-desc mt-1">{feature.description}</p>
                      </div>
                    </li>
                  ))}
                </ul>

                <div className="mt-10 border-t border-[#d5e0ef] pt-8">
                  <h3 className="text-[18px] font-bold text-[#1e6fd0]">
                    {sidebar.helpTitle}
                  </h3>
                  <ul className="mt-5 space-y-3.5">
                    {sidebar.helpItems.map((item) => (
                      <li
                        key={item.value}
                        className="flex items-center gap-3 text-[15px] text-[#0a1f5c]"
                      >
                        <span className="text-[#1e6fd0]">
                          <HelpIcon name={item.icon} />
                        </span>
                        {item.icon === "email" ? (
                          <a href={`mailto:${item.value}`} className="hover:text-[#1e6fd0]">
                            {item.value}
                          </a>
                        ) : item.icon === "phone" ? (
                          <a
                            href={`tel:${item.value.replace(/\s/g, "")}`}
                            className="hover:text-[#1e6fd0]"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <span>{item.value}</span>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              </aside>
            </Reveal>

            <Reveal delay={80}>
              <div className="p-6 sm:p-8 lg:p-10">
                {submitted ? (
                  <SuccessMessage
                    title={form.successTitle}
                    message={form.successMessage}
                  />
                ) : (
                  <>
                    <div className="flex items-center gap-3">
                      <span className="h-[2px] w-8 bg-[#1e6fd0]" />
                      <h2 className="section-title text-[clamp(22px,2.2vw,28px)]">
                        {form.title}
                      </h2>
                    </div>

                    <form className="mt-8" onSubmit={handleSubmit}>
                      <div className="grid gap-5 sm:grid-cols-2">
                        <label className="block">
                          <span className="mb-2 block text-[14px] font-bold text-[#0a1f5c]">
                            {fields.fullName.label}
                            {fields.fullName.required ? (
                              <span className="text-[#e24b4b]"> *</span>
                            ) : null}
                          </span>
                          <input
                            type="text"
                            name="fullName"
                            required={fields.fullName.required}
                            placeholder={fields.fullName.placeholder}
                            className={fieldClass}
                          />
                        </label>

                        <label className="block">
                          <span className="mb-2 block text-[14px] font-bold text-[#0a1f5c]">
                            {fields.email.label}
                            {fields.email.required ? (
                              <span className="text-[#e24b4b]"> *</span>
                            ) : null}
                          </span>
                          <input
                            type="email"
                            name="email"
                            required={fields.email.required}
                            placeholder={fields.email.placeholder}
                            className={fieldClass}
                          />
                        </label>

                        <label className="block">
                          <span className="mb-2 block text-[14px] font-bold text-[#0a1f5c]">
                            {fields.phone.label}
                            {fields.phone.required ? (
                              <span className="text-[#e24b4b]"> *</span>
                            ) : null}
                          </span>
                          <input
                            type="tel"
                            name="phone"
                            required={fields.phone.required}
                            placeholder={fields.phone.placeholder}
                            className={fieldClass}
                          />
                        </label>

                        <label className="block">
                          <span className="mb-2 block text-[14px] font-bold text-[#0a1f5c]">
                            {fields.serviceType.label}
                            {fields.serviceType.required ? (
                              <span className="text-[#e24b4b]"> *</span>
                            ) : null}
                          </span>
                          <select
                            name="serviceType"
                            required={fields.serviceType.required}
                            defaultValue=""
                            className={`${fieldClass} appearance-none bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22%239aa3b2%22%20stroke-width%3D%222%22%3E%3Cpath%20d%3D%22M6%209l6%206%206-6%22%2F%3E%3C%2Fsvg%3E')] bg-[length:18px] bg-[right_12px_center] bg-no-repeat pr-10`}
                          >
                            <option value="" disabled>
                              {fields.serviceType.placeholder}
                            </option>
                            {fields.serviceType.options.map((option) => (
                              <option key={option} value={option}>
                                {option}
                              </option>
                            ))}
                          </select>
                        </label>

                        <label className="block">
                          <span className="mb-2 block text-[14px] font-bold text-[#0a1f5c]">
                            {fields.propertyType.label}
                            {fields.propertyType.required ? (
                              <span className="text-[#e24b4b]"> *</span>
                            ) : null}
                          </span>
                          <select
                            name="propertyType"
                            required={fields.propertyType.required}
                            defaultValue=""
                            className={`${fieldClass} appearance-none bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22%239aa3b2%22%20stroke-width%3D%222%22%3E%3Cpath%20d%3D%22M6%209l6%206%206-6%22%2F%3E%3C%2Fsvg%3E')] bg-[length:18px] bg-[right_12px_center] bg-no-repeat pr-10`}
                          >
                            <option value="" disabled>
                              {fields.propertyType.placeholder}
                            </option>
                            {fields.propertyType.options.map((option) => (
                              <option key={option} value={option}>
                                {option}
                              </option>
                            ))}
                          </select>
                        </label>

                        <label className="block">
                          <span className="mb-2 block text-[14px] font-bold text-[#0a1f5c]">
                            {fields.location.label}
                            {fields.location.required ? (
                              <span className="text-[#e24b4b]"> *</span>
                            ) : null}
                          </span>
                          <input
                            type="text"
                            name="location"
                            required={fields.location.required}
                            placeholder={fields.location.placeholder}
                            className={fieldClass}
                          />
                        </label>

                        <label className="block">
                          <span className="mb-2 block text-[14px] font-bold text-[#0a1f5c]">
                            {fields.frequency.label}
                            {fields.frequency.required ? (
                              <span className="text-[#e24b4b]"> *</span>
                            ) : null}
                          </span>
                          <select
                            name="frequency"
                            required={fields.frequency.required}
                            defaultValue=""
                            className={`${fieldClass} appearance-none bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22%239aa3b2%22%20stroke-width%3D%222%22%3E%3Cpath%20d%3D%22M6%209l6%206%206-6%22%2F%3E%3C%2Fsvg%3E')] bg-[length:18px] bg-[right_12px_center] bg-no-repeat pr-10`}
                          >
                            <option value="" disabled>
                              {fields.frequency.placeholder}
                            </option>
                            {fields.frequency.options.map((option) => (
                              <option key={option} value={option}>
                                {option}
                              </option>
                            ))}
                          </select>
                        </label>

                        <label className="block">
                          <span className="mb-2 block text-[14px] font-bold text-[#0a1f5c]">
                            {fields.preferredDate.label}
                          </span>
                          <input
                            type="date"
                            name="preferredDate"
                            className={fieldClass}
                          />
                        </label>
                      </div>

                      <label className="mt-5 block">
                        <span className="mb-2 block text-[14px] font-bold text-[#0a1f5c]">
                          {fields.requirements.label}
                        </span>
                        <textarea
                          name="requirements"
                          rows={5}
                          placeholder={fields.requirements.placeholder}
                          className={`${fieldClass} resize-none`}
                        />
                      </label>

                      <div className="mt-6 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
                        <label className="flex items-start gap-3 text-[14px] leading-[1.6] text-[#555]">
                          <input
                            type="checkbox"
                            name="agree"
                            required
                            className="mt-1 h-4 w-4 accent-[#1e6fd0]"
                          />
                          <span>
                            {form.agreePrefix}{" "}
                            <Link href={form.termsHref} className="font-semibold text-[#1e6fd0] hover:underline">
                              {form.termsLabel}
                            </Link>{" "}
                            {form.andLabel}{" "}
                            <Link href={form.privacyHref} className="font-semibold text-[#1e6fd0] hover:underline">
                              {form.privacyLabel}
                            </Link>
                            .
                          </span>
                        </label>

                        <button
                          type="submit"
                          className="inline-flex shrink-0 items-center justify-center gap-2 rounded-md bg-[#1e6fd0] px-6 py-3.5 text-[15px] font-bold text-white transition hover:bg-[#1557a8]"
                        >
                          {form.buttonLabel}
                          <svg
                            viewBox="0 0 24 24"
                            className="h-4 w-4 fill-none stroke-current"
                            strokeWidth="2.25"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            aria-hidden
                          >
                            <path d="M5 12h14M13 6l6 6-6 6" />
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
      </div>
    </section>
  );
}
