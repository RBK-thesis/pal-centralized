import React from "react";
import "../userHome/userHome.css";
import "semantic-ui-css/semantic.min.css";
import { Menu, Dropdown, List, Container, Header } from "semantic-ui-react";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchPost } from "../../actions";

const UserHome = (props: any) => {
  const posts: any = useSelector((state: any) => state.posts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPost());
  }, []);

  const postItems = posts.items[2] ? posts.items[1].title : "";

  console.log("in the component00000000", posts.items[0]);
  console.log("comp", postItems);
  return (
    <Container>
      <Menu horizontal className="drop">
        <Dropdown item text="Opportunity type">
          <Dropdown.Menu>
            <Dropdown.Item>Job</Dropdown.Item>
            <Dropdown.Item>scholarship</Dropdown.Item>
            <Dropdown.Item>Training</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <Dropdown item text="Specialties" position="left">
          <Dropdown.Menu>
            <Dropdown.Item>Achitecture</Dropdown.Item>
            <Dropdown.Item>Art</Dropdown.Item>
            <Dropdown.Item>Business</Dropdown.Item>
            <Dropdown.Item>Computer</Dropdown.Item>
            <Dropdown.Item>Media</Dropdown.Item>
            <Dropdown.Item>Science</Dropdown.Item>
            <Dropdown.Item>Medicine</Dropdown.Item>
            <Dropdown.Item>Languages</Dropdown.Item>
            <Dropdown.Item>Law</Dropdown.Item>
            <Dropdown.Item>Philosophy</Dropdown.Item>
            <Dropdown.Item>Political</Dropdown.Item>
            <Dropdown.Item>Tourisim</Dropdown.Item>
            <Dropdown.Item>Sports</Dropdown.Item>
            <Dropdown.Item>History</Dropdown.Item>
            <Dropdown.Item>Engineering</Dropdown.Item>
            <Dropdown.Item>IT</Dropdown.Item>
            <Dropdown.Item>Education</Dropdown.Item>
            <Dropdown.Item>Literature</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Menu>
      <List>
        <Header>Jobs</Header>
        <div>
          {postItems.map((post: any) => {
            return <List.Item as="a">{postItems.title}</List.Item>;
          })}
        </div>
        <List.Item as="a">Who is our user?</List.Item>
        <List.Item as="a">Where is our office located?</List.Item>
      </List>
      <List position="right">
        <Header>scholarship</Header>
        <List.Item as="a">What is a FAQ?</List.Item>
        <List.Item as="a">Who is our user?</List.Item>
        <List.Item as="a">Where is our office located?</List.Item>
      </List>
      <List>
        <Header>Training</Header>
        <List.Item as="a">What is a FAQ?</List.Item>
        <List.Item as="a">Who is our user?</List.Item>
        <List.Item as="a">Where is our office located?</List.Item>
      </List>
      <List position="right">
        <Header>Favourite</Header>
        <List.Item as="a">What is a FAQ?</List.Item>
        <List.Item as="a">Who is our user?</List.Item>
        <List.Item as="a">Where is our office located?</List.Item>
      </List>
    </Container>
  );
};

export default UserHome;
