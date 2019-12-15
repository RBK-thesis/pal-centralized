import React from "react";
import { Button, Form, Grid, Header, Segment } from "semantic-ui-react";
import { Link } from "react-router-dom";
import "../../style.css/form.css";
import "./General.css";
const SignUp = () => {
  return (
    <div>
      <Grid
        textAlign="center"
        style={{ height: "75vh" }}
        verticalAlign="middle"
      >
        <Grid.Column style={{ maxWidth: 550 }}>
          <Form size="large">
            <Segment stacked>
              <Header
                as="h2"
                color="teal"
                textAlign="center"
                style={{ marginTop: "2rem" }}
              >
                SIGN UP
              </Header>

              <Button.Group style={{ marginTop: "3rem" }}>
                <Link to="/signupuser">
                  <Button color="teal" fluid size="large">
                    User
                  </Button>
                </Link>

                <Button.Or />
                <Link to="/signupcompany">
                  <Button color="teal" fluid size="large">
                    Company
                  </Button>
                </Link>
              </Button.Group>
            </Segment>
          </Form>
        </Grid.Column>
      </Grid>
    </div>
  );
};

export default SignUp;
