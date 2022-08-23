import './App.scss'
import { About, Footer, Header, Skills, Testimonial, Work } from './container';
import { Navbar } from './components'
import Social from './components/Social/Social';
import { useEffect } from 'react';
import { useState } from 'react';
import Test from './container/Test/Test';

function App() {


    return (
        <div className="app">
                <Navbar />
                <Header />
                <About />
                <Work />
                <Skills />
                <Testimonial />
                <Footer />
                <Social />
        </div>
    );
}

export default App;
