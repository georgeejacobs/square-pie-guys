import PromoBanner from "@/components/PromoBanner";
import Hero from "@/components/Hero";
import NavBar from "@/components/NavBar";
import CallToAction from "@/components/CallToAction";
import Specials from "@/components/Specials";
import Features from "@/components/Features";
import About from "@/components/About";
import Features2 from "@/components/Features2";
import Footer from "@/components/Footer";
import CallToAction2 from "@/components/CallToAction2";

export default function Home() {
  return (
    <main>
      <PromoBanner />
      <Hero />
      <NavBar />
      <CallToAction />
      <Specials />
      <Features />
      <About />
      <Features2 />
      <Footer />
      <CallToAction2 />
    </main>
  );
}
