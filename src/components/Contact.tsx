'use client';

import { motion } from 'framer-motion';

export function Contact() {
  return (
    <div className="bg-gunmetal py-16">
      <div className="max-w-4xl mx-auto px-4">
        
        {/* Footer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="pt-12 border-t border-steel/20"
        >
          <div className="flex justify-between items-center">
            <p className="font-sans text-steel text-sm">
              © 2025 Timeo Williams
            </p>
            <div className="flex space-x-6">
              <a href="#" className="font-display text-steel text-xs tracking-widest hover:text-khaki transition-colors duration-300">
                LINKEDIN
              </a>
              <a href="#" className="font-display text-steel text-xs tracking-widest hover:text-khaki transition-colors duration-300">
                GITHUB  
              </a>
              <a href="#" className="font-display text-steel text-xs tracking-widest hover:text-khaki transition-colors duration-300">
                TWITTER
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}