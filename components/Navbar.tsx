
'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Navbar() {
  return (
    <motion.header 
      initial={{ y: -40, opacity: 0 }} 
      animate={{ y: 0, opacity: 1, transition: { duration: 0.6, ease: [0.22,1,0.36,1] } }}
      className="sticky top-0 z-40 bg-white/70 backdrop-blur border-b border-gray-200">
      <div className="section flex h-16 items-center justify-between">
        <Link href="/" className="font-semibold text-lg">
          <span className="hero-accent">PashuDhani®</span>
        </Link>
        <nav className="hidden md:flex gap-6 text-sm">
          <a href="#features" className="hover:text-brand-700">Features</a>
          <a href="#pricing" className="hover:text-brand-700">Pricing</a>
          <a href="#contact" className="hover:text-brand-700">Contact</a>
        </nav>
        <div className="flex gap-2">
          <a href="#cta" className="btn-ghost">Sign In</a>
          <a href="#cta" className="btn-primary">Sign Up Free</a>
        </div>
      </div>
    </motion.header>
  );
}
