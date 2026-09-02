import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Link from 'next/link';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Mohamed Dzn - Motion Graphic Designer',
  description: 'Portfolio of Mohamed Alfadel, specializing in high-end motion graphics and professional design.',
  icons: {
    icon: '/logo.png',
    shortcut: '/logo.png',
    apple: '/logo.png',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth" data-scroll-behavior="smooth" suppressHydrationWarning>
      <body className={`${inter.className} min-h-screen bg-[#0a0a0a] text-white selection:bg-white selection:text-black`}>
        
        {/* Persistent Navbar */}
        <nav className="fixed top-0 w-full z-50 flex items-center justify-between px-5 md:px-8 py-4 md:py-6 bg-[#0a0a0a]/80 backdrop-blur-md border-b border-white/10">
          <div className="flex items-center gap-2 font-bold text-lg md:text-xl tracking-tighter">
            <div className="w-8 h-8 rounded-full flex items-center justify-center text-black text-xs">
              <img src="/logo.png" alt="Logo" className="w-12 h-12 object-contain" />
            </div>
            <Link href="/">Mohamed Dzn</Link>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-400">
            <Link href="/projects" className="hover:text-white transition-colors">Work</Link>
            <Link href="/about" className="hover:text-white transition-colors">About</Link>
            <Link href="/contact" className="hover:text-white transition-colors">Contact</Link>
          </div>
          <a 
            href="https://drive.google.com/uc?export=download&id=1DunPTiylLGZljjLv0p9UzMwnRPYpvZF9" 
            target="_blank"
            rel="noreferrer"
            className="px-4 py-2 md:px-5 md:py-2.5 bg-white text-black text-xs md:text-sm font-semibold rounded-full hover:scale-105 transition-transform"
          >
            Download CV
          </a>
        </nav>

        {/* Page Content */}
        <main className="pt-24 md:pt-28">
          {children}
        </main>

        {/* Persistent Footer */}
        <footer className="border-t border-white/10 px-5 md:px-8 py-12 md:py-20 bg-[#0a0a0a] mt-12 md:mt-20">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16">
            <div>
              <h2 className="text-xl md:text-2xl lg:text-3xl font-medium leading-relaxed text-gray-300 max-w-md">
                Specializing in crafting exceptional visual experiences through compelling graphic design and motion graphics.
              </h2>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-10 sm:gap-16 lg:justify-end">
              <div className="flex flex-col gap-3 md:gap-4">
                <h4 className="text-[10px] md:text-xs font-semibold text-gray-500 tracking-widest uppercase mb-1 md:mb-2">Explore</h4>
                <Link href="/projects" className="text-sm md:text-base text-gray-300 hover:text-white transition-colors">Work</Link>
                <Link href="/about" className="text-sm md:text-base text-gray-300 hover:text-white transition-colors">About</Link>
                <Link href="/contact" className="text-sm md:text-base text-gray-300 hover:text-white transition-colors">Contact</Link>
              </div>
              
              <div className="flex flex-col gap-3 md:gap-4">
                <h4 className="text-[10px] md:text-xs font-semibold text-gray-500 tracking-widest uppercase mb-1 md:mb-2">Social</h4>
                <a href="https://x.com/MOHAMEDALFD" target="_blank" rel="noreferrer" className="text-sm md:text-base text-gray-300 hover:text-white transition-colors">Twitter</a>
                <a href="https://www.youtube.com/@mohameddzn" target="_blank" rel="noreferrer" className="text-sm md:text-base text-gray-300 hover:text-white transition-colors">Youtube</a>
                <a href="https://www.instagram.com/m7md_alfadel1/" target="_blank" rel="noreferrer" className="text-sm md:text-base text-gray-300 hover:text-white transition-colors">Instagram</a>
              </div>
            </div>
          </div>
        </footer>

      </body>
    </html>
  );
}