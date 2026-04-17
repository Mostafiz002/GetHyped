import ClientSection from "@/components/sections/clients/Clients";
import Hero from "@/components/sections/hero/Hero";
import Header from "@/components/shared/Header";

export default function HomePage() {
  return (
    <main>
      <Header />
      <Hero />
      <ClientSection />
    </main>
  );
}
