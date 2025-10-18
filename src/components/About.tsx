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
            <h2 className="font-display text-gunmetal text-sm tracking-widest">PHILOSOPHY</h2>
            <div className="h-px bg-steel flex-1" />
          </div>
        </motion.div>

        {/* Three Act Structure */}
        <div className="space-y-24">
          
          {/* Act I: Formation */}
          <motion.div 
            {...fadeInUp}
            transition={{ delay: 0.2, duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="grid grid-cols-12 gap-8"
          >
            <div className="col-span-3">
              <h3 className="font-display text-khaki text-lg tracking-wider">01</h3>
              <h4 className="font-display text-gunmetal text-xl mt-2">FORMATION</h4>
              <div className="h-px bg-steel/30 w-16 mt-4" />
            </div>
            <div className="col-span-9">
              <p className="font-sans text-gunmetal/80 text-lg leading-relaxed">
                From USPS routes to Army discipline—every foundation was deliberate. 
                The uniform taught precision. The mission taught service. 
                The oath taught commitment beyond self.
              </p>
            </div>
          </motion.div>

          {/* Act II: Discipline */}
          <motion.div 
            {...fadeInUp}
            transition={{ delay: 0.4, duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="grid grid-cols-12 gap-8"
          >
            <div className="col-span-3">
              <h3 className="font-display text-khaki text-lg tracking-wider">02</h3>
              <h4 className="font-display text-gunmetal text-xl mt-2">DISCIPLINE</h4>
              <div className="h-px bg-steel/30 w-16 mt-4" />
            </div>
            <div className="col-span-9">
              <p className="font-sans text-gunmetal/80 text-lg leading-relaxed">
                Systems thinking meets human purpose. Every line of code serves a mission. 
                Every decision carries weight. Technology amplifies character—
                it never replaces it.
              </p>
            </div>
          </motion.div>

          {/* Act III: Integration */}
          <motion.div 
            {...fadeInUp}
            transition={{ delay: 0.6, duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="grid grid-cols-12 gap-8"
          >
            <div className="col-span-3">
              <h3 className="font-display text-khaki text-lg tracking-wider">03</h3>
              <h4 className="font-display text-gunmetal text-xl mt-2">INTEGRATION</h4>
              <div className="h-px bg-steel/30 w-16 mt-4" />
            </div>
            <div className="col-span-9">
              <p className="font-sans text-gunmetal/80 text-lg leading-relaxed">
                Faith guides. Logic executes. Service sustains. 
                The bridge connects what is to what should be—
                carrying others toward their highest potential.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Core Principle */}
        <motion.div 
          {...fadeInUp}
          transition={{ delay: 0.8, duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="mt-32 text-center"
        >
          <div className="max-w-2xl mx-auto">
            <div className="h-px bg-steel/30 w-32 mx-auto mb-8" />
            <blockquote className="font-sans text-gunmetal/60 text-xl leading-relaxed italic">
              &ldquo;I&rsquo;m building for the family I don&rsquo;t yet have, 
              the mission that hasn&rsquo;t been given, 
              the world that could be.&rdquo;
            </blockquote>
            <div className="h-px bg-steel/30 w-32 mx-auto mt-8" />
          </div>
        </motion.div>
      </div>
    </div>
  );
}