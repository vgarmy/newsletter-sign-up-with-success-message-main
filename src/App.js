import React from 'react';
import { BrowserRouter, HashRouter, Routes, Route } from 'react-router-dom';
import Card from './containers/card/Card';
import Confirmation from './containers/confirmation/Confirmation';
import Footer from './containers/footer/Footer';

// Choose HashRouter for GitHub Pages, BrowserRouter for local development
const Router = process.env.NODE_ENV === 'production' ? HashRouter : BrowserRouter;

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <Routes>
          <Route path="/newsletter-sign-up-with-success-message-main" element={<Card />} />
          <Route path="/newsletter-sign-up-with-success-message-main/confirmation" element={<Confirmation />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
