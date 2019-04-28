import React from "react";
import '../App.css';
import Sword from './Images/sword.png'

function Jumbotron() {
    return <div className="jumbotron">
        <h1 className="jumbo-text">
        <img className="logo" src={Sword} width="10%" height="auto" style={{borderStyle: 'solid', borderColor: '#8E8269'}}/>    
         xpLore
        </h1>
    </div>
}

export default Jumbotron;