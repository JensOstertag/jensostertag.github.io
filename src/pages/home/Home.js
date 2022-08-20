import React from 'react';
// import './Home.css';

import HomeSection from "../../components/section-home/HomeSection";
import AboutSection from "../../components/section-about/AboutSection";
import ProjectsSection from '../../components/section-projects/ProjectsSection';
import TechnologiesSection from '../../components/section-technologies/TechnologiesSection';
import ContactSection from '../../components/section-contact/ContactSection';

class Home extends React.Component {
  render() {
    return (
      <div>
        <HomeSection />
        <AboutSection />
        <ProjectsSection preview="1"/>
        <TechnologiesSection />
        <ContactSection />
      </div>
    );
  }
}

export default Home;
