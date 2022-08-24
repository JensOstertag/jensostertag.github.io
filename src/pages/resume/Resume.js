import React from 'react';
import './Resume.css';

import ResumeItem from '../../components/resume-item/ResumeItem';

const jsonEvents = require("../../data/resume.json");

function sortEvents(a, b) {
    if(a.to === b.to && a.to === "now") return 0;
    if(a.to === "now") return - Math.pow(10, 1000);
    if(b.to === "now") return Math.pow(10, 1000);
    return new Date(b.to).getTime() - new Date(a.to).getTime();
}

class Resume extends React.Component {
    render() {
        var events = jsonEvents.events;
        var educationEvents = [];
        var employmentEvents = [];
        var achievmentEvents = [];
        var participationEvents = [];

        var i;
        for(i = 0; i < events.length; i++) {
            switch(events[i].type.toLowerCase()) {
                case "education": educationEvents.push(events[i]);break;
                case "employment": employmentEvents.push(events[i]); break;
                case "achievment": achievmentEvents.push(events[i]); break;
                case "participation": participationEvents.push(events[i]); break;
                default: ;
            }
        }

        educationEvents.sort(sortEvents);
        employmentEvents.sort(sortEvents);
        achievmentEvents.sort(sortEvents);
        participationEvents.sort(sortEvents);

        var education = [];
        var employment = [];
        var achievment = [];
        var participation = [];

        for(i = 0; i < educationEvents.length; i++)
            education.push(<ResumeItem key={"a" + i} index={events.indexOf(educationEvents[i])} />);
        for(i = 0; i < employmentEvents.length; i++)
            employment.push(<ResumeItem key={"b" + i}index={events.indexOf(employmentEvents[i])} />);
        for(i = 0; i < achievmentEvents.length; i++)
            achievment.push(<ResumeItem key={"c" + i}index={events.indexOf(achievmentEvents[i])} />);
        for(i = 0; i < participationEvents.length; i++)
            participation.push(<ResumeItem key={"d" + i} index={events.indexOf(participationEvents[i])} />);

        return (
            <section id="resume">
                <h1>Résumé</h1>
                <h2>Education</h2>
                {education}
                <h2>Work Experience</h2>
                {employment}
                <h2>Achievments and Certificates</h2>
                {achievment}
                <h2>Extra Activities</h2>
                {participation}
            </section>
        );
    }
}

export default Resume;