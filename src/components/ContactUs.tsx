"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import emailjs from "@emailjs/browser";

export function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [isCalling, setIsCalling] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      // EmailJS configuration
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "service_softie";
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "template_contact";
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "YOUR_EMAILJS_PUBLIC_KEY";

      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_email: "henna.abdelbasset@gmail.com"
      };

      console.log("Sending email with params:", templateParams);
      await emailjs.send(serviceId, templateId, templateParams, publicKey);
      
      setSubmitStatus("success");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Error sending email:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handlePhoneCall = (e?: React.MouseEvent) => {
    console.log("handlePhoneCall called", { isCalling });
    
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    
    if (isCalling) {
      console.log("Already calling, ignoring click");
      return; // Prevent multiple rapid clicks
    }
    
    console.log("Setting isCalling to true");
    setIsCalling(true);
    
    // Simple approach - just use window.location.href
    try {
      console.log("Attempting to make phone call");
      window.location.href = "tel:+213770950240";
    } catch (error) {
      console.error("Error initiating phone call:", error);
    }
    
    // Reset the calling state after a short delay
    setTimeout(() => {
      console.log("Resetting isCalling to false");
      setIsCalling(false);
    }, 2000);
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-[#F7F5FA] to-[#DDCCF5]/30">
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
            Contact Us
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            Ready to bring your ideas to life? Let&apos;s chat about your next project.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Contact information */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <div className="space-y-6">
              <motion.h3 
                className="text-2xl font-semibold text-gray-900"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
                viewport={{ once: true }}
              >
                Let&apos;s start a conversation
              </motion.h3>
              
              <motion.div 
                className="space-y-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
                viewport={{ once: true }}
              >
                <p className="text-gray-600 leading-relaxed">
                  Have a project in mind? We&apos;d love to hear about it. Send us an email through the form 
                  and we&apos;ll get back to you within 24 hours. Or give us a call if you prefer to chat directly.
                </p>
                
                <div className="flex items-center space-x-3">
                  <button
                    className={cn(
                      "flex items-center space-x-2 px-6 py-3 rounded-full",
                      "bg-gradient-to-r from-[#3A7BFF] to-[#8260AD] text-white",
                      "hover:shadow-lg hover:scale-105 transition-all duration-300",
                      "font-medium cursor-pointer border-0 relative z-50",
                      isCalling && "opacity-75 cursor-not-allowed"
                    )}
                    disabled={isCalling}
                    onClick={(e) => {
                      console.log("Phone number clicked", { isCalling });
                      handlePhoneCall(e);
                    }}
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                    <span>{isCalling ? "Calling..." : "0770950240"}</span>
                  </button>
                  
                  <span className="text-sm text-gray-500">or</span>
                  
                  <span className="text-sm text-gray-600">
                    Use the form to send an email
                  </span>
                  
                  {/* Debug button */}
            
                </div>
              </motion.div>

              {/* Softie brand elements */}
              <motion.div 
                className="mt-8 p-6 rounded-xl bg-white/50 backdrop-blur-sm border border-[#DDCCF5]/50"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
                viewport={{ once: true }}
              >
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-[#8260AD] to-[#3A7BFF] flex items-center justify-center">
                    <span className="text-white text-sm font-bold">S</span>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900">Built with Softie</p>
                    <p className="text-xs text-gray-500">Code made soft, experiences made delightful</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right side - Contact form */}
          <motion.div
            className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Send us a message
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Your Name
                </label>
                <motion.input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className={cn(
                    "w-full px-4 py-3 rounded-xl border border-gray-200",
                    "focus:outline-none focus:ring-2 focus:ring-[#8260AD]/20 focus:border-[#8260AD]",
                    "transition-all duration-300 bg-white/80 backdrop-blur-sm"
                  )}
                  placeholder="Enter your name"
                  whileFocus={{ scale: 1.02 }}
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Your Email
                </label>
                <motion.input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className={cn(
                    "w-full px-4 py-3 rounded-xl border border-gray-200",
                    "focus:outline-none focus:ring-2 focus:ring-[#8260AD]/20 focus:border-[#8260AD]",
                    "transition-all duration-300 bg-white/80 backdrop-blur-sm"
                  )}
                  placeholder="Enter your email address"
                  whileFocus={{ scale: 1.02 }}
                />
              </div>

              <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Your Message
                    </label>
                    <motion.textarea
                      id="message"
                      name="message"
                      value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className={cn(
                    "w-full px-4 py-3 rounded-xl border border-gray-200",
                    "focus:outline-none focus:ring-2 focus:ring-[#8260AD]/20 focus:border-[#8260AD]",
                    "transition-all duration-300 bg-white/80 backdrop-blur-sm resize-none"
                  )}
                  placeholder="Tell us about your project, ideas, or just say hello..."
                  whileFocus={{ scale: 1.02 }}
                />
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                className={cn(
                  "w-full py-4 px-6 rounded-xl font-semibold text-white",
                  "bg-gradient-to-r from-[#8260AD] to-[#3A7BFF]",
                  "hover:shadow-lg hover:scale-105 transition-all duration-300",
                  "disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100",
                  "relative overflow-hidden"
                )}
                whileHover={{ scale: isSubmitting ? 1 : 1.05 }}
                whileTap={{ scale: isSubmitting ? 1 : 0.95 }}
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center space-x-2">
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    <span>Sending...</span>
                  </div>
                ) : (
                  "Send Message"
                )}
              </motion.button>

              {/* Status messages */}
              {submitStatus === "success" && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 rounded-xl bg-green-50 border border-green-200 text-green-800 text-sm"
                >
                  ✅ Message sent successfully! We&apos;ll get back to you soon.
                </motion.div>
              )}

              {submitStatus === "error" && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 rounded-xl bg-red-50 border border-red-200 text-red-800 text-sm"
                >
                  ❌ Something went wrong. Please try again or call us directly.
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
