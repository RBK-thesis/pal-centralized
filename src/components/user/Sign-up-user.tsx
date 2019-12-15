import React, { useState } from "react";
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
import { useDispatch } from "react-redux";
import { signup } from "../../actions";

// ----------------------------------------- This component not ready yet ---------------------------

const SignUpUser = (props: any) => {
  const [userName, setUserName] = useState({ userName: "" });
  const [email, setemail] = useState({ email: "" });
  const [password, setpassword] = useState({ password: "" });

  const dispatch = useDispatch();

  // useEffect(() => {
  //   // dispatch(login());
  // }, []);

  const onChangeUserName = (e: any) => {
    setUserName({ userName: e.target.value });
  };
  const onChangeEmail = (e: any) => {
    setemail({ email: e.target.value });
  };

  const onChangePass = (e: any) => {
    setpassword({ password: e.target.value });
  };

  const onSubmit = (e: any) => {
    e.preventDefault();

    // type : to know in the server the type of the user
    // true : company account
    // false : user account
    dispatch(
      signup(
        { userName: userName, type: false, email: email, password: password },
        () => {
          props.history.push("/login");
        }
      )
    );
  };

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
          <Form size="large" onSubmit={onSubmit}>
            <Segment stacked>
              <Button color="google plus" style={{ marginBottom: "2rem" }}>
                <Icon name="google" /> Sign Up using Google
              </Button>
              <Form.Input
                fluid
                icon="user"
                iconPosition="left"
                placeholder="User Name"
                onChange={onChangeUserName}
              />
              <Form.Input
                fluid
                icon="mail"
                iconPosition="left"
                placeholder="joe@schmoe.com"
                type="mail"
                onChange={onChangeEmail}
              />
              <Form.Input
                fluid
                icon="lock"
                iconPosition="left"
                placeholder="Password"
                type="password"
                onChange={onChangePass}
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
};

export default SignUpUser;
