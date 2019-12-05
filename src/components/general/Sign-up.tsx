import React, { Component } from "react";
import { Button, Header } from "semantic-ui-react";
<<<<<<< HEAD
import "semantic-ui-css/semantic.min.css";
=======
>>>>>>> ce1603668a95d63214c4ced5c5a6ab5fd8036dda
import "./Sign-up.css";
export default class SignUp extends Component {
  render() {
    return (
      <div>
        <Header as="h1">SIGN UP</Header>

        <Button.Group>
          <Button className="button-signup-login-g">User</Button>
          <Button.Or />
          <Button className="button-signup-login-g">Company</Button>
        </Button.Group>
      </div>
    );
  }
}
