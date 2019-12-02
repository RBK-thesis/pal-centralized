import React, { Component } from "react";
import { Button, Header, Form } from "semantic-ui-react";
import { Link } from "react-router-dom";
import "../../style.css/form.css";
import "./Sign-up-general.css";
export default class SignUp extends Component {
  render() {
    return (
      <div>
        <Form className="center-form">
          <Header as="h1" style={{ fontSize: "40px", marginTop: "4rem" }}>
            SIGN UP
          </Header>

          <Button.Group style={{ marginTop: "7rem" }}>
            <Button className="button-signup-login-g">User</Button>
            <Button.Or />
            <Link to="/signupcompany">
              <Button className="button-signup-login-g">Company</Button>
            </Link>
          </Button.Group>
        </Form>
      </div>
    );
  }
}
