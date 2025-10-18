'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const projects = [
  {
    id: '01',
    name: 'AUXIO.AI',
    description: 'AI-powered dental practice optimization reducing no-shows by 40%.',
    type: 'CURRENT VENTURE',
    url: '#',
    status: 'ACTIVE'
  },
  {
    id: '02', 
    name: 'DEEP FOCUS',
    description: 'Desktop focus tracking with intelligent nudges for cognitive optimization.',
    type: 'PERSONAL TOOL',
    url: '#',
    status: 'RELEASED'
  },
  {
    id: '03',
    name: 'TRINITY NS',
    description: 'Military-grade network security framework for critical infrastructure.',
    type: 'DEFENSE PROJECT',
    url: '#',
    status: 'CLASSIFIED'
  },
  {
    id: '04',
    name: 'PERSONAL DASHBOARD',
    description: 'Unified health, wealth, and performance metrics system.',
    type: 'LIFE SYSTEM',
    url: '#',
    status: 'ONGOING'
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }
  }
};

export function Work() {
  return (
    <div className="min-h-screen bg-gunmetal py-24">
      <div className="max-w-6xl mx-auto px-4">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="mb-20"
        >
          <div className="flex items-center space-x-4 mb-8">
            <div className="h-px bg-steel flex-1" />
            <h2 className="font-display text-cream text-sm tracking-widest">WORK</h2>
            <div className="h-px bg-steel flex-1" />
          </div>
        </motion.div>

        {/* Project Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              className="group cursor-pointer"
            >
              <Link href={project.url}>
                <div className="border border-steel/30 bg-gunmetal p-8 hover:border-khaki/50 transition-all duration-300">
                  
                  {/* Project Header */}
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <span className="font-display text-khaki text-sm tracking-widest">
                        {project.id}
                      </span>
                      <h3 className="font-display text-cream text-xl mt-1 group-hover:text-khaki transition-colors duration-300">
                        {project.name}
                      </h3>
                    </div>
                    <span className="font-sans text-steel text-xs tracking-wider">
                      {project.status}
                    </span>
                  </div>

                  {/* Project Description */}
                  <p className="font-sans text-cream/70 text-base leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* Project Type */}
                  <div className="flex items-center justify-between">
                    <span className="font-display text-steel text-xs tracking-widest">
                      {project.type}
                    </span>
                    <div className="w-6 h-px bg-steel group-hover:bg-khaki transition-colors duration-300" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="mt-20 text-center"
        >
          <div className="max-w-2xl mx-auto">
            <div className="h-px bg-steel/30 w-24 mx-auto mb-6" />
            <p className="font-sans text-cream/50 text-sm leading-relaxed">
              Each project serves a larger mission: connecting technology to human flourishing.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}