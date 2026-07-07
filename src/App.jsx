import React from 'react';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Gallery from './components/Gallery.jsx';
import ProductsBanner from './components/ProductsBanner.jsx';
import OrderForm from './components/OrderForm.jsx';
import Certificates from './components/Certificates.jsx';
import CTASection from './components/CTASection.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  return (
    <div className="min-h-screen bg-brand font-body">
      <Header />
      <main>
        <Hero />
        <About />
        <Gallery />
        <ProductsBanner />
        <OrderForm />
        <Certificates />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
