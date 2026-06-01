import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Section from '../components/Section';
import GlassCard from '../components/GlassCard';
import { User, Key, ShieldCheck, DoorOpen, Lock, Smartphone, Fingerprint, LockKeyhole } from 'lucide-react';

const flowSteps = [
  { id: 'user', icon: User, title: 'User', desc: 'Initiates access request' },
  { id: 'login', icon: Key, title: 'Login Request', desc: 'Provides identity claim (e.g. username)' },
  { id: 'authn', icon: ShieldCheck, title: 'Authentication', desc: 'Verifies WHO the user is (Biometrics)' },
  { id: 'authz', icon: Lock, title: 'Authorization', desc: 'Determines WHAT the user can access' },
  { id: 'access', icon: DoorOpen, title: 'Access Granted', desc: 'User enters the secure system' },
];

const comparisons = [
  { method: 'Password', icon: LockKeyhole, security: 'Low', usability: 'Low', desc: 'Easily forgotten or stolen.' },
  { method: 'OTP', icon: Smartphone, security: 'Medium', usability: 'Medium', desc: 'Vulnerable to SIM swapping.' },
  { method: 'MFA', icon: ShieldCheck, security: 'High', usability: 'Medium', desc: 'Secure but adds friction.' },
  { method: 'Biometrics', icon: Fingerprint, security: 'High', usability: 'High', desc: 'Seamless and highly secure.' },
];

const AuthFlow: React.FC = () => {
  const [activeStep, setActiveStep] = useState<string | null>(null);

  return (
    <Section id="auth-flow" className="pt-24 flex flex-col justify-center">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">The Security Pipeline</h2>
        <p className="text-gray-400">Authentication vs Authorization</p>
      </div>

      <div className="w-full max-w-6xl mx-auto flex flex-col items-center">
        
        {/* Interactive Flow */}
        <div className="flex flex-col md:flex-row items-center justify-between w-full relative mb-24">
          {/* Horizontal connecting line */}
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-surfaceBorder -translate-y-1/2 hidden md:block z-0" />
          
          {flowSteps.map((step, index) => (
            <React.Fragment key={step.id}>
              <div className="relative z-10 flex flex-col items-center my-4 md:my-0">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setActiveStep(activeStep === step.id ? null : step.id)}
                  className={`w-20 h-20 rounded-2xl flex items-center justify-center cursor-pointer transition-all duration-300 border-2 ${
                    activeStep === step.id 
                      ? 'bg-primary/20 border-primary shadow-[0_0_20px_rgba(0,240,255,0.4)]' 
                      : 'bg-surface border-surfaceBorder hover:border-primary/50'
                  }`}
                >
                  <step.icon className={`w-8 h-8 ${activeStep === step.id ? 'text-primary' : 'text-gray-400'}`} />
                </motion.div>
                <p className="mt-4 font-bold text-sm uppercase tracking-wider">{step.title}</p>
                
                <AnimatePresence>
                  {activeStep === step.id && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute top-full mt-4 w-48 text-center"
                    >
                      <GlassCard className="p-3 bg-background/90 backdrop-blur-md text-sm border-primary/30">
                        <p className="text-gray-300">{step.desc}</p>
                      </GlassCard>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              
              {/* Vertical connecting line for mobile */}
              {index < flowSteps.length - 1 && (
                <div className="w-1 h-8 bg-surfaceBorder md:hidden" />
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Comparison Section */}
        <div className="w-full mt-12">
          <h3 className="text-2xl font-bold mb-8 text-center">Authentication Methods Evolution</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {comparisons.map((comp, idx) => (
              <GlassCard key={idx} delay={idx * 0.1} className="relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <comp.icon className="w-10 h-10 text-primary mb-4" />
                <h4 className="text-xl font-bold mb-2">{comp.method}</h4>
                <p className="text-sm text-gray-400 mb-4">{comp.desc}</p>
                <div className="flex justify-between items-center text-xs">
                  <span className="flex items-center text-gray-300">
                    <ShieldCheck className="w-3 h-3 mr-1 text-green-400" /> Sec: {comp.security}
                  </span>
                  <span className="flex items-center text-gray-300">
                    <User className="w-3 h-3 mr-1 text-blue-400" /> UX: {comp.usability}
                  </span>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>

      </div>
    </Section>
  );
};

export default AuthFlow;
