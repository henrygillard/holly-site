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
import ImageHeader from '../../Components/ImageHeader/ImageHeader';

function App() {
  return (
    <Layout>
      <NavBar />
      <ImageHeader />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/about' element={
          <>
          <InfoModule /> 
          <History />
          </>}
           />
        <Route path="/about/history" element={<History />} />
        <Route path="/about/experience" element={<Experience />} />
        <Route path="/about/education" element={<Education />} />
      </Routes>
      <Footer />
    </Layout>
  );
}

export default App;
