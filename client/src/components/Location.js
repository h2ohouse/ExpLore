import React from "react";
import Battle from "./Battle.js"

function Location(props) {
  return (
    <div class="battle">
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
      
    // begin buttons for battle 
    <ul>
      <li className="poke">
        <button className="btn btn-primary" onClick={props.poke}>Poke</button>
      </li>
        <br></br>
      <li className="glare">
        <button className="btn btn-primary" onClick={props.unapprovingGlare}>Unapproving Glare</button>
      </li>
        <br></br>
      <li className="fryingPan">
        <button className="btn btn-primary" onClick={props.fryingPan}>Frying Pan</button>
      </li>
        <br></br>
      <li className="usedSpork">
        <button className="btn btn-primary" onClick={props.usedSpork}>Used Spork</button>
      </li>
        <br></br>
      <li className="yoyo">
        <button className="btn btn-primary" onClick={props.yoyo}>Yo-yo</button>
      </li>
    </ul>
  </div>
  
  );
}

export default Location;