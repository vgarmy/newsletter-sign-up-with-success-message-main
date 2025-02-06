import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Card from './containers/card/Card';
import Confirmation from './containers/confirmation/Confirmation';
import Footer from './containers/footer/Footer';

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <Routes>
          <Route path="/" element={<Card />} />
          <Route path="/confirmation" element={<Confirmation />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
