import React from 'react';
import {Link} from 'react-router-dom';
import './ProjectItem.css';

class ProjectItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            project: props.project,
            projectImage: process.env.PUBLIC_URL + "/img/projects/" + props.referenceName.toLowerCase() + ".jpg",
            projectReference: process.env.PUBLIC_URL + "/projects/" + props.referenceName.toLowerCase()
        }
    }

    render() {
        return (
            <div className="project-item viewport-animation viewport-top">
                <img src={this.state.projectImage} alt="Project" />
                <div className="project-item-content-wrapper">
                    <p>
                        {this.state.project}
                    </p>
                    <Link to={this.state.projectReference}><button type="button" name="button"><p>Learn more</p></button></Link>
                </div>
            </div>
        );
    }
}

export default ProjectItem;