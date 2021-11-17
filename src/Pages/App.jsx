import React from 'react';
import { Routes, Route } from "react-router-dom";
import Footer from '../Components/Footer/Footer';
import InfoModule from '../Components/InfoModule/InfoModule';
import NavBar from '../Components/NavBar/NavBar';
import './App.css';
import Layout from './Layout/Layout';
import History from '../Pages/History';
import Education from './Education';
import Experience from './Experience';

function App() {
  return (
    <Layout>
      <NavBar />
      <InfoModule />
      <Routes>
        <Route path="/history" element={<History />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/education" element={<Education />} />
      </Routes>
      <Footer />
    </Layout>
  );
}

export default App;
