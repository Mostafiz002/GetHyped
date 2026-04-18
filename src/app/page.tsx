import About from "@/components/sections/about/About";
import { BrandMarquee } from "@/components/sections/brandMarquee/BrandMarquee";
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
      <BrandMarquee />
    </main>
  );
}
