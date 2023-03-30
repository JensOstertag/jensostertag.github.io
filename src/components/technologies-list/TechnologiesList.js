import React from 'react';
import './TechnologiesList.css';

import TechnologyItem from '../technology-item/TechnologyItem';

class ProjectsList extends React.Component {
    render() {
        return (
            <div className="technologies-list">
                <TechnologyItem technology="Java" />
                <TechnologyItem technology="C++" />
                <TechnologyItem technology="Arduino" />
                <TechnologyItem technology="HTML" />
                <TechnologyItem technology="CSS" />
                <TechnologyItem technology="BootStrap" />
                <TechnologyItem technology="JavaScript" />
                <TechnologyItem technology="React" />
                <TechnologyItem technology="PHP" />
                <TechnologyItem technology="MySQL" />
                <TechnologyItem technology="WordPress" />
                <TechnologyItem technology="TensorFlow" />
                <TechnologyItem technology="Python" />
                <TechnologyItem technology="LaTeX" />
                <TechnologyItem technology="Git" />
            </div>
        );
    }
}

export default ProjectsList;