import React from 'react';
import './ProjectsList.css';

import ProjectItem from '../project-item/ProjectItem';

class ProjectsList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            "preview": props.preview
        };
    }
    render() {
        return (
            <div className="projects-list">
                <ProjectItem project="Convolutional Neural Network" referenceName="cnn" preview="0" />
                <ProjectItem project="3D Printer" referenceName="3dprinter" preview="0" />
                <ProjectItem project="CoronaApp" referenceName="coronaapp" preview="0" />
                <ProjectItem project="IoT-capable Weatherstation" referenceName="iot-weatherstation" preview={this.state.preview} />
            </div>
        );
    }
}

export default ProjectsList;