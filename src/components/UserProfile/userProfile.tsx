//------------------------------User Profile Page -----------------------------------------

import React from "react";
import { useEffect } from "react";
import "../UserProfile/userProfile.css";
import { Link } from "react-router-dom";
import "semantic-ui-css/semantic.min.css";
import { Button, Card, Image } from "semantic-ui-react";
import { useSelector, useDispatch } from "react-redux";

import { fetchUser } from "../../actions";
// import PropTypes from 'prop-types';

const UserProfile = (props: any) => {
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

  useEffect(() => {
    dispatch(fetchUser(3));
  }, []);
  // console.log("users");
  // console.log(users);
  // const userItems = this.props.users.map(user => (
  //   <div key={user.id}>
  //     <h3>{user.gender}</h3>
  //     {/* <p>{user.body}</p> */}
  //   </div>
  // )
  return (
    <Card className="body">
      <Card.Content>
        <br></br>
        <br></br>
        <Image
          floated="left"
          size="small"
          src="https://react.semantic-ui.com/images/avatar/large/steve.jpg"
        />
        <br></br>
        <br></br>
        <br></br>
        <Card.Header>userItems</Card.Header>

        <Card.Description>
          <br></br>
          <br></br>
          <Card.Header className="header1"> Basic Info </Card.Header>
          <br></br>
          <br></br>
          <br></br>
          <Card.Header className="header"> Email </Card.Header>{" "}
          <p className="pargraph">
            Pellentesque habitant morbi tristique senectus et netus et
          </p>
          <br></br>
          <br></br>
          <Card.Header className="header"> Gender </Card.Header>
          <p className="pargraph">netus</p>
          <br></br>
          <br></br>
          <Card.Header className="header"> Address </Card.Header>
          <p className="pargraph">
            Pellentesque habitant morbi tristique senectus et netus et
          </p>
          <br></br>
          <br></br>
          <Card.Header className="header"> Major </Card.Header>
          <p className="pargraph">
            Pellentesque habitant morbi tristique senectus et netus et
          </p>
          <br></br>
          <br></br>
          <Card.Header className="header"> Education Level </Card.Header>
          <p className="pargraph"> morbi tristique</p>
          <br></br>
          <br></br>
          <Card.Header className="header"> Intrest </Card.Header>
          <p className="pargraph">
            Pellentesque, habitant, morbi tristique, senectus, et netus et
          </p>
          <br></br>
          <br></br>
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <Link to="/userEdit">
          <Button className="editBTW" basic color="green">
            Edit
          </Button>
        </Link>
      </Card.Content>
    </Card>
  );
};

export default UserProfile;
