import React from 'react';
import './App.css';
import { Home, Navbar } from './components';

export default function App() {
  return (
    <div className="app">
      <Navbar />
      <Home />
    </div>
  );
}
