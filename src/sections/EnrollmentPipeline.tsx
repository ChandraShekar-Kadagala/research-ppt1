import React from 'react';
import { motion } from 'framer-motion';
import Section from '../components/Section';
import GlassCard from '../components/GlassCard';
import { User, Camera, Settings, Cpu, FileCode2, Database, Sun, ZapOff, Activity, ShieldAlert } from 'lucide-react';

const pipelineSteps = [
  { id: 'user', icon: User, title: 'User Input', color: 'text-gray-400' },
  { id: 'capture', icon: Camera, title: 'Sensor Capture', color: 'text-primary' },
  { id: 'preprocess', icon: Settings, title: 'Preprocessing', color: 'text-secondary' },
  { id: 'extract', icon: Cpu, title: 'Feature Extract', color: 'text-green-500' },
  { id: 'template', icon: FileCode2, title: 'Template Gen', color: 'text-orange-500' },
  { id: 'db', icon: Database, title: 'Secure DB', color: 'text-blue-500' },
];

const challenges = [
  { title: 'Poor Lighting', icon: Sun, desc: 'Affects facial recognition accuracy.' },
  { title: 'Bad Sensor', icon: ZapOff, desc: 'Hardware malfunctions or dirty surfaces.' },
  { title: 'Noise', icon: Activity, desc: 'Background audio or visual artifacts.' },
  { title: 'Security Risks', icon: ShieldAlert, desc: 'Injection of fake templates.' },
];

const EnrollmentPipeline: React.FC = () => {
  return (
    <Section id="enrollment" className="pt-24">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center min-h-[70vh]">
        
        {/* Left Side: Pipeline Visualization */}
        <div className="lg:col-span-2">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Enrollment Pipeline</h2>
          <p className="text-gray-400 mb-12">The journey from physical identity to digital template</p>
          
          <div className="relative">
            {/* The Pipeline Track */}
            <div className="absolute top-8 left-12 right-12 h-4 bg-surfaceBorder rounded-full overflow-hidden hidden md:block">
              {/* Animated Data Stream */}
              <motion.div 
                animate={{ x: ['-100%', '100%'] }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                className="w-1/3 h-full bg-gradient-to-r from-transparent via-primary/50 to-transparent"
              />
            </div>

            {/* Steps Grid */}
            <div className="grid grid-cols-2 md:grid-cols-6 gap-6 md:gap-4 relative z-10">
              {pipelineSteps.map((step, index) => (
                <div key={step.id} className="flex flex-col items-center">
                  <GlassCard delay={index * 0.1} className={`w-16 h-16 md:w-20 md:h-20 flex items-center justify-center rounded-2xl mb-4 border-2 border-transparent hover:border-current transition-colors ${step.color}`}>
                    <step.icon className="w-8 h-8" />
                  </GlassCard>
                  <span className="text-xs font-bold text-center text-gray-300">{step.title}</span>
                  
                  {/* Vertical lines for mobile */}
                  {index < pipelineSteps.length - 1 && (
                    <div className="w-1 h-8 bg-surfaceBorder md:hidden my-2" />
                  )}
                </div>
              ))}
            </div>

            {/* Template Forming Animation */}
            <div className="mt-16 bg-surface border border-surfaceBorder rounded-2xl p-6 relative overflow-hidden">
              <h3 className="text-xl font-bold mb-4 text-center">Template Creation Simulation</h3>
              
              <div className="flex justify-center space-x-2">
                {[...Array(20)].map((_, i) => (
                  <motion.div 
                    key={i}
                    initial={{ height: 10, opacity: 0.3 }}
                    animate={{ 
                      height: [10, Math.random() * 60 + 20, 10], 
                      opacity: [0.3, 1, 0.3] 
                    }}
                    transition={{ 
                      duration: Math.random() * 1 + 0.5, 
                      repeat: Infinity,
                      delay: Math.random() * 2
                    }}
                    className="w-3 bg-secondary rounded-full"
                  />
                ))}
              </div>
              <div className="text-center mt-4 text-xs text-gray-500 font-mono">
                01001011 01101001 01110011 01101000 01100001
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Challenges */}
        <div>
          <h3 className="text-2xl font-bold mb-6 text-red-400">Enrollment Challenges</h3>
          <div className="flex flex-col space-y-4">
            {challenges.map((challenge, index) => (
              <GlassCard key={index} delay={0.5 + index * 0.1} className="p-4 border-l-4 border-l-red-500 hover:border-red-500 transition-colors group">
                <div className="flex items-center space-x-4">
                  <div className="p-2 bg-red-500/10 rounded-lg group-hover:bg-red-500/20 transition-colors">
                    <challenge.icon className="w-6 h-6 text-red-500" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-200">{challenge.title}</h4>
                    <p className="text-xs text-gray-400 mt-1">{challenge.desc}</p>
                  </div>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>

      </div>
    </Section>
  );
};

export default EnrollmentPipeline;
