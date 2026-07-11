import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NavigationBar from './components/NavigationBar';
import Hero from './components/Hero';
import FeaturedProducts from './components/FeaturedProducts';
import Footer from './components/Footer';
import ProductPage from './pages/ProductPage';
import AllProducts from './pages/AllProducts';
import FAQs from './pages/FAQs';
import RefundPolicy from './pages/RefundPolicy';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import CartPage from './pages/CartPage';
import { products } from './data/products';

function App() {
  const featuredProductIds = [
    "9648073015632", // 3D Contoured Sleep Mask
    "9648121577808", // Silicone Nose Clips
    "9648108536144", // 15 Pairs Magnetic Nasal Strips
    "9648092873040", // 3D Sleeping Eye Mask
    "9643806654800", // Foreverlily - Wireless Neck And Back Massager
    "9643786338640", // Neck Shoulder Stretcher
  ];

  const featuredProducts = products.filter(product => 
    featuredProductIds.includes(product.ID)
  );

  return (
    <div className="min-h-screen bg-white">
      <NavigationBar />

      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <FeaturedProducts products={featuredProducts} />
          </>
        } />
        <Route path="/all-products" element={<AllProducts />} />
        <Route path="/product/:id" element={<ProductPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/faqs" element={<FAQs />} />
        <Route path="/refund-policy" element={<RefundPolicy />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-service" element={<TermsOfService />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;