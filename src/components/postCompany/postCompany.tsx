import React from "react";
import { useEffect } from "react";
// import "../companyPost/companyPost.css";
import "semantic-ui-css/semantic.min.css";
import { Button, Dropdown, Form } from "semantic-ui-react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
// import { View } from "react-native";

// import { fetchUser } from "../../actions";

// import PropTypes from 'prop-types';
const options = [
  { key: 1, text: "Choice 1", value: 1 },
  { key: 2, text: "Choice 2", value: 2 },
  { key: 3, text: "Choice 3", value: 3 }
];
const CompanyPost = (props: any) => {
  const users: any = useSelector((state: any) => state.users);
  const dispatch = useDispatch();

  // componentWillMount() {
  //   this.props.fetchUser();
  // }

  // componentWillReceiveProps(nextProps) {
  //   if (nextProps.newUser) {
  //     this.props.users.unshift(nextProps.newPost);
  //   }
  // }

  // useEffect(() => {
  //   dispatch(fetchUser(3));
  // }, []);
  // console.log("users");
  // console.log(users);
  // const userItems = this.props.users.map(user => (
  //   <div key={user.id}>
  //     <h3>{user.gender}</h3>
  //     {/* <p>{user.body}</p> */}
  //   </div>
  // )
  useEffect(() => {
    axios
      .get("http://localhost:3004/userProfile?id=3") // ES6 Shorthand property name in { url }
      .then(response => {
        dispatch({
          url: response.data
        });
      })
      .catch(error => {
        // @TODO dispatch an action that will show a message
        // notifying the user that the request failed
        console.log(error);
      });
  });

  return (
    <Form>
      <Form.Field>
        <label>Title</label>
        <input placeholder="Title" />
      </Form.Field>
      <Form.Field>
        <label>Description</label>
        <input placeholder="Description" />
      </Form.Field>
      <Form.Field>
        <label>DeadLine</label>
        <Dropdown clearable options={options} selection />
        <br></br>
        <br></br>
        <br></br>
      </Form.Field>
      <Form.Field>
        <label>Apply Link</label>
        <input />
      </Form.Field>
      <Form.Field>
        <label>Tags</label>
        <Dropdown clearable options={options} selection />
        <br></br>
        <br></br>
        <br></br>
        <input />
      </Form.Field>
      <br></br>
      <br></br>
      <br></br>
      <Button type="submit">Post</Button>
    </Form>
  );
};

export default CompanyPost;
