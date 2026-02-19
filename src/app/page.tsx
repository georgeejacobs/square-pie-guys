import PromoBanner from "@/components/PromoBanner";
import NavBar from "@/components/NavBar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Specials from "@/components/Specials";
import Features from "@/components/Features";
import Features2 from "@/components/Features2";
import CallToAction from "@/components/CallToAction";
import Features3 from "@/components/Features3";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <PromoBanner />
      <NavBar />
      <Hero />
      <About />
      <Specials />
      <Features />
      <Features2 />
      <CallToAction />
      <Features3 />
      <Footer />
    </main>
  );
}
