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
import { useDispatch } from "react-redux";
import { logout } from "../../actions";
// import CompanyPost from "../postCompany/postCompany";
import logo from "../../logo.png";

const CompanyPageHeader = (props: any) => {
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
                <Link to="/newpost">
                  <Dropdown.Item
                    id="account"
                    onClick={handleClick}
                    style={{ color: "black" }}
                  >
                    New Post
                  </Dropdown.Item>
                </Link>

                <Link to="/companyaccount">
                  <Dropdown.Item
                    id="account"
                    onClick={handleClick}
                    style={{ color: "black" }}
                  >
                    Account
                  </Dropdown.Item>
                </Link>

                <Link to="/companyarchive">
                  <Dropdown.Item
                    id="archive"
                    onClick={handleClick}
                    style={{ color: "black" }}
                  >
                    Archive
                  </Dropdown.Item>
                </Link>

                <Link to="/companyeditaccount">
                  <Dropdown.Item
                    id="edit"
                    onClick={handleClick}
                    style={{ color: "black" }}
                  >
                    Edit Account
                  </Dropdown.Item>
                </Link>

                <Link to="/user">
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

          <Menu.Item as="a" header position="right">
            <Link to="/company">
              <Image size="small" src={logo} />
            </Link>
          </Menu.Item>
        </Container>
      </Menu>
    </div>
  );
};

export default CompanyPageHeader;
