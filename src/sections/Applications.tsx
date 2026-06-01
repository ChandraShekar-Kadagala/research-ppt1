import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Section from '../components/Section';
import GlassCard from '../components/GlassCard';
import { Landmark, Plane, Smartphone, Building, Building2, ChevronRight } from 'lucide-react';

const locations = [
  { id: 'banking', name: 'Banking', x: '20%', y: '40%', icon: Landmark, title: 'Identity Verification', desc: 'Secure high-value transactions and remote onboarding using facial recognition and voice biometrics.', color: 'text-primary' },
  { id: 'airports', name: 'Airports', x: '45%', y: '30%', icon: Plane, title: 'Passenger Authentication', desc: 'Frictionless travel with e-gates and biometric boarding passes to reduce queue times.', color: 'text-green-400' },
  { id: 'smartphones', name: 'Smartphones', x: '15%', y: '60%', icon: Smartphone, title: 'Face/Finger Unlock', desc: 'Everyday consumer security providing seamless device and app access.', color: 'text-secondary' },
  { id: 'government', name: 'Government', x: '70%', y: '50%', icon: Building, title: 'Aadhaar & National ID', desc: 'Large-scale identity programs for welfare distribution and citizen services.', color: 'text-orange-400' },
  { id: 'smartcities', name: 'Smart Cities', x: '85%', y: '35%', icon: Building2, title: 'Digital Identity', desc: 'Integrated access control across urban infrastructure, transport, and secure zones.', color: 'text-blue-400' },
];

const Applications: React.FC = () => {
  const [activeLoc, setActiveLoc] = useState<string | null>(null);

  const activeData = locations.find(l => l.id === activeLoc) || locations[0];

  return (
    <Section id="applications" className="pt-24 flex flex-col justify-center">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Global Applications</h2>
        <p className="text-gray-400">Where biometrics meet the real world</p>
      </div>

      <div className="w-full max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Map Area */}
        <div className="lg:col-span-2 relative h-[400px] md:h-[500px] bg-surface rounded-3xl border border-surfaceBorder overflow-hidden shadow-2xl">
          {/* Stylized Dotted World Map Background (SVG) */}
          <div className="absolute inset-0 opacity-20 pointer-events-none flex justify-center items-center">
             <svg viewBox="0 0 1000 500" className="w-full h-full fill-current text-primary">
                {/* Simplified continents represented by circles for a digital look */}
                <circle cx="200" cy="150" r="40"/>
                <circle cx="250" cy="200" r="50"/>
                <circle cx="300" cy="120" r="30"/>
                <circle cx="500" cy="180" r="60"/>
                <circle cx="550" cy="100" r="40"/>
                <circle cx="700" cy="250" r="45"/>
                <circle cx="750" cy="150" r="65"/>
                <circle cx="850" cy="300" r="35"/>
                <circle cx="450" cy="350" r="40"/>
                <circle cx="200" cy="400" r="30"/>
             </svg>
          </div>

          {/* Location Pins */}
          {locations.map((loc) => (
            <div
              key={loc.id}
              className="absolute"
              style={{ left: loc.x, top: loc.y, transform: 'translate(-50%, -50%)' }}
            >
              <motion.div
                whileHover={{ scale: 1.2 }}
                onClick={() => setActiveLoc(loc.id)}
                className={`relative cursor-pointer z-10 flex flex-col items-center group`}
              >
                <div className={`p-3 rounded-full bg-background border-2 transition-all duration-300 ${activeLoc === loc.id ? 'border-primary shadow-[0_0_20px_rgba(0,240,255,0.6)]' : 'border-surfaceBorder hover:border-gray-300'}`}>
                  <loc.icon className={`w-6 h-6 ${activeLoc === loc.id ? loc.color : 'text-gray-500'}`} />
                </div>
                
                {/* Ping animation when active */}
                {activeLoc === loc.id && (
                  <div className="absolute inset-0 rounded-full bg-primary animate-ping opacity-30 pointer-events-none" />
                )}

                <div className={`mt-2 font-bold text-sm bg-background/80 px-2 py-1 rounded backdrop-blur transition-opacity ${activeLoc === loc.id ? 'opacity-100 text-white' : 'opacity-0 group-hover:opacity-100 text-gray-400'}`}>
                  {loc.name}
                </div>
              </motion.div>
            </div>
          ))}
        </div>

        {/* Dashboard Details */}
        <div className="flex flex-col h-full">
          <GlassCard className="flex-1 flex flex-col relative overflow-hidden">
            <div className="absolute top-0 right-0 p-32 bg-primary/5 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none" />
            
            <AnimatePresence mode="wait">
              <motion.div
                key={activeData.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col h-full z-10"
              >
                <div className="flex items-center space-x-4 mb-6">
                  <div className={`p-4 rounded-2xl bg-surface border border-surfaceBorder ${activeData.color}`}>
                    <activeData.icon className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest">{activeData.name}</h3>
                    <h4 className="text-2xl font-bold">{activeData.title}</h4>
                  </div>
                </div>

                <div className="w-full h-px bg-surfaceBorder mb-6" />

                <p className="text-gray-300 leading-relaxed flex-1">
                  {activeData.desc}
                </p>

                <div className="mt-8 flex items-center text-primary font-bold cursor-pointer hover:underline">
                  View Case Study <ChevronRight className="w-4 h-4 ml-1" />
                </div>
              </motion.div>
            </AnimatePresence>
          </GlassCard>
        </div>

      </div>
    </Section>
  );
};

export default Applications;
