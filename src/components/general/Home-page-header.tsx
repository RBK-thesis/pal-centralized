import React from "react";
import { Container, Image, Menu, Button } from "semantic-ui-react";
import { Link } from "react-router-dom";
import "../../style.css/form.css";
import logo from "../../logo.png";

// const LogoImg = () => (
//   <Image
//     src="https://react.semantic-ui.com/images/wireframe/square-image.png"
//     size="medium"
//     circular
//   />
// );
const HomePageHeader = () => {
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

          <Menu.Item
            as="a"
            header
            pointing="top left"
            style={{ marginLeft: "15rem" }}
          >
            <Link to="/">
              <Image
                size="mini"
                // src="https://image.shutterstock.com/image-vector/education-logo-template-260nw-1075581467.jpg"
                src={logo}
              />
            </Link>
          </Menu.Item>
        </Container>
      </Menu>
    </div>
  );
};

export default HomePageHeader;
