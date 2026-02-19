import PromoBanner from "@/components/PromoBanner";
import NavBar from "@/components/NavBar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Specials from "@/components/Specials";
import Features from "@/components/Features";
import Features from "@/components/Features";
import CallToAction from "@/components/CallToAction";
import CallToAction from "@/components/CallToAction";
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
      <Features />
      <CallToAction />
      <CallToAction />
      <Footer />
    </main>
  );
}
