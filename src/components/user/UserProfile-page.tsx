import React from "react";
import { useEffect, useState } from "react";
import "./CSS/UserProfile-page.css";
import { Link } from "react-router-dom";
import "semantic-ui-css/semantic.min.css";
import { Button, Card, Image } from "semantic-ui-react";
import { useSelector, useDispatch } from "react-redux";
import { fetchUser } from "../../actions";

const UserProfile = (props: any) => {
  const users: any = useSelector((state: any) => state.userProfile);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUser(localStorage.getItem("userId")));
  }, []);

  const user = users.items.user ? users.items.user[0] : "";
  // console.log(user.Name);
  console.log(users.items.user);

  return (
    <div style={{ margin: "4rem auto", width: "75%" }}>
      <Card>
        <br></br>
        <br></br>

        <Card.Content>
          <Image floated="left" size="small" src={user.logo} />
          <br></br>
          <br></br>
          <br></br>
          <Card.Header>{user.Name}</Card.Header>

          <Card.Description>
            <br></br>
            <br></br>
            <Card.Header className="header1"> Basic Info </Card.Header>
            <br></br>
            <br></br>
            <br></br>
            <Card.Header className="header"> Email </Card.Header>{" "}
            <p className="pargraph">{user.email}</p>
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
          <Link to="/edituseraccount">
            <Button className="editBTW" basic color="green">
              Edit
            </Button>
          </Link>
        </Card.Content>
      </Card>
    </div>
  );
};

export default UserProfile;
