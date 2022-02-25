import React from "react";
import "./card.styles.css";

const Card = (props) => {
  return (
    <div className="card-container">
      <img
        alt="monister"
        src={`https://robohash.org/${props.monister.id}set=set4`}
        height="180"
        width="180"
      />
      <h2>{props.monister.name}</h2>
      <p>{props.monister.email}</p>
    </div>
  );
};

export default Card;
