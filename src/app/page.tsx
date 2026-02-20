import PromoBanner from "@/components/PromoBanner";
import Hero from "@/components/Hero";
import NavBar from "@/components/NavBar";
import Specials from "@/components/Specials";
import About from "@/components/About";
import Features from "@/components/Features";
import Features2 from "@/components/Features2";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <PromoBanner />
      <Hero />
      <NavBar />
      <Specials />
      <About />
      <Features />
      <Features2 />
      <CallToAction />
      <Footer />
    </main>
  );
}
