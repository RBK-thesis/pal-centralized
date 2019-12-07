import React, { Component } from "react";
import { Container, Dropdown, Image, Menu } from "semantic-ui-react";
import { Link } from "react-router-dom";
import "../../style.css/form.css";
import UserFavoriteList from "./Favorite-user-list";

// const LogoImg = () => (
//   <Image
//     src="https://react.semantic-ui.com/images/wireframe/square-image.png"
//     size="medium"
//     circular
//   />
// );

const trigger = (
  <span>
    <Image avatar src="../../avatar2.png" /> User Name
  </span>
);

const options = [
  { key: "user", text: "Account", icon: "user" },
  { key: "favorite", text: "Favorite", icon: "heart" },
  { key: "edit", text: "Edit Account", icon: "edit" },
  { key: "sign-out", text: "Sign Out", icon: "sign out" }
];
export default class UserPageHeader extends Component {
  render() {
    return (
      <div>
        <Menu fixed="top" inverted style={{ height: "4.5rem" }}>
          <Container>
            <Menu.Item position="left">
              <Dropdown
                trigger={trigger}
                options={options}
                pointing="top left"
                icon={null}
              />
            </Menu.Item>

            <Menu.Item>
              <UserFavoriteList />
            </Menu.Item>

            <Menu.Item as="a" header position="right">
              <Link to="/">
                <Image
                  size="mini"
                  src="https://image.shutterstock.com/image-vector/education-logo-template-260nw-1075581467.jpg"
                />
              </Link>
            </Menu.Item>
          </Container>
        </Menu>
      </div>
    );
  }
}
