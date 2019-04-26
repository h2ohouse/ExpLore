import React from "react";
import API from "../../utils/API";
// import Form from "react-bootstrap/Form";

import { Col, Form, Modal, Button } from "react-bootstrap";
import { Route } from "react-router-dom";
import Login from "./login";



// const {Formik} = formik;
var styles = {
  margin: "10px"
};
class Register extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.state = {
      show: true,
      validated: false,
      name: "",
      email: "",
      password: "",
      password2: "",


    };
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }

  handleSubmit = event => {
    var that = this;
    console.log("i clicked", event);
    const form = event.currentTarget;
    event.preventDefault();
    if (form.checkValidity() === false) {
      event.stopPropagation();
    }
    this.setState({ validated: true });
    API.registerUser({
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2
      
    }).then(function(data){
      console.log(data);
      that.handleClose();
    });
  }

  handleInputChanges = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });

  }
  render() {
    const { validated } = this.state;
    return (
      <div style={styles}>

        <Modal
          size="lg"
          show={this.state.show}
          animation={false}
          onHide={this.handleClose}
        >
          <Form
            noValidate
            validated={validated}
            onSubmit={e => this.handleSubmit(e)}
          >
            <Form.Row>
              <Form.Group as={Col} md="4" controlId="characterName">
                <Form.Label>Character Name</Form.Label>
                <Form.Control
                  required
                  type="text"
                  onChange={this.handleInputChanges}
                  placeholder="Character Name"
                  name="name"
                  value={this.state.name}
                />
                <Form.Control.Feedback
                  type="invalid"
                  controlId="characterNameCheck"
                >
                  Character Name Required
                </Form.Control.Feedback>
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="4" controlId="email">
                <Form.Label>Email Address</Form.Label>
                <Form.Control 
                  required 
                  type="email"
                  placeholder="Email"
                  onChange={this.handleInputChanges}
                  name="email"
                  value={this.state.email}
                  />
                <Form.Control.Feedback
                  type="invalid"
                  controlId="emailValidation"
                >
                  Email Address Required
                </Form.Control.Feedback>
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col} md="6" controlId="password">
                <Form.Label>Password</Form.Label>
                <Form.Control 
                  type="text"
                  placeholder="Password" 
                  required
                  onChange={this.handleInputChanges}
                  name="password"
                  value={this.state.password}
                   />
                <Form.Control.Feedback type="invalid" controlId="passwordCheck">
                  Must be over 6 characters long
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="6" controlId="password2">
                <Form.Label>Re-enter Password</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Re-Enter Password"
                  required
                  onChange={this.handleInputChanges}
                  name="password2"
                  value={this.state.password2}
                />
                <Form.Control.Feedback type="invalid" controlId="passwordCheck">
                  Must be over 6 characters long
                </Form.Control.Feedback>
              </Form.Group>
            </Form.Row>
            <Button type="submit" >Submit form</Button>
            
          </Form>
        </Modal>
      </div>
    );
  }
}

export default Register;

// const {Formik} = formik;

class Register extends React.Component {
  constructor(props, context) {
    super(props, context);
    
    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.state = {
      show: true,
      validated: false,
      name: "",
      email: "",
      password: "",
      password2: "",
      userId: ""
    };
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }

  routeChange(){
    let path = "/login";
    this.props.history.push(path)
  }

  handleSubmit = event => {
    var that = this;
    const form = event.currentTarget;
    event.preventDefault();
    if (form.checkValidity() === false) {
      event.stopPropagation();
    }
    this.setState({ validated: true });
    API.registerUser({
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2
    }).then(function (user) {
      //set returned userId from API call
      that.setState({ userId: user.data.userId });
      //send the userID up to the APP.js Parent Page
      that.props.sendUserToApp(user.data.userId);

      //
      //that.handleClose();
      that.routeChange();
    });

    console.log(this.state.userId);
  };

  handleInputChanges = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  render() {
    const { validated } = this.state;
    return (
      <div style={{ padding: "10px" }}>
        <Modal
          size="lg"
          show={this.state.show}
          animation={false}
          onHide={this.handleClose}
        >
          <div
            className="form-modal"
            style={{
              padding: "10px",
              fontFamily: "Press Start 2P"
            }}
          >
            <Form
              noValidate
              validated={validated}
              onSubmit={e => this.handleSubmit(e)}
            >
              <Form.Row>
                <Form.Group as={Col} md="4" controlId="characterName">
                  <Form.Label>Character Name</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    onChange={this.handleInputChanges}
                    placeholder="Character Name"
                    name="name"
                    value={this.state.name}
                  />
                  <Form.Control.Feedback
                    type="invalid"
                    controlId="characterNameCheck"
                  >
                    Character Name Required
                  </Form.Control.Feedback>
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="4" controlId="email">
                  <Form.Label>Email Address</Form.Label>
                  <Form.Control
                    required
                    type="email"
                    placeholder="Email"
                    onChange={this.handleInputChanges}
                    name="email"
                    value={this.state.email}
                  />
                  <Form.Control.Feedback
                    type="invalid"
                    controlId="emailValidation"
                  >
                    Email Address Required
                  </Form.Control.Feedback>
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
              </Form.Row>
              <Form.Row>
                <Form.Group as={Col} md="6" controlId="password">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Password"
                    required
                    onChange={this.handleInputChanges}
                    name="password"
                    value={this.state.password}
                  />
                  <Form.Control.Feedback
                    type="invalid"
                    controlId="passwordCheck"
                  >
                    Must be over 6 characters long
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="6" controlId="password2">
                  <Form.Label>Re-enter Password</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Re-Enter Password"
                    required
                    onChange={this.handleInputChanges}
                    name="password2"
                    value={this.state.password2}
                  />
                  <Form.Control.Feedback
                    type="invalid"
                    controlId="passwordCheck"
                  >
                    Must be over 6 characters long
                  </Form.Control.Feedback>
                </Form.Group>
              </Form.Row>
             
              <Button type="submit"
              >Submit form</Button>
              
            </Form>
          </div>
        </Modal>
      </div>
    );
  }
}

export default Register;
