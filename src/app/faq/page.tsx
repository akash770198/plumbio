import { Header } from "@/components/Header";

export default function Page() {
  return (
    <>
      <Header />
      <main className="bg-white">
        <div className="px-6 py-28 lg:px-12">
          <h1 className="text-[clamp(28px,3vw,40px)] font-bold text-brand-head">FAQ</h1>
          <p className="mt-4 text-[15px] text-body">This page is coming next.</p>
        </div>
      </main>
    </>
  );
}
