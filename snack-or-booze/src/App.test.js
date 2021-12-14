import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Home from "./Home";

it("handles button clicks", function() {
  const { getByText } = render(<Home snacks={[]} drinks={[]}/>);
  const h2 = getByText("Welcome");

  // click on the button
  fireEvent.click(getByText("Add"));

  // is the count different?
  expect(h2).toHaveTextContent("1");
  expect(h2).not.toHaveTextContent("0");
});