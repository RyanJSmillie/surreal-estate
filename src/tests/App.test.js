import { render, screen } from "@testing-library/react";
import React from "react";
import App from "../components/App";

test("renders learn react link", () => {
  render(<App />);
  const HTMLElement = screen.getByText("Surreal Estate");
  expect(HTMLElement).toBeInTheDocument();
});
