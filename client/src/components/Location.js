import React from "react";

function Location(props) {
  return (
    <div className="card">
      <div className="img-container">
        <img
          alt={props.monsterName}
          src={props.monsterImage}
        />
      </div>
      <div className="content">
        <ul>
          <li>
            <strong>Location:</strong> {props.name};
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Location;