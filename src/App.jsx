import React from 'react';
import Navbar from './components/Navbar';
import HeroCover from './components/HeroCover';
import FeatureGrid from './components/FeatureGrid';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <main>
        <HeroCover />
        <FeatureGrid />
      </main>
      <Footer />
    </div>
  );
}
