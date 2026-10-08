import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import FoodCarousel from "../components/FoodCarousel";
import Reviews from "../components/Reviews";
import CTA from "../components/CTA";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <FoodCarousel />
      <Reviews />
      <CTA />
      <Footer />
    </>
  );
}
