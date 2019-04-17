import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
// import Form from "react-bootstrap/Form";
import { Col, Form } from "react-bootstrap";

// import ModalHeader from 'react-bootstrap/ModalHeader';
// import ModalTitle from 'react-bootstrap/ModalTitle';
// import ModalFooter from 'react-bootstrap/ModalFooter';
// import ModalBody from 'react-bootstrap/ModalBody'


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
      show: false,
      validated: false
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
        <Button variant="primary" onClick={this.handleShow}>
          Launch demo modal
        </Button>
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
                  placeholder="Character Name"
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
                  Must be over 6 characters long
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="6" controlId="password2">
                <Form.Label>Re-enter Password</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Re-Enter Password"
                  required
                />
                <Form.Control.Feedback type="invalid" controlId="passwordCheck">
                  Must be over 6 characters long
                </Form.Control.Feedback>
              </Form.Group>
            </Form.Row>
            <Button type="submit">Submit form</Button>
            <Button type="submit">Already Registered</Button>
          </Form>
        </Modal>
      </div>
    );
  }
  // render() {
  //   return (
  //     <div>
  //       <Button variant="primary" onClick={this.handleShow}>
  //         Launch demo modal
  //         </Button>
  //       <Modal size="lg" show={this.state.show} animation={false} onHide={this.handleClose}>
  //         <Modal.Header closeButton>
  //           <Modal.Title>Modal heading</Modal.Title>
  //         </Modal.Header>
  //         <Modal.Body>
  //           <Form>
  //             <Form.Group controlId="formGroupUserName">
  //               <Form.Label>Character's Name</Form.Label>
  //               <Form.Control type="username" placeholder="Sir Greatness" />
  //             </Form.Group>
  //             <Form.Group controlId="formGroupEmail">
  //               <Form.Label>Email address</Form.Label>
  //               <Form.Control type="email" placeholder="Enter email" />
  //             </Form.Group>
  //             <Form.Group controlId="formGroupPassword">
  //               <Form.Label>Password</Form.Label>
  //               <Form.Control type="password" placeholder="Password" />
  //             </Form.Group>
  //             <Form.Group controlId="formGroupPassword">
  //               <Form.Label>Re-Enter Password</Form.Label>
  //               <Form.Control type="password2" placeholder="Password" />
  //             </Form.Group>
  //           </Form>
  //         </Modal.Body>
  //         <Modal.Footer>
  //           <Button variant="secondary" onClick={this.handleClose}>
  //             Close
  //             </Button>
  //           <Button variant="primary" onClick={this.handleClose}>
  //             Save Changes
  //             </Button>
  //         </Modal.Footer>
  //       </Modal>
  //     </div>
  //   );
  // }}

// export default Register;

// class Register extends React.Component {
//     constructor(props, context) {
//       super(props, context);
  
//       this.handleShow = this.handleShow.bind(this);
//       this.handleClose = this.handleClose.bind(this);
  
//       this.state = {
//         show: false,
//       };
//     }
  
//     handleClose() {
//       this.setState({ show: false });
//     }
  
//     handleShow() {
//       this.setState({ show: true });
//     }
  
//     render() {
//       return (
//         <div>
//           <Button variant="primary" onClick={this.handleShow}>
//             Launch demo modal
//           </Button>
//           <Modal size="lg" show={this.state.show} animation={false} onHide={this.handleClose}>
//             <Modal.Header closeButton>
//               <Modal.Title>Modal heading</Modal.Title>
//             </Modal.Header>
//             <Modal.Body>
//               <h1>Woohoo, you're reading this text in a modal!</h1>
//             </Modal.Body>
//             <Modal.Footer>
//               <Button variant="secondary" onClick={this.handleClose}>
//                 Close
//               </Button>
//               <Button variant="primary" onClick={this.handleClose}>
//                 Save Changes
//               </Button>
//             </Modal.Footer>
//           </Modal>
//         </div>
//       );
//     }
}
export default Register;

