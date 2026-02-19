import PromoBanner from "@/components/PromoBanner";
import Hero from "@/components/Hero";
import NavBar from "@/components/NavBar";
import Features from "@/components/Features";
import Specials from "@/components/Specials";
import Features2 from "@/components/Features2";
import Specials2 from "@/components/Specials2";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";
import CallToAction2 from "@/components/CallToAction2";

export default function Home() {
  return (
    <main>
      <PromoBanner />
      <Hero />
      <NavBar />
      <Features />
      <Specials />
      <Features2 />
      <Specials2 />
      <CallToAction />
      <Footer />
      <CallToAction2 />
    </main>
  );
}
