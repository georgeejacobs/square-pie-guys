import PromoBanner from "@/components/PromoBanner";
import Hero from "@/components/Hero";
import NavBar from "@/components/NavBar";
import Specials from "@/components/Specials";
import About from "@/components/About";
import Specials2 from "@/components/Specials2";
import Features from "@/components/Features";
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
      <Specials2 />
      <Features />
      <CallToAction />
      <Footer />
    </main>
  );
}
