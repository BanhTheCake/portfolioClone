import './App.scss'
// import { About, Footer, Header, Skills, Testimonial, Work } from './container';
import { Navbar } from './components'
import Social from './components/Social/Social';
import React, { Suspense, useCallback, useEffect } from 'react';
import { useState } from 'react';

const About = React.lazy(() => import('./container/About/About'));
const Footer = React.lazy(() => import('./container/Footer/Footer'));
const Header = React.lazy(() => import('./container/Header/Header'));
const Skills = React.lazy(() => import('./container/Skills/Skills'));
const Testimonial = React.lazy(() => import('./container/Testimonial/Testimonial'));
const Work = React.lazy(() => import('./container/Work/Work'));

function App() {

  return (
      <div className="app">
        <Suspense fallback={<div>Loading...</div>}>
              <Navbar />
              <Header />
              <About />
              <Work />
              <Skills />
              <Testimonial />
              <Footer />
              <Social />
        </Suspense>
      </div>
  );
}

export default App;
