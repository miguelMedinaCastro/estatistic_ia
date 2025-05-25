import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './styles/globalStyles';
import { darkTheme, lightTheme } from './styles/themes';

import HomePage from './pages/HomePage'; 
import CreateClassPage from './pages/CreateClass'; 

function App() {
  const [currentTheme, setCurrentTheme] = useState('dark');

  const toggleTheme = () => {
    setCurrentTheme(prevTheme => (prevTheme === 'dark' ? 'light' : 'dark'));
  };

  return (
    <Router> 
      <ThemeProvider theme={currentTheme === 'dark' ? darkTheme : lightTheme}>
        <GlobalStyles />
        <Routes>
          <Route 
            path="/" 
            element={<HomePage toggleTheme={toggleTheme} currentTheme={currentTheme} />} 
          />
          <Route path="/gerar-plano-aula" element={<CreateClassPage />} />
        </Routes>
      </ThemeProvider>
    </Router>
  );
}

export default App;