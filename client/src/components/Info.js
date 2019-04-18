import React from "react";
import Checkin from "./Checkin";

class Info extends React.Component {
    constructor(props) {
        super(props);
        this.handleStartClick = this.handleStartClick.bind(this);
        this.state = { gameStart: false };
    }
    handleStartClick() {
        this.setState({ gameStart: true });
    }
    // }
    render() {
        // if state gameStart is true, load Checkin component.
        const gameStart = this.state.gameStart;
        if (gameStart) {
            return <div>
                <Checkin />
            </div>
        } else {
            return <div className="card text-center">
                {/* <img className="card-img-top" src="..." alt="Location"></img> */}
                <div className="card-body">
                    <h5 className="card-title">Get going!</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <button className="btn btn-primary" onClick={this.handleStartClick}>Check In</button>
                </div>
            </div>
        }
    }

}
export default Info;