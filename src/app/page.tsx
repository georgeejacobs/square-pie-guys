import PromoBanner from "@/components/PromoBanner";
import NavBar from "@/components/NavBar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Specials from "@/components/Specials";
import CallToAction from "@/components/CallToAction";
import Features2 from "@/components/Features2";
import CallToAction2 from "@/components/CallToAction2";
import CallToAction3 from "@/components/CallToAction3";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <PromoBanner />
      <NavBar />
      <Hero />
      <Features />
      <Specials />
      <CallToAction />
      <Features2 />
      <CallToAction2 />
      <CallToAction3 />
      <Footer />
    </main>
  );
}
