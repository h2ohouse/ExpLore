import React from "react";
import '../App.css';
import Sword from './Images/sword.png'

function Jumbotron() {
    return <div className="jumbotron">
    <img className="logo" src={Sword} width='50px' height="50px" style={{borderStyle: 'solid', borderColor: '#8E8269'}}/>
        <h1 className="jumbo-text">
         xpLore
        </h1>
    </div>
}

export default Jumbotron;