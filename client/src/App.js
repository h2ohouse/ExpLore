import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import './App.css';
import Register from './components/Modals/register';
import Login from './components/Modals/login';
import Jumbotron from './components/Jumbotron';
import Navbar from './components/Navbar';
import Info from './components/Info';
import Timer from './components/Timer'
import API from "./utils/API"
class App extends Component {
  state ={
    character: "",
    userId: ""
  }
  
   
   sendUserToApp= (id) =>{
     this.setState({userId: id});
     const that = this;
     console.log(id);
     API.CharacterName(id).then(function(response){
       console.log(response.data.name)
       let character = response.data.name;
      that.setState({character: character});
    })
   }
  render() {
    return (

      <Router>
        <div>
          <Jumbotron />
          <Navbar
            characterName={this.state.character}
            />
          <Switch >
            <Route 
              exact path="/register" 
              render={(props) =>
                <Register
                  {...props}
                  sendUserToApp={this.sendUserToApp}
                />
              }
               />
              
            <Route
              exact path='/login'
              render={(props) =>
                <Login
                  {...props}
                  sendUserToApp={this.sendUserToApp}
                />
              }
            />
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
