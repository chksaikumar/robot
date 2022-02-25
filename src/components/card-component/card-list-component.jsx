import React from "react";
import Card from "../card/card-component";
import "./card-list.styles.css";

const CardList = (props) => {
  return (
    <div className="card-list">
      {props.monisters.map((monister) => (
        <Card key={monister.id} monister={monister} />
      ))}
    </div>
  );
};

export default CardList;
