import { render, screen } from "@testing-library/react";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import App from "../components/App";

test("renders Surreal Estate title", () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
  const HTMLElement = screen.getByText("View Properties");
  expect(HTMLElement).toBeInTheDocument();
});
