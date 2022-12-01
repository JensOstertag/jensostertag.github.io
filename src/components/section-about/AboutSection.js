import React from 'react';
import { Link } from 'react-router-dom';
import './AboutSection.css';

class AboutSection extends React.Component {
    render() {
        return (
            <section id="about">
                <div className="wrapper">
                    <h1 className="viewport-animation viewport-left">
                        About Me
                    </h1>
                    <p className="viewport-animation viewport-left">
                        Hey, I'm Jens from Heidenheim (Germany). I'm a Full Stack Developer regarding Web and Application Development - but I also enjoy physical Computing.
                    </p>
                    <p className="viewport-animation viewport-left">
                        Currently, I'm enrolled at Ulm University to study Software Engineering.
                    </p>
                    <Link to="/resume"><button><p>View Résumé</p></button></Link>
                </div>
            </section>
        );
    }
}

export default AboutSection;