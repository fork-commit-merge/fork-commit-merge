import React from "react";

const Card = (props) => {
    return (
        <div className="tc ma2 pa3 dib br3 bg-light-green grow bw2 shadow-5">
            <img src={`https://robohash.org/${props.id}?200x200`} alt="pic"></img>
            <h2>{props.name}</h2>
            <p>{props.email}</p>
        </div>
    )
}

export default Card;