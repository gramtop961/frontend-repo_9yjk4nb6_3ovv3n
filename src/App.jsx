import React from 'react';
import Hero from './components/Hero';
import Services from './components/Services';
import CTASection from './components/CTASection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen w-full bg-black antialiased">
      <Hero />
      <Services />
      <CTASection />
      <Footer />
    </div>
  );
}

export default App;
