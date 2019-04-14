import React from "react";

function Navbar() {
    return(
    <nav className="navbar navbar-light bg-light">
        <span className="navbar-brand mb-0 h1">Logo</span>
        <span className="navbar-brand mb-0 h1">Character:</span>
        <span className="navbar-brand mb-0 h1">Score:</span>

        <button className="btn btn-primary btn-md justify-content-md-end">Login</button>

        <button className="btn btn-primary btn-md justify-content-md-end">Logout</button>
    </nav>
    )
}
export default Navbar;