import { site } from "@/data";
import { Reveal } from "./Reveal";

const ICONS = {
  location: (
    <svg viewBox="0 0 24 24" className="h-5 w-5 fill-none stroke-current" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  ),
  phone: (
    <svg viewBox="0 0 24 24" className="h-5 w-5 fill-none stroke-current" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  ),
  email: (
    <svg viewBox="0 0 24 24" className="h-5 w-5 fill-none stroke-current" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  ),
  clock: (
    <svg viewBox="0 0 24 24" className="h-5 w-5 fill-none stroke-current" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  ),
};

const SOCIAL_ICONS = {
  fb: (
    <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" stroke="none">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
    </svg>
  ),
  tw: (
    <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" stroke="none">
      <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
    </svg>
  ),
  ig: (
    <svg viewBox="0 0 24 24" className="h-4 w-4 fill-none stroke-current" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
    </svg>
  ),
  in: (
    <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" stroke="none">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
      <rect x="2" y="9" width="4" height="12"></rect>
      <circle cx="4" cy="4" r="2"></circle>
    </svg>
  ),
  yt: (
    <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" stroke="none">
      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
      <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
    </svg>
  ),
};

export function ContactSection() {
  const { contactInfo } = site;

  return (
    <section className="section-y bg-white">
      <div className="shell flex flex-col gap-12 lg:flex-row lg:items-center">
        
        {/* Left Column: Contact Details */}
        <div className="w-full lg:w-[35%] xl:w-[30%]">
          <Reveal>
            <h4 className="mb-2 text-[13px] font-bold uppercase tracking-wider text-[#0051d4]">
              {contactInfo.label}
            </h4>
            <h2 className="mb-10 text-[36px] font-extrabold text-[#0a1f5c] md:text-[42px]">
              {contactInfo.title}
            </h2>

            <div className="mb-10 flex flex-col gap-6">
              {contactInfo.items.map((item, index) => {
                const Icon = ICONS[item.icon as keyof typeof ICONS];
                return (
                  <div key={index} className="flex items-start gap-5">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#0051d4] text-white">
                      {Icon}
                    </div>
                    <div className="flex flex-col justify-center pt-1">
                      {item.text.map((line, i) => (
                        <p key={i} className="text-[16px] font-medium text-[#0a1f5c]">
                          {line}
                        </p>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-3">
              {contactInfo.socials.map((social, i) => {
                const Icon = SOCIAL_ICONS[social.icon as keyof typeof SOCIAL_ICONS];
                return (
                  <a
                    key={i}
                    href={social.href}
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-[#0051d4] text-white transition-colors hover:bg-[#0a1f5c]"
                    aria-label={social.icon}
                  >
                    {Icon}
                  </a>
                );
              })}
            </div>
          </Reveal>
        </div>

        {/* Right Column: Map */}
        <div className="w-full lg:w-[65%] xl:w-[70%]">
          <Reveal delay={200}>
            <div className="relative h-[400px] w-full overflow-hidden rounded-2xl bg-gray-100 shadow-sm md:h-[500px]">
              <iframe
                src={contactInfo.mapUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Map Location"
              />
            </div>
          </Reveal>
        </div>

      </div>
    </section>
  );
}
