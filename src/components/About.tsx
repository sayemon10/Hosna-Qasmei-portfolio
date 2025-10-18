'use client';

import { motion } from 'framer-motion';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }
};

export function About() {
  return (
    <div className="min-h-screen bg-cream py-24">
      <div className="max-w-4xl mx-auto px-4">
        
        {/* Section Header */}
        <motion.div {...fadeInUp} className="mb-20">
          <div className="flex items-center space-x-4 mb-8">
            <div className="h-px bg-steel flex-1" />
            <h2 className="font-display text-gunmetal text-sm tracking-widest">PRINCIPLES</h2>
            <div className="h-px bg-steel flex-1" />
          </div>
        </motion.div>

        {/* Core Values - Minimal */}
        <div className="space-y-16">
          
          <motion.div 
            {...fadeInUp}
            transition={{ delay: 0.2, duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="text-center"
          >
            <div className="grid grid-cols-3 gap-12 max-w-2xl mx-auto">
              <div>
                <div className="h-px bg-khaki w-8 mx-auto mb-4" />
                <h3 className="font-display text-gunmetal text-sm tracking-widest">MASTERY</h3>
              </div>
              <div>
                <div className="h-px bg-khaki w-8 mx-auto mb-4" />
                <h3 className="font-display text-gunmetal text-sm tracking-widest">PRESENCE</h3>
              </div>
              <div>
                <div className="h-px bg-khaki w-8 mx-auto mb-4" />
                <h3 className="font-display text-gunmetal text-sm tracking-widest">CONNECTION</h3>
              </div>
            </div>
          </motion.div>

          {/* Minimal Statement */}
          <motion.div 
            {...fadeInUp}
            transition={{ delay: 0.4, duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="text-center"
          >
            <div className="h-px bg-steel/30 w-24 mx-auto mb-8" />
            <p className="font-sans text-gunmetal/60 text-lg leading-relaxed max-w-md mx-auto">
              Excellence through discipline.<br />
              Impact through systems.<br />
              Growth through service.
            </p>
            <div className="h-px bg-steel/30 w-24 mx-auto mt-8" />
          </motion.div>
        </div>

      </div>
    </div>
  );
}