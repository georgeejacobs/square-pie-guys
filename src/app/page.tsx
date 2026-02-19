import PromoBanner from "@/components/PromoBanner";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Specials from "@/components/Specials";
import NavBar from "@/components/NavBar";
import Specials2 from "@/components/Specials2";
import Specials3 from "@/components/Specials3";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";
import CallToAction2 from "@/components/CallToAction2";

export default function Home() {
  return (
    <main>
      <PromoBanner />
      <Hero />
      <Features />
      <Specials />
      <NavBar />
      <Specials2 />
      <Specials3 />
      <CallToAction />
      <Footer />
      <CallToAction2 />
    </main>
  );
}
