import React from 'react';
import './TechnologiesList.css';

import TechnologyItem from '../technology-item/TechnologyItem';

class ProjectsList extends React.Component {
    render() {
        return (
            <div className="technologies-list">
                <TechnologyItem technology="Java" className="viewport-animation viewport-top" />
                <TechnologyItem technology="C++" className="viewport-animation viewport-top" />
                <TechnologyItem technology="Arduino" className="viewport-animation viewport-top" />
                <TechnologyItem technology="HTML" className="viewport-animation viewport-top" />
                <TechnologyItem technology="CSS" className="viewport-animation viewport-top" />
                <TechnologyItem technology="BootStrap" className="viewport-animation viewport-top" />
                <TechnologyItem technology="JavaScript" className="viewport-animation viewport-top" />
                <TechnologyItem technology="PHP" className="viewport-animation viewport-top" />
                <TechnologyItem technology="MySQL" className="viewport-animation viewport-top" />
                <TechnologyItem technology="TensorFlow" className="viewport-animation viewport-top" />
                <TechnologyItem technology="Python" className="viewport-animation viewport-top" />
                <TechnologyItem technology="LaTeX" className="viewport-animation viewport-top" />
                <TechnologyItem technology="Git" className="viewport-animation viewport-top" />
            </div>
        );
    }
}

export default ProjectsList;