import PromoBanner from "@/components/PromoBanner";
import NavBar from "@/components/NavBar";
import About from "@/components/About";
import Specials from "@/components/Specials";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Features2 from "@/components/Features2";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <PromoBanner />
      <NavBar />
      <About />
      <Specials />
      <Hero />
      <Features />
      <Features2 />
      <CallToAction />
      <Footer />
    </main>
  );
}
