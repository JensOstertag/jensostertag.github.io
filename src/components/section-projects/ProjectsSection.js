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
        var button = [];
        if(this.state.preview === "1")
            button.push(<Link to="/projects" key="0"><button><p>See all Projects</p></button></Link>);

        return (
            <section id="projects">
                <h1 className="viewport-animation viewport-top">
                    Projects
                </h1>
                <ProjectsList preview={this.state.preview} />
                {button}                
            </section>
        );
    }
}

export default ProjectsSection;