import PromoBanner from "@/components/PromoBanner";
import NavBar from "@/components/NavBar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Specials from "@/components/Specials";
import Specials2 from "@/components/Specials2";
import Features2 from "@/components/Features2";
import CallToAction from "@/components/CallToAction";
import Features3 from "@/components/Features3";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <PromoBanner />
      <NavBar />
      <Hero />
      <Features />
      <Specials />
      <Specials2 />
      <Features2 />
      <CallToAction />
      <Features3 />
      <Footer />
    </main>
  );
}
