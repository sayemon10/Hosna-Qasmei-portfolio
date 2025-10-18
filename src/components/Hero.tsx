'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import Image from 'next/image';

const roles = ['ENGINEER', 'SOLDIER', 'BUILDER'];

export function Hero() {
  const [currentRole, setCurrentRole] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gunmetal flex items-center justify-center px-4">
      <div className="max-w-4xl mx-auto">
        {/* Grid System */}
        <div className="grid grid-cols-12 gap-8 items-center">
          
          {/* Left Column - Portrait */}
          <div className="col-span-5">
            <div className="relative">
              <div className="w-80 h-80 relative overflow-hidden">
                <Image
                  src="/images/portrait.jpeg"
                  alt="Timeo Williams"
                  fill
                  className="object-cover grayscale"
                  priority
                />
              </div>
              
              {/* Subtle grid overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-gunmetal/20 to-transparent" />
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="col-span-7">
            
            {/* Name & Title */}
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
              >
                <h1 className="font-sans text-cream text-5xl font-light tracking-wide leading-tight">
                  TIMEO WILLIAMS
                </h1>
                <div className="h-px bg-steel w-24 mt-4" />
              </motion.div>

              {/* Rotating Role */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: [0.21, 0.47, 0.32, 0.98] }}
                className="h-12"
              >
                <AnimatePresence mode="wait">
                  <motion.span
                    key={currentRole}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.4 }}
                    className="font-display text-khaki text-xl tracking-widest block"
                  >
                    {roles[currentRole]}
                  </motion.span>
                </AnimatePresence>
              </motion.div>

              {/* Tagline */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4, ease: [0.21, 0.47, 0.32, 0.98] }}
              >
                <p className="font-sans text-cream/80 text-lg font-light leading-relaxed max-w-md">
                  THE BRIDGE BUILDER
                </p>
                <p className="font-sans text-cream/60 text-base font-light leading-relaxed max-w-md mt-2">
                  Connecting Technology to Humanity
                </p>
              </motion.div>

              {/* Minimalist CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
                className="pt-8"
              >
                <button className="group relative">
                  <div className="h-px bg-steel w-16 group-hover:w-24 transition-all duration-300" />
                  <span className="font-sans text-cream/60 text-sm tracking-wide mt-2 block group-hover:text-khaki transition-colors duration-300">
                    EXPLORE
                  </span>
                </button>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Bottom Grid Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.3 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="flex space-x-2">
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className={`w-2 h-2 border border-steel/50 transition-all duration-300 ${
                  i === currentRole ? 'bg-khaki' : ''
                }`}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}