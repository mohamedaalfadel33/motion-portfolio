'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

const allProjects = [
  {
    id: 'pixle',
    title: 'Google Pixle 10a',
    category: 'Motion Graphics',
    image:
      '/photos/pixle/image.png',
    link: '/projects/pixle',
  },
  {
    id: 'debonairs',
    title: 'Debonairs Pizza',
    category: 'Brand Identity',
    image: '/photos/debonairs.png',
    link: '/projects/debonairs-pizza',
  },
  {
    id: 'double-you',
    title: 'Double You',
    category: '3D Brand Intro Motion Graphics',
    image: '/photos/double-you.png',
    link: '/projects/double-you',
  },
  {
    id: 'anghami',
    title: 'Anghami',
    category: 'Music Streaming Motion Graphics',
    image:
      '/photos/anghami/image.png',
    link: '/projects/anghami',
  },
  {
    id: 'pharmasys',
    title: 'Pharmasys',
    category: 'Cinematic 3D Animation',
    image:
      '/photos/pharmasys/image 4.png',
    link: '/projects/pharmasys',
  },
  {
    id: 'noor',
    title: 'Noor Intro',
    category: '3D Motion Graphics',
    image:
      '/photos/noor.png',
    link: '/projects/noor-intro',
  },
  {
    id: 'livingbridge',
    title: 'livingbridge',
    category: 'Motion Graphics',
    image:
      '/photos/livingbridge/image.png',
    link: '/projects/livingbridge',
  },
  {
    id: 'public',
    title: 'Public.com',
    category: 'Motion Graphics',
    image:
      '/photos/public/image.png',
    link: '/projects/public',
  }
];

export default function Projects() {
  return (
    <div className="px-5 md:px-8 max-w-7xl mx-auto min-h-screen">
      <header className="pt-12 md:pt-20 pb-16 md:pb-20 max-w-5xl">
        <h2 className="text-gray-400 text-xs md:text-sm font-semibold tracking-widest uppercase mb-4 md:mb-6">
          Work
        </h2>
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-tight tracking-tight text-gray-100">
          We don&apos;t just create brands we craft{' '}
          <span className="text-white italic">unforgettable experiences</span>{' '}
          that leave a lasting impression.
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
            <Link
              href={project.link}
              className="group flex flex-col gap-3 md:gap-4"
            >
              <div className="relative aspect-[4/3] overflow-hidden rounded-xl md:rounded-2xl bg-gray-900 border border-white/10">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div>
                <h3 className="text-base md:text-lg font-medium text-white">
                  {project.title}
                </h3>
                <p className="text-xs md:text-sm text-gray-400 mt-1">
                  {project.category}
                </p>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
