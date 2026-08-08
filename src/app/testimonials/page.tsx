import { Header } from "@/components/Header";
import { Testimonials } from "@/components/Testimonials";

export default function Page() {
  return (
    <>
      <Header />
      <main className="bg-white">
        <Testimonials />
      </main>
    </>
  );
}
