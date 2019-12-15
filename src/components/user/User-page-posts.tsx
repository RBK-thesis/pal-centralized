import React, { useEffect, useState } from "react";
import { Grid, Item, Header, Button, Icon } from "semantic-ui-react";
import { useSelector, useDispatch } from "react-redux";
import { fetchPost } from "../../actions";
import WarningMessage from "../helper/warning-message";

const UserPagePosts = () => {
  const posts: any = useSelector((state: any) => state.posts);
  const dispatch = useDispatch();
  let counter = 0;
  const [isLogged, setIsLogged] = useState(localStorage.getItem("token"));
  const [booked, setBooked] = useState(false);
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
      setShowDesc(!showDesc);
    }
  };

  const bookmarkHundle = () => {
    setBooked(!booked);
  };

  // ----------------------------------------- End Helper Functions----------------------------------------- //

  console.log(postItems);

  const Element = (post: any, index: any) => {
    if (counter < 3) {
      // console.log("index", index);
      console.log("Post: ", post);
      counter++;
      return (
        <Grid.Column>
          <Item.Group className="post-home-page">
            <Item style={{ padding: "2rem 2rem" }}>
              <Item.Image size="tiny" src={post.logo} />
              <Item.Content>
                <Item.Header>{post.title}</Item.Header>
                <Item.Meta>Major: {post.major}</Item.Meta>
                <Item.Meta> Category: {post.type}</Item.Meta>

                {checkToken(isLogged) ? (
                  <Item.Description>
                    <p>{post.description}</p>
                    <p>opportunity deadline {post.deadLine}</p>
                    <a target="_blank" href={post.link}>
                      original Link
                    </a>
                  </Item.Description>
                ) : (
                  <Item.Description></Item.Description>
                )}
                {booked ? (
                  <Button icon onClick={bookmarkHundle}>
                    <Icon name="bookmark" />
                  </Button>
                ) : (
                  <Button icon onClick={bookmarkHundle}>
                    <Icon name="bookmark outline" />
                  </Button>
                )}
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
        <Grid.Row>
          {postItems.map((post: any, index: any) => Element(post, index))}
        </Grid.Row>
      </Grid>

      {resetCounter()}
      <Header as="h1">Jobs</Header>
      <Grid columns={3}>
        <Grid.Row>
          {" "}
          {postItems.map((post: any, index: any) => Element(post, index))}
        </Grid.Row>
      </Grid>
      {resetCounter()}

      <Header as="h1">Training</Header>
      <Grid columns={3}>
        <Grid.Row>
          {" "}
          {postItems.map((post: any, index: any) => Element(post, index))}
        </Grid.Row>
      </Grid>
    </div>
  );
};

export default UserPagePosts;
