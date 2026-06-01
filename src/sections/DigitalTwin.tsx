import React from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import Section from '../components/Section';
import GlassCard from '../components/GlassCard';
import { User, Activity, Cloud, BrainCircuit, HeartPulse, ShieldCheck, Factory, Building2 } from 'lucide-react';

const DigitalTwin: React.FC = () => {
  const dragX = useMotionValue(0);
  const dragY = useMotionValue(0);

  // Twin transforms (mirrors movement but with a slight delay or glitch effect)
  const twinX = useTransform(dragX, v => typeof v === 'number' ? v * 0.9 : 0);
  const twinY = useTransform(dragY, v => typeof v === 'number' ? v * 0.9 : 0);

  const applications = [
    { name: 'Healthcare', icon: HeartPulse, desc: 'Personalized medicine and continuous monitoring.' },
    { name: 'Security', icon: ShieldCheck, desc: 'Behavioral biometrics and threat prediction.' },
    { name: 'Industry', icon: Factory, desc: 'Worker safety and ergonomic analysis.' },
    { name: 'Smart Cities', icon: Building2, desc: 'Seamless identity and access management.' },
  ];

  return (
    <Section id="digital-twin" className="pt-24 flex flex-col justify-center">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Digital Twin Architecture</h2>
        <p className="text-gray-400">Bridging the physical and digital identity</p>
      </div>

      <div className="w-full max-w-6xl mx-auto flex flex-col items-center">
        
        {/* Split Screen interactive area */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full relative mb-16">
          
          {/* Data Flow connecting them */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center space-x-4 z-20 pointer-events-none hidden md:flex">
            <motion.div className="flex flex-col items-center">
              <Activity className="w-6 h-6 text-primary mb-1 animate-pulse" />
              <div className="w-24 h-[2px] bg-gradient-to-r from-primary to-transparent relative">
                <motion.div animate={{ x: [0, 96] }} transition={{ duration: 1, repeat: Infinity }} className="w-2 h-2 bg-white rounded-full absolute -top-[3px] shadow-[0_0_10px_white]" />
              </div>
              <span className="text-[10px] text-primary mt-1 uppercase">Sensors</span>
            </motion.div>
            
            <motion.div className="flex flex-col items-center">
              <Cloud className="w-6 h-6 text-gray-400 mb-1" />
              <div className="w-24 h-[2px] bg-gradient-to-r from-transparent via-gray-400 to-transparent relative">
                <motion.div animate={{ x: [0, 96] }} transition={{ duration: 1, delay: 0.3, repeat: Infinity }} className="w-2 h-2 bg-white rounded-full absolute -top-[3px] shadow-[0_0_10px_white]" />
              </div>
              <span className="text-[10px] text-gray-400 mt-1 uppercase">Cloud</span>
            </motion.div>

            <motion.div className="flex flex-col items-center">
              <BrainCircuit className="w-6 h-6 text-secondary mb-1" />
              <div className="w-24 h-[2px] bg-gradient-to-r from-transparent to-secondary relative">
                <motion.div animate={{ x: [0, 96] }} transition={{ duration: 1, delay: 0.6, repeat: Infinity }} className="w-2 h-2 bg-white rounded-full absolute -top-[3px] shadow-[0_0_10px_white]" />
              </div>
              <span className="text-[10px] text-secondary mt-1 uppercase">AI</span>
            </motion.div>
          </div>

          {/* Left: Physical Human */}
          <GlassCard className="h-[400px] flex flex-col items-center justify-center border-l-4 border-l-primary relative overflow-hidden">
            <h3 className="absolute top-6 left-6 text-xl font-bold text-gray-300">Physical Human</h3>
            <p className="absolute bottom-6 text-xs text-gray-500">Drag to move</p>
            
            <motion.div
              drag
              dragConstraints={{ left: -50, right: 50, top: -50, bottom: 50 }}
              style={{ x: dragX, y: dragY }}
              className="w-32 h-32 bg-surface rounded-full flex items-center justify-center border-2 border-primary cursor-grab active:cursor-grabbing z-10"
            >
              <User className="w-16 h-16 text-primary" />
            </motion.div>
          </GlassCard>

          {/* Right: Digital Twin */}
          <GlassCard className="h-[400px] flex flex-col items-center justify-center border-r-4 border-r-secondary relative overflow-hidden">
            <h3 className="absolute top-6 right-6 text-xl font-bold text-gray-300">Digital Twin</h3>
            <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" />
            
            <motion.div
              style={{ x: twinX, y: twinY }}
              className="w-32 h-32 bg-transparent rounded-full flex items-center justify-center border-2 border-dashed border-secondary relative z-10"
            >
              <User className="w-16 h-16 text-secondary relative z-10" />
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                className="absolute inset-[-10px] border border-secondary/30 rounded-full border-t-secondary border-b-transparent"
              />
              <motion.div 
                animate={{ rotate: -360 }}
                transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                className="absolute inset-[-20px] border border-secondary/20 rounded-full border-l-secondary border-r-transparent"
              />
            </motion.div>
          </GlassCard>
        </div>

        {/* Applications */}
        <div className="w-full">
          <h3 className="text-2xl font-bold mb-6 text-center">Applications</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {applications.map((app, index) => (
              <GlassCard key={index} delay={index * 0.1} className="flex flex-col items-center text-center p-6 hover:border-primary/50 transition-colors">
                <app.icon className="w-8 h-8 text-primary mb-3" />
                <h4 className="font-bold mb-2">{app.name}</h4>
                <p className="text-xs text-gray-400">{app.desc}</p>
              </GlassCard>
            ))}
          </div>
        </div>

      </div>
    </Section>
  );
};

export default DigitalTwin;
