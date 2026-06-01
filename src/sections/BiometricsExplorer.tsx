import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Section from '../components/Section';
import GlassCard from '../components/GlassCard';
import { ScanFace, Fingerprint, Eye, Mic, CheckCircle, XCircle, Briefcase } from 'lucide-react';

type Modality = 'face' | 'finger' | 'eye' | 'voice' | null;

const data = {
  face: {
    title: 'Face Recognition',
    icon: ScanFace,
    color: 'text-primary',
    advantages: ['Non-intrusive', 'Fast matching', 'Widely accepted'],
    limitations: ['Vulnerable to lighting', 'Spoofing attacks (masks)', 'Aging effects'],
    applications: ['Smartphones', 'Airport Security', 'Surveillance'],
  },
  finger: {
    title: 'Fingerprint',
    icon: Fingerprint,
    color: 'text-secondary',
    advantages: ['Highly unique', 'Cost-effective sensors', 'Proven technology'],
    limitations: ['Requires physical contact', 'Cuts/scars affect accuracy', 'Hygiene concerns'],
    applications: ['Mobile devices', 'Access control', 'Forensics'],
  },
  eye: {
    title: 'Iris Recognition',
    icon: Eye,
    color: 'text-green-500',
    advantages: ['Extremely accurate', 'Stable over lifetime', 'Works with glasses'],
    limitations: ['Expensive hardware', 'Requires user cooperation', 'Intrusive feeling'],
    applications: ['Border control', 'High-security facilities', 'National ID'],
  },
  voice: {
    title: 'Voice Biometrics',
    icon: Mic,
    color: 'text-orange-500',
    advantages: ['Remote authentication', 'Natural interaction', 'Hardware ubiquitous'],
    limitations: ['Background noise', 'Illness affects voice', 'Replay attacks'],
    applications: ['Call centers', 'Smart speakers', 'Banking apps'],
  },
};

const BiometricsExplorer: React.FC = () => {
  const [active, setActive] = useState<Modality>(null);

  const handleSelect = (modality: Modality) => {
    setActive(modality);
  };

  return (
    <Section id="biometrics" className="pt-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[70vh]">
        
        {/* Left Side: Clickable Body Visualization */}
        <div className="relative flex justify-center items-center h-full">
          <div className="relative w-full max-w-sm aspect-[1/2] rounded-[100px] border border-surfaceBorder bg-surface flex flex-col items-center justify-start p-8 shadow-[0_0_30px_rgba(255,255,255,0.05)]">
            
            {/* Abstract Body Shape using SVG */}
            <svg viewBox="0 0 200 400" className="w-full h-full text-surfaceBorder drop-shadow-2xl">
              <path d="M100 20 C120 20, 140 40, 140 70 C140 100, 120 120, 100 120 C80 120, 60 100, 60 70 C60 40, 80 20, 100 20 Z" fill="currentColor" className="transition-colors duration-300 hover:text-primary/20" />
              <path d="M50 140 C80 130, 120 130, 150 140 C180 160, 190 200, 190 250 L180 380 L140 380 L140 250 L60 250 L60 380 L20 380 L10 250 C10 200, 20 160, 50 140 Z" fill="currentColor" className="transition-colors duration-300 hover:text-primary/20" />
            </svg>

            {/* Interactive Nodes */}
            
            {/* Eye / Iris */}
            <motion.div 
              whileHover={{ scale: 1.2 }}
              onClick={() => handleSelect('eye')}
              className={`absolute top-[60px] right-[40%] w-10 h-10 rounded-full flex items-center justify-center cursor-pointer transition-colors z-10 border-2 ${active === 'eye' ? 'bg-green-500/20 border-green-500 shadow-[0_0_15px_rgba(34,197,94,0.5)]' : 'bg-background/80 border-surfaceBorder hover:border-green-500'}`}
            >
              <Eye className={`w-5 h-5 ${active === 'eye' ? 'text-green-500' : 'text-gray-400'}`} />
            </motion.div>
            
            {/* Face */}
            <motion.div 
              whileHover={{ scale: 1.2 }}
              onClick={() => handleSelect('face')}
              className={`absolute top-[80px] left-[35%] w-10 h-10 rounded-full flex items-center justify-center cursor-pointer transition-colors z-10 border-2 ${active === 'face' ? 'bg-primary/20 border-primary shadow-[0_0_15px_rgba(0,240,255,0.5)]' : 'bg-background/80 border-surfaceBorder hover:border-primary'}`}
            >
              <ScanFace className={`w-5 h-5 ${active === 'face' ? 'text-primary' : 'text-gray-400'}`} />
            </motion.div>
            
            {/* Voice / Throat */}
            <motion.div 
              whileHover={{ scale: 1.2 }}
              onClick={() => handleSelect('voice')}
              className={`absolute top-[130px] left-1/2 -translate-x-1/2 w-10 h-10 rounded-full flex items-center justify-center cursor-pointer transition-colors z-10 border-2 ${active === 'voice' ? 'bg-orange-500/20 border-orange-500 shadow-[0_0_15px_rgba(249,115,22,0.5)]' : 'bg-background/80 border-surfaceBorder hover:border-orange-500'}`}
            >
              <Mic className={`w-5 h-5 ${active === 'voice' ? 'text-orange-500' : 'text-gray-400'}`} />
            </motion.div>
            
            {/* Finger */}
            <motion.div 
              whileHover={{ scale: 1.2 }}
              onClick={() => handleSelect('finger')}
              className={`absolute top-[260px] right-[10%] w-10 h-10 rounded-full flex items-center justify-center cursor-pointer transition-colors z-10 border-2 ${active === 'finger' ? 'bg-secondary/20 border-secondary shadow-[0_0_15px_rgba(138,43,226,0.5)]' : 'bg-background/80 border-surfaceBorder hover:border-secondary'}`}
            >
              <Fingerprint className={`w-5 h-5 ${active === 'finger' ? 'text-secondary' : 'text-gray-400'}`} />
            </motion.div>

          </div>
          <div className="absolute bottom-[-40px] text-center w-full text-gray-400 text-sm">
            Click on a node to explore modality details
          </div>
        </div>

        {/* Right Side: Side Panel Details */}
        <div className="flex flex-col h-full justify-center min-h-[400px]">
          <h2 className="text-4xl font-bold mb-8">Biometric Explorer</h2>
          
          <div className="relative w-full h-[400px]">
            <AnimatePresence mode="wait">
              {active ? (
                <motion.div
                  key={active}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="w-full h-full"
                >
                  <GlassCard className={`h-full border-t-4 border-t-transparent hover:border-t-current ${data[active].color} transition-all duration-300`}>
                    <div className="flex items-center space-x-4 mb-6">
                      {React.createElement(data[active].icon, { className: `w-10 h-10 ${data[active].color}` })}
                      <h3 className={`text-3xl font-bold text-white`}>{data[active].title}</h3>
                    </div>

                    <div className="space-y-6">
                      <div>
                        <h4 className="flex items-center text-gray-300 font-semibold mb-2">
                          <CheckCircle className="w-4 h-4 mr-2 text-green-400" /> Advantages
                        </h4>
                        <ul className="list-disc list-inside text-gray-400 text-sm space-y-1 ml-6">
                          {data[active].advantages.map((item, i) => <li key={i}>{item}</li>)}
                        </ul>
                      </div>

                      <div>
                        <h4 className="flex items-center text-gray-300 font-semibold mb-2">
                          <XCircle className="w-4 h-4 mr-2 text-red-400" /> Limitations
                        </h4>
                        <ul className="list-disc list-inside text-gray-400 text-sm space-y-1 ml-6">
                          {data[active].limitations.map((item, i) => <li key={i}>{item}</li>)}
                        </ul>
                      </div>

                      <div>
                        <h4 className="flex items-center text-gray-300 font-semibold mb-2">
                          <Briefcase className="w-4 h-4 mr-2 text-primary" /> Applications
                        </h4>
                        <div className="flex flex-wrap gap-2 ml-6">
                          {data[active].applications.map((item, i) => (
                            <span key={i} className="px-3 py-1 bg-surface border border-surfaceBorder rounded-full text-xs text-white">
                              {item}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </GlassCard>
                </motion.div>
              ) : (
                <motion.div
                  key="empty"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="w-full h-full flex items-center justify-center border border-dashed border-surfaceBorder rounded-2xl"
                >
                  <p className="text-gray-500 flex items-center">
                    <ScanFace className="w-5 h-5 mr-2 opacity-50" /> Select a biometric modality to view analysis.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

      </div>
    </Section>
  );
};

export default BiometricsExplorer;
