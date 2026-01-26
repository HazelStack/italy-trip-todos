import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BootstrapNavBar from './components/NavBar'
import Todos from './pages/Todos';
import Contact from './pages/Contact';
import Homepage from './components/Homepage';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <BootstrapNavBar/>
      <Routes>
        <Route path="/" element={<Homepage />} />  
        <Route path="/todos" element={<Todos />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;


