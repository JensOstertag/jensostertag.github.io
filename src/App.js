import React from 'react';
import {HashRouter as Router, Routes, Route, Navigate} from 'react-router-dom';
import * as Viewport from './viewport.js';
import './App.css';

import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Home from './pages/home/Home';
import ProjectsSection from './components/section-projects/ProjectsSection';
import Project from './pages/project/Project';
import ContactSection from './components/section-contact/ContactSection.js';

class App extends React.Component {
  render() {
    return (
      <Router>
        <Header />
        <div className="website-content-wrapper">
          <Routes>
            <Route index element={<Home />} />
            <Route path="/projects" element={<ProjectsSection preview="0"/>} />
            <Route path="/projects/cnn" element={<Project project="cnn" />} />
            <Route path="/projects/3dprinter" element={<Project project="3dprinter" />} />
            <Route path="/projects/coronaapp" element={<Project project="coronaapp" />} />
            <Route path="/projects/iot-weatherstation" element={<Project project="iot-weatherstation" />} />
            <Route path="/contact" element={<ContactSection />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    );
  }

  componentDidMount() {
    Viewport.init();
  }
}

export default App;
