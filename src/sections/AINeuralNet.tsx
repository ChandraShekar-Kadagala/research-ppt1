import React from 'react';
import { motion } from 'framer-motion';
import Section from '../components/Section';
import GlassCard from '../components/GlassCard';
import { Brain, ScanFace, LineChart, Network, CheckCircle2, Clock, ShieldAlert, Cpu } from 'lucide-react';

const branches = [
  { title: 'Face Recognition', icon: ScanFace, angle: -45, color: 'text-primary' },
  { title: 'Pattern Recognition', icon: LineChart, angle: 45, color: 'text-secondary' },
  { title: 'Feature Extraction', icon: Network, angle: 135, color: 'text-green-500' },
  { title: 'Decision Making', icon: CheckCircle2, angle: -135, color: 'text-orange-500' },
];

const AINeuralNet: React.FC = () => {
  return (
    <Section id="ai-biometrics" className="pt-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[70vh]">
        
        {/* Left Side: Neural Network Visualization */}
        <div className="relative h-[500px] flex items-center justify-center">
          
          {/* Central Brain */}
          <motion.div 
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="absolute z-20 w-32 h-32 rounded-full bg-surface border-2 border-primary flex items-center justify-center shadow-[0_0_30px_rgba(0,240,255,0.4)]"
          >
            <Brain className="w-16 h-16 text-primary" />
            <div className="absolute inset-0 rounded-full border border-primary/50 animate-ping opacity-20" />
          </motion.div>

          {/* Branches */}
          {branches.map((branch, index) => {
            const rad = (branch.angle * Math.PI) / 180;
            const distance = 160;
            const x = Math.cos(rad) * distance;
            const y = Math.sin(rad) * distance;
            
            // Calculate line length and rotation
            const length = distance - 40; // subtract radius of central and outer nodes
            
            return (
              <React.Fragment key={index}>
                {/* Branch Line with Data Packets */}
                <div 
                  className="absolute z-0 h-[2px] bg-gradient-to-r from-primary to-transparent opacity-50 origin-left"
                  style={{ 
                    width: `${length}px`, 
                    transform: `rotate(${branch.angle}deg)`,
                    left: '50%',
                    top: '50%',
                    marginLeft: '40px' // offset by radius of central brain
                  }}
                >
                  {/* Data Packets flowing outwards */}
                  <motion.div 
                    animate={{ x: [0, length] }}
                    transition={{ duration: 1.5, delay: index * 0.3, repeat: Infinity, ease: "linear" }}
                    className="w-3 h-3 rounded-full bg-white absolute -top-[5px] shadow-[0_0_10px_white]"
                  />
                  {/* Data Packets flowing inwards */}
                  <motion.div 
                    animate={{ x: [length, 0] }}
                    transition={{ duration: 2, delay: index * 0.5, repeat: Infinity, ease: "linear" }}
                    className="w-2 h-2 rounded-full bg-secondary absolute -top-[3px] shadow-[0_0_10px_#8A2BE2]"
                  />
                </div>

                {/* Branch Node */}
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="absolute z-10 w-24 h-24 rounded-full bg-surface border border-surfaceBorder flex flex-col items-center justify-center shadow-lg"
                  style={{
                    left: `calc(50% + ${x}px)`,
                    top: `calc(50% + ${y}px)`,
                    transform: 'translate(-50%, -50%)'
                  }}
                >
                  <branch.icon className={`w-8 h-8 mb-1 ${branch.color}`} />
                  <span className="text-[10px] text-center font-bold px-2">{branch.title}</span>
                </motion.div>
              </React.Fragment>
            );
          })}
          
        </div>

        {/* Right Side: Comparison Chart */}
        <div className="flex flex-col justify-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">AI in Biometrics</h2>
          <p className="text-gray-400 mb-10">Artificial Intelligence transforms static template matching into adaptive, continuous identity verification.</p>
          
          <GlassCard className="p-0 overflow-hidden border-primary/30">
            <div className="grid grid-cols-2 bg-surfaceBorder/30">
              <div className="p-4 text-center font-bold text-gray-400">Before AI (Traditional)</div>
              <div className="p-4 text-center font-bold text-primary bg-primary/10">After AI (Modern)</div>
            </div>
            
            <div className="divide-y divide-surfaceBorder">
              <div className="grid grid-cols-2">
                <div className="p-4 flex items-center"><Clock className="w-4 h-4 mr-2 text-gray-500"/> Static Templates</div>
                <div className="p-4 flex items-center bg-primary/5"><RotateCw className="w-4 h-4 mr-2 text-primary"/> Adaptive Learning</div>
              </div>
              <div className="grid grid-cols-2">
                <div className="p-4 flex items-center"><Cpu className="w-4 h-4 mr-2 text-gray-500"/> Rule-based Matching</div>
                <div className="p-4 flex items-center bg-primary/5"><Brain className="w-4 h-4 mr-2 text-primary"/> Deep Neural Networks</div>
              </div>
              <div className="grid grid-cols-2">
                <div className="p-4 flex items-center"><ShieldAlert className="w-4 h-4 mr-2 text-gray-500"/> Vulnerable to Spoofing</div>
                <div className="p-4 flex items-center bg-primary/5"><CheckCircle2 className="w-4 h-4 mr-2 text-primary"/> Liveness Detection</div>
              </div>
              <div className="grid grid-cols-2">
                <div className="p-4 flex items-center"><ScanFace className="w-4 h-4 mr-2 text-gray-500"/> Fails with aging/changes</div>
                <div className="p-4 flex items-center bg-primary/5"><Network className="w-4 h-4 mr-2 text-primary"/> Continuous Updates</div>
              </div>
            </div>
          </GlassCard>
        </div>

      </div>
    </Section>
  );
};

export default AINeuralNet;
