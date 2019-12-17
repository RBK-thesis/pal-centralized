import React, { useEffect, useState } from "react";
import Calendar from "react-calendar";
import "semantic-ui-css/semantic.min.css";
import { Button, Dropdown, Form } from "semantic-ui-react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";

// Import the Sucess & fail Messages
import MessageSuccess from "../helper/Message-Success";
import MessageNegative from "../helper/Message-Negative";

// Import the options for type & major for the post
import { typesOptions, majorOptions } from "../general/Search";

const CompanyEditPost = (props: any) => {
  // ----------------------------------- get the id for the edit post ---------------------------//
  const postId = window.location.search.split("=")[1];

  console.log(postId);
  // console.log(window.location.search);

  const users: any = useSelector((state: any) => state.users);
  const dispatch = useDispatch();

  let [title, settitle] = useState("");
  let [description, setdescription] = useState("");
  let [deadline, setdeadline] = useState(new Date());
  let [major, setMajor] = useState("");
  let [type, setType] = useState("");
  let [msgFlag, setmsgFlag] = useState("normal");

  // to show/hide the Messages

  let [applyLink, setapplyLink] = useState("");
  useEffect(() => {});

  // ----------------------------------- Start of helper functions -----------------------------------------//

  // to take the value from input  field --------------------------
  const hundleChange = (e: any) => {
    console.log(e.target.name);
    switch (e.target.name) {
      case "title":
        settitle(e.target.value);
        break;
      case "description":
        setdescription(e.target.value);
        break;
      case "applyLink":
        setapplyLink(e.target.value);
        break;
    }
  };

  const hundleChangeCalendar = (date: any) => {
    console.log(date);
    setdeadline(date);
  };

  // to take the value of dropdowns search by Type ----------------------
  const hundleDropDownChangeByMajor = (e: any) => {
    setMajor(e.target.textContent);
  };

  // to take the value of dropdowns search by Type ----------------------
  const hundleDropDownChangeByType = (e: any) => {
    setType(e.target.textContent);
  };

  const hundleSubmite = (e: any) => {
    const newPost = {
      comID: localStorage.getItem("userId"),
      title: title,
      description: description,
      deadLine: deadline,
      major: major,
      type: type,
      link: applyLink
    };
    // --------------------------------------- Code to modify --------------------------------------------??

    // put this in then axios
    // setmsgFlag("positive");

    // put this in catch axios
    setmsgFlag("negative");

    console.log(newPost, "msg flag: ", msgFlag);

    // axios
    //   .post("http://localhost:3004/userProfile?id=3", newPost) // -----**** Need to edit the URL **** -------
    //   .then(response => {
    //     console.log("Saved Succesfully");
    //   })
    //   .catch(error => {
    //     console.log(error);
    //   });
  };

  // ----------------------------------- End of helper functions -----------------------------------------//

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
          <label>Dead Line</label>
          <Calendar onChange={hundleChangeCalendar} value={deadline} />
        </Form.Field>

        {/* ------------------------------------ Search Dropdown--------------------------------- */}
        <Form.Field>
          <Dropdown
            placeholder="choose major..."
            fluid
            search
            selection
            options={majorOptions}
            onChange={hundleDropDownChangeByMajor}
          />
        </Form.Field>

        {/* ------------------------------------ Search Dropdown--------------------------------- */}

        <Form.Field>
          <Dropdown
            placeholder="choose Category..."
            fluid
            search
            selection
            options={typesOptions}
            onChange={hundleDropDownChangeByType}
          />
        </Form.Field>

        <Form.Field>
          <label>Apply Link</label>
          <input name="applyLink" onChange={hundleChange} />
        </Form.Field>

        <br></br>
        <br></br>
        <br></br>
        <Button type="submit">Save</Button>
      </Form>
      {msgFlag === "positive" ? <MessageSuccess /> : null}
      {msgFlag === "negative" ? <MessageNegative /> : null}{" "}
    </div>
  );
};

export default CompanyEditPost;
