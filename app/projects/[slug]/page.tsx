"use client";

import { use } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { notFound } from 'next/navigation';

const projectsData = {
  'pixle': {
    title: 'Google Pixle 10 a',
    category: 'Motion Graphics',
    year: '2026',
    role: 'Motion Designer',
    videoUrl: 'https://www.youtube.com/embed/2GtW1ktAiOE',
    heroImage: '/photos/public/image.png',
    overview: 'A dynamic 15-second 3D motion graphics teaser designed to showcase the sleek industrial design and premium features of the Google Pixel 10a. The goal was to craft a fast-paced, high-impact commercial that balances minimalist Google aesthetics with bold, modern motion design.',
    gallery: [
      '/photos/pixle/image 1.png',
      '/photos/pixle/image 2.png',
      '/photos/pixle/image 3.png',
    ]
  }
  , 'debonairs-pizza': {
    title: 'Debonairs Pizza',
    category: 'Brand Identity & Motion',
    year: '2026',
    role: 'Motion Designer',
    // Example of a clean YouTube embed URL
    videoUrl: 'https://www.youtube.com/embed/lswH7EaQb6U',
    heroImage: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=1600&q=80',
    overview: 'A complete brand refresh for Debonairs Pizza. Modernizing visual language across social media, print, and motion segments while retaining core identity.',
    gallery: [
      '/photos/debonairs/image.png',
      '/photos/debonairs/image 1.png',
      '/photos/debonairs/image 2.png',
      '/photos/debonairs/image 3.png'

    ]
  },
  'double-you': {
    title: 'Double You',
    category: '3D Brand Intro',
    year: '2024',
    role: 'Motion Graphics Designer',
    videoUrl: 'https://www.youtube.com/embed/Oyw_DQMzZpY',
    heroImage: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=1600&q=80',
    overview: 'A high-end 3D introduction designed in After Effects. Built to serve as the cinematic opener for the brand\'s digital presence.',
    gallery: [
      '/photos/double/image.png',
      '/photos/double/image 1.png',
    ]
  },
  'anghami': {
    title: 'anghami',
    category: 'Motion Graphics',
    year: '2026',
    role: 'Motion Designer',
    videoUrl: 'https://www.youtube.com/embed/KFs1yYOH7rA', // Left blank, so it will fall back to showing the heroImage
    heroImage: 'https://images.unsplash.com/photo-1588681664899-f142ff2dc9b1?w=1600&q=80',
    overview: 'A structural layout design for a contracting company emphasizing their industrial capabilities.',
    gallery: [
      '/photos/anghami/image 1.png',
      '/photos/anghami/image 2.png',
      '/photos/anghami/image 3.png',
      '/photos/anghami/image 4.png',
    ]
  },
  'livingbridge': {
    title: 'livingbridge',
    category: 'Contracting Company',
    year: '2025',
    role: 'Motion Designer',
    videoUrl: 'https://www.youtube.com/embed/vF8Uo0RY63I', // Left blank, so it will fall back to showing the heroImage
    heroImage: 'https://images.unsplash.com/photo-1588681664899-f142ff2dc9b1?w=1600&q=80',
    overview: 'A structural layout design for a contracting company emphasizing their industrial capabilities.',
    gallery: [
      '/photos/livingbridge/image 1.png',
      '/photos/livingbridge/image 2.png',
    ]
  },
  'pharmasys': {
    title: 'pharmasys motion graphic',
    category: 'pharmasys',
    year: '2026',
    role: 'Graphic Designer',
    videoUrl: 'https://www.youtube.com/embed/8_l3cjs96aU', // Left blank, so it will fall back to showing the heroImage
    heroImage: 'https://images.unsplash.com/photo-1588681664899-f142ff2dc9b1?w=1600&q=80',
    overview: '',
    gallery: [
      '/photos/pharmasys/image.png',
      '/photos/pharmasys/image 1.png',
      '/photos/pharmasys/image 2.png',
      '/photos/pharmasys/image 3.png'
    ]
  },
  'noor-intro': {
    title: 'Noor Intro',
    category: '3D Motion Graphics',
    year: '2023',
    role: 'Motion Designer',
    videoUrl: 'https://www.youtube.com/embed/Bvyex8MCIcY',
    heroImage: '/photos/noor.png',
    overview: 'A high-end 3D motion graphics intro crafted with precision keyframing and dynamic visual composition.',
    gallery: [
      '/photos/noor/image.png',
      '/photos/noor/image 1.png',
    ]
  },
  'public': {
    title: 'Public.com',
    category: 'Motion Graphics',
    year: '2026',
    role: 'Motion Designer',
    videoUrl: 'https://www.youtube.com/embed/pVYk_dJjHGQ',
    heroImage: '/photos/public/image.png',
    overview: 'A high-end 3D motion graphics intro crafted with precision keyframing and dynamic visual composition.',
    gallery: [
      '/photos/public/image 1.png',
      '/photos/public/image 2.png',
      '/photos/public/image 3.png',
    ]
  },


};

export default function ProjectDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const normalizedSlug = slug.replace(/-intro$/, '');
  const project = projectsData[slug as keyof typeof projectsData] || projectsData[normalizedSlug as keyof typeof projectsData];

  if (!project) notFound();

  return (
    <div className="px-5 md:px-8 max-w-5xl mx-auto py-8 md:py-20 min-h-screen">

      {/* Back Button */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-8 md:mb-12"
      >
        <Link href="/projects" className="text-gray-400 hover:text-white flex items-center gap-2 text-xs md:text-sm font-medium transition-colors w-fit">
          <span>&larr;</span> Back to Work
        </Link>
      </motion.div>

      {/* Header Info */}
      <header className="mb-10 md:mb-16">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium text-white mb-6 md:mb-8 tracking-tight"
        >
          {project.title}
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid grid-cols-2 sm:flex sm:flex-wrap gap-6 md:gap-12 border-t border-white/10 pt-6 md:pt-8"
        >
          <div>
            <p className="text-[10px] md:text-xs text-gray-500 uppercase tracking-widest mb-1">Category</p>
            <p className="text-sm md:text-base text-white font-medium">{project.category}</p>
          </div>
          <div>
            <p className="text-[10px] md:text-xs text-gray-500 uppercase tracking-widest mb-1">Role</p>
            <p className="text-sm md:text-base text-white font-medium">{project.role}</p>
          </div>
          <div className="col-span-2 sm:col-span-1">
            <p className="text-[10px] md:text-xs text-gray-500 uppercase tracking-widest mb-1">Year</p>
            <p className="text-sm md:text-base text-white font-medium">{project.year}</p>
          </div>
        </motion.div>
      </header>

      {/* HERO SECTION: Video Player OR Image Fallback */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="w-full relative rounded-xl md:rounded-2xl overflow-hidden border border-white/10 mb-12 md:mb-20 shadow-2xl bg-black"
      >
        {project.videoUrl ? (
          <div className="w-full aspect-video relative">
            <iframe
              // Added rel=0 (no related videos from others) and modestbranding=1 (hides YT logo)
              src={`${project.videoUrl}?rel=0&modestbranding=1`}
              className="absolute top-0 left-0 w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        ) : (
          <div className="w-full aspect-[4/3] sm:aspect-[16/9] md:aspect-[21/9] relative">
            <Image
              src={project.heroImage}
              alt={project.title}
              fill
              sizes="(max-width: 768px) 100vw, 1024px"
              className="object-cover"
              priority
            />
          </div>
        )}
      </motion.div>

      {/* Text Overview */}
      <div className="flex flex-col md:grid md:grid-cols-12 gap-4 md:gap-12 mb-12 md:mb-20">
        <div className="md:col-span-4">
          <h2 className="text-xl md:text-2xl font-medium text-white">Project Overview</h2>
        </div>
        <div className="md:col-span-8">
          <p className="text-sm sm:text-base md:text-lg text-gray-400 leading-relaxed">
            {project.overview}
          </p>
        </div>
      </div>

      {/* Optional: Gallery Grid (For styleframes, BTS, or final renders) */}
      {project.gallery && project.gallery.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 mb-12 md:mb-20">
          {project.gallery.map((imgUrl, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="relative aspect-square sm:aspect-[4/3] rounded-xl md:rounded-2xl overflow-hidden bg-gray-900 border border-white/10"
            >
              <Image
                src={imgUrl}
                alt={`${project.title} gallery shot ${idx + 1}`}
                fill
                sizes="(max-width: 640px) 100vw, 50vw"
                className="object-cover"
              />
            </motion.div>
          ))}
        </div>
      )}

      {/* Footer Navigation */}
      <div className="border-t border-white/10 pt-10 md:pt-16 text-center">
        <p className="text-sm md:text-base text-gray-500 mb-3 md:mb-4">Want to see more?</p>
        <Link href="/projects" className="text-lg sm:text-xl md:text-2xl font-medium text-white hover:text-gray-300 transition-colors inline-block hover:scale-105 transform duration-300">
          Explore all projects &rarr;
        </Link>
      </div>

    </div>
  );
}