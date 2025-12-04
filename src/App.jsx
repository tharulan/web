import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Interactive from './components/Interactive';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <Features />
        <Interactive />
        <Testimonials />
        <Pricing />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
