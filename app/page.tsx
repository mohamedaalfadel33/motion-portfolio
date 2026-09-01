'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion, Variants } from 'framer-motion';

const featuredProjects = [
  {
    id: 'debonairs',
    title: 'Debonairs Pizza',
    image: '/photos/debonairs.png',
    link: '/projects/debonairs-pizza',
  },
  {
    id: 'double-you',
    title: 'Double You',
    image: '/photos/double-you.png',
    link: '/projects/double-you',
  },
  {
    id: 'anghami',
    title: 'Anghami',
    image: '/photos/anghami/image copy.png',
    link: '/projects/anghami',
  },
  {
    id: 'noor',
    title: 'Noor Intro',
    image: '/photos/noor.png',
    link: '/projects/noor-intro',
  },
];
// 1. The text we want to animate, split into an array of words
const headlineText =
  'I specialize in crafting visual experiences that help brands achieve their goals through innovative design and dynamic motion graphics.';
const words = headlineText.split(' ');

// 2. The Parent Container Animation (Controls the staggering/timing)
const containerVariants: Variants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1, // Time delay between each word appearing
      delayChildren: 0.2, // Initial delay before the animation starts
    },
  },
};

// 3. The Individual Word Animation (Opacity, Position, Blur, and Glow)
const wordVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
    filter: 'blur(8px)', // Starts blurry
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)', // Becomes sharp
    textShadow: [
      '0px 0px 0px rgba(255,255,255,0)', // Starts with no glow
      '0px 0px 25px #ffffff', // Flashes a bright white glow
      '0px 0px 0px rgba(255,255,255,0)', // Fades back to no glow
    ],
    transition: {
      duration: 0.8,
      ease: 'easeOut',
    },
  },
};

export default function Home() {
  return (
    <div className="flex flex-col items-center w-full px-5 md:px-8">
      {/* Hero Section */}
      <section className="max-w-5xl text-center pt-12 md:pt-20 pb-20 md:pb-32">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-gray-400 text-xs md:text-sm font-semibold tracking-widest uppercase mb-4 md:mb-6"
        >
          Creative Direction & Motion
        </motion.p>

        {/* Animated Headline */}
        <motion.h1
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-tight tracking-tight text-gray-100 mb-6 md:mb-8"
        >
          {words.map((word, index) => {
            // Keep the "innovative design" portion italicized like the original
            const isItalic = word === 'innovative' || word === 'design';

            return (
              <motion.span
                key={index}
                variants={wordVariants}
                // mr-[0.25em] acts as the space between words
                className={`inline-block mr-[0.25em] ${isItalic ? 'italic text-white' : ''}`}
              >
                {word}
              </motion.span>
            );
          })}
        </motion.h1>

        <motion.a
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.5 }} // Shows up after the text finishes
          href="mailto:mrmohameddzn@gmail.com"
          className="inline-block px-6 py-3 md:px-8 md:py-4 bg-white text-black text-sm md:text-base font-semibold rounded-full hover:scale-105 transition-transform"
        >
          mohameddzn@gmail.com
        </motion.a>
      </section>

      {/* Featured Work Grid */}
      <section className="w-full max-w-7xl pb-16 md:pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {featuredProjects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <Link
                href={project.link}
                className="group block relative aspect-[4/3] md:aspect-video overflow-hidden rounded-xl md:rounded-2xl bg-gray-900 border border-white/10"
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-500 flex items-center justify-center">
                  <span className="opacity-0 group-hover:opacity-100 text-white font-medium text-base md:text-lg tracking-wide transition-opacity duration-500 translate-y-4 group-hover:translate-y-0">
                    View Project
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Philosophy Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="max-w-4xl text-center py-20 md:py-32 border-t border-white/10"
      >
        <h2 className="text-xl sm:text-2xl md:text-4xl font-medium leading-relaxed text-gray-300">
          From precis After Effects animations to modern interfaces, I
          transform complex ideas into striking, unforgettable digital
          realities.
        </h2>
      </motion.section>
    </div>
  );
}
