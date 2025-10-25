"use client";

import { motion } from "motion/react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white relative z-10">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold bg-gradient-to-r from-[#8260AD] to-[#3A7BFF] bg-clip-text text-transparent">
              Softie
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Building digital experiences that feel alive. From idea to deployment, 
              we craft apps that are fast, scalable, and surprisingly delightful.
            </p>
          </motion.div>

          {/* Contact Section */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold text-white">Contact</h4>
            <div className="space-y-2 text-sm text-gray-300">
              <p>📧 henna.abdelbasset@gmail.com</p>
              <p>📞 0770950240</p>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold text-white">Quick Links</h4>
            <div className="space-y-2">
              <a 
                href="#services" 
                className="block text-sm text-gray-300 hover:text-[#8260AD] transition-colors duration-200"
              >
                Services
              </a>
              <a 
                href="#testimonials" 
                className="block text-sm text-gray-300 hover:text-[#8260AD] transition-colors duration-200"
              >
                Testimonials
              </a>
              <a 
                href="#contact" 
                className="block text-sm text-gray-300 hover:text-[#8260AD] transition-colors duration-200"
              >
                Contact
              </a>
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <p className="text-sm text-gray-400">
            © {currentYear} Softie. All rights reserved.
          </p>
          <p className="text-sm text-gray-400 mt-2 md:mt-0">
            Code made soft. Built with ❤️ and a few console.logs.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
