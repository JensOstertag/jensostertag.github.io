import React from 'react';
import './HomeSection.css';

class HomeSection extends React.Component {
    render() {
        return (
            <section id="home">
                <h1 className="viewport-animation viewport-top">
                    Jens Ostertag
                </h1>
                <p className="viewport-animation viewport-bottom">
                    A Full Stack Software Engineer and Computer Scientist
                </p>
            </section>
        )
    }
}

export default HomeSection;