
import React from 'react';
import { HashRouter as Router } from 'react-router-dom';
import { ThemeProvider } from 'next-themes';
import Index from './pages/Index';

const App = () => {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <Router>
        <Index />
      </Router>
    </ThemeProvider>
  );
};

export default App;
