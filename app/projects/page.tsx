"use client";

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

const allProjects = [
  { id: 'debonairs', title: 'Debonairs Pizza', category: 'Brand Identity', image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800&q=80', link: '/projects/debonairs-pizza' },
  { id: 'double-you', title: 'Double You', category: '3D Brand Intro Motion Graphics', image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&q=80', link: '/projects/double-you' },
  { id: 'anghami', title: 'Anghami', category: 'Music Streaming Motion Graphics', image: 'https://images.unsplash.com/photo-1614149162883-504ce4d13909?w=800&q=80', link: '/projects/anghami' },
  { id: 'marriage', title: 'Marriage Invitation', category: 'Cinematic Animation', image: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=800&q=80', link: '/projects/marriage-invitation' },
  { id: 'noor', title: 'Noor Intro', category: '3D Motion Graphics', image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80', link: '/projects/noor-intro' },
  { id: 'aldaleen', title: 'Aldaleen Brochure', category: 'Contracting Company', image: 'https://images.unsplash.com/photo-1588681664899-f142ff2dc9b1?w=800&q=80', link: '/projects/aldaleen' },
];

export default function Projects() {
  return (
    <div className="px-5 md:px-8 max-w-7xl mx-auto min-h-screen">
      <header className="pt-12 md:pt-20 pb-16 md:pb-20 max-w-5xl">
        <h2 className="text-gray-400 text-xs md:text-sm font-semibold tracking-widest uppercase mb-4 md:mb-6">Work</h2>
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-tight tracking-tight text-gray-100">
          We don't just create brands; we craft <span className="text-white italic">unforgettable experiences</span> that leave a lasting impression.
        </h1>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {allProjects.map((project, i) => (
          <motion.div
             key={project.id}
             initial={{ opacity: 0, scale: 0.95 }}
             animate={{ opacity: 1, scale: 1 }}
             transition={{ duration: 0.5, delay: i * 0.05 }}
          >
            <Link href={project.link} className="group flex flex-col gap-3 md:gap-4">
              <div className="relative aspect-[4/3] overflow-hidden rounded-xl md:rounded-2xl bg-gray-900 border border-white/10">
                <Image 
                  src={project.image} 
                  alt={project.title} 
                  fill 
                  className="object-cover transition-transform duration-700 group-hover:scale-105" 
                />
              </div>
              <div>
                <h3 className="text-base md:text-lg font-medium text-white">{project.title}</h3>
                <p className="text-xs md:text-sm text-gray-400 mt-1">{project.category}</p>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}