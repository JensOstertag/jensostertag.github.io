import React from 'react';
import './TechnologiesSection.css';

import TechnologiesList from '../technologies-list/TechnologiesList';

class TechnologiesSection extends React.Component {
    render() {
        return (
            <section id="technologies">
                <div className="wrapper">
                    <h1 className="viewport-animation viewport-slow viewport-left">
                        Technologies
                    </h1>
                    <TechnologiesList />
                </div>
            </section>
        );
    }
}

export default TechnologiesSection;