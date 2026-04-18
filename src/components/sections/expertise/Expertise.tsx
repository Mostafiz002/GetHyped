"use client";

import Container from "@/components/ui/Container";
import ExpertiseCard from "./ExpertiseCard";

const EXPERTISES = [
  {
    id: "01",
    title: "Social strategy",
    tag: "Expertise",
    description: "Slimme strategie. Sterke start.",
    subtext:
      "We duiken diep in jouw merk, doelgroep en doelen. En vertalen data naar een duidelijk plan met formats die écht impact maken. Zo weet je precies waarom het werkt.",
    color: "bg-white",
    textColor: "text-[#161616]",
    buttonColor: "bg-[#FF5F2E]",
    mediaUrl: "https://gethyped.b-cdn.net/MD/MD%20Loop%20Schaken.mp4",
  },
  {
    id: "02",
    title: "Content creation",
    tag: "Expertise",
    description: "Content die opvalt en raakt.",
    subtext:
      "We maken content die opvalt. Blijft hangen. En jouw doelgroep raakt. Creatief, snel en energiek. Altijd met het doel voor ogen.",
    color: "bg-[#F3B8FF]",
    textColor: "text-[#161616]",
    buttonColor: "bg-[#fff]",
    mediaUrl: "https://gethyped.b-cdn.net/Expertises/Loop%20BTS%20comp.mp4",
  },
  {
    id: "03",
    title: "Activation",
    tag: "Expertise",
    description: "Zichtbaar waar en wanneer het telt.",
    subtext:
      "De juiste content verdient het om gezien te worden. We verspreiden de content waar jouw doelgroep is. Zo raakt jouw merk de juiste mensen, precies waar en wanneer het telt.",
    color: "bg-[#27C498]",
    textColor: "text-[#161616]",
    buttonColor: "bg-[#fff]",
    mediaUrl: "https://gethyped.b-cdn.net/Over%20de%20Top/overdetop-loop.mp4",
  },
  {
    id: "04",
    title: "Data",
    tag: "Expertise",
    description: "Inzichten die impact maken.",
    subtext:
      "We duiken in de cijfers om te snappen wat écht werkt. En sturen jouw content scherp bij.",
    color: "bg-[#1E90FF]",
    textColor: "text-[#161616]",
    buttonColor: "bg-[#fff]",
    mediaUrl: "https://gethyped.b-cdn.net/Expertises/Data%20comp.mp4",
  },
];

export default function ExpertiseSection() {
  return (
    <section id="expertise" className="bg-[#f9f5f0] pb-20">
      <Container>
        <div className="relative">
          {EXPERTISES.map((expertise, index) => (
            <ExpertiseCard
              key={expertise.id}
              {...expertise}
              index={index}
              totalCards={EXPERTISES.length}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
