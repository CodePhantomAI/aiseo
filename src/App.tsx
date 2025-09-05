import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Industries from './components/Industries';
import LeadMagnet from './components/LeadMagnet';
import Resources from './components/Resources';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CookieBanner from './components/legal/CookieBanner';

function App() {
  return (
    <div className="min-h-screen bg-white" dir="rtl">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Industries />
        <LeadMagnet />
        <Resources />
        <Contact />
      </main>
      <Footer />
      <CookieBanner />
    </div>
  );
}

export default App;