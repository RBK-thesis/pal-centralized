import React from "react";
import { useEffect } from "react";
import "../companyHome/companyHome.css";
import "semantic-ui-css/semantic.min.css";
import {
  Menu,
  Dropdown,
  List,
  Container,
  Header,
  Button,
  Grid,
  Image
} from "semantic-ui-react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
// import { View } from "react-native";

// import { fetchUser } from "../../actions";

// import PropTypes from 'prop-types';

const CompanyHome = (props: any) => {
  const users: any = useSelector((state: any) => state.users);
  const dispatch = useDispatch();

  // componentWillMount() {
  //   this.props.fetchUser();
  // }

  // componentWillReceiveProps(nextProps) {
  //   if (nextProps.newUser) {
  //     this.props.users.unshift(nextProps.newPost);
  //   }
  // }

  // useEffect(() => {
  //   dispatch(fetchUser(3));
  // }, []);
  // console.log("users");
  // console.log(users);
  // const userItems = this.props.users.map(user => (
  //   <div key={user.id}>
  //     <h3>{user.gender}</h3>
  //     {/* <p>{user.body}</p> */}
  //   </div>
  // )
  useEffect(() => {
    axios
      .get("http://localhost:3004/userProfile?id=3") // ES6 Shorthand property name in { url }
      .then(response => {
        dispatch({
          url: response.data
        });
      })
      .catch(error => {
        // @TODO dispatch an action that will show a message
        // notifying the user that the request failed
        console.log(error);
      });
  });

  return (
    <Container className="body">
      <Header>Latest</Header>

      <Grid divided="vertically">
        <Grid.Row columns={2}>
          <Grid.Column>
            <Image src="https://react.semantic-ui.com/images/wireframe/paragraph.png" />
            <Button.Group>
              <Button basic color="red">
                Edit
              </Button>
              <Button basic color="green">
                Delete
              </Button>
              <Button basic color="blue">
                Archive
              </Button>
            </Button.Group>
          </Grid.Column>
          <Grid.Column>
            <Image src="https://react.semantic-ui.com/images/wireframe/paragraph.png" />
            <Button.Group>
              <Button basic color="red">
                Edit
              </Button>
              <Button basic color="green">
                Delete
              </Button>
              <Button basic color="blue">
                Archive
              </Button>
            </Button.Group>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row columns={2}>
          <Grid.Column>
            <Image src="https://react.semantic-ui.com/images/wireframe/paragraph.png" />
            <Button.Group>
              <Button basic color="red">
                Edit
              </Button>
              <Button basic color="green">
                Delete
              </Button>
              <Button basic color="blue">
                Archive
              </Button>
            </Button.Group>
          </Grid.Column>
          <Grid.Column>
            <Image src="https://react.semantic-ui.com/images/wireframe/paragraph.png" />
            <Button.Group>
              <Button basic color="red">
                Edit
              </Button>
              <Button basic color="green">
                Delete
              </Button>
              <Button basic color="blue">
                Archive
              </Button>
            </Button.Group>
          </Grid.Column>
        </Grid.Row>
      </Grid>

      <div className="BTW">
        <Button primary>Create new post</Button>
        <Button secondary>Archive</Button>
      </div>
    </Container>
  );
};

export default CompanyHome;
