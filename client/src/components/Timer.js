import React from 'react';
// import ReactDOM from 'react-dom';
import Countdown from 'react-countdown-now';

// Random component
const Completionist = () => <span>You are good to go!</span>;

// Renderer callback with condition
const renderer = ({ hours, minutes, seconds, completed }) => {
    if (completed) {
        // Render a completed state
        return <Completionist />;
    } else {
        // Render a countdown
        return <span>{hours}:{minutes}:{seconds}</span>;
    }
};

function Timer() {
    return (
        <Countdown
            date={Date.now() + 525600000}
            renderer={renderer}
        />
    )

};

export default Timer;