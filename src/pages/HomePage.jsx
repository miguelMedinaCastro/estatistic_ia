import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Benefits from '../components/Benefits';
import Features from '../components/Features';
import Footer from '../components/Footer';

/**
 * @typedef {object} HomePageProps
 * @property {() => void} Função p / alternar o tema. (tirei)
 * @property {'dark' | 'light'} 
 */

/**
 * Componente da Página Inicial
 * @param {HomePageProps} props
 * @returns {React.ReactElement}
 */
const HomePage = ({ toggleTheme, currentTheme }) => {
  return (
    <>
      <Header toggleTheme={toggleTheme} currentTheme={currentTheme} />
      <main> 
        <Hero />
        <Benefits />
        <Features />
      </main>
      <Footer />
    </>
  );
};

export default HomePage;