import React from 'react';
import Footer from '../Components/Footer/Footer';
import InfoModule from '../Components/InfoModule/InfoModule';
import NavBar from '../Components/NavBar/NavBar';
import './App.css';
import Layout from './Layout/Layout';

function App() {
  return (
    <Layout>
      <NavBar />
      <InfoModule />
      <Footer />
    </Layout>
  );
}

export default App;
