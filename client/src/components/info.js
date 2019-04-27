import React from "react";
import Checkin from "./Checkin";
import Wrapper from "./Wrapper";
import Location from "./Location.js";
import data from "../game.json";
import Timer from "./Timer";

let counter = 0;

class Info extends React.Component {
    constructor(props) {
        super(props);
        this.handleStartClick = this.handleStartClick.bind(this);
        this.state = { gameStart: false, coord: {}, game: {} };
    }

    handleStartClick() {
        this.setState({ gameStart: true });
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

        if (coord.lat !== undefined) {
            console.log(coord.lat);
        };

        if (gameStart && counter < 4) {
            return (
                <Wrapper>
                    <div>
                        {data.map((game) => {
                            const condition = (((((parseFloat(coord.lat) - parseFloat(game.location.lat)) < .01) || ((parseFloat(coord.lat) - parseFloat(game.location.lat)) > -.01))
                                ||
                                (((parseFloat(game.location.lat) - parseFloat(coord.lat)) < .001) || (parseFloat(game.location.lat) - parseFloat(coord.lat)) > -.001))
                                &&
                                ((((parseFloat(game.location.lng) - parseFloat(coord.lng)) < .001) || (parseFloat(game.location.lng) - parseFloat(coord.lng)) > -.001)
                                    ||
                                    (((parseFloat(coord.lng) - parseFloat(game.location.lng)) < .001) || (parseFloat(coord.lng) - parseFloat(game.location.lng)) > -.001)
                                ));
                            if (condition) {
                                return (
                                    console.log(game.name, game.location.lat, game.location.lng),
                                    <Location key={game.id} name={game.name} monster={game.monsterName} image={game.monsterImage} lat={game.location.lat} lng={game.location.lng}  />                                    
                                    )
                            } else {
                                counter++;
                                console.log(counter);
                            }
                            console.log("Condition met? " + condition);
                            console.log("Latitude close enough? " + (parseFloat(coord.lat) - parseFloat(game.location.lat)));

                        })
                        }
                        <Checkin passUpCoordinates={this.passUpCoordinates} />
                        <Timer />
                    </div>
                </Wrapper>
            )
        } else if (counter == 4) {
            return (
                counter = 0,
                console.log(counter),
                <Wrapper>
                <div>
                <Checkin passUpCoordinates={this.passUpCoordinates} />
                        {data.map((game) => {
                            const condition = (((((parseFloat(coord.lat) - parseFloat(game.location.lat)) < .001) || ((parseFloat(coord.lat) - parseFloat(game.location.lat)) > -.001))
                                ||
                                (((parseFloat(game.location.lat) - parseFloat(coord.lat)) < .001) || (parseFloat(game.location.lat) - parseFloat(coord.lat)) > -.001))
                                &&
                                ((((parseFloat(game.location.lng) - parseFloat(coord.lng)) < .001) || (parseFloat(game.location.lng) - parseFloat(coord.lng)) > -.001)
                                    ||
                                    (((parseFloat(coord.lng) - parseFloat(game.location.lng)) < .001) || (parseFloat(coord.lng) - parseFloat(game.location.lng)) > -.001)
                                ));
                            if (condition === false) {
                                return (
                                    console.log(game.name),
                                    <div className="card text-center">
                                    <div className="card-body"></div>
                                    < div className="card-body" >
                                        <h5 className="card-title">Keep ExpLoring!</h5>
                                        <p className="card-text">Your first task is to travel to</p>
                                        <p>{game.name}</p>
                                        <button className="btn btn-primary" onClick={this.handleStartClick}>Check In</button>
                                        {/* <Checkin passUpCoordinates={this.passUpCoordinates} /> */}
                                    </div >
                                </div >
                                    )
                            } else {
                                console.log(counter);
                            }
                        })
                    }
                    </div >
                </Wrapper >
            )
        } else {
            return (<div className="card text-center">
                <div className="card-body">
                    <h5 className="card-title">Get going!</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <button className="btn btn-primary" onClick={this.handleStartClick}>Check In</button>
                </div>
                <Timer />
            </div>)
        }
    }
};

export default Info;