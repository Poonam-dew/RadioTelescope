import React, { useState } from 'react';
import '../Styles/EventPage.css';
import radioLogo from '../Assets/radioLogo.png';
import rtpB from '../Assets/rtpB.png';
import StarryBackground from '../Pages/StarryBackground.js';

const events = [
    {
        date: "",
        title: "Techzibition in Cognizance ",
        description: "We have displayed our project in Techzibition – the technical exhibition of IIT Roorkee’s annual technical festival Cognizance – for two consecutive years: 2023 and 2024. Each time we received a positive response and the attendees were very welcoming towards our efforts. ",
        image: radioLogo
    },
    {
        date: "",
        title: "KLP Outreach Event ",
        description: "Our team conducted an outreach event at K L Polytechnic Institute, Roorkee on 13th March 2024. It aimed at connecting masses in other technical instituted with people working in the field of radio astronomy. Together we made the event interactive with the participants taking away key insights. ",
        image: rtpB
    },
    
];

const EventPage = () => {
    return (
        <div className="event-page">
            <StarryBackground/>
            {events.map((event, index) => (
                <EventCard key={index} event={event} />
            ))}
        </div>
    );
};

const EventCard = ({ event }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleDetails = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <div className="event-card">
             
            <img src={event.image} alt={event.title} className="event-image" />
            <div className="event-content">
                <p className="event-date">{event.date}</p>
                <h3 className="event-title">{event.title}</h3>
                {isExpanded && <p className="event-description">{event.description}</p>}
            </div>
            <button className="toggle-button" onClick={toggleDetails}>
                <span>{isExpanded ? '▲' : '   Read More ▼'}</span>
            </button>
        </div>
    );
};

export default EventPage;
