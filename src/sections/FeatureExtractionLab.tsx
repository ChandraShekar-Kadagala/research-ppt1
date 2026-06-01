import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Section from '../components/Section';
import GlassCard from '../components/GlassCard';
import { Fingerprint, ScanFace, Eye, Scan, Code, Database, Crosshair } from 'lucide-react';

const modalities = [
  { id: 'finger', name: 'Fingerprint', icon: Fingerprint, color: 'text-secondary' },
  { id: 'face', name: 'Face', icon: ScanFace, color: 'text-primary' },
  { id: 'iris', name: 'Iris', icon: Eye, color: 'text-green-500' },
];

const stages = [
  { id: 'raw', name: 'Raw Image', icon: Scan },
  { id: 'preprocess', name: 'Preprocessing', icon: Crosshair },
  { id: 'detect', name: 'Feature Detection', icon: Target },
  { id: 'vector', name: 'Feature Vector', icon: Code },
  { id: 'template', name: 'Template Generation', icon: Database },
];

// Helper icon
function Target(props: any) {
  return <Crosshair {...props} />;
}

const FeatureExtractionLab: React.FC = () => {
  const [activeModality, setActiveModality] = useState(modalities[0].id);
  const [activeStage, setActiveStage] = useState(0);

  // Auto progression of stages
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStage((prev) => (prev < stages.length - 1 ? prev + 1 : 0));
    }, 2500);
    return () => clearInterval(interval);
  }, [activeModality]);

  // Reset stage when modality changes
  useEffect(() => {
    setActiveStage(0);
  }, [activeModality]);

  return (
    <Section id="feature-extraction" className="pt-24">
      <div className="w-full max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-4xl font-bold font-mono tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-gray-300 to-white">
              <span className="text-primary mr-2">&gt;_</span>RESEARCH_LAB
            </h2>
            <p className="text-gray-500 font-mono text-sm mt-1">FEATURE_EXTRACTION_ENGINE_V1.0</p>
          </div>
          
          <div className="flex space-x-2">
            {modalities.map(mod => (
              <button
                key={mod.id}
                onClick={() => setActiveModality(mod.id)}
                className={`flex items-center px-4 py-2 rounded font-mono text-sm border transition-all ${
                  activeModality === mod.id 
                    ? `border-${mod.color.split('-')[1]} bg-${mod.color.split('-')[1]}/10 ${mod.color}` 
                    : 'border-surfaceBorder text-gray-400 hover:border-gray-500'
                }`}
              >
                <mod.icon className="w-4 h-4 mr-2" /> {mod.name}
              </button>
            ))}
          </div>
        </div>

        <GlassCard className="p-0 border border-surfaceBorder overflow-hidden bg-background/95">
          {/* Top Bar */}
          <div className="flex items-center justify-between bg-surface px-4 py-2 border-b border-surfaceBorder">
            <div className="flex space-x-2">
              <div className="w-3 h-3 rounded-full bg-red-500/50" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
              <div className="w-3 h-3 rounded-full bg-green-500/50" />
            </div>
            <div className="text-xs text-gray-500 font-mono">STATUS: {activeStage === stages.length - 1 ? 'COMPLETE' : 'PROCESSING'}</div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 min-h-[500px]">
            {/* Sidebar Flow */}
            <div className="border-r border-surfaceBorder p-6 flex flex-col justify-center space-y-6">
              {stages.map((stage, index) => {
                const isActive = index === activeStage;
                const isPast = index < activeStage;
                
                return (
                  <div key={stage.id} className="relative">
                    <div className={`flex items-center space-x-3 transition-colors ${isActive ? 'text-primary' : isPast ? 'text-gray-400' : 'text-gray-600'}`}>
                      <div className={`p-2 rounded-lg border ${isActive ? 'bg-primary/10 border-primary' : 'border-transparent'}`}>
                        <stage.icon className="w-5 h-5" />
                      </div>
                      <span className="font-mono text-sm">{stage.name}</span>
                    </div>
                    {index < stages.length - 1 && (
                      <div className={`absolute left-[1.1rem] top-10 bottom-[-1.5rem] w-px ${isPast ? 'bg-primary/50' : 'bg-surfaceBorder'}`} />
                    )}
                  </div>
                );
              })}
            </div>

            {/* Main Visualizer */}
            <div className="lg:col-span-3 p-8 flex flex-col items-center justify-center relative bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-surface to-background">
              
              <AnimatePresence mode="wait">
                <motion.div
                  key={`${activeModality}-${activeStage}`}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.05 }}
                  transition={{ duration: 0.5 }}
                  className="relative flex items-center justify-center w-full h-full"
                >
                  {activeStage === 0 && (
                    <div className="text-center">
                      <div className="w-64 h-64 border border-dashed border-gray-600 flex items-center justify-center rounded bg-gray-900/50 grayscale opacity-50">
                        {activeModality === 'finger' && <Fingerprint className="w-32 h-32" />}
                        {activeModality === 'face' && <ScanFace className="w-32 h-32" />}
                        {activeModality === 'iris' && <Eye className="w-32 h-32" />}
                      </div>
                      <p className="mt-4 font-mono text-gray-500">Loading sensor data...</p>
                    </div>
                  )}

                  {activeStage === 1 && (
                    <div className="text-center">
                      <div className="w-64 h-64 border border-primary/30 flex items-center justify-center rounded bg-primary/5 relative overflow-hidden">
                        {/* Scanning line */}
                        <motion.div 
                          animate={{ y: ['-100%', '100%'] }} 
                          transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
                          className="absolute left-0 right-0 h-1 bg-primary shadow-[0_0_15px_#00F0FF] z-10"
                        />
                        {activeModality === 'finger' && <Fingerprint className="w-32 h-32 text-primary/80" />}
                        {activeModality === 'face' && <ScanFace className="w-32 h-32 text-primary/80" />}
                        {activeModality === 'iris' && <Eye className="w-32 h-32 text-primary/80" />}
                      </div>
                      <p className="mt-4 font-mono text-primary">Enhancing image contrast & removing noise...</p>
                    </div>
                  )}

                  {activeStage === 2 && (
                    <div className="text-center">
                      <div className="w-64 h-64 border border-secondary flex items-center justify-center rounded bg-secondary/10 relative">
                        {activeModality === 'finger' && <Fingerprint className="w-32 h-32 text-secondary opacity-50" />}
                        {activeModality === 'face' && <ScanFace className="w-32 h-32 text-secondary opacity-50" />}
                        {activeModality === 'iris' && <Eye className="w-32 h-32 text-secondary opacity-50" />}
                        
                        {/* Extracted points */}
                        {[...Array(15)].map((_, i) => (
                          <motion.div 
                            key={i}
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: Math.random() * 0.5 }}
                            className="absolute w-2 h-2 rounded-full bg-white shadow-[0_0_10px_white]"
                            style={{
                              left: `${20 + Math.random() * 60}%`,
                              top: `${20 + Math.random() * 60}%`
                            }}
                          />
                        ))}
                      </div>
                      <p className="mt-4 font-mono text-secondary">Locating minutiae / landmarks...</p>
                    </div>
                  )}

                  {activeStage === 3 && (
                    <div className="text-center w-full max-w-md">
                      <div className="grid grid-cols-8 gap-2 mb-4">
                        {[...Array(64)].map((_, i) => (
                          <motion.div 
                            key={i}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: i * 0.01 }}
                            className="h-6 bg-green-500/20 border border-green-500/50 flex items-center justify-center font-mono text-[8px] text-green-400"
                          >
                            {Math.random().toFixed(2).substring(2)}
                          </motion.div>
                        ))}
                      </div>
                      <p className="mt-4 font-mono text-green-400">Converting points to multidimensional vector...</p>
                    </div>
                  )}

                  {activeStage === 4 && (
                    <div className="text-center">
                      <div className="w-48 h-48 rounded-full border-4 border-orange-500 flex items-center justify-center bg-orange-500/10 shadow-[0_0_50px_rgba(249,115,22,0.3)]">
                        <Database className="w-16 h-16 text-orange-500" />
                      </div>
                      <p className="mt-6 font-mono text-orange-400">Template successfully generated and encrypted.</p>
                      <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1 }}
                        className="mt-4 text-xs font-mono bg-surface p-2 rounded text-gray-400 border border-surfaceBorder inline-block"
                      >
                        HASH: {Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)}
                      </motion.div>
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>

            </div>
          </div>
        </GlassCard>
      </div>
    </Section>
  );
};

export default FeatureExtractionLab;
