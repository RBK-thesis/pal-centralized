import React, { useEffect, useState } from "react";
import "./CSS/Company-home-page.css";
import "semantic-ui-css/semantic.min.css";
import {
  Item,
  Checkbox,
  Container,
  Header,
  Button,
  Grid
} from "semantic-ui-react";
import { useSelector, useDispatch } from "react-redux";
import { fetchPost } from "../../actions";
import { Link } from "react-router-dom";

const CompanyHome = (props: any) => {
  const users: any = useSelector((state: any) => state.users);

  const posts: any = useSelector((state: any) => state.posts);
  const dispatch = useDispatch();
  let counter = 0;
  const [isLogged, setIsLogged] = useState(localStorage.getItem("token"));

  const [showDesc, setShowDesc] = useState(false);

  useEffect(() => {
    // const dispatch = useDispatch();
    dispatch(fetchPost());
    setIsLogged(localStorage.getItem("token"));
  }, []);

  const postItems = posts.items ? posts.items : "";

  // ----------------------------------------- Start Helper Functions----------------------------------------- //
  const resetCounter = () => {
    counter = 0;
  };

  const checkToken = (isLogged: any) => {
    return isLogged ? true : false;
  };

  const showDescreptipn = () => {
    if (!isLogged) {
      console.log("log in please");
      setShowDesc(!showDesc);
    }
  };

  const Element = (post: any) => {
    return (
      <Grid.Column>
        <Item.Group className="post-home-page">
          <Item style={{ padding: "2rem 2rem" }}>
            <Item.Image size="tiny" src={post.logo} />

            <Item.Content>
              <Item.Header>{post.title}</Item.Header>
              <Item.Meta>Category>{post.type}</Item.Meta>
              <Item.Meta>Major: {post.type}</Item.Meta>{" "}
              <Item.Meta>opportunity deadline {post.deadLine}</Item.Meta>
              {checkToken(isLogged) ? (
                <Item.Description>
                  <p>{post.description}</p>
                </Item.Description>
              ) : (
                <Item.Description></Item.Description>
              )}
            </Item.Content>
          </Item>
          <Button.Group size="large">
            <Button>Edit</Button>
            <Button.Or />
            <Button>Delete</Button>
          </Button.Group>
          <Checkbox label="Archived" disabled />
        </Item.Group>
      </Grid.Column>
    );
  };

  return (
    <div>
      <Container
        style={{ margin: "4rem auto", marginTop: "8rem", width: "75%" }}
      >
        <Header as="h1">Latest</Header>
        <Grid columns={3}>
          <Grid.Row>{postItems.map((post: any) => Element(post))}</Grid.Row>
        </Grid>
      </Container>
      <div style={{ margin: "4rem auto", width: "25%" }}>
        <Link to="/newpost">
          <Button positive>Add new post</Button>
        </Link>
        <Button negative>Archive List</Button>
      </div>
    </div>
  );
};

export default CompanyHome;
