import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import AcademicPrograms from './pages/AcademicPrograms';
import Faculty from './pages/Faculty';
import OrgStructure from './pages/OrgStructure';
import Students from './pages/Students';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-gray-50">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/academic-programs" element={<AcademicPrograms />} />
            <Route path="/faculty" element={<Faculty />} />
            <Route path="/org-structure" element={<OrgStructure />} />
            <Route path="/students" element={<Students />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
