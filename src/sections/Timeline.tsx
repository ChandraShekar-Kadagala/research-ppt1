import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Section from '../components/Section';
import GlassCard from '../components/GlassCard';
import { Calendar, ChevronRight } from 'lucide-react';

const timelineData = [
  { day: 1, title: 'Biometrics', desc: 'Understanding modalities like face, iris, and fingerprint.', learnings: 'Analyzed false acceptance/rejection rates.' },
  { day: 2, title: 'Authentication', desc: 'Auth flows vs Authorization.', learnings: 'Studied MFA integration with biometrics.' },
  { day: 3, title: 'Digital Twin', desc: 'Virtual representation of human identity.', learnings: 'Data synchronization from physical to digital.' },
  { day: 4, title: 'AI', desc: 'Neural networks in pattern recognition.', learnings: 'CNNs for feature extraction.' },
  { day: 5, title: 'Applications', desc: 'Real-world use cases.', learnings: 'Banking, Healthcare, and Smart Cities.' },
  { day: 8, title: 'Enrollment', desc: 'Pipeline from capture to database.', learnings: 'Addressing sensor noise and lighting.' },
  { day: 9, title: 'Feature Extraction', desc: 'Creating biometric templates.', learnings: 'Minutiae points and facial landmarks.' },
];

const Timeline: React.FC = () => {
  const [activeDay, setActiveDay] = useState<number | null>(null);

  return (
    <Section id="timeline" className="flex flex-col items-center justify-center pt-32">
      <div className="text-center mb-16 w-full">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-glow text-primary">Research Journey</h2>
        <p className="text-gray-400 max-w-2xl mx-auto">A chronical of discoveries across 9 intensive days of research</p>
      </div>

      <div className="w-full max-w-6xl relative mt-10">
        {/* Horizontal Line */}
        <div className="absolute top-1/2 left-0 right-0 h-1 bg-surfaceBorder -translate-y-1/2 hidden lg:block z-0" />
        
        <div className="flex flex-col lg:flex-row justify-between items-center relative z-10 gap-8 lg:gap-0">
          {timelineData.map((item, index) => (
            <div 
              key={item.day}
              className="relative group w-full lg:w-auto flex flex-col items-center"
              onMouseEnter={() => setActiveDay(item.day)}
              onMouseLeave={() => setActiveDay(null)}
            >
              {/* Node */}
              <motion.div 
                whileHover={{ scale: 1.2 }}
                className={`w-12 h-12 rounded-full flex items-center justify-center cursor-pointer transition-colors duration-300 ${
                  activeDay === item.day ? 'bg-primary text-background' : 'bg-surface border-2 border-primary text-primary'
                }`}
              >
                <span className="font-bold">{item.day}</span>
              </motion.div>
              
              {/* Title below node */}
              <div className="mt-4 text-center lg:absolute lg:top-16 lg:w-32 lg:-left-10">
                <p className={`font-medium transition-colors ${activeDay === item.day ? 'text-primary text-glow' : 'text-gray-300'}`}>
                  {item.title}
                </p>
              </div>

              {/* Hover Card */}
              <AnimatePresence>
                {activeDay === item.day && (
                  <motion.div
                    initial={{ opacity: 0, y: -20, scale: 0.9 }}
                    animate={{ opacity: 1, y: -180, scale: 1 }}
                    exit={{ opacity: 0, y: -20, scale: 0.9 }}
                    transition={{ duration: 0.2 }}
                    className="absolute z-50 bottom-full lg:left-1/2 lg:-translate-x-1/2 w-64 lg:mb-4 pointer-events-none"
                  >
                    <GlassCard className="p-4 border-primary/50 !bg-background/90 backdrop-blur-xl">
                      <div className="flex items-center space-x-2 mb-2">
                        <Calendar className="w-4 h-4 text-primary" />
                        <span className="text-xs text-primary font-bold uppercase tracking-wider">Day {item.day}</span>
                      </div>
                      <h4 className="font-bold text-lg mb-1">{item.title}</h4>
                      <p className="text-sm text-gray-300 mb-3">{item.desc}</p>
                      
                      <div className="bg-surface p-2 rounded border border-surfaceBorder">
                        <p className="text-xs text-gray-400 font-semibold mb-1">Key Learning:</p>
                        <p className="text-xs text-secondary">{item.learnings}</p>
                      </div>
                    </GlassCard>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Timeline;
