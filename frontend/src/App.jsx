// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Facebook from './pages/Facebook.jsx';
import Instagram from './pages/Instagram.jsx';
import YouTube from './pages/YouTube.jsx';
import  HowToUse from "./pages/HowToUse.jsx"
import  FAQ from "./pages/FAQ.jsx"
import Contact from './pages/Contact.jsx'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/facebook" element={<Facebook />} />
        <Route path="/instagram" element={<Instagram />} />
        <Route path="/youtube" element={<YouTube />} />
        <Route path="/how-to-use" element={<HowToUse />} />
         <Route path="/faq" element={<FAQ />}/>
         {<Route path="/contact" element={<Contact />} /> } 
      </Routes>
    </Router>
  );
};

export default App;