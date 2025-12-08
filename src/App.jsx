import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { MdEmail, MdPhone, MdLocationOn } from 'react-icons/md';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import Process from './pages/Process';
import About from './pages/About';
import Contact from './pages/Contact';
import FAQ from './pages/FAQ';
import './styles/global.css';
import TopHeader from './components/layout/TopHeader';
import WhatsappButton from './components/ui/WhatsappButton';

function App() {
  return (
    <Router>
      <div className="app">
        <TopHeader/>
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/process" element={<Process />} />
            <Route path="/pricing" element={<Navigate to="/process#packages" replace />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/faq" element={<FAQ />} />
          </Routes>
        </main>
        <WhatsappButton number='+971588121004'/>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
