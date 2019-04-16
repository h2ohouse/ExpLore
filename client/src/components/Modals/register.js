import React from "react";
import API from "../../utils/API"
// import Form from "react-bootstrap/Form";
import { Col, Form, Modal, Button } from "react-bootstrap";


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
    console.log("i clicked", event);
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    this.setState({ validated: true });
    API.registerUser({
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2
      
    })
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
            <Button type="submit" onClick={this.handleClose}>Submit form</Button>
            
          </Form>
        </Modal>
      </div>
    );
  }
}

export default Register;
