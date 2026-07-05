import React from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import ProductsBanner from './components/ProductsBanner.jsx';
import About from './components/About.jsx';
import CTASection from './components/CTASection.jsx';
import Gallery from './components/Gallery.jsx';
import OrderForm from './components/OrderForm.jsx';
import Certificates from './components/Certificates.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  return (
    <div className="min-h-screen bg-brand font-body">
      <Navbar />
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