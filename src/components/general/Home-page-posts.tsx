import React, { useEffect, useState } from "react";
import { Grid, Item, Header } from "semantic-ui-react";
import "./General.css";
import { useSelector, useDispatch } from "react-redux";
import { fetchPost } from "../../actions";
import WarningMessage from "../helper/warning-message";

const HomePagePosts = () => {
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

  // ----------------------------------------- End Helper Functions----------------------------------------- //

  const Element = (post: any) => {
    if (counter < 3) {
      counter++;
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
                <Item.Extra as="a" onClick={showDescreptipn}>
                  Show more information
                  {showDesc ? <WarningMessage /> : null}
                </Item.Extra>
              </Item.Content>
            </Item>
          </Item.Group>
        </Grid.Column>
      );
    }
  };

  return (
    <div style={{ margin: "4rem auto", width: "75%" }}>
      <Header as="h1">Scholarship</Header>
      <Grid columns={3}>
        <Grid.Row>{postItems.map((post: any) => Element(post))}</Grid.Row>
      </Grid>

      {resetCounter()}
      <Header as="h1">Jobs</Header>
      <Grid columns={3}>
        <Grid.Row>{postItems.map((post: any) => Element(post))}</Grid.Row>
      </Grid>
      {resetCounter()}

      <Header as="h1">Training</Header>
      <Grid columns={3}>
        <Grid.Row>{postItems.map((post: any) => Element(post))}</Grid.Row>
      </Grid>
    </div>
  );
};

export default HomePagePosts;
