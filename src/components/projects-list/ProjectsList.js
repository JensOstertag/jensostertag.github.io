import React from 'react';
import './ProjectsList.css';

import ProjectItem from '../project-item/ProjectItem';

const jsonProjects = require("../../data/projects.json");

class ProjectsList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            "preview": props.preview
        };
    }

    render() {
        var projects = jsonProjects.projects;

        return (
            <div className="projects-list">
                {
                    projects.map((project, i) => (
                            <ProjectItem key={i} project={project.name} referenceName={project.link} preview={project.alwaysshown === "yes" ? "0" : this.state.preview} />
                        )
                    )
                }
            </div>
        );
    }
}

export default ProjectsList;