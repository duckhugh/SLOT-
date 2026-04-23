import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import PlatformComparison from './components/PlatformComparison';
import NewsSection from './components/NewsSection';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-indigo-500/30 flex flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <PlatformComparison />
        <NewsSection />
      </main>
      <Footer />
    </div>
  );
}
