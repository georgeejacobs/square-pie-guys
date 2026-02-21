import PromoBanner from "@/components/PromoBanner";
import Hero from "@/components/Hero";
import NavBar from "@/components/NavBar";
import Specials from "@/components/Specials";
import About from "@/components/About";
import Features from "@/components/Features";
import CallToAction from "@/components/CallToAction";
import CallToAction2 from "@/components/CallToAction2";
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
      <CallToAction />
      <CallToAction2 />
      <Footer />
    </main>
  );
}
