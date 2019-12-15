import React, { useEffect, useState } from "react";
import { Dropdown, Header, Popup, Segment } from "semantic-ui-react";
import { useSelector, useDispatch } from "react-redux";
import { fetchFavorite } from "../../actions";

const languageOptions = [{}];
const FavoriteUserList = () => {
  const favoritePosts: any = useSelector((state: any) => state.favoritePosts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchFavorite());
  }, []);

  const postsFavItems = favoritePosts.favPosts ? favoritePosts.favPosts : "";

  console.log("postsFavItems", postsFavItems);

  // ----------------------------- helper Function -----------------------------------------------

  const onClickHundler = (e: any) => {};

  // ----------------------------- helper Function -----------------------------------------------

  const Element = (post: any) => {
    return (
      <Dropdown.Item text="New">
        <a target="_blank" href={post.link}>
          {post ? (
            <Segment>
              <Header as="h5">{post.title}</Header>
              <Header as="h6">Dead Line: {post.deadLine}</Header>
            </Segment>
          ) : (
            ""
          )}
        </a>
      </Dropdown.Item>
    );
  };

  return (
    <div>
      {/*  */}
      <Dropdown className="icon" icon="bookmark">
        <Dropdown.Menu>
          {/* {postsFavItems.length === 0 ? (
            console.log(postsFavItems.length)
          ) : (
            <Segment>
              <Header as="h5">Empty Favorite List</Header>
            </Segment>
          )} */}
          {postsFavItems.map((post: any) => Element(post))}
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
};

export default FavoriteUserList;
