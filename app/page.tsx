"use client";

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

const featuredProjects = [
  { id: 'debonairs', title: 'Debonairs Pizza', image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800&q=80', link: '/projects/debonairs-pizza' },
  { id: 'double-you', title: 'Double You', image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&q=80', link: '/projects/double-you' },
  { id: 'anghami', title: 'Anghami', image: 'https://images.unsplash.com/photo-1614149162883-504ce4d13909?w=800&q=80', link: '/projects/anghami' },
  { id: 'noor', title: 'Noor Intro', image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80', link: '/projects/noor-intro' },
];

export default function Home() {
  return (
    <div className="flex flex-col items-center w-full px-5 md:px-8">
       <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium text-white flex items-center justify-center min-h-screen">
        Soon...
      </h1>
      {/* Hero Section */}
      {/* 
    
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-5xl text-center pt-12 md:pt-20 pb-20 md:pb-32"
      >
        <p className="text-gray-400 text-xs md:text-sm font-semibold tracking-widest uppercase mb-4 md:mb-6">Creative Direction & Motion</p>
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-tight tracking-tight text-gray-100 mb-6 md:mb-8">
          I specialize in crafting visual experiences that help brands achieve their goals through <span className="italic">innovative design</span> and dynamic motion graphics.
        </h1>
        <a href="mailto:mrmohameddzn@gmail.com" className="inline-block px-6 py-3 md:px-8 md:py-4 bg-white text-black text-sm md:text-base font-semibold rounded-full hover:scale-105 transition-transform">
          mrmohameddzn@gmail.com
        </a>
      </motion.section>

  
      <section className="w-full max-w-7xl pb-16 md:pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {featuredProjects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <Link href={project.link} className="group block relative aspect-[4/3] md:aspect-video overflow-hidden rounded-xl md:rounded-2xl bg-gray-900 border border-white/10">
                <Image 
                  src={project.image} 
                  alt={project.title} 
                  fill 
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


      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="max-w-4xl text-center py-20 md:py-32 border-t border-white/10"
      >
        <h2 className="text-xl sm:text-2xl md:text-4xl font-medium leading-relaxed text-gray-300">
          From precise After Effects animations to modern interfaces, I transform complex ideas into striking, unforgettable digital realities.
        </h2>
      </motion.section>
         */}
    </div>
  );
}