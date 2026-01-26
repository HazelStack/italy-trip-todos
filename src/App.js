import 'bootstrap/dist/css/bootstrap.min.css'; 
import './App.css'; 
import './styles/Footer.css'; 
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BootstrapNavBar from './components/NavBar';
import Todos from './pages/Todos';
import Contact from './pages/Contact';
import Homepage from './components/Homepage';
import Footer from './components/Footer';


function App() {
  return (
    <Router>
      <BootstrapNavBar />
      <div className="app-content" style={{ minHeight: '80vh' }}>
        <Routes>
          <Route path="/" element={<Homepage />} />  
          <Route path="/todos" element={<Todos />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;



