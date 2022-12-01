import React from 'react';
import './TechnologyItem.css';

class TechnologyItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            "technology": props.technology,
            "technologyImage": process.env.PUBLIC_URL + "/img/ico/tech/" + props.technology.toLowerCase() + ".svg"
        }
    }

    render() {
        return (
            <div className="technology-item viewport-animation viewport-slow viewport-left">
                <img src={this.state.technologyImage} alt="Technology" />
                <div className="technology-item-content-wrapper">
                    <p>
                        {this.state.technology}
                    </p>
                </div>
            </div>
        );
    }
}

export default TechnologyItem;