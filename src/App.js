import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AboutMe from './pages/AboutMe';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Resume from './pages/Resume';


function App() {
  return (
      <Router>
        <div className="flex-column justify-center align-center min-100-vh bg-primary">
          <Routes>
            <Route 
              path="/React-Portfolio/" 
              element={<AboutMe />}
            />
            <Route 
              path="/React-Portfolio/AboutMe" 
              element={<AboutMe />}
            />
            <Route 
              path="/React-Portfolio/Portfolio" 
              element={<Portfolio />}
            />
            <Route 
              path="/React-Portfolio/Contact"
              element={<Contact />}
            />
            <Route 
              path="/React-Portfolio/Resume"
              element={<Resume />}
            />
          </Routes>
        </div>
      </Router>
  );
}

export default App;
