import PromoBanner from "@/components/PromoBanner";
import NavBar from "@/components/NavBar";
import Team from "@/components/Team";
import Specials from "@/components/Specials";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Promo from "@/components/Promo";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <PromoBanner />
      <NavBar />
      <Team />
      <Specials />
      <Hero />
      <Features />
      <Promo />
      <CallToAction />
      <Footer />
    </main>
  );
}
