import React from 'react';
import { Routes, Route } from "react-router-dom";
import Footer from '../../Components/Footer/Footer';
import InfoModule from '../../Components/InfoModule/InfoModule';
import NavBar from '../../Components/NavBar/NavBar';
import './App.css';
import Layout from '../Layout/Layout';
import History from '../../Pages/History';
import Education from '../Education';
import Experience from '../Experience';
import Home from '../Home/Home';
import Contact from '../../Components/Contact/Contact';

function App() {
  return (
    <Layout>
      <NavBar />
      {/* <InfoModule /> */}
      <Routes>
        <Route path='/about' element={<InfoModule />} />
        <Route path='/contact' element={<Contact />} />
        <Route path="/" element={<Home />} />
        <Route path="/about/history" element={<History />} />
        <Route path="/about/experience" element={<Experience />} />
        <Route path="/about/education" element={<Education />} />
      </Routes>
      <Footer />
    </Layout>
  );
}

export default App;
