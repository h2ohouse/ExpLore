import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import './App.css';
import Register from './components/Modals/register';
import Login from './components/Modals/login';
import Jumbotron from './components/Jumbotron';
import Navbar from './components/Navbar';
import Info from './components/Info';
import Timer from './components/Timer';

class App extends Component {
  render() {
    return (

      <Router>
        <div>
          <Jumbotron />
          <Navbar />
          <Switch>
            <Route exact path="/register" component={Register} />

            <Route exact path="/login" component={Login} />
          </Switch>
          <Info />
          <Timer />
        </div>

      </Router>

    )
  }
}
// The following code is commented out but is the default that comes with the boilerplate 
//class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//         {/* if you add line 11 back it will break */}
//           {/* <img src={logo} className="App-logo" alt="logo" /> */}
//           <p>
//             Edit <code>src/App.js</code> and save to reload.
//           </p>
//           <a
//             className="App-link"
//             href="https://reactjs.org"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Learn React
//           </a>
//         </header>
//       </div>
//     );
//   }
// }

export default App;

