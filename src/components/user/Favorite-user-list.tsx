import React, { useEffect, useState } from "react";
import { Dropdown, Segment, Header } from "semantic-ui-react";
import { useSelector, useDispatch } from "react-redux";
import { fetchFavorite } from "../../actions";

const FavoriteUserList = () => {
  const favoritePosts: any = useSelector((state: any) => state.favoritePosts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchFavorite());
  }, []);

  const postsFavItems = favoritePosts.favPosts ? favoritePosts.favPosts : "";

  console.log("postsFavItems", postsFavItems);

  // ----------------------------- Start of helper Function -----------------------------------------------

  // ----------------------------- End of  helper Function -----------------------------------------------

  const Element = (post: any) => {
    return (
      <a target="_blank" href={post.link}>
        {post ? (
          <Segment>
            <p style={{ fontWeight: 900, color: "black" }}>{post.title}</p>
            <p>Dead Line: {post.deadLine}</p>
          </Segment>
        ) : (
          ""
        )}
      </a>
    );
  };

  return (
    <div>
      <Dropdown className="icon" icon="bookmark">
        {postsFavItems.length > 0 ? (
          <Dropdown.Menu>
            {postsFavItems.map((post: any) => Element(post))}
          </Dropdown.Menu>
        ) : (
          <Dropdown.Menu>
            <Segment>
              <Header as="h6">Empty Favorite List</Header>
            </Segment>
          </Dropdown.Menu>
        )}
      </Dropdown>
    </div>
  );
};

export default FavoriteUserList;
