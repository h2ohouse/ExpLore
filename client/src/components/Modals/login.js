import React from "react";
import { Col, Form, Modal, Button, ButtonToolbar } from "react-bootstrap";
import API from "../../utils/API";

class Login extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.state = {
      show: true,
      validated: false,
      email: "",
      password: "",
      password2: "",
      userId: ""
    };
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow(){
    this.setState({ show: true });
  }

  handleSubmit(event) {
    event.preventDefault();
    const that = this;
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      // event.preventDefault();
      event.stopPropagation();
    }
    this.setState({ validated: true });
    API.loginUser({
      email: this.state.email,
      password: this.state.password,
      userId: this.state.userid
    }).then(function (user) {
      console.log(user.data.userId);
      that.setState({ userId: user.data.userId });
      that.props.sendUserToApp(user.data.userId);
      that.handleClose();
    });
  }

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

{/* <Button variant="primary" onClick={this.handleShow}>
      Launch demo modal
    </Button> */}
        <Modal
          size="lg"
          show={this.state.show}
          animation={false} 
          onHide={this.handleClose}
        >
          <div
            className="form-modal"
            style={{ padding: "10px", fontFamily: "Press Start 2P" }}
          >
            <Form
              noValidate
              validated={validated}
              onSubmit={e => this.handleSubmit(e)}
            >
              <div style={{ fontFamily: "Press Start 2P" }}>
                <Form.Row style={{ fontFamily: "Press Start 2P" }}>
                  <Form.Group as={Col} md="4" controlId="email">
                    <Form.Label className="FormText">Email Address</Form.Label>
                    <Form.Control
                      required
                      type="email"
                      placeholder="Email"
                      name="email"
                      value={this.state.email}
                      onChange={this.handleInputChanges}
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
              </div>
              <Form.Row>
                <Form.Group as={Col} md="6" controlId="password">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Password"
                    required
                    name="password"
                    value={this.state.password}
                    onChange={this.handleInputChanges}
                  />
                  <Form.Control.Feedback
                    type="invalid"
                    controlId="passwordCheck"
                  >
                    invalid Password
                  </Form.Control.Feedback>
                </Form.Group>
              </Form.Row>
              <ButtonToolbar>
                <Button type="submit">Login</Button>
                <Button
                  type="submit"
                  href="/register"
                  className={
                    window.location.pathname === "/register"
                      ? "nav-link active"
                      : "nav-link"
                  }
                >
                  New User Registration
                </Button>
              </ButtonToolbar>
            </Form>
          </div>
        </Modal>
      </div>
    );
  }
}

export default Login;
