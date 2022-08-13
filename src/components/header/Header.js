import React from 'react';
import {Link} from 'react-router-dom';

import * as Sidebar from './sidebar.js';

class Header extends React.Component {
    render() {
        return (
            <nav>
                <div className="logo">
                    <a href={process.env.PUBLIC_URL}>
                        Jens Ostertag
                    </a>
                </div>
                <ul className="nav-links nav-default">
                    <li><Link to={process.env.PUBLIC_URL + "/"}><span>Home</span></Link></li>
                    <hr />
                    <li><Link to={process.env.PUBLIC_URL + "/projects"}><span>Projects</span></Link></li>
                    <hr />
                    <li><Link to={process.env.PUBLIC_URL + "/contact"}><span>Contact</span></Link></li>
                    <hr />
                </ul>

                <div className="burger" onClick={Sidebar.toggleSidebar}>
                    <div className="l1"></div>
                    <div className="l2"></div>
                    <div className="l3"></div>
                </div>

                <div className="alpha alpha-default"></div>
            </nav>
        );
    }
}

export default Header;