import React, { Component } from "react";

function Name(props) {
  return (
    <div>
      <h2>{props.character.name}</h2>
      <ul>
        <li><span className="label">Gender:</span> {props.character.gender}</li>
        <li><span className="label">Age at Battle of Yavin:</span> {props.character.birth_year.replace('BBY','')}</li>
        <li><span className="label">Hair color:</span> {props.character.hair_color}</li>
        <li><span className="label">Height:</span> {props.character.height}cm</li>
        <li><span className="label">Weight:</span> {props.character.mass}kg</li>
      </ul>
    </div>
  );
}

export default Name;
