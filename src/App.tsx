import React from 'react';
import ParticleBackground from './components/ParticleBackground';
import Hero from './sections/Hero';
import Timeline from './sections/Timeline';
import BiometricsExplorer from './sections/BiometricsExplorer';
import AuthFlow from './sections/AuthFlow';
import DigitalTwin from './sections/DigitalTwin';
import AINeuralNet from './sections/AINeuralNet';
import Applications from './sections/Applications';
import EnrollmentPipeline from './sections/EnrollmentPipeline';
import FeatureExtractionLab from './sections/FeatureExtractionLab';
import ConclusionRoadmap from './sections/ConclusionRoadmap';

function App() {
  return (
    <div className="bg-background text-white min-h-screen font-sans selection:bg-primary/30">
      <ParticleBackground />
      
      <main>
        <Hero />
        <Timeline />
        <BiometricsExplorer />
        <AuthFlow />
        <DigitalTwin />
        <AINeuralNet />
        <Applications />
        <EnrollmentPipeline />
        <FeatureExtractionLab />
        <ConclusionRoadmap />
      </main>
    </div>
  );
}

export default App;
