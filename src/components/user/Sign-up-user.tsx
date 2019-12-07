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
              Create an account
            </Header>
            <Form size="large">
              <Segment stacked>
                <Button color="google plus" style={{ marginBottom: "2rem" }}>
                  <Icon name="google" /> Sign Up using Google
                </Button>
                <Form.Input
                  fluid
                  icon="user"
                  iconPosition="left"
                  placeholder="User Name"
                />
                <Form.Input
                  fluid
                  icon="mail"
                  iconPosition="left"
                  placeholder="joe@schmoe.com"
                  type="mail"
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
              Do you have an account ?<Link to="login">Login</Link>
            </Message>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}
