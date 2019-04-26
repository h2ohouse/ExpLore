import React from "react";
import { Link, NavLink } from "react-router-dom";
import API from "../utils/API";
import Sword from "./Images/sword.png";
import "../App.css";

function Navbar(props) {
  console.log("navbar", props);
  // userId(userId){
  //     this.setState({
  //         userId: userId
  //     })

  // }
  // logoutUser = (id) =>{
  //   console.log(id)
  // }
  return (
    <nav className="navbar navbar-light bg-light nav-bar">
      {/* <div className='logo'>
        <img src={Sword} width='40px' height="40px"/>
        </div> */}
      <div className="row">
        <div className="col-xs-6 char-score">
          <span className="navbar-brand mb-0 h2">
            Character: {props.characterName}
          </span>
          <span className="navbar-brand mb-0 h2">Score:</span>
        </div>
        <div className="col-xs-6 login-out-btns">
        <button className="btn btn-primary btn-md ">
        <NavLink to="/login" activeStyle={{ color: "white" }}>
          Login
        </NavLink>
      </button>
      <button className="btn btn-primary btn-md ">
        Logout
      </button>
        </div>
      </div>

    </nav>
  );
}
export default Navbar;
