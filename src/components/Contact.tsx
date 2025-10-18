'use client';

import { motion } from 'framer-motion';

export function Contact() {
  return (
    <div className="min-h-screen bg-gunmetal py-24 flex items-center">
      <div className="max-w-4xl mx-auto px-4 w-full">
        
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
            <h2 className="font-display text-cream text-sm tracking-widest">COLLABORATE</h2>
            <div className="h-px bg-steel flex-1" />
          </div>
        </motion.div>

        {/* Contact Grid */}
        <div className="grid grid-cols-12 gap-8 items-center">
          
          {/* Left Column - Message */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="col-span-7"
          >
            <h3 className="font-sans text-cream text-3xl font-light leading-tight mb-6">
              What&rsquo;s your mission?
            </h3>
            <p className="font-sans text-cream/70 text-lg leading-relaxed mb-8">
              Building systems that matter requires clarity of purpose. 
              Tell me about the challenge you&rsquo;re facing and why now matters.
            </p>
            
            {/* Contact Options */}
            <div className="space-y-4">
              <div className="flex items-center">
                <span className="font-display text-khaki text-sm tracking-widest w-24">SPEAKING</span>
                <div className="h-px bg-steel w-6 mx-4" />
                <span className="font-sans text-cream/60 text-sm">Leadership, Technology, Faith</span>
              </div>
              <div className="flex items-center">
                <span className="font-display text-khaki text-sm tracking-widest w-24">CONSULTING</span>
                <div className="h-px bg-steel w-6 mx-4" />
                <span className="font-sans text-cream/60 text-sm">Systems Architecture, Team Building</span>
              </div>
              <div className="flex items-center">
                <span className="font-display text-khaki text-sm tracking-widest w-24">MENTORING</span>
                <div className="h-px bg-steel w-6 mx-4" />
                <span className="font-sans text-cream/60 text-sm">Young Leaders, Career Transition</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="col-span-5"
          >
            <form className="space-y-6">
              <div>
                <input
                  type="text"
                  placeholder="NAME"
                  className="w-full bg-transparent border-b border-steel/50 text-cream font-sans text-sm tracking-wide pb-2 focus:border-khaki focus:outline-none transition-colors duration-300"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="EMAIL"
                  className="w-full bg-transparent border-b border-steel/50 text-cream font-sans text-sm tracking-wide pb-2 focus:border-khaki focus:outline-none transition-colors duration-300"
                />
              </div>
              <div>
                <select className="w-full bg-transparent border-b border-steel/50 text-cream font-sans text-sm tracking-wide pb-2 focus:border-khaki focus:outline-none transition-colors duration-300">
                  <option value="" className="bg-gunmetal">PURPOSE</option>
                  <option value="speaking" className="bg-gunmetal">Speaking</option>
                  <option value="consulting" className="bg-gunmetal">Consulting</option>
                  <option value="mentoring" className="bg-gunmetal">Mentoring</option>
                  <option value="other" className="bg-gunmetal">Other</option>
                </select>
              </div>
              <div>
                <textarea
                  placeholder="MESSAGE"
                  rows={4}
                  className="w-full bg-transparent border-b border-steel/50 text-cream font-sans text-sm tracking-wide pb-2 focus:border-khaki focus:outline-none transition-colors duration-300 resize-none"
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="group flex items-center mt-8"
              >
                <div className="h-px bg-steel w-12 group-hover:w-20 transition-all duration-300" />
                <span className="font-display text-cream/60 text-sm tracking-widest ml-3 group-hover:text-khaki transition-colors duration-300">
                  SEND
                </span>
              </button>
            </form>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="mt-20 pt-12 border-t border-steel/20"
        >
          <div className="flex justify-between items-center">
            <p className="font-sans text-steel text-sm">
              © 2024 Timeo Williams
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