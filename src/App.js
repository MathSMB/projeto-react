import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HelloWorld from './components/HelloWorld';
import HelloNewRoute from './components/HelloNewRoute';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HelloWorld />} />
          <Route path="/my-new-route" element={<HelloNewRoute />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
