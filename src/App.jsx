import React, { useState } from 'react';
import Header from './components/Header.jsx';
import MobileMenu from './components/MobileMenu.jsx';
import Hero from './components/Hero.jsx';
import ProductsBanner from './components/ProductsBanner.jsx';
import About from './components/About.jsx';
import CTASection from './components/CTASection.jsx';
import Gallery from './components/Gallery.jsx';
import OrderForm from './components/OrderForm.jsx';
import Certificates from './components/Certificates.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-brand font-body">
      <Header isMenuOpen={isMenuOpen} onToggleMenu={() => setIsMenuOpen((o) => !o)} />
      <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />

      <main>
        <Hero />
        <ProductsBanner />
        <About />
        <CTASection />
        <Gallery />
        <OrderForm />
        <Certificates />
      </main>

      <Footer />
    </div>
  );
}