import React, { useEffect, useState } from "react";
import { Grid, Item, Header } from "semantic-ui-react";
import "./General.css";
import { useSelector, useDispatch } from "react-redux";
import { fetchPost } from "../../actions";
import WarningMessage from "../helper/warning-message";

const HomePagePosts = () => {
  const posts: any = useSelector((state: any) => state.posts);
  const scholarshipPosts: any = useSelector(
    (state: any) => state.posts.scholarship
  );
  const jobPosts: any = useSelector((state: any) => state.posts.job);
  const trainingPosts: any = useSelector((state: any) => state.posts.training);

  const dispatch = useDispatch();
  let counter = 0;
  const [postIdShown, setpostIdShown] = useState(-1);

  const [isLogged, setIsLogged] = useState(localStorage.getItem("token"));

  useEffect(() => {
    // const dispatch = useDispatch();
    dispatch(fetchPost());
    setIsLogged(localStorage.getItem("token"));
  }, []);

  const postItems = posts.items ? posts.items : "";
  const postItemsScholarship = scholarshipPosts ? scholarshipPosts : "";
  const postItemsJob = jobPosts ? jobPosts : "";
  const postItemsTraining = trainingPosts ? trainingPosts : "";

  // console.log(postItems, scholarshipPosts, jobPosts, trainingPosts);

  // ----------------------------------------- Start Helper Functions----------------------------------------- //
  const resetCounter = () => {
    counter = 0;
  };

  const checkToken = (isLogged: any) => {
    return isLogged ? true : false;
  };

  // ----------------------------------------- End Helper Functions----------------------------------------- //

  const Element = (post: any) => {
    if (counter < 5) {
      counter++;
      return (
        <Grid.Column>
          <Item.Group className="post-home-page">
            <Item style={{ padding: "2rem 2rem" }}>
              <Item.Image size="medium" src={post.logo} />

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
                <Item.Extra>
                  <p
                    onClick={(e: any) => {
                      console.log(post.id);
                      setpostIdShown(post.id);
                    }}
                  >
                    <a>Show more information</a>
                  </p>
                  {postIdShown === post.id ? <WarningMessage /> : null}
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
      <Grid columns={1}>
        <Grid.Row>
          {postItemsScholarship.map((post: any) => Element(post))}
        </Grid.Row>
      </Grid>

      {resetCounter()}
      <Header as="h1">Jobs</Header>
      <Grid columns={1}>
        <Grid.Row>{postItemsJob.map((post: any) => Element(post))}</Grid.Row>
      </Grid>
      {resetCounter()}

      <Header as="h1">Training</Header>
      <Grid columns={1}>
        <Grid.Row>
          {postItemsTraining.map((post: any) => Element(post))}
        </Grid.Row>
      </Grid>
    </div>
  );
};

export default HomePagePosts;
