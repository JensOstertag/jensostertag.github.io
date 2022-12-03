import React from 'react';
import {HashRouter as Router, Routes, Route, Navigate} from 'react-router-dom';
import * as Viewport from './intersectionobserver.js';
import './App.css';

import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Home from './pages/home/Home';
import ProjectsSection from './components/section-projects/ProjectsSection';
import Project from './pages/project/Project';
import ContactSection from './components/section-contact/ContactSection';
import Resume from './pages/resume/Resume';

import RouteChanged from './RouteChanged.js';

const jsonProjects = require("./data/projects.json");

class App extends React.Component {
  render() {
    var projects = jsonProjects.projects;
    return (
      <Router>
        <Header />
        <div className="website-content-wrapper">
          <RouteChanged>
            <Routes>
              <Route index element={<Home />} />
              <Route path="/projects" element={<ProjectsSection preview="0"/>} />

              {
                projects.map((project, i) => (
                    <Route key={"p" + i} path={"/projects/" + project.link} element={<Project index={i} />} />
                  )
                )
              }

              <Route path="/contact" element={<ContactSection />} />
              <Route path="/resume" element={<Resume />} />
              <Route path="*" element={<Navigate to="/" />} />
            </Routes>
          </RouteChanged>
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
