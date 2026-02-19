import PromoBanner from "@/components/PromoBanner";
import NavBar from "@/components/NavBar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Specials from "@/components/Specials";
import Specials2 from "@/components/Specials2";
import Features from "@/components/Features";
import CallToAction from "@/components/CallToAction";
import CallToAction2 from "@/components/CallToAction2";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <PromoBanner />
      <NavBar />
      <Hero />
      <About />
      <Specials />
      <Specials2 />
      <Features />
      <CallToAction />
      <CallToAction2 />
      <Footer />
    </main>
  );
}
