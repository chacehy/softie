import Hero from "@/components/Hero";
import { MarqueeDemo } from "@/components/testimonialsMarquee";
import { Testimonials } from "@/components/testimonials";
import { WobbleCardDemo } from "@/components/wobbly";
import { ContactUs } from "@/components/ContactUs";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
   <Hero/>
   <MarqueeDemo/>
   <Testimonials/>
   <WobbleCardDemo/>
   <ContactUs/>
   <Footer/>
   
   </>
  );
}
