import React from "react";
import { Link } from "react-router-dom";
import { Col, Form, Modal, Button } from "react-bootstrap";



var styles = {
  margin: "10px",
  
};
class Login extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.state = {
      show: true,
      validated: false,
      
    };
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }

  handleSubmit(event) {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    this.setState({ validated: true });
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
              <Form.Group as={Col} md="4" controlId="email">
                <Form.Label>Email Address</Form.Label>
                <Form.Control required type="email" placeholder="Email" />
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
                <Form.Control type="text" placeholder="Password" required />
                <Form.Control.Feedback type="invalid" controlId="passwordCheck">
                  invalid Password
                </Form.Control.Feedback>
              </Form.Group>
            </Form.Row>
            <Button type="submit">Login</Button>
            <Button>
            <Link
            to="/register" style={this.style} className={window.location.pathname === "/register" ? "nav-link active" : "nav-link"} 
            >
            New User Registration
            </Link>
            </Button>
          </Form>
        </Modal>
      </div>
    );
  }
  
}

export default Login;