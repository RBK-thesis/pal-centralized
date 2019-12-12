import React, { useEffect, useState } from "react";
import { Grid, Item, Header } from "semantic-ui-react";
import "./General.css";
import { useSelector } from "react-redux";
import WarningMessage from "../messages/warning-message";

const SearchResult = () => {
  const search: any = useSelector((state: any) => state.search);
  const [isLogged, setIsLogged] = useState(localStorage.getItem("token"));

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

  // ----------------------------------------- End Helper Functions----------------------------------------- //

  const Element = (post: any) => {
    return (
      <Grid.Column>
        <Item.Group className="post-home-page">
          <Item style={{ padding: "2rem 2rem" }}>
            <Item.Image size="tiny" src={post.logo} />

            <Item.Content>
              <Item.Header>{post.title}</Item.Header>
              <Item.Meta>by RBK</Item.Meta>
              {checkToken(isLogged) ? (
                <Item.Description>
                  <p>{post.description}</p>
                </Item.Description>
              ) : (
                <Item.Description></Item.Description>
              )}

              <Item.Extra as="a" onClick={showDescreptipn}>
                Additional Information
                {showDesc ? <WarningMessage /> : null}
              </Item.Extra>
            </Item.Content>
          </Item>
        </Item.Group>
      </Grid.Column>
    );
  };

  return (
    <div style={{ margin: "4rem auto", width: "75%" }}>
      <Header as="h1">Search Results</Header>
      <Grid columns={3}>
        <Grid.Row>{postItems.map((post: any) => Element(post))}</Grid.Row>
      </Grid>
    </div>
  );
};

export default SearchResult;