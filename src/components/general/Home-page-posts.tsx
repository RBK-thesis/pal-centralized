import React, { useEffect } from "react";
import { Grid, Image, Item, Container, Header } from "semantic-ui-react";
import { Link } from "react-router-dom";
import "./General.css";
import { useSelector, useDispatch } from "react-redux";
import { fetchPost } from "../../actions";

const HomePagePosts = (props: any) => {
  const posts: any = useSelector((state: any) => state.posts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPost());
  }, []);

  const postItems = posts.items ? posts.items : "";

  console.log(postItems);

  const Element = (post: any) => {
    return (
      <Grid.Column>
        <Item.Group className="post-home-page">
          <Item style={{ padding: "2rem 2rem" }}>
            <Item.Image size="tiny" src={post.logo} />

            <Item.Content>
              <Item.Header>{post.title}</Item.Header>
              <Item.Meta>by RBK</Item.Meta>
              <Item.Description>
                <p>{post.description}</p>
              </Item.Description>
              <Item.Extra as="a">
                <Link to="#">Additional Details</Link>
              </Item.Extra>
            </Item.Content>
          </Item>
        </Item.Group>
      </Grid.Column>
    );
  };

  return (
    <div style={{ margin: "4rem auto", width: "75%" }}>
      <Grid columns={3}>
        <Grid.Row>{postItems.map((post: any) => Element(post))}</Grid.Row>
      </Grid>
    </div>
  );
};

export default HomePagePosts;
