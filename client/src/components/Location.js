import React from "react";
import {poke, unapprovingGlare, fryingPan, usedSpork, yoyo} from "./Battle.js"

class Location extends React.Component {
  constructor(props) {
      super(props);
  }
  componentDidMount(){
    
      this.props.currentGame(this.props.game, this.props.name, this.props.monster, this.props.image, this.props.lat, this.props.lng, this.props.monsterHP)
    
  }
  
render() {
  
 console.log(this.props);

  return (
    <div className="battle">
      <div className="card">
        <div className="img-container">
          <img
            alt={this.props.name}
            src={this.props.image}
          />
        </div>
        <div className="content">
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <strong>Location:</strong> {this.props.name}
            </li>
            <li className="list-group-item">
              <strong>Foe:</strong> {this.props.monster}
            </li>
            <li className="list-group-item">
              <strong>Foe HP:</strong> {this.props.monsterHP}
            </li>
            <li>
            </li>
          </ul>
        </div>
      </div>
      
    {/* // begin buttons for battle  */}
    <ul>
      <li className="poke">
        <button className="btn btn-primary" onClick={poke}>Poke</button>
      </li>
        <br></br>
      <li className="glare">
        <button className="btn btn-primary" onClick={unapprovingGlare}>Unapproving Glare</button>
      </li>
        <br></br>
      <li className="fryingPan">
        <button className="btn btn-primary" onClick={fryingPan}>Frying Pan</button>
      </li>
        <br></br>
      <li className="usedSpork">
        <button className="btn btn-primary" onClick={usedSpork}>Used Spork</button>
      </li>
        <br></br>
      <li className="yoyo">
        <button className="btn btn-primary" onClick={yoyo}>Yo-yo</button>
      </li>
    </ul>
  </div>
  
  );
}
}

export default Location;