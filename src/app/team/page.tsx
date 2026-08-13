import { AccentTitle } from "@/components/AccentTitle";
import { Header } from "@/components/Header";
import { Icon } from "@/components/Icon";
import { PageBanner } from "@/components/PageBanner";
import { Reveal } from "@/components/Reveal";
import { TeamSection } from "@/components/TeamSection";
import { site } from "@/data";
import { SECTION_LIGHT, SECTION_PAD } from "@/lib/section-styles";

export default function Page() {
  const { teamBanner, team, topbar } = site;
  const social = team.pageSocial;

  return (
    <>
      <Header />
      <main className="block">
        <PageBanner
          title={teamBanner.title}
          breadcrumbs={teamBanner.breadcrumbs}
          backgroundImage={teamBanner.backgroundImage}
          backgroundImageAlt={teamBanner.backgroundImageAlt}
        />
        <TeamSection
          className={`relative overflow-hidden ${SECTION_LIGHT} ${SECTION_PAD}`}
          showButton={false}
          linkToDetail
        />
        <section className={`bg-white ${SECTION_PAD}`}>
          <div className="shell">
            <Reveal>
              <div className="rounded-xl border border-[#e8edf5] bg-[#f7f9fc] p-6 shadow-[0_8px_28px_rgba(10,31,92,0.05)] sm:p-8 lg:p-10">
                <div className="flex flex-col items-start gap-6 lg:flex-row lg:items-center lg:justify-between">
                  <div className="max-w-xl">
                    <p className="section-label">{social.label}</p>
                    <AccentTitle
                      className="mt-3"
                      before={social.titleBefore}
                      accent={social.titleAccent}
                    />
                    <p className="section-desc mt-3">{social.description}</p>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    {topbar.socials.map((item) => (
                      <a
                        key={item.label}
                        href={item.href}
                        aria-label={item.label}
                        className="grid h-12 w-12 place-items-center rounded-full border border-[#1e6fd0] text-[#1e6fd0] transition hover:bg-[#1e6fd0] hover:text-white"
                      >
                        <Icon name={item.icon} className="h-5 w-5" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </section>
      </main>
    </>
  );
}
