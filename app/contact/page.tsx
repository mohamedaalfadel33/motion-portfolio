"use client";

import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <div className="px-5 md:px-8 max-w-4xl mx-auto py-12 md:py-20 min-h-[60vh] flex flex-col justify-center text-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-gray-400 text-xs md:text-sm font-semibold tracking-widest uppercase mb-4 md:mb-6">Let's Talk</h2>
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-medium leading-tight tracking-tight text-white mb-8 md:mb-10">
          Ready to start your next project?
        </h1>
        <a 
          href="mailto:mrmohameddzn@gmail.com" 
          className="inline-block px-8 py-4 md:px-10 md:py-5 bg-white text-black text-sm md:text-lg font-semibold rounded-full hover:scale-105 transition-transform shadow-[0_0_30px_rgba(255,255,255,0.15)] hover:shadow-[0_0_50px_rgba(255,255,255,0.3)]"
        >
          mrmohameddzn@gmail.com
        </a>
      </motion.div>
    </div>
  );
}