import React from 'react';
import './Project.css'

const jsonProjects = require("../../data/projects.json");

class Project extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      "index": props.index,
      "project": jsonProjects.projects[props.index].link,
      "name": jsonProjects.projects[props.index].name,
      "technologies": jsonProjects.projects[props.index].technologies,
      "description": jsonProjects.projects[props.index].description,
      "developmentTimespan": jsonProjects.projects[props.index].developmentTimespan
    };
  }

  render() {
    var technologies = [];
    technologies.push(<span key={-1}>Made with </span>);
    for(var i = 0; i < this.state.technologies.length; i++) {
      technologies.push(this.state.technologies[i]);
      if(i !== this.state.technologies.length - 1)
        if(i !== this.state.technologies.length - 2)
          technologies.push(<span key={i}>, </span>);
        else
          technologies.push(<span key={i}> and </span>);
    }

    return (
      <section id="project">
        <h1 className="viewport-animation viewport-top">
          {this.state.name}
        </h1>
        <p className="project-technology viewport-animation viewport-top">
          {technologies}
        </p>
        <p dangerouslySetInnerHTML={{__html: this.state.description}} className="viewport-animation viewport-bottom" />
        <p className="viewport-animation viewport-bottom">
          {this.state.developmentTimespan}
        </p>
      </section>
    );
  }
}

export default Project;
