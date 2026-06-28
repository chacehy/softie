"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { CheckCircle2, AlertCircle, Phone, MessageSquare, Clock, Rocket } from "lucide-react";
import { cn } from "@/lib/utils";
import emailjs from "@emailjs/browser";

const EASE = [0.22, 1, 0.36, 1] as const;

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
        to_email: "hello@softie.cc"
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
    <section
      id="contact"
      className="relative overflow-hidden bg-gradient-to-b from-[#FBFAFC] to-[#EDE9FE]/40 py-28 md:py-32"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-0 right-0 h-[28rem] w-[28rem] translate-x-1/3 translate-y-1/4 rounded-full bg-[radial-gradient(circle_at_center,#2563EB_0%,transparent_65%)] opacity-15"
      />
      <div className="relative mx-auto max-w-7xl px-4">
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: EASE }}
          viewport={{ once: true }}
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-[#7C3AED]/15 bg-white/70 px-4 py-1.5 font-inter text-[11px] font-medium uppercase tracking-[0.22em] text-[#5b4a73] backdrop-blur-sm shadow-soft">
            Let&apos;s talk
          </span>
          <h2 className="mx-auto mt-6 max-w-2xl font-sora text-4xl font-bold leading-[1.05] tracking-tight text-[#161122] md:text-5xl">
            Got an idea? Let&apos;s make it{" "}
            <span className="text-gradient-brand">real.</span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl font-inter text-base leading-relaxed text-[#5b5566]">
            Tell us what you&apos;re building. We reply within 24 hours — no
            sales script, just a real conversation.
          </p>
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
                      "bg-gradient-to-r from-[#2563EB] to-[#7C3AED] text-white",
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
                    <Phone className="h-5 w-5" strokeWidth={1.75} />
                    <span>{isCalling ? "Calling..." : "0770 95 02 40"}</span>
                  </button>
                  
                  <span className="text-sm text-gray-500">or</span>
                  
                  <span className="text-sm text-gray-600">
                    Use the form to send an email
                  </span>
                  
                  {/* Debug button */}
            
                </div>
              </motion.div>

              {/* What happens next */}
              <motion.div
                className="mt-8 rounded-xl border border-[#EDE9FE]/60 bg-white/50 backdrop-blur-sm p-6 space-y-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
                viewport={{ once: true }}
              >
                <p className="font-sora text-sm font-semibold text-[#161122]">What happens next</p>
                <div className="space-y-3">
                  {[
                    { icon: MessageSquare, text: "We read your message carefully — no auto-replies." },
                    { icon: Clock,         text: "You hear back within 24 hours, usually sooner." },
                    { icon: Rocket,        text: "We jump on a quick call and start shaping your idea." },
                  ].map(({ icon: Icon, text }, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="mt-0.5 grid h-7 w-7 flex-shrink-0 place-items-center rounded-lg bg-gradient-to-br from-[#7C3AED] to-[#2563EB]">
                        <Icon className="h-3.5 w-3.5 text-white" strokeWidth={2} />
                      </div>
                      <p className="font-inter text-sm leading-snug text-[#5b5566]">{text}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right side - Contact form */}
          <motion.div
            className="rounded-[2rem] border border-[#7C3AED]/10 bg-white/70 p-2 shadow-soft-lg backdrop-blur-sm"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: EASE }}
            viewport={{ once: true }}
          >
            <div className="rounded-[calc(2rem-0.5rem)] bg-white p-7 bezel-inner md:p-9">
            <h3 className="mb-6 font-sora text-2xl font-bold text-[#161122]">
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
                    "focus:outline-none focus:ring-2 focus:ring-[#7C3AED]/20 focus:border-[#7C3AED]",
                    "transition-[border-color,box-shadow] duration-300 bg-white/80 backdrop-blur-sm"
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
                    "focus:outline-none focus:ring-2 focus:ring-[#7C3AED]/20 focus:border-[#7C3AED]",
                    "transition-[border-color,box-shadow] duration-300 bg-white/80 backdrop-blur-sm"
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
                    "focus:outline-none focus:ring-2 focus:ring-[#7C3AED]/20 focus:border-[#7C3AED]",
                    "transition-[border-color,box-shadow] duration-300 bg-white/80 backdrop-blur-sm resize-none"
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
                  "bg-gradient-to-r from-[#7C3AED] to-[#2563EB]",
                  "hover:shadow-lg transition-[box-shadow] duration-300",
                  "disabled:opacity-50 disabled:cursor-not-allowed",
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
                  className="flex items-center gap-2.5 rounded-xl border border-emerald-200 bg-emerald-50 p-4 text-sm text-emerald-800"
                >
                  <CheckCircle2 className="h-5 w-5 flex-shrink-0" strokeWidth={1.75} />
                  Message sent. We&apos;ll get back to you within 24 hours.
                </motion.div>
              )}

              {submitStatus === "error" && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2.5 rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-800"
                >
                  <AlertCircle className="h-5 w-5 flex-shrink-0" strokeWidth={1.75} />
                  Something went wrong. Please try again or call us directly.
                </motion.div>
              )}
            </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
