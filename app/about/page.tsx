"use client";

import { motion } from 'framer-motion';

export default function About() {
  return (
    <div className="px-5 md:px-8 max-w-4xl mx-auto py-12 md:py-20 min-h-[60vh] flex flex-col justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <h2 className="text-gray-400 text-xs md:text-sm font-semibold tracking-widest uppercase mb-4 md:mb-6">About Me</h2>
        <h1 className="text-2xl sm:text-3xl md:text-5xl font-medium leading-tight tracking-tight text-gray-100 mb-6 md:mb-8">
          I'm a creative designer focused on delivering high-end visual solutions.
        </h1>
        <p className="text-base md:text-lg text-gray-400 leading-relaxed mb-4 md:mb-6">
          With a profound passion for design and technology, I blend aesthetic intuition with technical execution. Whether I'm keyframing a dynamic brand introduction in After Effects or designing structural branding frameworks, my goal is to communicate complex messages with striking simplicity.
        </p>
        <p className="text-base md:text-lg text-gray-400 leading-relaxed">
          Every project is an opportunity to push boundaries, combining motion graphics and creative direction to explore new visual territories.
        </p>
      </motion.div>
    </div>
  );
}