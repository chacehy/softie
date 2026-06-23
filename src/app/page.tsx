import Hero from "@/components/Hero";
import { MarqueeDemo } from "@/components/testimonialsMarquee";
import { Testimonials } from "@/components/testimonials";
import { WobbleCardDemo } from "@/components/wobbly";
import { Process } from "@/components/Process";
import { ContactUs } from "@/components/ContactUs";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <MarqueeDemo />
      <WobbleCardDemo />
      <Process />
      <Testimonials />
      <ContactUs />
      <Footer />
    </main>
  );
}
