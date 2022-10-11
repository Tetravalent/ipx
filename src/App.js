import './App.css';
import Navbar from './components/Navbar';
import Nft from './components/Nft';
import Section from './components/Section';
import React from 'react'
import Footer from './components/Footer'
import Above from './components/Above';

export default function App() {
  return (
    <>
      <Above />
      <Navbar />
      <Nft />
      <Section />
      <Footer />
    </>
  )
}

