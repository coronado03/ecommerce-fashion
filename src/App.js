import React from 'react';
import './App.css';
import {
  AboutSection,
  Home,
  Navbar,
  ShopSection,
  ContactSection,
} from './components';

export default function App() {
  return (
    <div className="app">
      <Navbar />
      <Home />
      <AboutSection />
      <ShopSection />
      <ContactSection />
    </div>
  );
}
