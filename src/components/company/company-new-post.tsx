import React, { useEffect, useState } from "react";
import "semantic-ui-css/semantic.min.css";
import { Button, Dropdown, Form } from "semantic-ui-react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";

const options = [
  { key: 1, text: "Choice 1", value: 1 },
  { key: 2, text: "Choice 2", value: 2 },
  { key: 3, text: "Choice 3", value: 3 }
];
const CompanyNewPost = (props: any) => {
  const users: any = useSelector((state: any) => state.users);
  const dispatch = useDispatch();

  let [title, settitle] = useState("");
  let [description, setdescription] = useState("");
  let [deadline, setdeadline] = useState("");
  let [applyLink, setapplyLink] = useState("");
  let [tags, settags] = useState([]);

  useEffect(() => {});

  // to take the value from input  field --------------------------
  const hundleChange = (e: any) => {
    console.log(e.target.name);
    switch (e.target.name) {
      case "title":
        settitle(e.target.value);
      case "description":
        setdescription(e.target.value);
      case "applyLink":
        setapplyLink(e.target.value);

        break;
    }
  };

  const hundleSubmite = (e: any) => {
    var date = new Date();
    date.setMonth(date.getMonth() + 8);
    // console.log("inside submite", date);

    const newPost = {
      title: title,
      description: description,
      deadLine: date,
      link: applyLink,
      tags: ["test tag 1", "test tag 2"]
    };
    console.log(newPost);
    axios
      .post("http://localhost:3004/userProfile?id=3", newPost) // -----**** Need to edit the URL **** -------
      .then(response => {
        console.log("Saved Succesfully");
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <div style={{ margin: "0rem auto", marginTop: "7em", width: "75%" }}>
      <Form onSubmit={hundleSubmite}>
        <Form.Field>
          <label>Title</label>
          <input placeholder="Title" name="title" onChange={hundleChange} />
        </Form.Field>
        <Form.Field>
          <label>Description</label>
          <input
            placeholder="Description"
            name="description"
            onChange={hundleChange}
          />
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
          <input name="applyLink" onChange={hundleChange} />
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
    </div>
  );
};

export default CompanyNewPost;
