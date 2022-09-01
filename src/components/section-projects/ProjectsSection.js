import React from 'react';
import './ProjectsSection.css';

import ProjectsList from '../projects-list/ProjectsList';
import { Link } from 'react-router-dom';

class ProjectsSection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            "preview": props.preview
        };
    }

    render() {
        return (
            <section id="projects">
                <h1 className="viewport-animation viewport-top">
                    Projects
                </h1>
                <ProjectsList preview={this.state.preview} />
                {
                    this.state.preview === "1" ? <Link to="/projects"><button><p>See all Projects</p></button></Link> : < > </>
                }                
            </section>
        );
    }
}

export default ProjectsSection;