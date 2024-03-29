import React from 'react';   
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Skills from './components/Skills/Skills';
import WorkExperience from './components/WorkExperience/WorkExperience';
import ContactMe from './components/ContactMe/ContactMe';
import ContactForm from './components/ContactForm/ContactForm';
import Footer from './components/Footer/Footer';
function App() {
  return (
    <div className="App">
      
      <Navbar/>
      <div className='container'>
      <Hero/>
        <Skills/>
        <WorkExperience/>
        <ContactMe/>
        </div>
        <Footer/>
      </div>
      
  
  );
}

export default App;
