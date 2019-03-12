import React, { Component } from "react";
import Name from "./Name";

function NameList(props) {
  return (
      <div className="name-list">
        {props.characters.map(character => (
          <Name character={character} />
        ))}
      </div>
  );
}

export default NameList;
