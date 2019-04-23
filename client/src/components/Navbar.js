import React from "react";
import { Link } from "react-router-dom";
import API from "../utils/API"

function Navbar(props) {
    console.log("navbar", props);

    return(
    <nav className="navbar navbar-light bg-light">
        <span className="navbar-brand mb-0 h1">Logo</span>
        <span className="navbar-brand mb-0 h1">Character: {props.characterName}</span>
        <span className="navbar-brand mb-0 h1">Score:</span>
        <button className="btn btn-primary btn-md justify-content-md-end">
            <Link 
            to="/login" 
            >
            Login
            </Link>
        </button>
        <button className="btn btn-primary btn-md justify-content-md-end">Logout</button>
    </nav>
    )
}
export default Navbar;