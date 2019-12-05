<<<<<<< HEAD
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
// function sum(a, b) {
//   return a + b;
// }
=======
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
function sum(a, b) {
  return a + b;
}
>>>>>>> ce1603668a95d63214c4ced5c5a6ab5fd8036dda

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

<<<<<<< HEAD
test("adds 1 + 2 to equal 3", () => {
  // expect(sum(1, 2)).toBe(3);
=======

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
>>>>>>> ce1603668a95d63214c4ced5c5a6ab5fd8036dda
});
