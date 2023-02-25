import React from 'react';
// import './App.css';
import Background from './containers/Background';
import Navbar from './containers/Navbar';
import Hero from './containers/Hero';
import Carousel from './containers/Carousel';
import About from './containers/About';
import Footer from './containers/Footer';


function App() {
  return (
    <div>
      <Background />
      <Navbar />
      <Hero />
      <Carousel />
      <About />
      <Footer />
      {/* <h1 className="text-3xl font-bold italic">
      Hello world!
      </h1> */}
    </div>
  )
}

export default App;