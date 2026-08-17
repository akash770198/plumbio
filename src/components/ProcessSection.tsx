import Image from "next/image";
import { site, SectionProps, ServicesProcessData } from "@/data";
import { Reveal } from "./Reveal";
import { Icon } from "./Icon";

export function ProcessSection({ data, className }: SectionProps<ServicesProcessData> = {}) {
  const process = data || site.process;

  return (
    <section
      className={
        className ??
        "relative overflow-hidden bg-white pt-0 pb-[3.25rem] lg:pb-[3.75rem]"
      }
    >

      {/* background dots */}
      <div className="absolute left-0 top-28 h-72 w-72 rounded-full bg-[radial-gradient(circle,#dbeafe_2px,transparent_2px)] [background-size:14px_14px] opacity-60" />

      <div className="absolute right-0 top-0 h-80 w-80 rounded-full bg-[radial-gradient(circle,#dbeafe_2px,transparent_2px)] [background-size:14px_14px] opacity-60" />

      {/* Multi-layered bottom wave SVG */}
      <div className="absolute bottom-0 left-0 right-0 z-0">
        <svg viewBox="0 0 1440 320" preserveAspectRatio="none" className="w-full h-[150px] lg:h-[250px]">
           <path fill="#eff6ff" fillOpacity="1" d="M0,256L48,229.3C96,203,192,149,288,154.7C384,160,480,224,576,218.7C672,213,768,139,864,128C960,117,1056,165,1152,192C1248,219,1344,224,1392,229.3L1440,235L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
           <path fill="#e0e7ff" fillOpacity="1" d="M0,128L48,149.3C96,171,192,213,288,208C384,203,480,149,576,144C672,139,768,181,864,197.3C960,213,1056,203,1152,176C1248,149,1344,107,1392,85.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
           <path fill="#dbeafe" fillOpacity="0.7" d="M0,224L48,213.3C96,203,192,181,288,186.7C384,192,480,224,576,218.7C672,213,768,171,864,154.7C960,139,1056,149,1152,165.3C1248,181,1344,203,1392,213.3L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>

      <div className="shell relative">

        {/* heading */}

        <Reveal>

          <div className="text-center">

            <div className="flex items-center justify-center gap-5">
              <span className="h-[2px] w-16 bg-blue-600" />
              <p className="section-label">
                {process.label}
              </p>
              <span className="h-[2px] w-16 bg-blue-600" />
            </div>

            <h2 className="section-title mt-6">
              {process.title[0]}{" "}
              <span className="text-[#1e6fd0]">{process.title[1]}</span>{" "}
              {process.title[2]}
            </h2>

            <div className="mx-auto mt-5 h-[4px] w-16 rounded-full bg-blue-600" />

          </div>

        </Reveal>

        {/* timeline */}

        <div className="relative mt-16 lg:mt-20">

          <div className="absolute left-[12%] right-[12%] top-[52px] hidden h-[3px] bg-blue-100 lg:block" />

          <div className="grid gap-14 lg:grid-cols-4">

            {process.steps.map((step, index) => (

              <Reveal key={step.number} delay={index * 100}>

                <div className="relative text-center">

                  {/* connector dot */}

                  {index !== 3 && (

                    <div className="absolute left-[calc(100%_-_12px)] top-[43px] hidden lg:block">

                      <div className="flex h-6 w-6 items-center justify-center rounded-full border border-blue-200 bg-white">

                        <div className="h-3 w-3 rounded-full bg-blue-600" />

                      </div>

                    </div>

                  )}

                  {/* icon */}

                  <div className="mx-auto flex h-32 w-32 items-center justify-center rounded-full border-[8px] border-white bg-gradient-to-b from-[#2b73ff] to-[#0047d8] shadow-[0_18px_35px_rgba(0,82,255,.25)]">
                    {step.iconType === "image" ? (
                      <Image
                        src={step.icon}
                        alt={step.title}
                        width={56}
                        height={56}
                        className="h-14 w-14"
                      />
                    ) : (
                      <Icon
                        name={step.icon}
                        className="h-14 w-14 text-white"
                      />
                    )}
                  </div>

                  {/* pointer */}

                  <div className="mx-auto -mt-[2px] h-0 w-0 border-l-[12px] border-r-[12px] border-t-[18px] border-l-transparent border-r-transparent border-t-[#8db8ff]" />

                  <p className="mt-4 text-[48px] font-extrabold leading-none text-blue-600">
                    {String(step.number).padStart(2, "0")}
                  </p>

                  <h3 className="mt-2 text-[24px] font-bold text-[#082b7a]">
                    {step.title}
                  </h3>

                  <div className="mx-auto mt-3 h-[2px] w-8 rounded-full bg-blue-600" />

                  <p className="section-desc mx-auto mt-4 max-w-[170px]">
                    {step.description}
                  </p>

                </div>

              </Reveal>

            ))}

          </div>

        </div>

      </div>

    </section>

  );
}