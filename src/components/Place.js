import React from "react";
import tick from "./tick.png";

export default function Place(props) {

    const { info } = props;

    return (
        <div className="container">

            <img src={info.imageUrl} alt="place-pic" className="place-pic" />

            <div>
                <div className="place-location">
                    <img src={tick} alt="tick-icon" />
                    <p className="place-country">{info.location}</p>
                    <a href={info.googleMapsUrl} target="_blank" rel="noreferrer">View on Google Maps</a>
                </div>
                <h2 className="place-title">{info.title}</h2>
                <div className="place-dates">
                    <span>{info.startDate} - </span>
                    <span>{info.endDate}</span>
                </div>
                <div className="place-desc">{info.description}</div>
            </div>
        </div>

    )

}

