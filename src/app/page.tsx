import PromoBanner from "@/components/PromoBanner";
import NavBar from "@/components/NavBar";
import About from "@/components/About";
import Specials from "@/components/Specials";
import Hero from "@/components/Hero";
import Specials2 from "@/components/Specials2";
import Features from "@/components/Features";
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
      <Specials2 />
      <Features />
      <CallToAction />
      <Footer />
    </main>
  );
}
