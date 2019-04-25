import React from "react";

function Location(props) {
  return (
    <div className="card">
      <div className="img-container">
        <img
          alt={props.name}
          src={props.image}
        />
      </div>
      <div className="content">
        <ul>
          <li>
            <strong>Location:</strong> {props.name}
          </li>
          <li>
            <strong>Foe:</strong> {props.monster}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Location;