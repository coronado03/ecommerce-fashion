import React from 'react';
import './App.css';
import { AboutSection, Home, Navbar, ShopSection } from './components';

export default function App() {
  return (
    <div className="app">
      <Navbar />
      <Home />
      <ShopSection />
      <AboutSection />
    </div>
  );
}
