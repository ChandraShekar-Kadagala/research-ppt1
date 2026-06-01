import React from 'react';
import { motion } from 'framer-motion';
import Section from '../components/Section';
import GlassCard from '../components/GlassCard';
import { CheckCircle2, CircleDashed, Quote, BookOpen, ShieldCheck, Database, Brain, Activity, PenTool } from 'lucide-react';

const roadmapItems = [
  { week: 1, title: 'Literature Review', status: 'completed' },
  { week: 2, title: 'System Architecture', status: 'completed' },
  { week: 3, title: 'Core Biometrics Integration', status: 'upcoming' },
  { week: 4, title: 'Digital Twin Prototyping', status: 'upcoming' },
  { week: 5, title: 'Security & Encryption', status: 'upcoming' },
  { week: 6, title: 'Research Papers Draft', status: 'upcoming' },
  { week: 7, title: 'Documentation', status: 'upcoming' },
  { week: 8, title: 'Final Presentation', status: 'upcoming' },
];

const outcomes = [
  { title: 'Biometrics Knowledge', icon: BookOpen },
  { title: 'Authentication Systems', icon: ShieldCheck },
  { title: 'Digital Twin Understanding', icon: Database },
  { title: 'AI Exposure', icon: Brain },
  { title: 'Research Thinking', icon: Activity },
  { title: 'Documentation Skills', icon: PenTool },
];

const ConclusionRoadmap: React.FC = () => {
  return (
    <Section id="conclusion" className="pt-24 min-h-screen flex flex-col justify-between pb-12">
      
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Future Roadmap</h2>
        <p className="text-gray-400">Path to project completion</p>
      </div>

      <div className="w-full max-w-6xl mx-auto flex-1 flex flex-col items-center justify-center space-y-16">
        
        {/* Roadmap Timeline */}
        <div className="w-full relative px-4">
          {/* Horizontal Line */}
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-surfaceBorder -translate-y-1/2 hidden md:block z-0" />
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4 relative z-10">
            {roadmapItems.map((item, index) => (
              <div key={item.week} className="flex flex-col items-center group">
                <motion.div 
                  whileHover={{ scale: 1.1 }}
                  className={`w-12 h-12 rounded-full flex items-center justify-center mb-4 transition-colors ${
                    item.status === 'completed' 
                      ? 'bg-primary/20 text-primary border-2 border-primary shadow-[0_0_15px_rgba(0,240,255,0.4)]' 
                      : 'bg-surface text-gray-500 border-2 border-surfaceBorder border-dashed'
                  }`}
                >
                  {item.status === 'completed' ? <CheckCircle2 className="w-6 h-6" /> : <CircleDashed className="w-6 h-6" />}
                </motion.div>
                
                <div className="text-center">
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Week {item.week}</p>
                  <p className={`text-sm font-medium transition-colors ${item.status === 'completed' ? 'text-white' : 'text-gray-500 group-hover:text-gray-300'}`}>
                    {item.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Research Outcomes */}
        <div className="w-full">
          <h3 className="text-2xl font-bold mb-8 text-center">Expected Outcomes</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {outcomes.map((outcome, index) => (
              <GlassCard key={index} delay={index * 0.1} className="flex flex-col items-center justify-center text-center p-4 hover:border-primary/50 transition-colors group">
                <outcome.icon className="w-8 h-8 text-secondary mb-3 group-hover:scale-110 transition-transform duration-300" />
                <p className="text-sm font-bold text-gray-300 group-hover:text-white transition-colors">{outcome.title}</p>
              </GlassCard>
            ))}
          </div>
        </div>

      </div>

      {/* Final Quote */}
      <div className="w-full max-w-4xl mx-auto mt-20">
        <GlassCard className="relative overflow-hidden border-primary/30 text-center py-12">
          <div className="absolute top-0 left-0 p-32 bg-primary/10 rounded-full blur-3xl -ml-16 -mt-16 pointer-events-none" />
          <div className="absolute bottom-0 right-0 p-32 bg-secondary/10 rounded-full blur-3xl -mr-16 -mb-16 pointer-events-none" />
          
          <Quote className="w-12 h-12 text-primary/30 mx-auto mb-6 rotate-180" />
          <h2 className="text-2xl md:text-4xl font-bold leading-tight relative z-10 text-glow">
            Building Intelligent Identity Systems Through <span className="text-primary">Biometrics</span>, <span className="text-secondary">AI</span> and <span className="text-green-400">Digital Twin</span> Technologies.
          </h2>
          <Quote className="w-12 h-12 text-primary/30 mx-auto mt-6" />
        </GlassCard>
      </div>

    </Section>
  );
};

export default ConclusionRoadmap;
