import React from 'react';
import './ResumeItem.css';

const jsonEvents = require("../../data/resume.json");

class ResumeItem extends React.Component {
    constructor(props) {
        super(props);
        const index = props.index;
        const event = jsonEvents.events[index];

        const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

        const from = new Date(event.from);
        var fromDate = months[from.getMonth()] + " " + from.getFullYear();
        const to = new Date(event.to);
        var toDate;
        if(event.to.toLowerCase() === "now") {
            toDate = "Now";
        } else {
            toDate = months[to.getMonth()] + " " + to.getFullYear();
        }

        var date;
        if(fromDate === toDate) {
            date = fromDate;
        } else {
            date = fromDate + " - " + toDate;
        }

        this.state = {
            "name": event.name,
            "addition": event.addition,
            "details": event.details,
            "date": date
        }
    }

    render() {
        var details = [];
        for(var i = 0; i < this.state.details.length; i++) {
            details.push(<li key={i}>{this.state.details[i]}</li>);
        }
        return (
            <div className="resume-item">
                <p className="resume-item-date">
                    {this.state.date}
                </p>
                <p>
                    <b>
                        {this.state.name}
                    </b>
                    <span>
                        {this.state.addition !== "" ? " - " + this.state.addition : ""}
                    </span>
                </p>
                <ul>
                    {
                        this.state.details.map((detail, i) => (
                            <li key={i}>
                                {detail}
                            </li>
                        ))
                    }
                </ul>
            </div>
        )
    }
}

export default ResumeItem;