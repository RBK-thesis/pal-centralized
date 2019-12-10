import React, { Component } from "react";
import {
  Button,
  Form,
  Grid,
  Header,
  Message,
  Segment,
  Icon
} from "semantic-ui-react";
import { Link } from "react-router-dom";
import "../../style.css/form.css";
export default class signUpCompany extends Component {
  render() {
    return (
      <div>
        <Grid
          textAlign="center"
          style={{ height: "75vh" }}
          verticalAlign="middle"
        >
          <Grid.Column style={{ maxWidth: 550 }}>
            <Header as="h2" color="teal" textAlign="center">
              Log-in to your account
            </Header>
            <Form size="large">
              <Segment stacked>
                <Button color="google plus" style={{ marginBottom: "2rem" }}>
                  <Icon name="google" /> Login using Google
                </Button>
                <Form.Input
                  fluid
                  icon="user"
                  iconPosition="left"
                  placeholder="User Name"
                />
                <Form.Input
                  fluid
                  icon="lock"
                  iconPosition="left"
                  placeholder="Password"
                  type="password"
                />
                <Button color="teal" fluid size="large">
                  Sign Up
                </Button>
              </Segment>
            </Form>
            <Message>
              New to us?<Link to="signup">Sign Up</Link>
            </Message>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}
