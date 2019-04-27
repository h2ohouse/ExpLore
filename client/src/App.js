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
    userId: "",
    validated: false,
    show: true,
    email: "",
    password: "",
    password2: "",
    score: ""

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
    console.log(this.state.character)
   }
   
   handleShowModal = () =>{
    console.log(this.show);
   this.setState({show: true});
  }
  render() {
    
    return (

      <Router>
        <div>
          <Jumbotron />
          <Navbar
            characterName={this.state.character}
            userScore={this.state.score}
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
              onClick={this.handleshow}
              exact path='/login'
              render={(props) =>
                <Login
                  {...props}
                  onClick={this.handleshow}
                  sendUserToApp={this.sendUserToApp}
                  handleShowModal={this.handleShowModal}
                  character={this.character}
                  validated={this.validated}
                  show={this.show}
                  email={this.email}
                  password={this.password}
                  password2={this.password2}
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


export default App;

