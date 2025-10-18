'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const essays = [
  {
    title: 'The 5AM Hour That Built My Backbone',
    excerpt: 'On discipline, consistency, and the quiet hours that forge character.',
    date: 'COMING SOON',
    readTime: '8 MIN',
    url: '#'
  },
  {
    title: 'How the Army Taught Me to Hear God',
    excerpt: 'Faith in formation: finding the sacred in service and structure.',
    date: 'COMING SOON', 
    readTime: '12 MIN',
    url: '#'
  },
  {
    title: 'Building for a Wife I Haven&rsquo;t Met Yet',
    excerpt: 'Legacy, intention, and creating systems for the family to come.',
    date: 'COMING SOON',
    readTime: '10 MIN', 
    url: '#'
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

const essayVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }
  }
};

export function Writing() {
  return (
    <div className="min-h-screen bg-cream py-24">
      <div className="max-w-4xl mx-auto px-4">
        
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
            <h2 className="font-display text-gunmetal text-sm tracking-widest">WRITING</h2>
            <div className="h-px bg-steel flex-1" />
          </div>
        </motion.div>

        {/* Essays List */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-12"
        >
          {essays.map((essay, index) => (
            <motion.div
              key={index}
              variants={essayVariants}
              className="group"
            >
              <Link href={essay.url}>
                <div className="border-b border-steel/20 pb-8 hover:border-khaki/30 transition-all duration-300 cursor-pointer">
                  
                  {/* Essay Header */}
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="font-sans text-gunmetal text-2xl font-light leading-tight group-hover:text-khaki transition-colors duration-300 max-w-2xl">
                      {essay.title}
                    </h3>
                    <div className="flex flex-col text-right ml-4">
                      <span className="font-display text-steel text-xs tracking-wider">
                        {essay.date}
                      </span>
                      <span className="font-display text-steel/60 text-xs tracking-wider mt-1">
                        {essay.readTime}
                      </span>
                    </div>
                  </div>

                  {/* Essay Excerpt */}
                  <p className="font-sans text-gunmetal/70 text-lg leading-relaxed max-w-3xl">
                    {essay.excerpt}
                  </p>

                  {/* Read More Indicator */}
                  <div className="flex items-center mt-6">
                    <div className="w-8 h-px bg-steel group-hover:w-12 group-hover:bg-khaki transition-all duration-300" />
                    <span className="font-display text-steel text-xs tracking-widest ml-3 group-hover:text-khaki transition-colors duration-300">
                      READ
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* Newsletter CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="mt-20 text-center"
        >
          <div className="max-w-2xl mx-auto">
            <div className="h-px bg-steel/30 w-32 mx-auto mb-8" />
            <p className="font-sans text-gunmetal/60 text-lg leading-relaxed mb-6">
              Essays on technology, leadership, and faith.
            </p>
            <button className="group">
              <div className="h-px bg-steel w-20 group-hover:w-28 transition-all duration-300 mx-auto" />
              <span className="font-display text-gunmetal/60 text-sm tracking-widest mt-2 block group-hover:text-khaki transition-colors duration-300">
                SUBSCRIBE
              </span>
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}