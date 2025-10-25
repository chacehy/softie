"use client";

import { cn } from "@/lib/utils"
import { motion } from "motion/react"

// Reusable animated testimonial card component
const AnimatedTestimonialCard = ({ 
  name, 
  role, 
  initial, 
  testimonial, 
  delay = 0.1,
  gradientFrom = "#8260AD",
  gradientTo = "#3A7BFF"
}: {
  name: string;
  role: string;
  initial: string;
  testimonial: string;
  delay?: number;
  gradientFrom?: string;
  gradientTo?: string;
}) => {
  return (
    <motion.div 
      className={cn(
        "bg-white rounded-xl p-6 shadow-lg border border-gray-100 relative overflow-hidden",
        "hover:shadow-xl transition-all duration-500 cursor-pointer"
      )}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
      whileHover={{ 
        y: -8,
        scale: 1.02,
        transition: { duration: 0.3, ease: "easeOut" }
      }}
    >
      {/* Soft glow background on hover */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-[#DDCCF5]/20 to-[#3A7BFF]/10 rounded-xl opacity-0"
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      />
      
      <div className="relative z-10">
        <div className="flex items-center mb-4">
          <motion.div 
            className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg"
            style={{
              background: `linear-gradient(90deg, ${gradientFrom} 0%, ${gradientTo} 100%)`
            }}
            whileHover={{ 
              scale: 1.1,
              rotate: 5,
              transition: { duration: 0.2 }
            }}
          >
            {initial}
          </motion.div>
          <div className="ml-4">
            <h3 className="font-semibold text-gray-900">{name}</h3>
            <p className="text-sm text-gray-500">{role}</p>
          </div>
        </div>
        <motion.p 
          className="text-gray-700 italic"
          whileHover={{ color: "#8260AD" }}
          transition={{ duration: 0.2 }}
        >
          &ldquo;{testimonial}&rdquo;
        </motion.p>
      </div>
    </motion.div>
  );
};

export function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <motion.h2 
            className="text-4xl font-bold mb-4 bg-gradient-to-r from-[#8260AD] to-[#3A7BFF] bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            What Our Clients Say
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            Don&apos;t just take our word for it. Here&apos;s what our clients have to say about working with us.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatedTestimonialCard
            name="Sarah Chen"
            role="CEO, TechStart"
            initial="S"
            testimonial="Professional, friendly, and delivered exactly what we needed. The team exceeded our expectations with their attention to detail and communication throughout the project."
            delay={0.1}
            gradientFrom="#8260AD"
            gradientTo="#3A7BFF"
          />

          <AnimatedTestimonialCard
            name="Mike Rodriguez"
            role="Founder, DigitalCo"
            initial="M"
            testimonial="Amazing communication throughout the project. Highly recommend! They made our vision come to life with clean, efficient solutions."
            delay={0.2}
            gradientFrom="#3A7BFF"
            gradientTo="#00D4FF"
          />

          <AnimatedTestimonialCard
            name="Emma Thompson"
            role="CTO, InnovateLab"
            initial="E"
            testimonial="Exceeded our expectations. Great attention to detail and the final product was exactly what we envisioned. Will definitely work with them again."
            delay={0.3}
            gradientFrom="#00D4FF"
            gradientTo="#8260AD"
          />

          <AnimatedTestimonialCard
            name="Alex Kumar"
            role="Product Manager, ScaleUp"
            initial="A"
            testimonial="Reliable and professional. They understood our requirements perfectly and delivered a solution that our users absolutely love."
            delay={0.4}
            gradientFrom="#FF6B6B"
            gradientTo="#8260AD"
          />

          <AnimatedTestimonialCard
            name="Lisa Park"
            role="Design Director, CreativeStudio"
            initial="L"
            testimonial="Friendly team, great results. Our customers love the interface and the overall user experience. The collaboration was seamless."
            delay={0.5}
            gradientFrom="#8260AD"
            gradientTo="#FF6B6B"
          />

          <AnimatedTestimonialCard
            name="David Kim"
            role="CEO, FutureTech"
            initial="D"
            testimonial="Outstanding service and support. They went above and beyond to ensure our project was successful. Will definitely work again."
            delay={0.6}
            gradientFrom="#3A7BFF"
            gradientTo="#FF6B6B"
          />
        </div>
      </div>
    </section>
  )
}
