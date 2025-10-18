'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

const roles = ['CITIZEN-WARRIOR', 'TECHNOLOGIST'];

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
      <div className="max-w-4xl mx-auto w-full">
        {/* Responsive Grid System */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">
          
          {/* Logo Section - Mobile: Full width, Desktop: Left column */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative flex justify-center lg:justify-start">
              {/* Federer-Inspired Monogram */}
              <div className="w-64 h-64 lg:w-80 lg:h-80 flex items-center justify-center">
                <div className="text-center relative">
                  {/* Background Vertical Line */}
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="h-24 lg:h-32 w-px bg-khaki/10" />
                  </div>
                  
                  {/* Military-Refined TW Monogram */}
                  <div className="relative">
                    <img
                      src="/tw-monogram.svg"
                      alt="Timeo Williams TW Monogram"
                      className="w-24 h-12 lg:w-32 lg:h-16 text-cream"
                      style={{ filter: 'brightness(0) saturate(100%) invert(96%) sepia(4%) saturate(1000%) hue-rotate(45deg) brightness(98%) contrast(95%)' }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content Section - Mobile: Full width, Desktop: Right column */}
          <div className="lg:col-span-7 order-1 lg:order-2">
            
            {/* Name & Title */}
            <div className="space-y-4 lg:space-y-6 text-center lg:text-left">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
              >
                <h1 className="font-sans text-cream text-3xl sm:text-4xl lg:text-5xl font-light tracking-wide leading-tight">
                  TIMEO WILLIAMS
                </h1>
                <div className="h-px bg-steel w-24 mt-4 mx-auto lg:mx-0" />
              </motion.div>

              {/* Rotating Role */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: [0.21, 0.47, 0.32, 0.98] }}
                className="h-10 lg:h-12"
              >
                <AnimatePresence mode="wait">
                  <motion.span
                    key={currentRole}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.4 }}
                    className="font-display text-khaki text-lg lg:text-xl tracking-widest block"
                  >
                    {roles[currentRole]}
                  </motion.span>
                </AnimatePresence>
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
            {[0, 1].map((i) => (
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