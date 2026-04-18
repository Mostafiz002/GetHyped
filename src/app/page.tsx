import About from "@/components/sections/about/About";
import ClientSection from "@/components/sections/clients/Clients";
import ExpertiseSection from "@/components/sections/expertise/Expertise";
import Hero from "@/components/sections/hero/Hero";
import Header from "@/components/shared/Header";

export default function HomePage() {
  return (
    <main>
      <Header />
      <Hero />
      <ClientSection />
      <ExpertiseSection />
      <About />
    </main>
  );
}
