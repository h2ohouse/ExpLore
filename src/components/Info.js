import React from "react";
import Checkin from "./Checkin";

class Info extends React.Component {
    constructor(props) {
        super(props);
        this.handleStartClick = this.handleStartClick.bind(this);
        this.setState({ gameStart: false });
    }
    handleStartClick() {
        this.setState({ gameStart: true });
    }
    // }
    render() {
        // function Info(props) {
        const gameStart = this.state.gameStart
        if (gameStart) {
            return <div>
                <Checkin />
            </div>
        }
        return <div className="card text-center">
            <img className="card-img-top" src="..." alt="Location"></img>
            <div className="card-body">
                <h5 className="card-title">Get going!</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <button className="btn btn-primary" onClick={props.onClick}>Check In</button>
            </div>
        </div>
    }

}
export default Info;