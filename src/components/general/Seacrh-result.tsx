import React, { useEffect, useState } from "react";
import { Grid, Item, Header, Icon, Button } from "semantic-ui-react";
import "./General.css";
import { useSelector } from "react-redux";
import WarningMessage from "../helper/warning-message";

const SearchResult = () => {
  const search: any = useSelector((state: any) => state.search);
  const [isLogged, setIsLogged] = useState(localStorage.getItem("token"));
  const [booked, setBooked] = useState(false);

  const [postIdShown, setpostIdShown] = useState(-1);

  const [showDesc, setShowDesc] = useState(false);

  useEffect(() => {
    setIsLogged(localStorage.getItem("token"));
  }, []);

  const postItems = search.postResult ? search.postResult : "";

  // ----------------------------------------- Start Helper Functions----------------------------------------- //
  const checkToken = (isLogged: any) => {
    return isLogged ? true : false;
  };

  const showDescreptipn = () => {
    if (!isLogged) {
      console.log("log in please");
      setShowDesc(!showDesc);
    }
  };

  const bookmarkHundle = () => {
    setBooked(!booked);
  };

  // ----------------------------------------- End Helper Functions----------------------------------------- //

  const Element = (post: any) => {
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
                  <br></br>
                  {booked ? (
                    <Button icon onClick={bookmarkHundle}>
                      <Icon name="bookmark" />
                    </Button>
                  ) : (
                    <Button icon onClick={bookmarkHundle}>
                      <Icon name="bookmark outline" />
                    </Button>
                  )}
                </Item.Description>
              ) : (
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
              )}

              {/* {checkToken(isLogged) ? ({}) : ()} */}
            </Item.Content>
          </Item>
        </Item.Group>
      </Grid.Column>
    );
  };

  return (
    <div style={{ margin: "4rem auto", width: "75%" }}>
      <Header as="h1">{postItems.length} Result found</Header>
      <Grid columns={1}>
        <Grid.Row>{postItems.map((post: any) => Element(post))}</Grid.Row>
      </Grid>
    </div>
  );
};

export default SearchResult;
