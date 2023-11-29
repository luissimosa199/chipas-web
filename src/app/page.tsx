import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Refs from "@/components/Refs";
import Gallery from "@/components/Gallery";
import Header from "@/components/Header";

export default function Home() {
  return (
    <main className="">
      <Header />
      <Hero />
      <Gallery />
      <Services />
      <Refs />
    </main>
  );
}
