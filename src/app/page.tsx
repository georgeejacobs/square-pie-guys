import PromoBanner from "@/components/PromoBanner";
import CallToAction from "@/components/CallToAction";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Specials from "@/components/Specials";
import NavBar from "@/components/NavBar";
import Features from "@/components/Features";
import Features2 from "@/components/Features2";
import CallToAction2 from "@/components/CallToAction2";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <PromoBanner />
      <CallToAction />
      <Hero />
      <About />
      <Specials />
      <NavBar />
      <Features />
      <Features2 />
      <CallToAction2 />
      <Footer />
    </main>
  );
}
