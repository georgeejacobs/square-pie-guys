import PromoBanner from "@/components/PromoBanner";
import NavBar from "@/components/NavBar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Specials from "@/components/Specials";
import Features from "@/components/Features";
import Features2 from "@/components/Features2";
import CallToAction from "@/components/CallToAction";
import CallToAction2 from "@/components/CallToAction2";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <PromoBanner />
      <NavBar />
      <Hero />
      <About />
      <Specials />
      <Features />
      <Features2 />
      <CallToAction />
      <CallToAction2 />
      <Footer />
    </main>
  );
}
