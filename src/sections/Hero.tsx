import React, { useState, useEffect } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import Section from '../components/Section';
import GlassCard from '../components/GlassCard';
import { BrainCircuit, Fingerprint, Database, ShieldCheck, Clock, BookOpen, HelpCircle, Activity } from 'lucide-react';

const Hero: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      const x = (clientX / innerWidth - 0.5) * 20; // -10 to 10
      const y = (clientY / innerHeight - 0.5) * 20;
      mouseX.set(x);
      mouseY.set(y);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  const xTrans = useTransform(mouseX, [-10, 10], [-20, 20]);
  const yTrans = useTransform(mouseY, [-10, 10], [-20, 20]);
  const xTransOpposite = useTransform(mouseX, [-10, 10], [20, -20]);
  const yTransOpposite = useTransform(mouseY, [-10, 10], [20, -20]);

  return (
    <Section id="hero" className="flex items-center justify-center">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full min-h-[80vh]">
        {/* Left Side: Title & Description */}
        <motion.div 
          style={{ x: xTrans, y: yTrans }}
          className="flex flex-col space-y-6 z-10"
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-primary font-medium tracking-widest uppercase mb-2">Research Internship Progress Report</h2>
            <h1 className="text-5xl md:text-7xl font-bold leading-tight text-white">
              Biometric <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary text-glow">
                Authentication
              </span> <br />
              Systems
            </h1>
            <h3 className="text-2xl md:text-3xl text-gray-400 mt-4 font-light">
              & Digital Twin Integration
            </h3>
          </motion.div>

          {/* Stats Cards */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="grid grid-cols-2 gap-4 mt-8"
          >
            <GlassCard delay={0.6} className="flex items-center space-x-4 p-4">
              <Clock className="w-8 h-8 text-primary" />
              <div>
                <p className="text-3xl font-bold">14</p>
                <p className="text-sm text-gray-400">Days Completed</p>
              </div>
            </GlassCard>
            <GlassCard delay={0.7} className="flex items-center space-x-4 p-4">
              <BookOpen className="w-8 h-8 text-secondary" />
              <div>
                <p className="text-3xl font-bold">8</p>
                <p className="text-sm text-gray-400">Topics Learned</p>
              </div>
            </GlassCard>
            <GlassCard delay={0.8} className="flex items-center space-x-4 p-4">
              <HelpCircle className="w-8 h-8 text-primary" />
              <div>
                <p className="text-3xl font-bold">12</p>
                <p className="text-sm text-gray-400">Research Questions</p>
              </div>
            </GlassCard>
            <GlassCard delay={0.9} className="flex items-center space-x-4 p-4">
              <Activity className="w-8 h-8 text-secondary" />
              <div>
                <p className="text-3xl font-bold">84</p>
                <p className="text-sm text-gray-400">Hours Invested</p>
              </div>
            </GlassCard>
          </motion.div>
        </motion.div>

        {/* Right Side: 3D Visualization / Flow Animation */}
        <motion.div 
          style={{ x: xTransOpposite, y: yTransOpposite }}
          className="relative h-full min-h-[500px] flex items-center justify-center z-10"
        >
          {/* Abstract representation of human face -> Digital Twin */}
          <div className="relative w-full max-w-md aspect-square rounded-full border border-surfaceBorder bg-surface flex items-center justify-center overflow-hidden shadow-[0_0_50px_rgba(0,240,255,0.1)]">
            
            {/* Pulsing center */}
            <div className="absolute w-32 h-32 bg-primary/20 rounded-full blur-3xl animate-pulse-slow"></div>
            
            <div className="flex flex-col items-center justify-center space-y-8 relative z-20 w-full">
              {/* Central Animation Sequence */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 1 }}
                className="flex items-center space-x-4"
              >
                <div className="p-4 bg-background rounded-full border border-primary/30 shadow-[0_0_15px_rgba(0,240,255,0.3)]">
                  <Fingerprint className="w-8 h-8 text-primary" />
                </div>
                <div className="w-12 h-1 bg-gradient-to-r from-primary to-secondary relative">
                  <motion.div 
                    animate={{ x: [0, 48, 0] }} 
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                    className="w-2 h-2 rounded-full bg-white absolute top-1/2 -translate-y-1/2 left-0 shadow-[0_0_10px_white]"
                  />
                </div>
                <div className="p-4 bg-background rounded-full border border-secondary/30 shadow-[0_0_15px_rgba(138,43,226,0.3)]">
                  <BrainCircuit className="w-8 h-8 text-secondary" />
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 1.5 }}
                className="flex items-center space-x-4"
              >
                <div className="w-1 h-12 bg-gradient-to-b from-secondary to-primary mx-auto relative hidden md:block">
                  <motion.div 
                    animate={{ y: [0, 48, 0] }} 
                    transition={{ duration: 2, delay: 0.5, repeat: Infinity, ease: "linear" }}
                    className="w-2 h-2 rounded-full bg-white absolute left-1/2 -translate-x-1/2 top-0 shadow-[0_0_10px_white]"
                  />
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 2 }}
                className="flex items-center space-x-4"
              >
                <div className="p-4 bg-background rounded-full border border-primary/30 shadow-[0_0_15px_rgba(0,240,255,0.3)]">
                  <Database className="w-8 h-8 text-primary" />
                </div>
                <div className="w-12 h-1 bg-gradient-to-r from-primary to-green-500 relative">
                  <motion.div 
                    animate={{ x: [0, 48, 0] }} 
                    transition={{ duration: 2, delay: 1, repeat: Infinity, ease: "linear" }}
                    className="w-2 h-2 rounded-full bg-white absolute top-1/2 -translate-y-1/2 left-0 shadow-[0_0_10px_white]"
                  />
                </div>
                <div className="p-4 bg-background rounded-full border border-green-500/30 shadow-[0_0_15px_rgba(34,197,94,0.3)]">
                  <ShieldCheck className="w-8 h-8 text-green-500" />
                </div>
              </motion.div>
            </div>
            
            {/* Abstract 3D-like rings */}
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute inset-4 border border-dashed border-primary/20 rounded-full"
            />
            <motion.div 
              animate={{ rotate: -360 }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              className="absolute inset-12 border border-secondary/20 rounded-full"
            />
          </div>
        </motion.div>
      </div>
    </Section>
  );
};

export default Hero;
