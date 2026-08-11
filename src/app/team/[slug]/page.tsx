import { notFound } from "next/navigation";
import { Header } from "@/components/Header";
import { PageBanner } from "@/components/PageBanner";
import { TeamMemberDetail } from "@/components/TeamMemberDetail";
import { site } from "@/data";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return site.team.members.map((member) => ({ slug: member.slug }));
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params;
  const member = site.team.members.find((item) => item.slug === slug);

  if (!member) {
    notFound();
  }

  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Our Team", href: "/team" },
    { label: member.name, href: `/team/${member.slug}` },
  ];

  return (
    <>
      <Header />
      <main className="block">
        <PageBanner
          title={site.teamDetailBanner.title}
          breadcrumbs={breadcrumbs}
          backgroundImage={site.teamDetailBanner.backgroundImage}
          backgroundImageAlt={site.teamDetailBanner.backgroundImageAlt}
        />
        <TeamMemberDetail member={member} />
      </main>
    </>
  );
}
