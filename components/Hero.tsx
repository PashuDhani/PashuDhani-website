'use client';
import { motion } from 'framer-motion';
import React from 'react';

const MotionH1 = motion.h1 as React.ComponentType<any>;
const MotionP = motion.p as React.ComponentType<any>;
const MotionDiv = motion.div as React.ComponentType<any>;

export default function Hero() {
  return (
    <section className="section pt-20 md:pt-28 pb-12 md:pb-20">
      <div className="text-center max-w-3xl mx-auto">
        <MotionH1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } }}
          className="text-4xl md:text-6xl font-extrabold tracking-tight"
        >
          Transforming cattle trade.
        </MotionH1>
        <MotionP
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.1 } }}
          className="mt-4 text-lg md:text-xl text-gray-600"
        >
          Discover melas. Tag, insure, buy—online.
        </MotionP>
        <MotionDiv
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1, transition: { duration: 0.6, delay: 0.15 } }}
          className="mt-8 flex flex-col sm:flex-row gap-3 justify-center"
        >
          <a href="#cta" className="btn-primary text-base px-6 py-3">Get Started</a>
          <a href="#features" className="btn-ghost text-base px-6 py-3">Explore Features</a>
        </MotionDiv>
      </div>
    </section>
  );
}
