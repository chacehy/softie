"use client";

import { motion } from "motion/react";
import { Check, Star } from "lucide-react";
import { cn } from "@/lib/utils";

interface PricingPlan {
  name: string;
  description: string;
  price: string;
  originalPrice?: string;
  features: string[];
  isPopular?: boolean;
  isCustom?: boolean;
  cta: string;
  gradient: string;
  textColor: string;
  buttonStyle: string;
}

const pricingPlans: PricingPlan[] = [
  {
    name: "WordPress Vitrine",
    description: "Perfect for showcasing your business with a professional online presence",
    price: "40.000 DA",
    features: [
      "Custom WordPress theme design",
      "Responsive mobile-first design",
      "SEO optimization included",
      "Contact forms & lead capture",
      "Social media integration",
      "Basic analytics setup",
      "Content management training",
      "3 months free support"
    ],
    cta: "Get Started",
    gradient: "from-[#DDCCF5] to-[#F7F5FA]",
    textColor: "text-gray-900",
    buttonStyle: "bg-gradient-to-r from-[#8260AD] to-[#3A7BFF] text-white hover:from-[#3A7BFF] hover:to-[#8260AD]"
  },
  {
    name: "E-commerce WooCommerce",
    description: "Complete online store solution with payment processing and inventory management",
    price: "60.000 DA",
    originalPrice: "75.000 DA",
    features: [
      "Full WooCommerce setup",
      "Payment gateway integration",
      "Product catalog management",
      "Inventory tracking system",
      "Order management dashboard",
      "Customer accounts & reviews",
      "Shipping & tax calculations",
      "Mobile-optimized checkout",
      "6 months free support"
    ],
    isPopular: true,
    cta: "Start Selling",
    gradient: "from-[#8260AD] to-[#3A7BFF]",
    textColor: "text-white",
    buttonStyle: "bg-white text-[#8260AD] hover:bg-gray-50"
  },
  {
    name: "Custom Code Solution",
    description: "Bespoke web & mobile applications built from scratch for your unique needs",
    price: "Contact us",
    features: [
      "Custom web application",
      "Native mobile app (iOS/Android)",
      "Advanced database design",
      "API development & integration",
      "User authentication system",
      "Real-time features",
      "Performance optimization",
      "Scalable architecture",
      "12 months free support",
      "Source code ownership"
    ],
    isCustom: true,
    cta: "Let's Build",
    gradient: "from-[#3A7BFF] to-[#00D4FF]",
    textColor: "text-white",
    buttonStyle: "bg-white text-[#3A7BFF] hover:bg-gray-50"
  }
];

const PricingCard = ({ plan, index }: { plan: PricingPlan; index: number }) => {
  return (
    <motion.div
      className={cn(
        "relative rounded-2xl p-8 shadow-lg border transition-all duration-300",
        "hover:shadow-xl hover:-translate-y-2",
        plan.isPopular && "ring-2 ring-[#8260AD] ring-opacity-50",
        `bg-gradient-to-br ${plan.gradient}`
      )}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.02 }}
    >
      {/* Popular Badge */}
      {plan.isPopular && (
        <motion.div
          className="absolute -top-4 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-r from-[#8260AD] to-[#3A7BFF] text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center space-x-1">
            <Star className="w-4 h-4" />
            <span>Most Popular</span>
          </div>
        </motion.div>
      )}

      {/* Custom Badge */}
      {plan.isCustom && (
        <motion.div
          className="absolute -top-4 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-r from-[#3A7BFF] to-[#00D4FF] text-white px-4 py-2 rounded-full text-sm font-semibold">
            Custom Solution
          </div>
        </motion.div>
      )}

      <div className="relative z-10">
        {/* Plan Header */}
        <div className="mb-6">
          <h3 className={cn("text-2xl font-bold mb-2", plan.textColor)}>
            {plan.name}
          </h3>
          <p className={cn("text-sm opacity-90 leading-relaxed", plan.textColor)}>
            {plan.description}
          </p>
        </div>

        {/* Pricing */}
        <div className="mb-8">
          <div className="flex items-baseline space-x-2">
            <span className={cn("text-4xl font-bold", plan.textColor)}>
              {plan.price}
            </span>
            {plan.originalPrice && (
              <span className={cn("text-lg line-through opacity-60", plan.textColor)}>
                {plan.originalPrice}
              </span>
            )}
          </div>
          <p className={cn("text-sm opacity-75 mt-1", plan.textColor)}>
            One-time project fee
          </p>
        </div>

        {/* Features */}
        <div className="mb-8">
          <ul className="space-y-3">
            {plan.features.map((feature, featureIndex) => (
              <motion.li
                key={featureIndex}
                className="flex items-start space-x-3"
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.1 + featureIndex * 0.05 }}
                viewport={{ once: true }}
              >
                <Check className={cn("w-5 h-5 mt-0.5 flex-shrink-0", plan.textColor)} />
                <span className={cn("text-sm", plan.textColor)}>
                  {feature}
                </span>
              </motion.li>
            ))}
          </ul>
        </div>

        {/* CTA Button */}
        <motion.button
          className={cn(
            "w-full py-4 px-6 rounded-xl font-semibold transition-all duration-300",
            "hover:shadow-lg hover:scale-105",
            plan.buttonStyle
          )}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => {
            // Scroll to contact form
            const element = document.querySelector("#contact");
            if (element) {
              element.scrollIntoView({ behavior: "smooth" });
            }
          }}
        >
          {plan.cta}
        </motion.button>
      </div>
    </motion.div>
  );
};

export function Pricing() {
  return (
    <section id="pricing" className="py-20 bg-gradient-to-br from-[#F7F5FA] to-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
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
            Simple & Transparent Pricing
          </motion.h2>
          <motion.p
            className="text-xl text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            Choose the perfect solution for your business. All projects include our signature soft touch and attention to detail.
          </motion.p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <PricingCard key={plan.name} plan={plan} index={index} />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-600 mb-6">
            Need something custom? Let&apos;s chat about your unique requirements.
          </p>
          <motion.button
            className="bg-gradient-to-r from-[#8260AD] to-[#3A7BFF] text-white px-8 py-3 rounded-xl font-semibold hover:from-[#3A7BFF] hover:to-[#8260AD] transition-all duration-300 hover:shadow-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              const element = document.querySelector("#contact");
              if (element) {
                element.scrollIntoView({ behavior: "smooth" });
              }
            }}
          >
            Get a Custom Quote
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}

