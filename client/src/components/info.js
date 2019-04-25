
import React from "react";
import Checkin from "./Checkin";
import Wrapper from "./Wrapper";
import Location from "./Location.js";
import data from "../game.json";

//Trying to make the coords pass up on "check in" button being pressed.  Adding 13, 
class Info extends React.Component {
    constructor(props) {
        super(props);
        this.handleStartClick = this.handleStartClick.bind(this);
        this.state = { gameStart: false, coord: {}, inArea: false };
    }
    handleStartClick() {
        this.setState({ gameStart: true });
    }

    conditionMet() {
        this.setState({inArea: true});
    }

    passUpCoordinates = (coord) => {
        this.setState({ coord: coord });
        console.log(coord.lat, coord.lng)
    }

    // }
    render() {
        // if state gameStart is true, load Checkin component.
        const gameStart = this.state.gameStart;
        const coord = this.state.coord;
        const inArea = this.state.inArea;

        if (coord.lat !== undefined) {
            console.log(coord.lat);
        };
        if (gameStart) {
            
            return (
                <Wrapper>
                    <div>
                        {data.map((game) => {
                            const condition = (
                                ((((parseFloat(coord.lat) - parseFloat(game.location.lat)) < .001) && ((parseFloat(coord.lat) - parseFloat(game.location.lat)) > -.001))
                                    ||
                                    (((parseFloat(game.location.lat) - parseFloat(coord.lat)) < .001) && (parseFloat(game.location.lat) - parseFloat(coord.lat)) > -.001))
                                &&
                                ((((parseFloat(game.location.lng) - parseFloat(coord.lng)) < .001) && (parseFloat(game.location.lng) - parseFloat(coord.lng)) > -.001)
                                    ||
                                    (((parseFloat(coord.lng) - parseFloat(game.location.lng)) < .001) && (parseFloat(coord.lng) - parseFloat(game.location.lng)) > -.001))
                            );
                            // function noneOfTheAbove(accuracy) {
                            //     return accuracy;
                            // }
                            // console.log(condition)
                            // console.log((parseFloat(coord.lat) - parseFloat(game.location.lat)));
                            // console.log(data.some(noneOfTheAbove));
                            if (condition) {
                                console.log(game.name, game.location.lat, game.location.lng);
                                return <Location key={game.id} name={game.name} monster={game.monsterName} image={game.monsterImage} lat={game.location.lat} lng={game.location.lng} />
                            } else {
                                return (
                                    <div className="card-body">
                                        <h5 className="card-title">Get going!</h5>
                                        <p className="card-text">Keep going to the next location!</p>
                                        <button className="btn btn-primary" onClick={this.handleStartClick}>Check In Again</button>
                                    </div>)
                            }
                        })}
                        }
                    </div>
                    <br></br>
                    <div>
                        <Checkin passUpCoordinates={this.passUpCoordinates} />
                    </div>
                </Wrapper>
            )
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