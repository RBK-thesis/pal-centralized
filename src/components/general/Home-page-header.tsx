import React, { Component } from "react";
import { Container, Dropdown, Image, Menu, Button } from "semantic-ui-react";
import { Link } from "react-router-dom";
import "../../style.css/form.css";

const LogoImg = () => (
  <Image
    src="https://react.semantic-ui.com/images/wireframe/square-image.png"
    size="medium"
    circular
  />
);
export default class HomePageHeader extends Component {
  render() {
    return (
      <div>
        <Menu fixed="top" inverted style={{ height: "4.5rem" }}>
          <Container>
            <Menu.Item position="left">
              <Link to="login">
                <Button primary>
                  <h4>Login</h4>
                </Button>
              </Link>
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
