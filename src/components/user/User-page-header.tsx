import React from "react";
import {
  Container,
  Dropdown,
  Image,
  Menu,
  MenuItem,
  Button
} from "semantic-ui-react";
import { Link, Redirect } from "react-router-dom";
import "../../style.css/form.css";
import UserFavoriteList from "./Favorite-user-list";
import { useDispatch } from "react-redux";
import { logout } from "../../actions";
import logo from "../../logo.png";

const UserPageHeader = () => {
  // const userName: any = useSelector((state: any) => state.user.userName);
  let userName: any = localStorage.getItem("userName");
  const dispatch = useDispatch();
  const trigger = (
    <span>
      <Image avatar src="../../avatar2.png" /> {userName}
    </span>
  );

  const handleClick = (e: any) => {
    if (e.target.id === "sign-out") {
      dispatch(logout());
      window.location.reload();
    }
  };

  return (
    <div>
      <Menu fixed="top" inverted style={{ height: "4.5rem" }}>
        <Container>
          <MenuItem>
            <Dropdown trigger={trigger} pointing="top left" icon={null}>
              <Dropdown.Menu>
                <Link to="/useraccount">
                  <Dropdown.Item
                    id="account"
                    onClick={handleClick}
                    style={{ color: "black" }}
                  >
                    Account
                  </Dropdown.Item>
                </Link>

                <Link to="/edituseraccount">
                  <Dropdown.Item
                    id="edit"
                    onClick={handleClick}
                    style={{ color: "black" }}
                  >
                    Edit Account
                  </Dropdown.Item>
                </Link>

                <Link to="/">
                  <Dropdown.Item
                    id="sign-out"
                    onClick={handleClick}
                    style={{ color: "black" }}
                  >
                    Sign Out
                  </Dropdown.Item>
                </Link>
              </Dropdown.Menu>
            </Dropdown>
          </MenuItem>

          <Menu.Item>
            <UserFavoriteList />
          </Menu.Item>

          <Menu.Item
            as="a"
            header
            pointing="middle"
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

export default UserPageHeader;
