import Image from "next/image";
import Hero from "./Hero";
import WhyUs from "./WhyUs";
import ShaadiSlider from "./ShaadiSlider"
import Testimonials from "./Testimonials";
import { Footer } from "./components/Footer";
export default function Home() {
  return (
   <>
   <Hero/>
   <WhyUs/>
   <ShaadiSlider/>
   <Testimonials/>
   <Footer/>
   </>
  );
}
