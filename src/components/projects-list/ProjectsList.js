import React from 'react';
import './ProjectsList.css';

import ProjectItem from '../project-item/ProjectItem';

class ProjectsList extends React.Component {
    render() {
        return (
            <div className="projects-list">
                <ProjectItem project="Convolutional Neural Network" referenceName="cnn" />
                <ProjectItem project="3D Printer" referenceName="3dprinter" />
                <ProjectItem project="CoronaApp" referenceName="coronaapp" />
            </div>
        );
    }
}

export default ProjectsList;