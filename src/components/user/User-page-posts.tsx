import React, { useEffect, useState } from "react";
import { Grid, Item, Header, Button, Icon } from "semantic-ui-react";
import { useSelector, useDispatch } from "react-redux";
import { fetchPost } from "../../actions";
import WarningMessage from "../helper/warning-message";
import axios from "axios";

const UserPagePosts = () => {
  const posts: any = useSelector((state: any) => state.posts);

  const scholarshipPosts: any = useSelector(
    (state: any) => state.posts.scholarship
  );
  const jobPosts: any = useSelector((state: any) => state.posts.job);
  const trainingPosts: any = useSelector((state: any) => state.posts.training);

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
  const postItemsScholarship = scholarshipPosts ? scholarshipPosts : "";
  const postItemsJob = jobPosts ? jobPosts : "";
  const postItemsTraining = trainingPosts ? trainingPosts : "";
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

  const bookmarkHundle = (index: any) => {
    console.log(index);
  };
  const ChangeFavStatus = (postId: any) => {
    const data = {
      userId: localStorage.getItem("userId"),
      postId: postId
    };
    console.log(data);

    //------------------------------------------ Add/Remove the favo ---------------------------------------------//

    // ------------------------------ Work to do --------------------------------------------------

    // Send to the server user id & post id
    // the server : should check the status
    //             - false : Add to fav list & change the status
    //             - true : Add from fav list & change the status

    // axios
    //   .post(`http://localhost:3004/`, {})
    //   .then(favPosts => {})
    //   .catch(err => {
    //     console.log("inside err favorite", err);
    //   });
  };

  // ----------------------------------------- End Helper Functions----------------------------------------- //

  // console.log(postItems);

  const Element = (post: any, index: any) => {
    if (counter < 5) {
      // console.log("index", index);
      // console.log("Post: ", post);
      counter++;
      return (
        <Grid.Column>
          <Item.Group className="post-home-page">
            <Item style={{ padding: "2rem 2rem" }}>
              <Item.Image size="medium" src={post.logo} />
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
                {post.favoriteStatus ? (
                  <Button
                    icon
                    onClick={e => {
                      console.log(post.id);
                      ChangeFavStatus(post.id);
                    }}
                  >
                    <Icon name="bookmark" />
                  </Button>
                ) : (
                  <Button
                    icon
                    onClick={e => {
                      console.log(post.id);
                      ChangeFavStatus(post.id);
                    }}
                  >
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
      <Grid columns={1}>
        <Grid.Row>
          {postItemsScholarship.map((post: any, index: any) =>
            Element(post, index)
          )}
        </Grid.Row>
      </Grid>

      {resetCounter()}
      <Header as="h1">Jobs</Header>
      <Grid columns={1}>
        <Grid.Row>
          {postItemsJob.map((post: any, index: any) => Element(post, index))}
        </Grid.Row>
      </Grid>
      {resetCounter()}

      <Header as="h1">Training</Header>
      <Grid columns={1}>
        <Grid.Row>
          {postItemsTraining.map((post: any, index: any) =>
            Element(post, index)
          )}
        </Grid.Row>
      </Grid>
    </div>
  );
};

export default UserPagePosts;
